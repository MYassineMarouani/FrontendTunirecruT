import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouslesoffresComponent } from './touslesoffres.component';

describe('TouslesoffresComponent', () => {
  let component: TouslesoffresComponent;
  let fixture: ComponentFixture<TouslesoffresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouslesoffresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouslesoffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
