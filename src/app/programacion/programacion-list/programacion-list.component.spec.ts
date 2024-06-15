import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionListComponent } from './programacion-list.component';

describe('ProgramacionListComponent', () => {
  let component: ProgramacionListComponent;
  let fixture: ComponentFixture<ProgramacionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramacionListComponent]
    });
    fixture = TestBed.createComponent(ProgramacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
