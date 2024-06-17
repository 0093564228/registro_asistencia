import { ChangeDetectorRef, Component } from '@angular/core';
import { AsistenciaType } from 'src/app/api-client/api.types';
import { AsistenciaService } from 'src/app/api-client/asistencia.service';
import * as XLSX from 'xlsx';

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
  
  fileName = "Excel_Asistencia.xlsx";

  exportexcel(){
    let data = document.getElementById("table-data");
    const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')

    XLSX.writeFile(wb, this.fileName)

  }

}
