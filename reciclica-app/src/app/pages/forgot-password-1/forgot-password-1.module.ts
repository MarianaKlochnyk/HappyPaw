import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPassword1PageRoutingModule } from './forgot-password-1-routing.module';

import { ForgotPassword1Page } from './forgot-password-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPassword1PageRoutingModule,
    ForgotPassword1Page
  ],
  declarations: []
})
export class ForgotPassword1PageModule {}
