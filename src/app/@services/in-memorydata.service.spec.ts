import { TestBed } from '@angular/core/testing';

import { InMemorydataService } from './in-memorydata.service';

describe('InMemorydataService', () => {
  let service: InMemorydataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemorydataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
