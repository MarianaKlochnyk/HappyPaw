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
}
