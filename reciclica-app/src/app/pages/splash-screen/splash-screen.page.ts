import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
  imports: [
      IonicModule
    ]
})
export class SplashScreenPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/sign-in-1'],{ replaceUrl: true }); // Переходимо на головну сторінку
    }, 4500); // Час показу Splash Screen
  }

}