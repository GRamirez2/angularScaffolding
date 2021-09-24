import { SharedComponentsModule } from '../../shared/components/shared-components.module'
import { NgModule } from '@angular/core';

import { SloRoutingModule } from './slo-routing.module';
import { SloComponent } from './slo.component';


@NgModule({
  declarations: [SloComponent],
  imports: [
    SharedComponentsModule,
    SloRoutingModule
  ]
})
export class SloModule { }
