import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionNuevoComponent } from './programacion-nuevo.component';

describe('ProgramacionNuevoComponent', () => {
  let component: ProgramacionNuevoComponent;
  let fixture: ComponentFixture<ProgramacionNuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramacionNuevoComponent]
    });
    fixture = TestBed.createComponent(ProgramacionNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
