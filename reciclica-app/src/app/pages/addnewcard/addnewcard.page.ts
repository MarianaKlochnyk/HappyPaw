import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnewcard',
  templateUrl: './addnewcard.page.html',
  styleUrls: ['./addnewcard.page.scss'],
  imports: [IonicModule],
})
export class AddnewcardPage  {
constructor(private router: Router) {}

  goPayment() {
    this.router.navigate(['/payment-1']);
  }
  
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
