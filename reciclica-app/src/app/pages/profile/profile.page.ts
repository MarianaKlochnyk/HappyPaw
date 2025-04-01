import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  imports: [
    IonicModule
  ]
})
export class ProfilePage {

  constructor(private router: Router) { }

   goHomepage() {
          this.router.navigate(['/homepage']);
  }
  
   goNotification() {
          this.router.navigate(['/notification']);
      }

    goStatistic() {
            this.router.navigate(['/statistics']);
  }
  
  goHistoryOfDonation() {
              this.router.navigate(['/history-of-donation']);
  }

  goLocation() {
              this.router.navigate(['/location']);
  }
  
  goPayment() {
              this.router.navigate(['/payment-1']);
    }
}
