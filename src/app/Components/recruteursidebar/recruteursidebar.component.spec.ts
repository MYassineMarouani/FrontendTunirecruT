import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruteursidebarComponent } from './recruteursidebar.component';

describe('RecruteursidebarComponent', () => {
  let component: RecruteursidebarComponent;
  let fixture: ComponentFixture<RecruteursidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruteursidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruteursidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
