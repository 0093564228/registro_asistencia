import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { facultadDTO } from 'src/app/api-client/api.types';
import { FacultadService } from 'src/app/api-client/facultad.service';

@Component({
  selector: 'app-facultad-list',
  templateUrl: './facultad-list.component.html',
  styleUrls: ['./facultad-list.component.scss']
})
export class FacultadListComponent {
  public facultades: facultadDTO[];
  constructor(
    readonly FacultadService: FacultadService,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getFacultad();
  }

  getFacultad(){
    this.FacultadService.getAll().subscribe({
      next:(res)=>{
        this.facultades = res
        this.cdr.detectChanges();
      }
    })
  }
  
  eliminar(id:number){
    this.FacultadService.delete(id).subscribe({
      next:()=>{
        this.getFacultad();
      }
    })
  }
  editar(id:number){
    this.router.navigate(['/facultades/editar', id]);
  }
}
