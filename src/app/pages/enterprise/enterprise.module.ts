import { SharedComponentsModule } from '../../shared/components/shared-components.module'
import { NgModule } from '@angular/core';

import { EnterpriseRoutingModule } from './enterprise-routing.module';
import { EnterpriseComponent } from './enterprise.component';


@NgModule({
  declarations: [EnterpriseComponent],
  imports: [
    SharedComponentsModule,
    EnterpriseRoutingModule
  ]
})
export class EnterpriseModule { }
