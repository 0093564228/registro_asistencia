import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { LicenciaType } from 'src/app/api-client/api.types';
import { LicenciaService } from 'src/app/api-client/licencia.service';

@Component({
  selector: 'app-licencia-list',
  templateUrl: './licencia-list.component.html',
  styleUrls: ['./licencia-list.component.scss']
})
export class LicenciaListComponent {
  public licencias: LicenciaType[] = [] ;

  constructor(
    readonly licenciaService: LicenciaService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.getlicencias();
  }

 /* getlicencias(){
    this.licenciaService.getAll().subscribe({
      next:(res)=>{
        this.licencias = res
        //console.log(this.materias)
        this.cdr.detectChanges();
      }
    })
  }*/

 /* getlicencias() {
    this.licenciaService.getAll().subscribe({
     next: (res) => {
       this.licencias = res.map(licencia => ({
          ...licencia,
          horario_inicio: new Date(`1970-01-01T${licencia.horario_inicio}`),
          horario_fin: new Date(`1970-01-01T${licencia.horario_fin}`)
        }));
          this.cdr.detectChanges();
      }
    });
  }*/
    getlicencias() {
      this.licenciaService.getAll().subscribe({
        next: (res) => {
          console.log('Datos recibidos:', res);
          this.licencias = res.map(licencia => ({
            ...licencia,
            horario_inicio: new Date(licencia.horario_inicio),
            horario_fin: new Date(licencia.horario_fin)
          }));
          console.log('Datos convertidos:', this.licencias);
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error al obtener las licencias', err);
        }
      });
    }

  eliminar(id:number){
    this.licenciaService.delete(id).subscribe({
      next:()=>{
        this.getlicencias();
      }
    })
  }
}
