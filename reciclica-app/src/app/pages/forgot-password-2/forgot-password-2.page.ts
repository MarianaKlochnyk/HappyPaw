import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password-2',
  templateUrl: './forgot-password-2.page.html',
  styleUrls: ['./forgot-password-2.page.scss'],
  imports: [
    IonicModule
  ]
})
export class ForgotPassword2Page  {

  constructor(private router: Router) { }
  
  
    goForgotPassword3() {
      this.router.navigate(['/forgot-password-3']);
  }
}
