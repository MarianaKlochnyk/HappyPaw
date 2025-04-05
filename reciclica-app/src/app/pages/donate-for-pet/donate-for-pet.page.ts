import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { SupabaseService } from 'src/service/supabase.service';

@Component({
  selector: 'app-donate-for-pet',
  templateUrl: './donate-for-pet.page.html',
  styleUrls: ['./donate-for-pet.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class DonateForPetPage implements OnInit {

  animal: any = null;
  breed: string = 'Unknown Breed';
  shelter: any = null;
  animalNeeds: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private supabase: SupabaseService
  ) {}

  ngOnInit() {
    const animalId = this.route.snapshot.paramMap.get('animal_id');
    if (animalId) {
      this.loadAnimalDetails(animalId);
      this.loadNeeds(animalId);
    }
  }

  async loadAnimalDetails(animalId: string) {
    const { data, error } = await this.supabase.getPetById(animalId);
    if (error) {
      console.error('Помилка отримання тварини:', error);
      return;
    }

    if (!data) {
      console.warn('Дані про тварину не знайдені');
      return;
    }

    this.animal = data;

    this.loadBreed(this.animal?.breed_id);
    this.loadShelter(this.animal?.shelter_id);
  }

  async loadNeeds(animalId: string) {
    const { data: needsData, error: needsError } = await this.supabase.getNeeds();
    if (needsError) {
      console.error("Помилка отримання потреб:", needsError);
      return;
    }
  
    const { data: donationsData, error: donationsError } = await this.supabase.getDonations();
    if (donationsError) {
      console.error("Помилка отримання донатів:", donationsError);
      return;
    }
  
    // Карта для підрахунку суми донатів для кожної потреби
    const donationsMap = new Map<string, number>();
    donationsData.forEach((donation: { need_id: string; amount: number; }) => {
      const currentTotal = donationsMap.get(donation.need_id) || 0;
      donationsMap.set(donation.need_id, currentTotal + donation.amount);
    });
  
    // Фільтруємо потреби за id тварини та додаємо необхідні дані
    this.animalNeeds = needsData
      .filter((need: { animal_id: any; }) => need.animal_id === animalId)  // Відбираємо потреби для поточної тварини
      .map((need: { need_id: string; amount: number; description: string }) => {
        const totalDonations = donationsMap.get(need.need_id) || 0;
        let totalFundraising = 0;  // Змінна для збереження суми зібраних донатів
  
        // Обчислюємо загальну суму донатів для поточної потреби
        donationsData.forEach((donation: { need_id: string; amount: number }) => {
          if (need.need_id === donation.need_id) {
            totalFundraising += donation.amount;  // Додаємо суму донату до загальної
          }
        });
  
        return {
          ...need,
          amount_left: Math.max(0, need.amount - totalDonations),  // Обчислюємо залишок
          campaign_percentage: Math.min(100, Math.round((totalDonations / need.amount) * 100)),  // Відсоток зібраних коштів
          totalFundraising  // Додаємо суму зібраних донатів для цієї потреби
        };
      });
  
  }

  async loadBreed(breedId: string) {
    if (!breedId) {
      this.breed = 'Unknown Breed';
      return;
    }
  
    const breedData = await this.supabase.getBreedById(breedId); // Отримуємо дані
  
    if (!breedData) {
      console.error('Помилка отримання породи');
      this.breed = 'Unknown Breed';
      return;
    }
  
    this.breed = breedData.breed || 'Unknown Breed'; // Зберігаємо назву породи
  }

  async loadShelter(shelterId: string) {
    if (!shelterId) return;
  
    const result = await this.supabase.getShelterById(shelterId);
  
    if (!result || result.length === 0) {
      console.error('Помилка отримання притулку або притулок не знайдено');
      return;
    }
  
    this.shelter = result[0]; // Беремо перший елемент масиву
  }

  getAnimalNeed(animalId: string) {
    return this.animalNeeds.find(need => need.animal_id === animalId) || null;
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

      goDonate() {
             this.router.navigate(['/donate']);
  }
    goMakeDonate() {
             this.router.navigate(['/make-donate-1']);
  }
  
}
