import { TestBed } from '@angular/core/testing';

import { NgxBananaUiService } from './ngx-banana-ui.service';

describe('NgxBananaUiService', () => {
  let service: NgxBananaUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBananaUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
