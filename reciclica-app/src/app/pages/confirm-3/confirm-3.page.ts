import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-3',
  templateUrl: './confirm-3.page.html',
  styleUrls: ['./confirm-3.page.scss'],
  imports: [
    IonicModule
  ]
})
export class Confirm3Page {

  constructor(private router: Router) { }
  
  
    goHomepage() {
      this.router.navigate(['/homepage']);
  }

}
