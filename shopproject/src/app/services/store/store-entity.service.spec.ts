import { TestBed } from '@angular/core/testing';

import { StoreEntityService } from './store-entity.service';

describe('StoreEntityService', () => {
  let service: StoreEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
