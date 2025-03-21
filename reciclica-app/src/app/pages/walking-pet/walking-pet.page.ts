import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-walking-pet',
  templateUrl: './walking-pet.page.html',
  styleUrls: ['./walking-pet.page.scss'],
  imports: [
    IonicModule
  ]
})
export class WalkingPetPage  {

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
  
    goWalkingPetAnimal() {
            this.router.navigate(['/walking-pet-animal']);
  }

  goLocation() {
              this.router.navigate(['/location']);
    }

}
