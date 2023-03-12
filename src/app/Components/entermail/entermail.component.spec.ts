import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntermailComponent } from './entermail.component';

describe('EntermailComponent', () => {
  let component: EntermailComponent;
  let fixture: ComponentFixture<EntermailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntermailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntermailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
