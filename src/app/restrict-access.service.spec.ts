import { TestBed } from '@angular/core/testing';

import { RestrictAccess } from './restrict-access.service';

describe('RestrictAccessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestrictAccess = TestBed.get(RestrictAccess);
    expect(service).toBeTruthy();
  });
});
