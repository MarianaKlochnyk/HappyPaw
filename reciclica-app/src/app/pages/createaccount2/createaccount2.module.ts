import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Createaccount2PageRoutingModule } from './createaccount2-routing.module';

import { Createaccount2Page } from './createaccount2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Createaccount2PageRoutingModule,
    Createaccount2Page
  ],
  declarations: []
})
export class Createaccount2PageModule {}
