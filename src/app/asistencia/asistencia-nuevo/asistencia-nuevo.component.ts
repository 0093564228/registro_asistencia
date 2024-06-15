import { ChangeDetectorRef, Component } from '@angular/core';
import { ProgramacionType, UsuarioType } from 'src/app/api-client/api.types';
import { ProgramacionService } from 'src/app/api-client/programacion.service';
import { UsuarioService } from 'src/app/api-client/usuario.service';

@Component({
  selector: 'app-asistencia-nuevo',
  templateUrl: './asistencia-nuevo.component.html',
  styleUrls: ['./asistencia-nuevo.component.scss']
})
export class AsistenciaNuevoComponent {
  public programaciones: ProgramacionType[];
  public usuarios: UsuarioType[];

  constructor(
    readonly ProgramacionService: ProgramacionService,
    readonly UsuarioService: UsuarioService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getusuario();
  }
  getusuario(){
    this.UsuarioService.getAll().subscribe({
      next:(res)=>{
        this.usuarios = res
        this.cdr.detectChanges();
      }
    })
  }
}
