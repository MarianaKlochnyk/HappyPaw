import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.page.html',
  styleUrls: ['./detailed-info.page.scss'],
  imports: [
    IonicModule
  ]
})
export class DetailedInfoPage {

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

}
