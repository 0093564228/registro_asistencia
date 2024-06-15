import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultadService } from 'src/app/api-client/facultad.service';

@Component({
  selector: 'app-facultad-nuevo',
  templateUrl: './facultad-nuevo.component.html',
  styleUrls: ['./facultad-nuevo.component.scss']
})
export class FacultadNuevoComponent implements OnInit {
  formGroup: FormGroup 

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: FacultadService,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
      modulo: ['', Validators.required],
    });
  }

  guardar(){
    this.service.create(this.formGroup.value).subscribe({
      next:(res)=>{
        this.router.navigate(['/facultades']);
      }
    })
  }

  volver(){
    this.router.navigate(['/facultades']);
  }
}
