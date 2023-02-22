import { TestBed } from '@angular/core/testing';

import { RealUserAPIServiceService } from './real-user-apiservice.service';

describe('RealUserAPIServiceService', () => {
  let service: RealUserAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealUserAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
