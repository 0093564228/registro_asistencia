import { ChangeDetectorRef, Component } from '@angular/core';
import { AsistenciaType } from 'src/app/api-client/api.types';
import { AsistenciaService } from 'src/app/api-client/asistencia.service';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { jsPDF as jsPDFType } from 'jspdf';

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
  imprimirlista() {
    const doc = new jsPDF();
    const title = "Lista de Asistencia";
    
    // Centrar el título
    const pageWidth = doc.internal.pageSize.getWidth();
    const textWidth = doc.getTextWidth(title);
    const textX = (pageWidth - textWidth) / 2;

    // Agregar el título
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(title, textX, 10);
    
    const columns = ["Nombre", "Apellido", "Materia", "Grupo", "Aula", "Estado", "Hora","Día"];
    const rows = this.asistencias.map(asistencia => {
      const horario_inicio = asistencia.estado === 'PENDIENTE' ? '' : new Date(asistencia.horario_inicio).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }) + ", " + new Date(asistencia.horario_inicio).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  
      return [
        asistencia.programacionDTO.userDTO.firstname,
        asistencia.programacionDTO.userDTO.lastname,
        asistencia.programacionDTO.materiaDTO.nombre,
        asistencia.programacionDTO.grupoDTO.nombre,
        asistencia.programacionDTO.aulaDTO.nombre,
        asistencia.estado,
        horario_inicio,
        asistencia.programacionDTO.dia
      ];
    });

    (doc as any).autoTable({
      head: [columns],
      body: rows,
      startY: 20,
      theme: 'grid',
      styles: {
        fontSize: 10,
        cellPadding: 3,
      },
      headStyles: {
        fillColor: [0, 120, 255], 
        textColor: [255, 255, 255],
        fontStyle: 'bold'
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245]
      },
      didParseCell: (data: any) => {
        if (data.section === 'body' && data.column.index === 5) {
          const estado = data.cell.raw;
          if (estado === 'FALTA') {
            data.cell.styles.fillColor = [255, 0, 0]; // Rojo
          } else if (estado === 'RETRASADO') {
            data.cell.styles.fillColor = [255, 165, 0]; // Naranja
          } else if (estado === 'PRESENTE') {
            data.cell.styles.fillColor = [0, 255, 0]; // Verde
          } else if (estado === 'PENDIENTE') {
            data.cell.styles.fillColor = [255, 255, 0]; // Amarillo
          }
        }
      }
    });

    doc.save('PDF_Asistencia.pdf');
  }
}
