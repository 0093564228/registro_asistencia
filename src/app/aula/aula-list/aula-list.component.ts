import { ChangeDetectorRef, Component } from '@angular/core';
import { AulaType } from 'src/app/api-client/api.types';
import { AulaService } from 'src/app/api-client/aula.service';

@Component({
  selector: 'app-aula-list',
  templateUrl: './aula-list.component.html',
  styleUrls: ['./aula-list.component.scss']
})
export class AulaListComponent {
  public aulas: AulaType[] = [] ;

  constructor(
    readonly AulaService: AulaService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.getaula();
  }

  getaula(){
    this.AulaService.getAll().subscribe({
      next:(res)=>{
        this.aulas = res
        this.cdr.detectChanges();
      }
    })
  }
  eliminar(id:number){
    this.AulaService.delete(id).subscribe({
      next:()=>{
        this.getaula();
      }
    })
  }
}
