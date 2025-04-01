import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignIn3PageRoutingModule } from './sign-in-3-routing.module';

import { SignIn3Page } from './sign-in-3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignIn3PageRoutingModule,
    SignIn3Page
  ],
  declarations: []
})
export class SignIn3PageModule {}
