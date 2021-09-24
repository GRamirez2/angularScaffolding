import { NgModule } from '@angular/core';

import { WidgetAComponent } from './widget-a/widget-a.component';
import { WidgetBComponent } from './widget-b/widget-b.component';


@NgModule({
  declarations: [WidgetAComponent, WidgetBComponent],
  exports: [
    WidgetAComponent,
    WidgetBComponent
  ]
})
export class SharedComponentsModule { }
