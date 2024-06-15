import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarreraType, facultadDTO } from 'src/app/api-client/api.types';
import { CarreraService } from 'src/app/api-client/carrera.service';
import { FacultadService } from 'src/app/api-client/facultad.service';

@Component({
  selector: 'app-carrera-edit',
  templateUrl: './carrera-edit.component.html',
  styleUrls: ['./carrera-edit.component.scss']
})
export class CarreraEditComponent {
  public carreras: CarreraType[];
  public facultades: facultadDTO[];

  formGroup: FormGroup 
  id: number
  facultad: facultadDTO
  carrera: CarreraType

  constructor(
    readonly carreraService: CarreraService,
    readonly FacultadService: FacultadService,

    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,

    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.getFacultad();

    this.formGroup = this.formBuilder.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      facultadDTO:[null , Validators.required]
    });

    this.route.params.subscribe(params => {
      this.id = +params['id']
      this.getBy(this.id)
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

  getBy(id:number){ //obtiene todo el objeto por id
    this.carreraService.getBy(id).subscribe({
      next:(res: CarreraType)=>{
        this.carrera = res
        this.formGroup =  this.formBuilder.group(this.carrera);
        console.log(this.formGroup.value)
        this.cdr.detectChanges();
      }
    })
  }

  guardar(){
    this.carreraService.update(this.formGroup.value).subscribe({
      next:()=>{
        this.router.navigate(['/carreras']);
      }
    })
  }
}
