import { TestBed } from '@angular/core/testing';

import { RestrictAccessService } from './restrict-access.service';

describe('RestrictAccessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestrictAccessService = TestBed.get(RestrictAccessService);
    expect(service).toBeTruthy();
  });
});
