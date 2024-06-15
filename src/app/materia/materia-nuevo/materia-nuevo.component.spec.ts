import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaNuevoComponent } from './materia-nuevo.component';

describe('MateriaNuevoComponent', () => {
  let component: MateriaNuevoComponent;
  let fixture: ComponentFixture<MateriaNuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriaNuevoComponent]
    });
    fixture = TestBed.createComponent(MateriaNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
