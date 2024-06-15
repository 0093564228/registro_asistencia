import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarreraType, facultadDTO } from 'src/app/api-client/api.types';
import { CarreraService } from 'src/app/api-client/carrera.service';
import { FacultadService } from 'src/app/api-client/facultad.service';

@Component({
  selector: 'app-carrera-nuevo',
  templateUrl: './carrera-nuevo.component.html',
  styleUrls: ['./carrera-nuevo.component.scss']
})
export class CarreraNuevoComponent {
  public carreras: CarreraType[];
  public facultades: facultadDTO[];
  formGroup: FormGroup;

  constructor(
    readonly carreraService: CarreraService,
    readonly FacultadService: FacultadService,

    private formBuilder: FormBuilder,
    private router: Router,
    private activatedroute: ActivatedRoute,

    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.getFacultad();

    this.formGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
      facultadDTO: ['', Validators.required],
    });
  }
  getFacultad(){
    this.FacultadService.getAll().subscribe({
      next:(res)=>{
        this.facultades = res
        this.cdr.detectChanges();
      }
    })
  }

  guardar(){
    this.carreraService.create(this.formGroup.value).subscribe({
      next:(res)=>{
        this.router.navigate(['/carreras']);
      }
    })
  }

  volver(){
    this.router.navigate(['/carreras']);
  }
}
