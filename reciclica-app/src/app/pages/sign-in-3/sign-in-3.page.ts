import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-3',
  templateUrl: './sign-in-3.page.html',
  styleUrls: ['./sign-in-3.page.scss'],
  imports: [
    IonicModule
  ]
})
export class SignIn3Page  {

    constructor(private router: Router) { }
  
  
    goConfirm3() {
      this.router.navigate(['/confirm-3']);
  }
  
   goForgotPassword1() {
      this.router.navigate(['/forgot-password-1']);
  }

  goSignUp() {
      this.router.navigate(['/create-account-1']);
  }
  
  goCreateAccounShe() {
    this.router.navigate(['/create-account-3']);
  }

}
