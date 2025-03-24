import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-1',
  templateUrl: './confirm-1.page.html',
  styleUrls: ['./confirm-1.page.scss'],
  imports: [
    IonicModule
  ]
})
export class Confirm1Page  {

  constructor(private router: Router) { }
 
  goConfirm2() {
      this.router.navigate(['/confirm-2']);
  }

}
