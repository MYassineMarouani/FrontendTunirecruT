import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllappliersComponent } from './allappliers.component';

describe('AllappliersComponent', () => {
  let component: AllappliersComponent;
  let fixture: ComponentFixture<AllappliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllappliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllappliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
