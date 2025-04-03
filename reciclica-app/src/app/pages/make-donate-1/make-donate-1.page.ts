import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-donate-1',
  templateUrl: './make-donate-1.page.html',
  styleUrls: ['./make-donate-1.page.scss'],
  imports: [
    IonicModule
  ]
})
export class MakeDonate1Page  {

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
  
  goCustom() {
             this.router.navigate(['/custom']);
  }

  goPayment1() {
             this.router.navigate(['/custom']);
  }

}