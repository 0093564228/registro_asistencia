import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MateriaType } from 'src/app/api-client/api.types';
import { MateriaService } from 'src/app/api-client/materia.service';

@Component({
  selector: 'app-materia-list',
  templateUrl: './materia-list.component.html',
  styleUrls: ['./materia-list.component.scss']
})
export class MateriaListComponent {
  public materias: MateriaType[] = [] ;

  constructor(
    readonly MateriaService: MateriaService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.getMaterias();
  }

  getMaterias(){
    this.MateriaService.getAll().subscribe({
      next:(res)=>{
        this.materias = res
        //console.log(this.materias)
        this.cdr.detectChanges();
      }
    })
  }

  eliminar(id:number){
    this.MateriaService.delete(id).subscribe({
      next:()=>{
        this.getMaterias();
      }
    })
  }
  editar(id:number){
    this.router.navigate(['/materias/editar', id]);
  }
}
