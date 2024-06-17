import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AulaType } from 'src/app/api-client/api.types';
import { AulaService } from 'src/app/api-client/aula.service';

@Component({
  selector: 'app-aula-nuevo',
  templateUrl: './aula-nuevo.component.html',
  styleUrls: ['./aula-nuevo.component.scss']
})
export class AulaNuevoComponent {
  public aulas: AulaType[];
  formGroup: FormGroup;

  constructor(
    readonly aulaService: AulaService,

    private formBuilder: FormBuilder,
    private router: Router,
    private activatedroute: ActivatedRoute,

    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.getusuarios();

    this.formGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
    });
  }
  getusuarios(){
    this.aulaService.getAll().subscribe({
      next:(res)=>{
        this.aulas = res
        this.cdr.detectChanges();
      }
    })
  }

  guardar(){
    this.aulaService.create(this.formGroup.value).subscribe({
      next:(res)=>{
        this.router.navigate(['/aulas']);
      }
    })
  }

  volver(){
    this.router.navigate(['/usuarios']);
  }
}
