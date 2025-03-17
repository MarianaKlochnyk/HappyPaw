import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonationforshelterPageRoutingModule } from './donationforshelter-routing.module';

import { DonationforshelterPage } from './donationforshelter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonationforshelterPageRoutingModule,
    DonationforshelterPage
  ],
  declarations: []
})
export class DonationforshelterPageModule {}
