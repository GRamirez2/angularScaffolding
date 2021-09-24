import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SharedComponentsModule } from '../../shared/components/shared-components.module'
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
