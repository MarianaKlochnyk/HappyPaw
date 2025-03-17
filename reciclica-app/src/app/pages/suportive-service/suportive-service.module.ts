import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuportiveServicePageRoutingModule } from './suportive-service-routing.module';

import { SuportiveServicePage } from './suportive-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuportiveServicePageRoutingModule,
    SuportiveServicePage
  ],
  declarations: []
})
export class SuportiveServicePageModule {}
