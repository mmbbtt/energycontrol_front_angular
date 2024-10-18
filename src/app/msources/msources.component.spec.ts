import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsourcesComponent } from './msources.component';

describe('MsourcesComponent', () => {
  let component: MsourcesComponent;
  let fixture: ComponentFixture<MsourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MsourcesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MsourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
