import { SharedComponentsModule } from '../../shared/components/shared-components.module'
import { NgModule } from '@angular/core';

import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { SubscriptionsComponent } from './subscriptions.component';


@NgModule({
  declarations: [SubscriptionsComponent],
  imports: [
    SharedComponentsModule,
    SubscriptionsRoutingModule
  ]
})
export class SubscriptionsModule { }
