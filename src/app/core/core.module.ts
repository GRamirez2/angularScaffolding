import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {
  SampleStoreService,
} from '../shared/services';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    // angular
    CommonModule, // needed??
    BrowserModule,
    RouterModule,
    HttpClientModule

    // Omni or Material would go here

  ],
  providers: [ SampleStoreService ],
  exports: [MainLayoutComponent]
})
export class CoreModule { }
