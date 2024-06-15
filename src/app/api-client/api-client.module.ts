import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CarreraService } from './carrera.service';
import { FacultadService } from './facultad.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    CarreraService,
    FacultadService
  ],
})
export class ApiClientModule {}