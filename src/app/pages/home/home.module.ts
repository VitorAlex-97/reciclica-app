import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { PickupCallCardModule } from 'src/app/components/pickup-call-card/pick-call-card.module';

@NgModule({
  imports: [
    HomePageRoutingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PickupCallCardModule
  ],
  declarations: [
    HomePage
  ]
})
export class HomePageModule {}
