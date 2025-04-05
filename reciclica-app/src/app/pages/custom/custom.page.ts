import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.page.html',
  styleUrls: ['./custom.page.scss'],
  imports: [IonicModule],
})
export class CustomPage {
  constructor(private router: Router) {}
  
    goPayment() {
             this.router.navigate(['/payment-1']);
  }
}
