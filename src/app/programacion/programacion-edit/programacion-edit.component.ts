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

  formGroup: FormGroup
  id: number
  programacion: ProgramacionType
  materia: MateriaType
  grupo: GrupoMateriaType
  aula: AulaType
  usuario: UsuarioType

  constructor(
    readonly programacionService: ProgramacionService,
    
    readonly MateriaService: MateriaService,
    readonly GrupoMateriaService: GrupoMateriaService,
    readonly AulaService: AulaService,
    readonly UsuarioService: UsuarioService,

    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,


    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getmateria();
    this.getgrupo();
    this.getaula();
    this.getusuario();

    this.formGroup = this.formBuilder.group({
      id: ['', Validators.required],
      userDTO: [null, Validators.required],
      materiaDTO: [null, Validators.required],
      grupoDTO: [null, Validators.required],
      aulaDTO: [null, Validators.required],
      dia: ['', Validators.required],
      horario_inicio: ['', Validators.required],
      horario_fin: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      this.id = +params['id']
      this.getBy(this.id)
    });

  }

  getBy(id:number){ //obtiene todo el objeto por id
    this.programacionService.getBy(id).subscribe({
      next:(res: ProgramacionType)=>{
        this.programacion = res
        this.formGroup =  this.formBuilder.group(this.programacion);
        console.log(this.formGroup.value)
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
