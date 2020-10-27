import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStockSuppComponent } from './update-stock-supp.component';

describe('UpdateStockSuppComponent', () => {
  let component: UpdateStockSuppComponent;
  let fixture: ComponentFixture<UpdateStockSuppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStockSuppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStockSuppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
