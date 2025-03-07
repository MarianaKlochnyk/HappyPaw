import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsefullInformationPageRoutingModule } from './usefull-information-routing.module';

import { UsefullInformationPage } from './usefull-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsefullInformationPageRoutingModule,
    UsefullInformationPage
  ],
  declarations: []
})
export class UsefullInformationPageModule {}
