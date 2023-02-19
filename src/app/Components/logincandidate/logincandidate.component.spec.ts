import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincandidateComponent } from './logincandidate.component';

describe('LogincandidateComponent', () => {
  let component: LogincandidateComponent;
  let fixture: ComponentFixture<LogincandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogincandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
