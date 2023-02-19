import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplystatusComponent } from './applystatus.component';

describe('ApplystatusComponent', () => {
  let component: ApplystatusComponent;
  let fixture: ComponentFixture<ApplystatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplystatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplystatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
