import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-1',
  templateUrl: './payment-1.page.html',
  styleUrls: ['./payment-1.page.scss'],
  imports: [
    IonicModule
  ]
})
export class Payment1Page {

  constructor(private router: Router) { }

   goAddCard() {
          this.router.navigate(['/addnewcard']);
  }

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
