import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruteurheaderComponent } from './recruteurheader.component';

describe('RecruteurheaderComponent', () => {
  let component: RecruteurheaderComponent;
  let fixture: ComponentFixture<RecruteurheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruteurheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruteurheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
