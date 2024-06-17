import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AulaType } from 'src/app/api-client/api.types';
import { AulaService } from 'src/app/api-client/aula.service';

@Component({
  selector: 'app-aula-edit',
  templateUrl: './aula-edit.component.html',
  styleUrls: ['./aula-edit.component.scss']
})
export class AulaEditComponent {
  public aulas: AulaType[];

  formGroup: FormGroup
  id: number
  aula: AulaType

  constructor(
    readonly aulaService: AulaService,

    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,

    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      this.id = +params['id']
      this.getBy(this.id)
    });
  }

  getBy(id:number){ //obtiene todo el objeto por id
    this.aulaService.getBy(id).subscribe({
      next:(res: AulaType)=>{
        this.aula = res
        this.formGroup =  this.formBuilder.group(this.aula);
        console.log(this.formGroup.value)
        this.cdr.detectChanges();
      }
    })
  }

  guardar(){
    this.aulaService.update(this.formGroup.value).subscribe({
      next:()=>{
        this.router.navigate(['/aulas']);
      }
    })
  }
}
