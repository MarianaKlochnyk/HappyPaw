import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
  imports: [
    IonicModule
  ]
})
export class HomepagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
