import { TestBed } from '@angular/core/testing';

import { FakeUserAPIServiceService } from './fake-user-apiservice.service';

describe('FakeUserAPIServiceService', () => {
  let service: FakeUserAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeUserAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
