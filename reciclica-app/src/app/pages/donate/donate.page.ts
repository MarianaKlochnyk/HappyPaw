import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { SupabaseService } from 'src/service/supabase.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ]
})
export class DonatePage implements OnInit {
  needs: any[] = [];
  animals: any[] = [];
  breeds: any[] = [];
  shelters!: { shelter_id: any; shelter_name: any; file_path: any; }[] | null;
  supabase: any;
  animalNeeds: any[] = [];
  shelterNeeds: any[] = [];
  categories: any[] = [];

  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log("Calling loadAnimalNeeds...");
    this.loadNeeds();
    this.loadAnimals();
    this.loadShelters();
    this.loadCategories();
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
  
    this.shelterNeeds = needsData
      .filter(need => need.shelter_id) // Відбираємо потреби для притулків
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
      console.error('Error fetching donation:', donationsError);
      return;
    }
  
    const updatedAnimals = await Promise.all(animals.map(async (animal) => {

      const breedData = await this.supabaseService.getBreedById(animal.breed_id);
      
      const urgentNeed = needsData.find((need: { animal_id: any; priority_id: string }) => 
        need.animal_id === animal.animal_id && need.priority_id === 'ef0df210-4bed-49f8-95ad-6c848586cef3'
      );
  
      // Загальна сума донатів для цього тварини
      const totalDonations = donationsData
        .filter((donation: { animal_id: any }) => donation.animal_id === animal.animal_id)
        .reduce((sum: number, donation: { amount: number }) => sum + donation.amount, 0);
  
      return {
        ...animal,
        breed: breedData ? breedData.breed : 'Unknown Breed',
        urgent: urgentNeed !== undefined,
        amountNeeded: urgentNeed ? urgentNeed.amount : 0,
        amountLeft: urgentNeed ? Math.max(0, urgentNeed.amount - totalDonations) : 0
      };
    }));
    this.animals = updatedAnimals.filter(animal => animal.urgent);
  }

  async loadShelters() {
    try {
      const shelters = await this.supabaseService.getShelters();
  
      if (!shelters || shelters.length === 0) {
        console.warn("No shelters found!");
        return;
      }
  
      this.shelters = shelters.map(shelter => {
        const urgentNeed = shelter.needs?.some((need: { priority_id: string }) => 
          need.priority_id === 'ef0df210-4bed-49f8-95ad-6c848586cef3'
        ) ?? false;
  
        return {
          ...shelter,
          needs_urgent: urgentNeed,
        };
      }).filter(shelter => shelter.needs_urgent);
  
    } catch (error) {
      console.error("Error loading shelters:", error);
    }
  }

  async loadCategories() {
    const { data: categoriesData, error } = await this.supabaseService.getCategories();
    if (error) {
      console.error("Error fetching categories:", error);
      return;
    }
    this.categories = categoriesData ?? [];
  }

  getAnimalNeed(animalId: string) {
    return this.animalNeeds?.find(need => need.animal_id === animalId) || null;
  }
  
  getShelterNeed(shelterId: string) {
    return this.shelterNeeds?.find(need => need.shelter_id === shelterId) || null;
  }

  getStrokeDasharray(radius: number): string {
    const circumference = 2 * Math.PI * radius;
    return `${circumference}, ${circumference}`;
  }
  
  getStrokeDashoffset(percentage: number | undefined): string {
    if (percentage === undefined) return "157"; // Повне коло (100%)
    const radius = 25;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    return offset.toString();
  }

  // Методи для навігації
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

  goDonateAnimal(animalId: string) {
    this.router.navigate(['/donate-for-pet', animalId]);
  }

  goDonateShelter(shelterId: string) {
    this.router.navigate(['/donate-for-shelter', shelterId]);
  }
}