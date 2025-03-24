import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
  imports: [
    IonicModule
  ]
})
export class DonatePage{

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

   goDonateAnimal() {
            this.router.navigate(['/donate-for-pet']);
  }

  goDonateShelter() {
            this.router.navigate(['/donate-for-shelter']);
  }
}
