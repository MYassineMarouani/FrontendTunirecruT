import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercandidateComponent } from './registercandidate.component';

describe('RegistercandidateComponent', () => {
  let component: RegistercandidateComponent;
  let fixture: ComponentFixture<RegistercandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistercandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistercandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
