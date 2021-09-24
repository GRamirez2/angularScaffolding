import { SharedComponentsModule } from '../../shared/components/shared-components.module'
import { NgModule } from '@angular/core';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';


@NgModule({
  declarations: [FaqComponent],
  imports: [
    SharedComponentsModule,
    FaqRoutingModule
  ]
})
export class FaqModule { }
