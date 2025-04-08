import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-account-2',
  templateUrl: './create-account-2.page.html',
  styleUrls: ['./create-account-2.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class CreateAccount2Page {
  volunteerData = {
    first_name: '',
    last_name: '',
    email: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
    country: 'Ukraine',
    city: '',
    address: '',
    phone: '',
    username: '',
    password: ''
  };

  constructor(private router: Router, private http: HttpClient) {}

  registerVolunteer() {
    const url = 'http://192.168.0.101:3000/volunteers';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFobmduc2xicmJkend4dHV4bG1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1NzY2NDAsImV4cCI6MjA1NjE1MjY0MH0.j9t_m_O1qkcx_TavvQxinwxX8ZjvnWXMLlOjGJ8NlYc',

    });

    this.http.post(url, this.volunteerData, { headers }).subscribe(
      (res) => {
        console.log('Успішна реєстрація:', res);
        this.router.navigate(['/confirm-3']);
      },
      (error) => {
        console.error('Помилка реєстрації:', error);
      }
    );
  }

  goSignIn2() {
    this.router.navigate(['/sign-in-2']);
  }

  goHomepage() {
    this.router.navigate(['/confirm-3']);
  }
}
