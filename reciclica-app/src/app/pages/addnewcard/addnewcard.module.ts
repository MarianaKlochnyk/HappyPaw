import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewcardPageRoutingModule } from './addnewcard-routing.module';

import { AddnewcardPage } from './addnewcard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnewcardPageRoutingModule,
    AddnewcardPage,
  ],
  declarations: [],
})
export class AddnewcardPageModule {}
