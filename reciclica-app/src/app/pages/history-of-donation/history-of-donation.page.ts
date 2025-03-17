import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-of-donation',
  templateUrl: './history-of-donation.page.html',
  styleUrls: ['./history-of-donation.page.scss'],
  imports: [
    IonicModule
  ]
})
export class HistoryOfDonationPage  {
    constructor(private router: Router) { }

    goDetailedInfo() {
              this.router.navigate(['/detailed-info']);
  }

     goHomepage() {
          this.router.navigate(['/homepage']);
  }
  
   goNotification() {
          this.router.navigate(['/notification']);
  }

}
