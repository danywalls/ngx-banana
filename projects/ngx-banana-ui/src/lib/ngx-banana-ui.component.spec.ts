import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBananaUiComponent } from './ngx-banana-ui.component';

describe('NgxBananaUiComponent', () => {
  let component: NgxBananaUiComponent;
  let fixture: ComponentFixture<NgxBananaUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBananaUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxBananaUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
