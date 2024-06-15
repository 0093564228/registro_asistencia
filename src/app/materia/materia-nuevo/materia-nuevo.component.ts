import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarreraType, MateriaType } from 'src/app/api-client/api.types';
import { CarreraService } from 'src/app/api-client/carrera.service';
import { MateriaService } from 'src/app/api-client/materia.service';

@Component({
  selector: 'app-materia-nuevo',
  templateUrl: './materia-nuevo.component.html',
  styleUrls: ['./materia-nuevo.component.scss']
})
export class MateriaNuevoComponent {
  public materias: MateriaType[];
  public carreras: CarreraType[];
  formGroup: FormGroup;

  constructor(
    readonly MateriaService: MateriaService,
    readonly CarreraService: CarreraService,

    private formBuilder: FormBuilder,
    private router: Router,
    private activatedroute: ActivatedRoute,

    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.getcarrera();

    this.formGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
      sigla: ['', Validators.required],
      carreraDTO: [null, Validators.required],
    });
  }
  getcarrera(){
    this.CarreraService.getAll().subscribe({
      next:(res)=>{
        this.carreras = res
        this.cdr.detectChanges();
      }
    })
  }

  guardar(){
    this.MateriaService.create(this.formGroup.value).subscribe({
      next:(res)=>{
        this.router.navigate(['/materias']);
      }
    })
  }

  volver(){
    this.router.navigate(['/materias']);
  }
}
