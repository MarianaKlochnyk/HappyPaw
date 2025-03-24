import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password-1',
  templateUrl: './forgot-password-1.page.html',
  styleUrls: ['./forgot-password-1.page.scss'],
  imports: [
    IonicModule
  ]
})
export class ForgotPassword1Page{

  constructor(private router: Router) { }
  
  
    goForgotPassword2() {
      this.router.navigate(['/forgot-password-2']);
  }

  goSignIn() {
      this.router.navigate(['/sign-in-2']);
  }
}
