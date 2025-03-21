import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suportive-service',
  templateUrl: './suportive-service.page.html',
  styleUrls: ['./suportive-service.page.scss'],
  imports: [
    IonicModule
  ]
})
export class SuportiveServicePage {
    constructor(private router: Router) { }

   goHomepage() {
          this.router.navigate(['/homepage']);
  }
  
   goNotification() {
          this.router.navigate(['/notification']);
  }

    goStatistic() {
            this.router.navigate(['/statistics']);
  }

  goLocation() {
              this.router.navigate(['/location']);
    }

}
