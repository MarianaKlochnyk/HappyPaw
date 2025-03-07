import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
  imports: [
    IonicModule
  ]
})
export class HomepagePage {

  constructor(private router: Router) { }
      
      
        goProfile() {
          this.router.navigate(['/profile']);
      }

}
