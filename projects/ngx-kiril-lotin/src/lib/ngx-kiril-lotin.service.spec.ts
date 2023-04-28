import { TestBed } from '@angular/core/testing';

import { NgxKirilLotinService } from './ngx-kiril-lotin.service';

describe('NgxKirilLotinService', () => {
  let service: NgxKirilLotinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxKirilLotinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
