import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdProductsComponent } from './ad-products.component';

describe('AdProductsComponent', () => {
  let component: AdProductsComponent;
  let fixture: ComponentFixture<AdProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
