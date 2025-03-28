import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-1',
  templateUrl: './sign-in-1.page.html',
  styleUrls: ['./sign-in-1.page.scss'],
  imports: [
    IonicModule
  ]
})
export class SignIn1Page {

  constructor(private router: Router) { }


  goToSignIn2() {
    this.router.navigate(['/sign-in-2']);
  }

    goToSignIn3() {
    this.router.navigate(['/sign-in-3']);
  }
  

}
