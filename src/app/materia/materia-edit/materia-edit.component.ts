import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarreraType, MateriaType} from 'src/app/api-client/api.types';
import { CarreraService } from 'src/app/api-client/carrera.service';
import { MateriaService } from 'src/app/api-client/materia.service';

@Component({
  selector: 'app-materia-edit',
  templateUrl: './materia-edit.component.html',
  styleUrls: ['./materia-edit.component.scss']
})
export class MateriaEditComponent {
  public materias: MateriaType[];
  public carreras: CarreraType[];

  formGroup: FormGroup
  id: number
  carrera: CarreraType
  materia: MateriaType

  constructor(
    readonly materiaService: MateriaService,
    readonly carreraService: CarreraService,

    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,

    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.getcarrera();

    this.formGroup = this.formBuilder.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      sigla: ['', Validators.required],
      carreraDTO:[null , Validators.required]
    });

    this.route.params.subscribe(params => {
      this.id = +params['id']
      this.getBy(this.id)
    });
  }
  getcarrera(){
    this.carreraService.getAll().subscribe({
      next:(res)=>{
        this.carreras = res
        this.cdr.detectChanges();
      }
    })
  }

  getBy(id:number){ //obtiene todo el objeto por id
    this.materiaService.getBy(id).subscribe({
      next:(res: MateriaType)=>{
        this.materia = res
        this.formGroup =  this.formBuilder.group(this.materia);
        console.log(this.formGroup.value)
        this.cdr.detectChanges();
      }
    })
  }

  guardar(){
    this.materiaService.update(this.formGroup.value).subscribe({
      next:()=>{
        this.router.navigate(['/materias']);
      }
    })
  }
}
