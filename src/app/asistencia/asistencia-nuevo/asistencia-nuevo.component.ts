import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AsistenciaType, ProgramacionType, UsuarioType } from 'src/app/api-client/api.types';
import { AsistenciaService } from 'src/app/api-client/asistencia.service';
import { ProgramacionService } from 'src/app/api-client/programacion.service';
import { UsuarioService } from 'src/app/api-client/usuario.service';

@Component({
  selector: 'app-asistencia-nuevo',
  templateUrl: './asistencia-nuevo.component.html',
  styleUrls: ['./asistencia-nuevo.component.scss']
})
export class AsistenciaNuevoComponent {
  public asistencias: AsistenciaType[];
  public programaciones: ProgramacionType[]; 
  formGroup: FormGroup;
  
  constructor(
    readonly programacionService: ProgramacionService,
    readonly asistenciaService: AsistenciaService,

    private formBuilder: FormBuilder,
    private router: Router,
    private activatedroute: ActivatedRoute,

    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getprogramacion();

    this.formGroup = this.formBuilder.group({
      horario_inicio: ['', Validators.required],
      horario_fin: ['', Validators.required],
      estado: ['', Validators.required],
      userTDO: [null, Validators.required],
      programacionDTO: [null, Validators.required],
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

  guardar(){
    this.asistenciaService.create(this.formGroup.value).subscribe({
      next:(res)=>{
        this.router.navigate(['/asistencias']);
      }
    })
  }

  volver(){
    this.router.navigate(['/asistencias']);
  }
}
