import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioType } from 'src/app/api-client/api.types';
import { UsuarioService } from 'src/app/api-client/usuario.service';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.scss']
})
export class UsuarioEditComponent {
  public usuarios: UsuarioType[];

  formGroup: FormGroup
  id: number
  usuario: UsuarioType

  constructor(
    readonly usuarioServie: UsuarioService,

    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,

    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      id: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      this.id = +params['id']
      this.getBy(this.id)
    });
  }

  getBy(id:number){ //obtiene todo el objeto por id
    this.usuarioServie.getBy(id).subscribe({
      next:(res: UsuarioType)=>{
        this.usuario = res
        this.formGroup =  this.formBuilder.group(this.usuario);
        console.log(this.formGroup.value)
        this.cdr.detectChanges();
      }
    })
  }

  guardar(){
    this.usuarioServie.update(this.formGroup.value).subscribe({
      next:()=>{
        this.router.navigate(['/usuarios']);
      }
    })
  }
}
