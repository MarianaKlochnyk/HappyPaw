import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usefull-information',
  templateUrl: './usefull-information.page.html',
  styleUrls: ['./usefull-information.page.scss'],
  imports: [
    IonicModule
  ]
})
export class UsefullInformationPage {

    constructor(private router: Router) { }
    // Змінна для відстеження вибраного чипа
    selectedChip: string = '';  // Початково жоден чип не вибраний
  
     goHomepage() {
            this.router.navigate(['/homepage']);
    }
    
     goNotification() {
            this.router.navigate(['/notification']);
        }
    // Метод для обробки вибору чипа
    selectChip(chip: string) {
      this.selectedChip = chip;  // Оновлює вибраний чип
    }

}
