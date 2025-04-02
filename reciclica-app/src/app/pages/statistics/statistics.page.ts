import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
  imports: [
    IonicModule
  ]
})
export class StatisticsPage  {

  constructor(private router: Router) { }

    goStatistic() {
            this.router.navigate(['/statistics']);
  }

  goHomepage() {
          this.router.navigate(['/homepage']);
  }
  
   goNotification() {
          this.router.navigate(['/notification']);
  }

  goLocation() {
              this.router.navigate(['/location']);
    }

}
