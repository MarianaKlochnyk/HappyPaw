import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPassword2PageRoutingModule } from './forgot-password-2-routing.module';

import { ForgotPassword2Page } from './forgot-password-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPassword2PageRoutingModule,
    ForgotPassword2Page
  ],
  declarations: []
})
export class ForgotPassword2PageModule {}
