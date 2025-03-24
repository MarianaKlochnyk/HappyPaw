import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
  imports: [
    IonicModule
  ]
})
export class NotificationPage  {

constructor(private router: Router) { }
   goHomepage() {
          this.router.navigate(['/homepage']);
  }
  
   goNotification() {
          this.router.navigate(['/notification']);
      }

}
