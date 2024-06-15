import { ChangeDetectorRef, Component } from '@angular/core';
import { ProgramacionType } from 'src/app/api-client/api.types';
import { ProgramacionService } from 'src/app/api-client/programacion.service';

@Component({
  selector: 'app-programacion-list',
  templateUrl: './programacion-list.component.html',
  styleUrls: ['./programacion-list.component.scss']
})
export class ProgramacionListComponent {
  public programaciones: ProgramacionType[] = [] ;

  constructor(
    readonly ProgramacionService: ProgramacionService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.getprogramacion();
  }

  getprogramacion(){
    this.ProgramacionService.getAll().subscribe({
      next:(res)=>{
        this.programaciones = res
        this.cdr.detectChanges();
      }
    })
  }
  eliminar(id:number){
    this.ProgramacionService.delete(id).subscribe({
      next:()=>{
        this.getprogramacion();
      }
    })
  }
}
