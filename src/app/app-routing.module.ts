import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/auth/services/auth.guard';
import { CarreraListComponent } from './carrera/carrera-list/carrera-list.component';
import { FacultadListComponent } from './facultad/facultad-list/facultad-list.component';
import { GrupoListComponent } from './grupo/grupo-list/grupo-list.component';
import { ProgramacionListComponent } from './programacion/programacion-list/programacion-list.component';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { MateriaListComponent } from './materia/materia-list/materia-list.component';
import { AulaListComponent } from './aula/aula-list/aula-list.component';
import { FacultadNuevoComponent } from './facultad/facultad-nuevo/facultad-nuevo.component';
import { FacultadEditComponent } from './facultad/facultad-edit/facultad-edit.component';
import { UsuarioNuevoComponent } from './usuario/usuario-nuevo/usuario-nuevo.component';
import { CarreraNuevoComponent } from './carrera/carrera-nuevo/carrera-nuevo.component';
import { MateriaNuevoComponent } from './materia/materia-nuevo/materia-nuevo.component';
import { MateriaEditComponent } from './materia/materia-edit/materia-edit.component';
import { UsuarioEditComponent } from './usuario/usuario-edit/usuario-edit.component';
import { AulaNuevoComponent } from './aula/aula-nuevo/aula-nuevo.component';
import { AulaEditComponent } from './aula/aula-edit/aula-edit.component';
import { CarreraEditComponent } from './carrera/carrera-edit/carrera-edit.component';
import { ProgramacionEditComponent } from './programacion/programacion-edit/programacion-edit.component';
import { ProgramacionNuevoComponent } from './programacion/programacion-nuevo/programacion-nuevo.component';
import { AsistenciaListComponent } from './asistencia/asistencia-list/asistencia-list.component';
import { AsistenciaNuevoComponent } from './asistencia/asistencia-nuevo/asistencia-nuevo.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./modules/errors/errors.module').then((m) => m.ErrorsModule),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./_metronic/layout/layout.module').then((m) => m.LayoutModule),
  },
  
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
