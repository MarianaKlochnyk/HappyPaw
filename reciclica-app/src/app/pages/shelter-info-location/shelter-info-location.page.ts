import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../../../service/supabase.service';

@Component({
  selector: 'app-shelter-info-location',
  templateUrl: './shelter-info-location.page.html',
  styleUrls: ['./shelter-info-location.page.scss'],
  standalone: true,
  imports: [  CommonModule, IonicModule]
})
export class ShelterInfoLocationPage implements OnInit {
  shelterId: string | null = null;
  shelterDetails: any = null;

  constructor(private route: ActivatedRoute, private supabase: SupabaseService, private router: Router) {}

  ngOnInit() {
    this.shelterId = this.route.snapshot.paramMap.get('shelter_id');
    if (this.shelterId) {
      this.loadShelterDetails(this.shelterId);
    }
  }

  async loadShelterDetails(shelterId: string) {
    this.shelterDetails = await this.supabase.getShelterDetails(shelterId);
  }

  goToLocation() {
    this.router.navigate(['/location']);
  }

  goStatistic() {
    this.router.navigate(['/statistics']);
  }

  goHomepage() {
    this.router.navigate(['/homepage']);
  }

  goNotification() {
    this.router.navigate(['/notification']);
  }

}
