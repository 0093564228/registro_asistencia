import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenciaNuevoComponent } from './licencia-nuevo.component';

describe('LicenciaNuevoComponent', () => {
  let component: LicenciaNuevoComponent;
  let fixture: ComponentFixture<LicenciaNuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LicenciaNuevoComponent]
    });
    fixture = TestBed.createComponent(LicenciaNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
