import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSupplierComponent } from './add-new-supplier.component';

describe('AddNewSupplierComponent', () => {
  let component: AddNewSupplierComponent;
  let fixture: ComponentFixture<AddNewSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
