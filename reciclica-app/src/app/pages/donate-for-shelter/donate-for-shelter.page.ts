import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donate-for-shelter',
  templateUrl: './donate-for-shelter.page.html',
  styleUrls: ['./donate-for-shelter.page.scss'],
    imports: [
    IonicModule
  ]
})
export class DonateForShelterPage  {

    constructor(private router: Router) { }
   
      goHomepage() {
             this.router.navigate(['/homepage']);
     }
     
      goNotification() {
             this.router.navigate(['/notification']);
  }
  
goDonate() {
            this.router.navigate(['/donate']);
  }
}
