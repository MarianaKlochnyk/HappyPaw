import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [IonicModule, CommonModule], // Імпортуємо необхідні модулі
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss']
})
export class FaqPage {
  constructor(private router: Router) { }
  
   goHomepage() {
          this.router.navigate(['/homepage']);
  }
  
   goNotification() {
          this.router.navigate(['/notification']);
  }

    goStatistic() {
            this.router.navigate(['/statistics']);
  }
  questions = [
    {
      text: 'Can I communicate with shelters directly?',
      answer: 'Yes, the app provides a messaging feature to communicate with shelters and coordinate your assistance.',
      isOpen: false
    },
    {
      text: 'How do I find shelters that need help?',
      answer: 'You can use the search feature to find shelters based on location and their needs.',
      isOpen: false
    },
    {
      text: 'What types of assistance can I provide to shelters?',
      answer: 'You can help with food, medicine, money, volunteers, or even shelters for animals.',
      isOpen: false
    }
  ];

  toggleAnswer(index: number) {
    this.questions[index].isOpen = !this.questions[index].isOpen;
  }
}