import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeadonatePageRoutingModule } from './makeadonate-routing.module';

import { MakeadonatePage } from './makeadonate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeadonatePageRoutingModule,
    MakeadonatePage
  ],
  declarations: []
})
export class MakeadonatePageModule {}
