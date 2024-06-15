import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { facultadDTO } from 'src/app/api-client/api.types';
import { FacultadService } from 'src/app/api-client/facultad.service';

@Component({
  selector: 'app-facultad-edit',
  templateUrl: './facultad-edit.component.html',
  styleUrls: ['./facultad-edit.component.scss']
})
export class FacultadEditComponent implements OnInit{
  formGroup: FormGroup 
  id: number
  facultad: facultadDTO

  constructor(
    private route: ActivatedRoute,
    readonly service: FacultadService,
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      modulo: ['', Validators.required],
    });

    this.route.params.subscribe(params => {
      this.id = +params['id']
      this.getBy(this.id)
    });
}

  getBy(id:number){
    this.service.getBy(id).subscribe({
      next:(res: facultadDTO)=>{
        this.facultad = res
        console.log(this.facultad)
        this.formGroup =  this.formBuilder.group(this.facultad);
        this.cdr.detectChanges();
      }
    })
  }

  guardar(){
    this.service.update(this.formGroup.value).subscribe({
      next:()=>{
        this.router.navigate(['/facultades']);
      }
    })
  }
}
