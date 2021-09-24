import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../../shared/components/shared-components.module'
import { NgModule } from '@angular/core';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';


@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    FaqRoutingModule
  ]
})
export class FaqModule { }
