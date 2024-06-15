import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioType } from 'src/app/api-client/api.types';
import { UsuarioService } from 'src/app/api-client/usuario.service';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styleUrls: ['./usuario-nuevo.component.scss']
})
export class UsuarioNuevoComponent {
  public usuarios: UsuarioType[];
  formGroup: FormGroup;

  constructor(
    readonly usuarioServie: UsuarioService,

    private formBuilder: FormBuilder,
    private router: Router,
    private activatedroute: ActivatedRoute,

    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.getusuarios();

    this.formGroup = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
      carreraDTO: [null, Validators.required],
    });
  }
  getusuarios(){
    this.usuarioServie.getAll().subscribe({
      next:(res)=>{
        this.usuarios = res
        this.cdr.detectChanges();
      }
    })
  }

  guardar(){
    this.usuarioServie.create(this.formGroup.value).subscribe({
      next:(res)=>{
        this.router.navigate(['/usuarios']);
      }
    })
  }

  volver(){
    this.router.navigate(['/usuarios']);
  }
}
