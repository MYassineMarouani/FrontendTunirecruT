import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateheaderComponent } from './candidateheader.component';

describe('CandidateheaderComponent', () => {
  let component: CandidateheaderComponent;
  let fixture: ComponentFixture<CandidateheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
