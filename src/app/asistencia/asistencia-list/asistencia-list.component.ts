import { ChangeDetectorRef, Component } from '@angular/core';
import { AsistenciaType } from 'src/app/api-client/api.types';
import { AsistenciaService } from 'src/app/api-client/asistencia.service';

@Component({
  selector: 'app-asistencia-list',
  templateUrl: './asistencia-list.component.html',
  styleUrls: ['./asistencia-list.component.scss']
})
export class AsistenciaListComponent {
  public asistencias: AsistenciaType[] = [] ;

  constructor(
    readonly AsistenciaService: AsistenciaService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.getasistencia();
  }

  getasistencia(){
    this.AsistenciaService.getAll().subscribe({
      next:(res)=>{
        this.asistencias = res
        this.cdr.detectChanges();
      }
    })
  }
}
