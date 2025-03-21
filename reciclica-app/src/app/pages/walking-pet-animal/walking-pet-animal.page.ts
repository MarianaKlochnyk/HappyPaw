import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-walking-pet-animal',
  templateUrl: './walking-pet-animal.page.html',
  styleUrls: ['./walking-pet-animal.page.scss'],
  imports: [
    IonicModule
  ]
})
export class WalkingPetAnimalPage {

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
  
    goWalkingPet() {
            this.router.navigate(['/walking-pet']);
  }

  goLocation() {
              this.router.navigate(['/location']);
    }

}
