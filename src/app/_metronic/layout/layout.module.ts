import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { RouterModule, Routes } from '@angular/router';
import {
  NgbDropdownModule,
  NgbProgressbarModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationModule } from '../../modules/i18n';
import { LayoutComponent } from './layout.component';
import { ExtrasModule } from '../partials/layout/extras/extras.module';
import { Routing } from '../../pages/routing';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScriptsInitComponent } from './components/scripts-init/scripts-init.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { PageTitleComponent } from './components/header/page-title/page-title.component';
import { HeaderMenuComponent } from './components/header/header-menu/header-menu.component';
import {
  DrawersModule,
  DropdownMenusModule,
  ModalsModule,
  EngagesModule,
} from '../partials';
import { EngagesComponent } from '../partials/layout/engages/engages.component';
import { ThemeModeModule } from '../partials/layout/theme-mode-switcher/theme-mode.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarLogoComponent } from './components/sidebar/sidebar-logo/sidebar-logo.component';
import { SidebarMenuComponent } from './components/sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarFooterComponent } from './components/sidebar/sidebar-footer/sidebar-footer.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { AccountingComponent } from './components/toolbar/accounting/accounting.component';
import { ClassicComponent } from './components/toolbar/classic/classic.component';
import { ExtendedComponent } from './components/toolbar/extended/extended.component';
import { ReportsComponent } from './components/toolbar/reports/reports.component';
import { SaasComponent } from './components/toolbar/saas/saas.component';
import {SharedModule} from "../shared/shared.module";
import { CarreraListComponent } from 'src/app/carrera/carrera-list/carrera-list.component';
import { CarreraNuevoComponent } from 'src/app/carrera/carrera-nuevo/carrera-nuevo.component';
import { FacultadListComponent } from 'src/app/facultad/facultad-list/facultad-list.component';
import { MateriaListComponent } from 'src/app/materia/materia-list/materia-list.component';
import { AsistenciaListComponent } from 'src/app/asistencia/asistencia-list/asistencia-list.component';
import { GrupoListComponent } from 'src/app/grupo/grupo-list/grupo-list.component';
import { LicenciaListComponent } from 'src/app/licencia/licencia-list/licencia-list.component';
import { ProgramacionListComponent } from 'src/app/programacion/programacion-list/programacion-list.component';
import { UsuarioListComponent } from 'src/app/usuario/usuario-list/usuario-list.component';
import { AulaListComponent } from 'src/app/aula/aula-list/aula-list.component';
import { FacultadNuevoComponent } from 'src/app/facultad/facultad-nuevo/facultad-nuevo.component';
import { FacultadEditComponent } from 'src/app/facultad/facultad-edit/facultad-edit.component';
import { UsuarioNuevoComponent } from 'src/app/usuario/usuario-nuevo/usuario-nuevo.component';
import { MateriaNuevoComponent } from 'src/app/materia/materia-nuevo/materia-nuevo.component';
import { MateriaEditComponent } from 'src/app/materia/materia-edit/materia-edit.component';
import { UsuarioEditComponent } from 'src/app/usuario/usuario-edit/usuario-edit.component';
import { AulaNuevoComponent } from 'src/app/aula/aula-nuevo/aula-nuevo.component';
import { AulaEditComponent } from 'src/app/aula/aula-edit/aula-edit.component';
import { CarreraEditComponent } from 'src/app/carrera/carrera-edit/carrera-edit.component';
import { AsistenciaNuevoComponent } from 'src/app/asistencia/asistencia-nuevo/asistencia-nuevo.component';
import { GrupoNuevoComponent } from 'src/app/grupo/grupo-nuevo/grupo-nuevo.component';
import { LicenciaNuevoComponent } from 'src/app/licencia/licencia-nuevo/licencia-nuevo.component';
import { ProgramacionNuevoComponent } from 'src/app/programacion/programacion-nuevo/programacion-nuevo.component';
import { ProgramacionEditComponent } from 'src/app/programacion/programacion-edit/programacion-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: Routing,
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ScriptsInitComponent,
    ToolbarComponent,
    TopbarComponent,
    PageTitleComponent,
    HeaderMenuComponent,
    EngagesComponent,
    SidebarComponent,
    SidebarLogoComponent,
    SidebarMenuComponent,
    SidebarFooterComponent,
    NavbarComponent,
    AccountingComponent,
    ClassicComponent,
    ExtendedComponent,
    ReportsComponent,
    SaasComponent,
    CarreraListComponent,
    CarreraNuevoComponent,
    CarreraListComponent,
    CarreraNuevoComponent,
    FacultadListComponent,
    MateriaListComponent,
    AsistenciaListComponent,
    GrupoListComponent,
    LicenciaListComponent,
    ProgramacionListComponent,
    UsuarioListComponent,
    AulaListComponent,
    FacultadNuevoComponent,
    FacultadEditComponent,
    UsuarioNuevoComponent,
    MateriaNuevoComponent,
    MateriaEditComponent,
    UsuarioEditComponent,
    AulaNuevoComponent,
    AulaEditComponent,
    CarreraEditComponent,
    AsistenciaNuevoComponent,
    GrupoNuevoComponent,
    LicenciaNuevoComponent,
    ProgramacionNuevoComponent,
    ProgramacionEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslationModule,
    InlineSVGModule,
    NgbDropdownModule,
    NgbProgressbarModule,
    ExtrasModule,
    ModalsModule,
    DrawersModule,
    EngagesModule,
    DropdownMenusModule,
    NgbTooltipModule,
    TranslateModule,
    ThemeModeModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class LayoutModule {}
