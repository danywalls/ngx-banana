import {Component, Input} from '@angular/core';

@Component({
  selector: 'banana-calendar',
  templateUrl: './banana-calendar.component.html',
  styleUrls: ['./banana-calendar.component.css']
})
export class BananaCalendarComponent {
  @Input() value: any;
}
