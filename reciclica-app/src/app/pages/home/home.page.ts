import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
      IonicModule
    ]
})
export class HomePage {
  constructor(private router: Router) { }
  // Змінна для відстеження вибраного чипа
  selectedChip: string = '';  // Початково жоден чип не вибраний

   goHomepage() {
          this.router.navigate(['/homepage']);
  }
  
   goNotification() {
          this.router.navigate(['/notification']);
  }
  
  goAdoptePet() {
          this.router.navigate(['/adopted-pet']);
      }
  // Метод для обробки вибору чипа
  selectChip(chip: string) {
    this.selectedChip = chip;  // Оновлює вибраний чип
  }
}

