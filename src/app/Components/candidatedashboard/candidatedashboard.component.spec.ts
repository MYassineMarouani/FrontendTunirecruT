import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatedashboardComponent } from './candidatedashboard.component';

describe('CandidatedashboardComponent', () => {
  let component: CandidatedashboardComponent;
  let fixture: ComponentFixture<CandidatedashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatedashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
