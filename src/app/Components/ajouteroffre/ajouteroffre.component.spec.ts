import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteroffreComponent } from './ajouteroffre.component';

describe('AjouteroffreComponent', () => {
  let component: AjouteroffreComponent;
  let fixture: ComponentFixture<AjouteroffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouteroffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteroffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
