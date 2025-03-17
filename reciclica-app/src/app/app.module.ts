// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

// import { IonicModule } from '@ionic/angular';
// import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module'; // Якщо у вас є окремий файл для маршрутів
// import { SupabaseService } from '/Users/mac/Downloads/HappyPow/reciclica-app/src/app/services/supabase.service'; // Ваш сервіс для роботи з Supabase
// import { RouteReuseStrategy } from '@angular/router';
// import { IonicRouteStrategy } from '@ionic/angular';

// @NgModule({
//   declarations: [AppComponent],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     IonicModule.forRoot({ mode: 'ios' }), // Вибір стилю
//     AppRoutingModule, // Ваші маршрути
//     RouterModule.forRoot([]) // Якщо ви не використовуєте AppRoutingModule, залиште це тут
//   ],
//   providers: [
//     SupabaseService, // Ваш сервіс для підключення до Supabase
//     { provide: RouteReuseStrategy, useClass: IonicRouteStrategy } // Для покращення навігації у Ionic
//   ],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}