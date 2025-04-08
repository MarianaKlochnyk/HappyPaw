import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { SupabaseService } from 'src/service/supabase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.page.html',
  styleUrls: ['./detailed-info.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ]
})
export class DetailedInfoPage implements OnInit {
  donation: any = null;

  constructor(
    private supabaseService: SupabaseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

async ngOnInit() {
  const donationId = this.route.snapshot.paramMap.get('donation_id');
  if (!donationId) return;

  const { data, error } = await this.supabaseService.getDonationById(donationId);

  if (error) {
    console.error('Error:', error);
    return;
  }

  let shelterName = 'Unknown';

  if (data.shelter_id) {
    const shelter = await this.supabaseService.getShelterById(data.shelter_id);
    shelterName = shelter?.shelter_name || 'Unknown';
  } else if (data.need_id) {
    const need = await this.supabaseService.getNeedById(data.need_id);
    const animalId = need?.animal_id;

    if (animalId) {
      const animal = await this.supabaseService.getAnimalById(animalId);
      const shelter = await this.supabaseService.getShelterById(animal?.shelter_id);
      shelterName = shelter?.shelter_name || 'Unknown';
    }
  }

  this.donation = {
    ...data,
    shelter_name: shelterName
  };
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
    
      goHistoryOfDonation() {
              this.router.navigate(['/history-of-donation']);
    }

}
