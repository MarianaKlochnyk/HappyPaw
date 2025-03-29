import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignIn2PageRoutingModule } from './sign-in-2-routing.module';

import { SignIn2Page } from './sign-in-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignIn2PageRoutingModule,
    SignIn2Page
  ],
  declarations: []
})
export class SignIn2PageModule {}
