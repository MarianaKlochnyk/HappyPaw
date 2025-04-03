import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { SupabaseService } from 'src/service/supabase.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ]
})
export class HomepagePage implements OnInit {
  needs: any[] = [];
  animals: any[] = [];
  breeds: any[] = [];
  supabase: any;
  animalNeeds: any[] = [];
  shelter: any = null;
  shelterCount: any;
  volunteerCount: any;
  totalDonations: number | undefined;
  volunteerName: string | undefined;

  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log("Calling loadAnimalNeeds...");
    this.loadNeeds();
    this.loadAnimals();
    this.loadShelters();
    this.loadVolunteers();
    this.loadDonations();
    this.loadUserName();
  }
   // Ініціалізуємо змінну

   async loadNeeds() {
    const { data: needsData, error: needsError } = await this.supabaseService.getNeeds();
    if (needsError) {
      console.error("Error fetching needs:", needsError);
      return;
    }
  
    const { data: donationsData, error: donationsError } = await this.supabaseService.getDonations();
    if (donationsError) {
      console.error("Error fetching donations:", donationsError);
      return;
    }
  
    // Карта для підрахунку суми донатів для кожної потреби
    const donationsMap = new Map<string, number>();
    donationsData.forEach(donation => {
      const currentTotal = donationsMap.get(donation.need_id) || 0;
      donationsMap.set(donation.need_id, currentTotal + donation.amount);
    });
  
    // Додаємо amount_left та campaign_percentage
    this.animalNeeds = needsData
      .filter(need => need.animal_id) // Відбираємо потреби для тварин
      .map(need => {
        const totalDonations = donationsMap.get(need.need_id) || 0;
        return {
          ...need,
          amount_left: Math.max(0, need.amount - totalDonations),
          campaign_percentage: Math.min(100, Math.round((totalDonations / need.amount) * 100)), // Додаємо відсоток
        };
      });
  
  }

  async loadAnimals() {
    const { data: animals, error: animalsError } = await this.supabaseService.getAnimalsWithBreeds();
    if (animalsError) {
      console.error('Error fetching animals:', animalsError);
      return;
    }
  
    const { data: needsData, error: needsError } = await this.supabaseService.getNeeds();
    if (needsError) {
      console.error('Error fetching needs:', needsError);
      return;
    }
  
    const { data: donationsData, error: donationsError } = await this.supabaseService.getDonations();
    if (donationsError) {
      console.error('Error fetching donations:', donationsError);
      return;
    }
  
    const updatedAnimals = await Promise.all(animals.map(async (animal) => {
      const breedData = await this.supabaseService.getBreedById(animal.breed_id);
      const shelterData = animal.shelter_id ? await this.supabaseService.getShelterById(animal.shelter_id) : null;
  
      const urgentNeed = needsData.find((need: { animal_id: any; priority_id: string }) => 
        need.animal_id === animal.animal_id && need.priority_id === 'ef0df210-4bed-49f8-95ad-6c848586cef3'
      );
  
      // Загальна сума донатів для цієї тварини
      const totalDonations = donationsData
        .filter((donation: { animal_id: any }) => donation.animal_id === animal.animal_id)
        .reduce((sum: number, donation: { amount: number }) => sum + donation.amount, 0);
  
      return {
        ...animal,
        breed: breedData ? breedData.breed : 'Unknown Breed',
        shelter: shelterData?.length ? shelterData[0] : { shelter_name: 'Unknown Shelter' },
        urgent: urgentNeed !== undefined,
        amountNeeded: urgentNeed ? urgentNeed.amount : 0,
        amountLeft: urgentNeed ? Math.max(0, urgentNeed.amount - totalDonations) : 0
      };
    }));
  
    this.animals = updatedAnimals.filter(animal => animal.urgent);
    
  }
  async loadShelters() {
    // Отримуємо результат з Supabase
    const shelters = await this.supabaseService.getShelters();
  
    // Перевіряємо, що shelters — це масив
    if (!Array.isArray(shelters)) {
      console.error('Invalid shelters data structure:', shelters);
      return;
    }
  
    // Підраховуємо кількість притулків
    this.shelterCount = shelters.length;
    console.log('Shelter Count:', this.shelterCount); // Лог для перевірки
  }
  async getShelters() {
    const { data, error } = await this.supabase.from('shelters').select('*');
    if (error) {
      console.error("Error fetching shelters:", error);
      return { data: [], error }; // Повертаємо об'єкт з даними та помилкою
    }
    return { data, error: null };
  }

  async loadVolunteers() {
    try {
      const { count, error } = await this.supabaseService.getVolunteersCount();
      if (error) {
        console.error('Error fetching volunteer count:', error);
        this.volunteerCount = 0;
        return;
      }
  
      this.volunteerCount = count ?? 0; // Запобігаємо undefined
      console.log('Volunteer Count:', this.volunteerCount);
    } catch (error) {
      console.error('Error loading volunteers:', error);
      this.volunteerCount = 0;
    }
  }

  async loadDonations() {
    try {
      const { sum, error } = await this.supabaseService.getTotalDonations();
      if (error) {
        console.error('Error fetching total donations:', error);
        this.totalDonations = 0;
        return;
      }
  
      this.totalDonations = sum ?? 0; // Запобігаємо undefined
      console.log('Total Donations:', this.totalDonations);
    } catch (error) {
      console.error('Error loading donations:', error);
      this.totalDonations = 0;
    }
  }

  async loadUserName() {
    try {
      const user = await this.supabaseService.getCurrentUser();
      if (!user) {
        this.volunteerName = "Guest";
        return;
      }
  
      const volunteer = await this.supabaseService.getVolunteerByUserId(user.id);
      if (!volunteer) {
        this.volunteerName = "Guest";
        return;
      }
  
      this.volunteerName = volunteer.name;
    } catch (error) {
      console.error("Error loading user name:", error);
      this.volunteerName = "Guest";
    }
  }

  getAnimalNeed(animalId: string) {
    return this.animalNeeds?.find(need => need.animal_id === animalId) || null;
  }
        
  goProfile() {
          this.router.navigate(['/profile']);
  }

  goHome() {
          this.router.navigate(['/home']);
  }
  
  goHomepage() {
          this.router.navigate(['/homepage']);
  }
  
  goNotification() {
          this.router.navigate(['/notification']);
        }
  goStatistic() {
            this.router.navigate(['/statistics']);
  }

  goLocation() {
              this.router.navigate(['/location']);
    }
  
  goUsefulInformation() {
          this.router.navigate(['/usefull-information']);
  }
  
  goSuportiveService() {
          this.router.navigate(['/suportive-service']);
        }
        
  goWalkingPet() {
          this.router.navigate(['/walking-pet']);
  }

  goFaq() {
          this.router.navigate(['/faq']);
  }
  
  goDonate() {
          this.router.navigate(['/donate']);
  }
  
  goMakeDonate() {
          this.router.navigate(['/make-donate-1']);
    }
}
