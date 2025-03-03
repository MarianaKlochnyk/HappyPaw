import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-2',
  templateUrl: './sign-in-2.page.html',
  styleUrls: ['./sign-in-2.page.scss'],
  imports: [
    IonicModule
  ]
})
export class SignIn2Page  {

    constructor(private router: Router) { }
  
  
    goConfirm1() {
      this.router.navigate(['/confirm-1']);
  }
  
   goForgotPassword1() {
      this.router.navigate(['/forgot-password-1']);
  }

  goSignUp() {
      this.router.navigate(['/create-account-1']);
  }
  

}
