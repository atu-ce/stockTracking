import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsActiveComponent } from './is-active.component';

describe('IsActiveComponent', () => {
  let component: IsActiveComponent;
  let fixture: ComponentFixture<IsActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
