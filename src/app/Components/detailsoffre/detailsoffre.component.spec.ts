import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsoffreComponent } from './detailsoffre.component';

describe('DetailsoffreComponent', () => {
  let component: DetailsoffreComponent;
  let fixture: ComponentFixture<DetailsoffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsoffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
