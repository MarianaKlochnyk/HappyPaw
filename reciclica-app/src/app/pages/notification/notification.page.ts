import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
=======
>>>>>>> 418ab6ef69966d90070be303c13b3065eef4a023

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
<<<<<<< HEAD
      }

=======
  }
  
    goStatistic() {
            this.router.navigate(['/statistics']);
  }
  goLocation() {
              this.router.navigate(['/location']);
    }
>>>>>>> 418ab6ef69966d90070be303c13b3065eef4a023
}
