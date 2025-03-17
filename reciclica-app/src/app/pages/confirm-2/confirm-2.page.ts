import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-2',
  templateUrl: './confirm-2.page.html',
  styleUrls: ['./confirm-2.page.scss'],
  imports: [
    IonicModule
  ]
})
export class Confirm2Page {

  constructor(private router: Router) { }
  
  
    goConfirm3() {
      this.router.navigate(['/confirm-3']);
  }

}
