import { NgModule } from '@angular/core';
import { NgxBananaUiComponent } from './ngx-banana-ui.component';
import { ButtonComponent } from './components/button/button.component';
import { ContainerComponent } from './components/container/container.component';
import { BananaCalendarComponent } from './components/banana-calendar/banana-calendar.component';
import {CalendarModule} from "@progress/kendo-angular-dateinputs";



@NgModule({
  declarations: [
    NgxBananaUiComponent,
    ButtonComponent,
    ContainerComponent,
    BananaCalendarComponent
  ],
  imports: [
    CalendarModule
  ],
  exports: [
    NgxBananaUiComponent,
    ButtonComponent,
    ContainerComponent,
    BananaCalendarComponent
  ]
})
export class NgxBananaUiModule { }
