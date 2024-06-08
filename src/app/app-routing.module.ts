import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/auth/services/auth.guard';
import { UsuarioComponent } from './usuario/usuario.component';
import { MateriaComponent } from './materia/materia.component';
import { CarreraComponent } from './carrera/carrera.component';
import { FacultadComponent } from './facultad/facultad.component';
import { GrupoComponent } from './grupo/grupo.component';
import { ModuloAulaComponent } from './modulo-aula/modulo-aula.component';
import { ProgramacionComponent } from './programacion/programacion.component';

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
  {
    path: 'usuario',
    component: UsuarioComponent,
  },
  {
    path: 'materia',
    component: MateriaComponent,
  },
  {
    path: 'carrera',
    component: CarreraComponent,
  },
  {
    path: 'facultad',
    component: FacultadComponent,
  },
  {
    path: 'grupo',
    component: GrupoComponent,
  },
  {
    path: 'modulo_aula',
    component: ModuloAulaComponent,
  },
  {
    path: 'programacionacad',
    component: ProgramacionComponent,
  },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
