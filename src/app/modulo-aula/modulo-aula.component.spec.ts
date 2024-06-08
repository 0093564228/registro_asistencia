import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloAulaComponent } from './modulo-aula.component';

describe('ModuloAulaComponent', () => {
  let component: ModuloAulaComponent;
  let fixture: ComponentFixture<ModuloAulaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloAulaComponent]
    });
    fixture = TestBed.createComponent(ModuloAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
