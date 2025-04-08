import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment1',
  templateUrl: './payment1.page.html',
  styleUrls: ['./payment1.page.scss'],
  imports: [IonicModule],
})
export class Payment1Page  {
  constructor(private router: Router) {}

  goMakeDonate() {
    this.router.navigate(['/make-donate-1']);
  }
}
