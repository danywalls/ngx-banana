import {Component, Input, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'banana-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Input() label = 'Accept';
}
