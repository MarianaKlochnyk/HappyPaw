import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
  imports: [
    IonicModule
  ]
})
export class HomepagePage {

  constructor(private router: Router) { }
      
      
        goProfile() {
          this.router.navigate(['/profile']);
      }

  goHome() {
          this.router.navigate(['/home']);
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
  
  goUsefulInformation() {
          this.router.navigate(['/usefull-information']);
  }
  
  goSuportiveService() {
          this.router.navigate(['/suportive-service']);
        }
        
        goWalkingPet() {
            this.router.navigate(['/walking-pet']);
  }

    goFaq() {
          this.router.navigate(['/faq']);
  }
  
  goDonate() {
          this.router.navigate(['/donate']);
    }
}
