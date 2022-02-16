import { TestBed } from '@angular/core/testing';

import { SawmillService } from './sawmill.service';

describe('SawmillService', () => {
  let service: SawmillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SawmillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
