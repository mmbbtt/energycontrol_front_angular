import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadBillNaturgyComponent } from './load-bill-naturgy.component';

describe('LoadBillNaturgyComponent', () => {
  let component: LoadBillNaturgyComponent;
  let fixture: ComponentFixture<LoadBillNaturgyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadBillNaturgyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadBillNaturgyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
