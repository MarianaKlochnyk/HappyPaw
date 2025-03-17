import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportivesrevicePageRoutingModule } from './supportivesrevice-routing.module';

import { SupportivesrevicePage } from './supportivesrevice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportivesrevicePageRoutingModule,
    SupportivesrevicePage
  ],
  declarations: []
})
export class SupportivesrevicePageModule {}
