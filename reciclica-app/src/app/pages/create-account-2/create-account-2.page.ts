import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account-2',
  templateUrl: './create-account-2.page.html',
  styleUrls: ['./create-account-2.page.scss'],
  imports: [
    IonicModule
  ]
})
  
export class CreateAccount2Page {

  constructor(private router: Router) { }
    
    
      goHomepage() {
        this.router.navigate(['/homepage']);
    }

    goSignIn2() {
        this.router.navigate(['/sign-in-2']);
  }
  
  goConfirm3() {
      this.router.navigate(['/confirm-3']);
  }
}
 