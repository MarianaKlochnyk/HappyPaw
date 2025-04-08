import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { SupabaseService } from 'src/service/supabase.service';

@Component({
  selector: 'app-donate-for-shelter',
  templateUrl: './donate-for-shelter.page.html',
  styleUrls: ['./donate-for-shelter.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class DonateForShelterPage implements OnInit {

  shelter: any = null;
  shelterNeeds: any[] = [];
  shelterDonations: any[] = [];
  totalDonations: number = 0;
  supabaseService: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private supabase: SupabaseService
  ) {}

  ngOnInit() {
    const shelterId = this.route.snapshot.paramMap.get('shelter_id');
    if (shelterId) {
      this.loadShelterDetails(shelterId);
      this.loadShelterNeeds(shelterId);
      this.loadShelterDonations(shelterId);
      this.loadNeeds();
    }
  }

async loadNeeds() {
  const { data: needsData, error: needsError } = await this.supabase.getNeeds();
  if (needsError) {
    console.error("Error fetching needs:", needsError);
    return;
  }

  const { data: donationsData, error: donationsError } = await this.supabase.getDonations();
  if (donationsError) {
    console.error("Error fetching donations:", donationsError);
    return;
  }

  // Карта для підрахунку суми донатів для кожної потреби
  const donationsMap = new Map<string, number>();
  donationsData.forEach((donation: { need_id: string; amount: number }) => {
    const currentTotal = donationsMap.get(donation.need_id) || 0;
    donationsMap.set(donation.need_id, currentTotal + donation.amount);
  });

  this.shelterNeeds = needsData
    .filter((need: { shelter_id: any }) => need.shelter_id) // Фільтруємо потреби для притулків
    .map((need: { need_id: string; amount: number }) => {
      const totalDonations = donationsMap.get(need.need_id) || 0;
      return {
        ...need,
        amount_left: Math.max(0, need.amount - totalDonations),
        campaign_percentage: Math.min(100, Math.round((totalDonations / need.amount) * 100)), // Додаємо відсоток
      };
    });
}

  async loadShelterDetails(shelterId: string) {
    const data = await this.supabase.getShelterById(shelterId);
    if (!data || data.length === 0) {
      console.warn('Дані про притулок не знайдені');
      return;
    }
    this.shelter = data[0]; // Отримуємо перший елемент масиву, якщо є
  }

  async loadShelterNeeds(shelterId: string) {
    const { data: needsData, error: needsError } = await this.supabase.getNeeds();
    if (needsError) {
      console.error("Помилка отримання потреб притулку:", needsError);
      return;
    }

    // Фільтруємо потреби за id притулку
    this.shelterNeeds = needsData.filter((need: { shelter_id: string; }) => need.shelter_id === shelterId);
  }

  async loadShelterDonations(shelterId: string) {
    const { data: donationsData, error: donationsError } = await this.supabase.getDonations();
    if (donationsError) {
      console.error("Помилка отримання донатів притулку:", donationsError);
      return;
    }

    // Фільтруємо донати за id притулку
    this.shelterDonations = donationsData.filter((donation: { shelter_id: string; }) => donation.shelter_id === shelterId);

    // Підраховуємо загальну суму донатів для цього притулку
    this.totalDonations = this.shelterDonations.reduce((total, donation) => total + donation.amount, 0);
  }

  getShelterNeed(shelterId?: string) {
    if (!shelterId || !this.shelterNeeds || this.shelterNeeds.length === 0) {
      return null;
    }

    const need = this.shelterNeeds.find(need => need.shelter_id === shelterId);
    if (!need) {
      return { totalFundraising: 0 };
    }

    return {
      ...need,
      totalFundraising: this.calculateTotalFundraising(shelterId),
    };
  }

  getTotalFundraising(): number {
    if (!this.shelter || !this.shelter.shelter_id) {
      return 0;
    }
  
    return this.shelterDonations.reduce((sum, donation) => sum + donation.amount, 0);
  }

  // Обчислення totalFundraising для всіх донатів
  calculateTotalFundraising(shelterId: string) {
    return this.shelterDonations.reduce((sum, donation) => sum + donation.amount, 0);
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
