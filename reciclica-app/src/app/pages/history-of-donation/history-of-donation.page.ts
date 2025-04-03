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

  constructor(private supabaseService: SupabaseService, private router: Router) {}

  async ngOnInit() {
    // Завантажуємо донати, викликаючи асинхронний метод getDonations
    const { data, error } = await this.supabaseService.getDonations();

    if (error) {
      console.error('Помилка при отриманні донатів:', error);
    } else {
      this.donations = data; // Присвоюємо тільки масив донатів до локальної змінної
    }
  }

  goDetailedInfo() {
    this.router.navigate(['/detailed-info']);
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