import { TestBed } from '@angular/core/testing';

import { SampleStoreService } from './sample-store.service';

describe('SampleStoreService', () => {
  let service: SampleStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
