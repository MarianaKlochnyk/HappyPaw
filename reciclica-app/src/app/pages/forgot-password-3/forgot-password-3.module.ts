import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPassword3PageRoutingModule } from './forgot-password-3-routing.module';

import { ForgotPassword3Page } from './forgot-password-3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPassword3PageRoutingModule,
    ForgotPassword3Page],
  declarations: [],
})
export class ForgotPassword3PageModule {}
