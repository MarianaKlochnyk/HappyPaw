import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
      IonicModule
    ]
})
export class HomePage {
  // Змінна для відстеження вибраного чипа
  selectedChip: string = '';  // Початково жоден чип не вибраний

  constructor() {}

  // Метод для обробки вибору чипа
  selectChip(chip: string) {
    this.selectedChip = chip;  // Оновлює вибраний чип
  }
}
