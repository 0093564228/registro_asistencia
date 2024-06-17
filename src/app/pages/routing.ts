import { Routes } from '@angular/router';
import { UsuarioListComponent } from '../usuario/usuario-list/usuario-list.component';
import { UsuarioNuevoComponent } from '../usuario/usuario-nuevo/usuario-nuevo.component';
import { UsuarioEditComponent } from '../usuario/usuario-edit/usuario-edit.component';
import { MateriaListComponent } from '../materia/materia-list/materia-list.component';
import { MateriaEditComponent } from '../materia/materia-edit/materia-edit.component';
import { MateriaNuevoComponent } from '../materia/materia-nuevo/materia-nuevo.component';
import { CarreraListComponent } from '../carrera/carrera-list/carrera-list.component';
import { CarreraEditComponent } from '../carrera/carrera-edit/carrera-edit.component';
import { CarreraNuevoComponent } from '../carrera/carrera-nuevo/carrera-nuevo.component';
import { FacultadListComponent } from '../facultad/facultad-list/facultad-list.component';
import { FacultadNuevoComponent } from '../facultad/facultad-nuevo/facultad-nuevo.component';
import { FacultadEditComponent } from '../facultad/facultad-edit/facultad-edit.component';
import { GrupoListComponent } from '../grupo/grupo-list/grupo-list.component';
import { AsistenciaListComponent } from '../asistencia/asistencia-list/asistencia-list.component';
import { AsistenciaNuevoComponent } from '../asistencia/asistencia-nuevo/asistencia-nuevo.component';
import { AulaListComponent } from '../aula/aula-list/aula-list.component';
import { AulaNuevoComponent } from '../aula/aula-nuevo/aula-nuevo.component';
import { AulaEditComponent } from '../aula/aula-edit/aula-edit.component';
import { ProgramacionListComponent } from '../programacion/programacion-list/programacion-list.component';
import { ProgramacionEditComponent } from '../programacion/programacion-edit/programacion-edit.component';
import { ProgramacionNuevoComponent } from '../programacion/programacion-nuevo/programacion-nuevo.component';
import { LicenciaListComponent } from '../licencia/licencia-list/licencia-list.component';
import { LicenciaNuevoComponent } from '../licencia/licencia-nuevo/licencia-nuevo.component';

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'builder',
    loadChildren: () => import('./builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'crafted/pages/profile',
    loadChildren: () => import('../modules/profile/profile.module').then((m) => m.ProfileModule),
    // data: { layout: 'light-sidebar' },
  },
  {
    path: 'crafted/account',
    loadChildren: () => import('../modules/account/account.module').then((m) => m.AccountModule),
    // data: { layout: 'dark-header' },
  },
  {
    path: 'crafted/pages/wizards',
    loadChildren: () => import('../modules/wizards/wizards.module').then((m) => m.WizardsModule),
    // data: { layout: 'light-header' },
  },
  {
    path: 'crafted/widgets',
    loadChildren: () => import('../modules/widgets-examples/widgets-examples.module').then((m) => m.WidgetsExamplesModule),
    // data: { layout: 'light-header' },
  },
  {
    path: 'apps/chat',
    loadChildren: () => import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
    // data: { layout: 'light-sidebar' },
  },
  {
    path: 'apps/users',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'apps/roles',
    loadChildren: () => import('./role/role.module').then((m) => m.RoleModule),
  },
  {
    path: 'apps/permissions',
    loadChildren: () => import('./permission/permission.module').then((m) => m.PermissionModule),
  },
  {
    path: 'licencias',
    component: LicenciaListComponent,
  },
  {
    path: 'licencias/nuevo',
    component: LicenciaNuevoComponent,
  },
  {
    path: 'usuarios',
    component: UsuarioListComponent,
  },
  {
    path: 'usuarios/nuevo',
    component: UsuarioNuevoComponent,
  },
  {
    path: 'usuarios/editar/:id',
    component: UsuarioEditComponent,
  },
  {
    path: 'materias',
    component: MateriaListComponent,
  },
  {
    path: 'materias/editar/:id',
    component: MateriaEditComponent,
  },
  {
    path: 'materias/nuevo',
    component: MateriaNuevoComponent,
  },
  {
    path: 'carreras',
    component: CarreraListComponent,
  },
  {
    path: 'carreras/editar/:id',
    component: CarreraEditComponent,
  },
  {
    path: 'carreras/nuevo',
    component: CarreraNuevoComponent,
  },
  {
    path: 'facultades',
    component: FacultadListComponent,
  },
  {
    path: 'facultades/nuevo',
    component: FacultadNuevoComponent,
  },
  {
    path: 'facultades/editar/:id',
    component: FacultadEditComponent,
  },
  {
    path: 'grupos',
    component: GrupoListComponent,
  },
  {
    path: 'asistencias',
    component: AsistenciaListComponent,
  },
  {
    path: 'asistencias/nuevo',
    component: AsistenciaNuevoComponent,
  },
  {
    path: 'aulas',
    component: AulaListComponent,
  },
  {
    path: 'aulas/nuevo',
    component: AulaNuevoComponent,
  },
  {
    path: 'aulas/editar/:id',
    component: AulaEditComponent,
  },
  {
    path: 'programacion',
    component: ProgramacionListComponent,
  },
  {
    path: 'programacion/editar/:id',
    component: ProgramacionEditComponent,
  },
  {
    path: 'programacion/nuevo',
    component: ProgramacionNuevoComponent,
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
