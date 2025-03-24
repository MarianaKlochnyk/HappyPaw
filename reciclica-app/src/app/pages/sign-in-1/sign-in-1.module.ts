import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignIn1PageRoutingModule } from './sign-in-1-routing.module';

import { SignIn1Page } from './sign-in-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignIn1PageRoutingModule,
    SignIn1Page
  ],
  declarations: []
})
export class SignIn1PageModule {}
