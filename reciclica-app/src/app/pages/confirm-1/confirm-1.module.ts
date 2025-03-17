import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Confirm1PageRoutingModule } from './confirm-1-routing.module';

import { Confirm1Page } from './confirm-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Confirm1PageRoutingModule,
    Confirm1Page
  ],
  declarations: []
})
export class Confirm1PageModule {}
