import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Confirm2PageRoutingModule } from './confirm-2-routing.module';

import { Confirm2Page } from './confirm-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Confirm2PageRoutingModule,
    Confirm2Page
  ],
  declarations: []
})
export class Confirm2PageModule {}
