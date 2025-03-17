import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Confirm3PageRoutingModule } from './confirm-3-routing.module';

import { Confirm3Page } from './confirm-3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Confirm3PageRoutingModule,
    Confirm3Page
  ],
  declarations: []
})
export class Confirm3PageModule {}
