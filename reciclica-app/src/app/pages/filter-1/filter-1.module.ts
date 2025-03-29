import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Filter1PageRoutingModule } from './filter-1-routing.module';

import { Filter1Page } from './filter-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Filter1PageRoutingModule,
    Filter1Page
  ],
  declarations: []
})
export class Filter1PageModule {}
