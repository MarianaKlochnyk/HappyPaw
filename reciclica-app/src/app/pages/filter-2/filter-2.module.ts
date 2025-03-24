import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Filter2PageRoutingModule } from './filter-2-routing.module';

import { Filter2Page } from './filter-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Filter2PageRoutingModule,
    Filter2Page
  ],
  declarations: []
})
export class Filter2PageModule {}
