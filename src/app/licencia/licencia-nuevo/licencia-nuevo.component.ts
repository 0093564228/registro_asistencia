import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LicenciaType, UsuarioType } from 'src/app/api-client/api.types';
import { LicenciaService } from 'src/app/api-client/licencia.service';
import { UsuarioService } from 'src/app/api-client/usuario.service';

@Component({
  selector: 'app-licencia-nuevo',
  templateUrl: './licencia-nuevo.component.html',
  styleUrls: ['./licencia-nuevo.component.scss']
})
export class LicenciaNuevoComponent {
  public licencias: LicenciaType[];
  public usuarios: UsuarioType[];
  formGroup: FormGroup;

  constructor(
    readonly licienciaService: LicenciaService,
    readonly usuarioService: UsuarioService,

    private formBuilder: FormBuilder,
    private router: Router,
    private activatedroute: ActivatedRoute,

    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.getusuario();

    this.formGroup = this.formBuilder.group({
      motivo: ['', Validators.required],
      horario_inicio: ['', Validators.required],
      horario_fin: ['', Validators.required],
      userDTO: [null, Validators.required],
    });
  }
  getusuario(){
    this.usuarioService.getAll().subscribe({
      next:(res)=>{
        this.usuarios = res
        this.cdr.detectChanges();
      }
    })
  }

  guardar(){
    this.licienciaService.create(this.formGroup.value).subscribe({
      next:(res)=>{
        this.router.navigate(['/licencias']);
      }
    })
  }

  volver(){
    this.router.navigate(['/licencias']);
  }
}
