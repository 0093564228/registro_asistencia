import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramacionType } from 'src/app/api-client/api.types';
import { ProgramacionService } from 'src/app/api-client/programacion.service';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


@Component({
  selector: 'app-programacion-list',
  templateUrl: './programacion-list.component.html',
  styleUrls: ['./programacion-list.component.scss']
})
export class ProgramacionListComponent {
  public programaciones: ProgramacionType[] = [] ;

  constructor(
    readonly programacionService: ProgramacionService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.getprogramacion();
  }

  /*getprogramacion(){
    this.programacionService.getAll().subscribe({
      next:(res)=>{
        this.programaciones = res
        this.cdr.detectChanges();
      }
    })
  }*/
    getprogramacion() {
      this.programacionService.getAll().subscribe({
        next: (res) => {
          this.programaciones = res.map(programacion => ({
            ...programacion,
            horario_inicio: new Date(`1970-01-01T${programacion.horario_inicio}`),
            horario_fin: new Date(`1970-01-01T${programacion.horario_fin}`)
          }));
          this.cdr.detectChanges();
        }
      });
    }
       
  eliminar(id:number){
    this.programacionService.delete(id).subscribe({
      next:()=>{
        this.getprogramacion();
      }
    })
  }
  editar(id:number){
    this.router.navigate(['/programacion/editar', id]);
  }

  fileName = "Excel_Programacion.xlsx";

  exportexcel(){
    let data = document.getElementById("table-data");
    const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')

    XLSX.writeFile(wb, this.fileName)

  }

  /*imprimirlista(){
    const doc = new jsPDF();  // Usa el constructor de jsPDF aquí
    //doc.html(document.getElementById('table-data'), 10 , 10);
    //doc.save('PDf_Programacion.pdf');
  }*/
    imprimirlista() {
      const doc = new jsPDF();
      const columns = ["Nombre", "Apellido", "Materia", "Grupo", "Aula", "Dia", "Horario Inicio", "Horario Final"];
      const rows = this.programaciones.map(programacion => [
        programacion.userDTO.firstname,
        programacion.userDTO.lastname,
        programacion.materiaDTO.nombre,
        programacion.grupoDTO.nombre,
        programacion.aulaDTO.nombre,
        programacion.dia,
        new Date(programacion.horario_inicio).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
        new Date(programacion.horario_fin).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
      ]);
  
      (doc as any).autoTable({
        head: [columns],
        body: rows,
        startY: 10,
        theme: 'grid',
        styles: {
          fontSize: 10,
          cellPadding: 3,
        },
        headStyles: {
          fillColor: [22, 160, 133],
          textColor: [255, 255, 255],
          fontStyle: 'bold'
        },
        alternateRowStyles: {
          fillColor: [245, 245, 245]
        }
      });
  
      doc.save('PDF_Programacion.pdf');
    }
}
