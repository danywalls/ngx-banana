import { NgModule } from '@angular/core';
import { NgxBananaUiComponent } from './ngx-banana-ui.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    NgxBananaUiComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    NgxBananaUiComponent,
    ButtonComponent
  ]
})
export class NgxBananaUiModule { }
