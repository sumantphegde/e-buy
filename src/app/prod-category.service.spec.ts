import { TestBed } from '@angular/core/testing';

import { ProdCategoryService } from './prod-category.service';

describe('ProdCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdCategoryService = TestBed.get(ProdCategoryService);
    expect(service).toBeTruthy();
  });
});
