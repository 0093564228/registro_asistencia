import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioType } from 'src/app/api-client/api.types';
import { UsuarioService } from 'src/app/api-client/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent {
  public usuarios: UsuarioType[] = [] ;

  constructor(
    readonly UsuarioService: UsuarioService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.getusuario();
  }

  getusuario(){
    this.UsuarioService.getAll().subscribe({
      next:(res)=>{
        this.usuarios = res
        this.cdr.detectChanges();
      }
    })
  }
  eliminar(id:number){
    this.UsuarioService.delete(id).subscribe({
      next:()=>{
        this.getusuario();
      }
    })
  }
  editar(id:number){
    this.router.navigate(['/usuarios/editar', id]);
  }
}
