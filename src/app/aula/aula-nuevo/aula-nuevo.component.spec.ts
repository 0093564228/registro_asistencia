import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaNuevoComponent } from './aula-nuevo.component';

describe('AulaNuevoComponent', () => {
  let component: AulaNuevoComponent;
  let fixture: ComponentFixture<AulaNuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AulaNuevoComponent]
    });
    fixture = TestBed.createComponent(AulaNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
