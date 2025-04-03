import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-donate-1',
  templateUrl: './make-donate-1.page.html',
  styleUrls: ['./make-donate-1.page.scss'],
  imports: [
    IonicModule
  ]
})
export class MakeDonate1Page {
  fromPage: string = '';

  constructor(private router: Router) { 
    const navigation = this.router.getCurrentNavigation();
    console.log('Navigation extras:', navigation?.extras.state); // Додали лог для перевірки

    if (navigation?.extras.state && navigation.extras.state['from']) {
      this.fromPage = navigation.extras.state['from'];
    } else {
      this.fromPage = '/homepage';
    }

    console.log('fromPage set to:', this.fromPage); // Лог для перевірки
}

  
  goHomepage() {
    this.router.navigate(['/homepage']);
  }
  
  goNotification() {
    this.router.navigate(['/notification']);
  }
  
  goStatistic() {
    this.router.navigate(['/statistics']);
  }

  goLocation() {
    this.router.navigate(['/location']);
  }
  
  goCustom() {
    this.router.navigate(['/custom']);
  }

  goPayment1() {
    this.router.navigate(['/custom']);
  }

  goDonate(from: string) {
    this.router.navigate(['/make-donate-1'], { state: { from } });
  }

  goBack() {
    this.router.navigate([this.fromPage]); 
  }
}
