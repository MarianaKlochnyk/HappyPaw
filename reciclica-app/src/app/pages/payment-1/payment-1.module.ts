import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Payment1PageRoutingModule } from './payment-1-routing.module';

import { Payment1Page } from './payment-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Payment1PageRoutingModule,
    Payment1Page
  ],
  declarations: []
})
export class Payment1PageModule {}
