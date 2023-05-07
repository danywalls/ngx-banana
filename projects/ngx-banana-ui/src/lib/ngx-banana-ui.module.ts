import { NgModule } from '@angular/core';
import { NgxBananaUiComponent } from './ngx-banana-ui.component';
import { ButtonComponent } from './components/button/button.component';
import { ContainerComponent } from './components/container/container.component';



@NgModule({
  declarations: [
    NgxBananaUiComponent,
    ButtonComponent,
    ContainerComponent
  ],
  imports: [
  ],
  exports: [
    NgxBananaUiComponent,
    ButtonComponent
  ]
})
export class NgxBananaUiModule { }
