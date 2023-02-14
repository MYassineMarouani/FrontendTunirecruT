import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruteurdashboardComponent } from './recruteurdashboard.component';

describe('RecruteurdashboardComponent', () => {
  let component: RecruteurdashboardComponent;
  let fixture: ComponentFixture<RecruteurdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruteurdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruteurdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
