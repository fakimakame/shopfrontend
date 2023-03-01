import { TestBed } from '@angular/core/testing';

import { AuthEntityService } from './auth-entity.service';

describe('AuthEntityService', () => {
  let service: AuthEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
