import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { SupabaseService } from 'src/service/supabase.service';

@Component({
  selector: 'app-history-of-donation',
  templateUrl: './history-of-donation.page.html',
  styleUrls: ['./history-of-donation.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ]
})
export class HistoryOfDonationPage implements OnInit {
  donations: any[] = []; // Масив для збереження донатів
  shelter: any = null;
 // shelter_name: any[] = [];

  constructor(private supabaseService: SupabaseService, private router: Router) {}

  async ngOnInit() {
    const { data, error } = await this.supabaseService.getDonations();
  
    if (error) {
      console.error('Error:', error);
      return;
    }
  
    this.donations = await Promise.all(
      data.map(async (donation: any) => {
        try {
          let shelterName = 'Unknown';
  
          if (donation.shelter_id) {
            const shelter = await this.supabaseService.getShelterById(donation.shelter_id);
            shelterName = shelter?.shelter_name || 'Unknown';
  
          } else if (donation.need_id) {
            const need = await this.supabaseService.getNeedById(donation.need_id);
            const animalId = need?.animal_id;
  
            if (animalId) {
              const animal = await this.supabaseService.getAnimalById(animalId);
              const shelter = await this.supabaseService.getShelterById(animal?.shelter_id);
              shelterName = shelter?.shelter_name || 'Unknown';
            }
          }
  
          return {
            ...donation,
            shelter_name: shelterName,
          };
        } catch (e) {
          console.warn('Error:', e);
          return {
            ...donation,
            shelter_name: 'Unknown',
          };
        }
      })
    );
  }

  goDetailedInfo(donation_id: string) {
    this.router.navigate(['/detailed-info', donation_id]);
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
}