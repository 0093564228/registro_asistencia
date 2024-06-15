import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClipboardModule } from 'ngx-clipboard';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './modules/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
// #fake-start#
import { FakeAPIService } from './_fake/fake-api.service';
import { ToastrModule } from 'ngx-toastr';
import { CKEditorModule } from 'ckeditor4-angular';
// #fake-end#
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user/user.component';
import { CarreraListComponent } from './carrera/carrera-list/carrera-list.component';
import { CarreraNuevoComponent } from './carrera/carrera-nuevo/carrera-nuevo.component';
import { ApiClientModule } from './api-client/api-client.module';
import { FacultadListComponent } from './facultad/facultad-list/facultad-list.component';
import { MateriaListComponent } from './materia/materia-list/materia-list.component';
import { AsistenciaListComponent } from './asistencia/asistencia-list/asistencia-list.component';
import { GrupoListComponent } from './grupo/grupo-list/grupo-list.component';
import { LicenciaListComponent } from './licencia/licencia-list/licencia-list.component';
import { ProgramacionListComponent } from './programacion/programacion-list/programacion-list.component';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { AulaListComponent } from './aula/aula-list/aula-list.component';
import { FacultadNuevoComponent } from './facultad/facultad-nuevo/facultad-nuevo.component';
import { FacultadEditComponent } from './facultad/facultad-edit/facultad-edit.component';
import { UsuarioNuevoComponent } from './usuario/usuario-nuevo/usuario-nuevo.component';
import { MateriaNuevoComponent } from './materia/materia-nuevo/materia-nuevo.component';
import { MateriaEditComponent } from './materia/materia-edit/materia-edit.component';
import { UsuarioEditComponent } from './usuario/usuario-edit/usuario-edit.component';
import { AulaNuevoComponent } from './aula/aula-nuevo/aula-nuevo.component';
import { AulaEditComponent } from './aula/aula-edit/aula-edit.component';
import { CarreraEditComponent } from './carrera/carrera-edit/carrera-edit.component';
import { AsistenciaNuevoComponent } from './asistencia/asistencia-nuevo/asistencia-nuevo.component';
import { GrupoNuevoComponent } from './grupo/grupo-nuevo/grupo-nuevo.component';
import { LicenciaNuevoComponent } from './licencia/licencia-nuevo/licencia-nuevo.component';
import { ProgramacionNuevoComponent } from './programacion/programacion-nuevo/programacion-nuevo.component';
import { ProgramacionEditComponent } from './programacion/programacion-edit/programacion-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

function appInitializer(authService: AuthService) {
return () => {
return new Promise((resolve) => {
//@ts-ignore
authService.getUserByToken().subscribe().add(resolve);
});
};
}

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    ClipboardModule,
    ApiClientModule,
    // #fake-start#
    environment.isMockEnabled
      ? HttpClientInMemoryWebApiModule.forRoot(FakeAPIService, {
          passThruUnknownUrl: true,
          dataEncapsulation: false,
        })
      : [],
    // #fake-end#
    AppRoutingModule,
    InlineSVGModule.forRoot(),
    NgbModule,
    //
    CKEditorModule,
    //
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot(),
    NgbPaginationModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      deps: [AuthService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
