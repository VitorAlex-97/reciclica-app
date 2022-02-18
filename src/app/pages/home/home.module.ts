import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { PickupCallCardComponent } from 'src/app/components/pickup-call-card/pickup-call-card.component';

@NgModule({
  imports: [
    HomePageRoutingModule,
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    PickupCallCardComponent,
    HomePage
  ]
})
export class HomePageModule {}
