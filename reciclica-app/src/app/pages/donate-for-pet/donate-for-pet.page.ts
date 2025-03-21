
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donate-for-pet',
  templateUrl: './donate-for-pet.page.html',
  styleUrls: ['./donate-for-pet.page.scss'],
  imports: [
    IonicModule
  ]
})
export class DonateForPetPage {

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

  goLocation() {
              this.router.navigate(['/location']);
    }

      goDonate() {
             this.router.navigate(['/donate']);
   }
}
