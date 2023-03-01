import { TestBed } from '@angular/core/testing';

import { PurchaseEntityService } from './purchase-entity.service';

describe('PurchaseEntityService', () => {
  let service: PurchaseEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
