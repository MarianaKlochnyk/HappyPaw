import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({  selector: 'app-create-account-1',
  templateUrl: './create-account-1.page.html',
  styleUrls: ['./create-account-1.page.scss'],
  imports: [
    IonicModule
  ]
})
export class CreateAccount1Page {
  constructor(private router: Router) { }
 
  goCreateAccounVol() {
      this.router.navigate(['/create-account-2']);
  }

    goCreateAccounShe() {
      this.router.navigate(['/create-account-3']);
  }
}
