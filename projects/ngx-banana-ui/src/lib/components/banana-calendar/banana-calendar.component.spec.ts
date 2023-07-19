import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BananaCalendarComponent } from './banana-calendar.component';

describe('BananaCalendarComponent', () => {
  let component: BananaCalendarComponent;
  let fixture: ComponentFixture<BananaCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BananaCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BananaCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
