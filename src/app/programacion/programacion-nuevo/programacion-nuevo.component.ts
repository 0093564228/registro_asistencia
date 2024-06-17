import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AulaType, GrupoMateriaType, MateriaType, ProgramacionType, UsuarioType } from 'src/app/api-client/api.types';
import { AulaService } from 'src/app/api-client/aula.service';
import { GrupoMateriaService } from 'src/app/api-client/grupo.service';
import { MateriaService } from 'src/app/api-client/materia.service';
import { ProgramacionService } from 'src/app/api-client/programacion.service';
import { UsuarioService } from 'src/app/api-client/usuario.service';

@Component({
  selector: 'app-programacion-nuevo',
  templateUrl: './programacion-nuevo.component.html',
  styleUrls: ['./programacion-nuevo.component.scss']
})
export class ProgramacionNuevoComponent {
  public programaciones: ProgramacionType[];
  public materias: MateriaType[];
  public grupos: GrupoMateriaType[];
  public aulas: AulaType[];
  public usuarios: UsuarioType[];
  //public horaInicio: string = '';
  //public horafin: string = '';

  formGroup: FormGroup;

  constructor(
    readonly programacionService: ProgramacionService,
    
    readonly MateriaService: MateriaService,
    readonly GrupoMateriaService: GrupoMateriaService,
    readonly AulaService: AulaService,
    readonly UsuarioService: UsuarioService,

    private formBuilder: FormBuilder,
    private router: Router,
    private activatedroute: ActivatedRoute,

    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getmateria();
    this.getgrupo();
    this.getaula();
    this.getusuario();
    this.getprogramacion();

    this.formGroup = this.formBuilder.group({
      userDTO: [null, Validators.required],
      materiaDTO: [null, Validators.required],
      grupoDTO: [null, Validators.required],
      aulaDTO: [null, Validators.required],
      dia: ['', Validators.required],
      horario_inicio: ['', Validators.required],
      horario_fin: ['', Validators.required]
    });

  }
  getprogramacion(){
    this.programacionService.getAll().subscribe({
      next:(res)=>{
        this.programaciones = res
        this.cdr.detectChanges();
      }
    })
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

  guardar() {
    if (this.formGroup.valid) {
      const formData = this.formGroup.value;
      console.log('Datos del formulario:', JSON.stringify(formData, null, 2));
  
      this.programacionService.create(formData).subscribe({
        next: (res) => {
          console.log('Respuesta del servidor:', res);
          this.router.navigate(['/programacion']);
        },
        error: (err) => {
          console.error('Error al crear la programacion', err);
        }
      });
    }
  }

  volver(){
    this.router.navigate(['/programacion']);
  }
}
