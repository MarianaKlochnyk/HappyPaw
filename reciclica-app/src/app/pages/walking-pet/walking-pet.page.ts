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
<<<<<<< HEAD
=======

    goStatistic() {
            this.router.navigate(['/statistics']);
  }
>>>>>>> 418ab6ef69966d90070be303c13b3065eef4a023
  
    goWalkingPetAnimal() {
            this.router.navigate(['/walking-pet-animal']);
  }

<<<<<<< HEAD
=======
  goLocation() {
              this.router.navigate(['/location']);
    }

>>>>>>> 418ab6ef69966d90070be303c13b3065eef4a023
}
