import { SharedComponentsModule } from '../../shared/components/shared-components.module'
import { NgModule } from '@angular/core';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    SharedComponentsModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
