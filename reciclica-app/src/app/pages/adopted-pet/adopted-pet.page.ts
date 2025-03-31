import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adopted-pet',
  templateUrl: './adopted-pet.page.html',
  styleUrls: ['./adopted-pet.page.scss'],
  imports: [
    IonicModule
  ]
})
export class AdoptedPetPage {

  constructor(private router: Router) { }
      
      
        goProfile() {
          this.router.navigate(['/profile']);
      }

  goHome() {
          this.router.navigate(['/home']);
  }

}
