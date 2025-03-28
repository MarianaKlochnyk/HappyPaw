import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account-3',
  templateUrl: './create-account-3.page.html',
  styleUrls: ['./create-account-3.page.scss'],
  imports: [
    IonicModule
  ]
})
export class CreateAccount3Page {

  constructor(private router: Router) { }
goConfirm3() {
      this.router.navigate(['/confirm-3']);
  }

  goSignIn3() {
      this.router.navigate(['/sign-in-3']);
  }

}
