import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitPriceComponent } from './unit-price.component';

describe('UnitPriceComponent', () => {
  let component: UnitPriceComponent;
  let fixture: ComponentFixture<UnitPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
