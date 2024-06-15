import { ChangeDetectorRef, Component } from '@angular/core';
import { AulaType, GrupoMateriaType, MateriaType, ProgramacionType, UsuarioType } from 'src/app/api-client/api.types';
import { AulaService } from 'src/app/api-client/aula.service';
import { GrupoMateriaService } from 'src/app/api-client/grupo.service';
import { MateriaService } from 'src/app/api-client/materia.service';
import { ProgramacionService } from 'src/app/api-client/programacion.service';
import { UsuarioService } from 'src/app/api-client/usuario.service';

@Component({
  selector: 'app-programacion-edit',
  templateUrl: './programacion-edit.component.html',
  styleUrls: ['./programacion-edit.component.scss']
})
export class ProgramacionEditComponent {
  public programaciones: ProgramacionType[];
  public materias: MateriaType[];
  public grupos: GrupoMateriaType[];
  public aulas: AulaType[];
  public usuarios: UsuarioType[];
  public horaInicio: string = '';
  public horafin: string = '';

  constructor(
    readonly ProgramacionService: ProgramacionService,
    
    readonly MateriaService: MateriaService,
    readonly GrupoMateriaService: GrupoMateriaService,
    readonly AulaService: AulaService,
    readonly UsuarioService: UsuarioService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getmateria();
    this.getgrupo();
    this.getaula();
    this.getusuario();
  }
  getmateria(){
    this.MateriaService.getAll().subscribe({
      next:(res)=>{
        this.materias = res
        this.cdr.detectChanges();
      }
    })
  }
  getgrupo(){
    this.GrupoMateriaService.getAll().subscribe({
      next:(res)=>{
        this.grupos = res
        this.cdr.detectChanges();
      }
    })
  }
  getaula(){
    this.AulaService.getAll().subscribe({
      next:(res)=>{
        this.aulas = res
        this.cdr.detectChanges();
      }
    })
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
