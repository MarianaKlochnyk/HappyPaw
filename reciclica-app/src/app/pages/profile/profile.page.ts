import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  imports: [
    IonicModule
  ]
})
export class ProfilePage {

  constructor(private router: Router) { }

   goHome() {
          this.router.navigate(['/home']);
  }
  
   goNotification() {
          this.router.navigate(['/notification']);
      }

}
