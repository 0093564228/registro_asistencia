import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarreraType } from 'src/app/api-client/api.types';
import { CarreraService } from 'src/app/api-client/carrera.service';

@Component({
  selector: 'app-carrera-list',
  templateUrl: './carrera-list.component.html',
  styleUrls: ['./carrera-list.component.scss']
})
export class CarreraListComponent implements OnInit {
  public carreras: CarreraType[];

  constructor(
    readonly carreraService: CarreraService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.getCarreras();
  }

  getCarreras(){
    this.carreraService.getAll().subscribe({
      next:(res)=>{
        this.carreras = res
        this.cdr.detectChanges();
      }
    })
  }
  eliminar(id:number){
    this.carreraService.delete(id).subscribe({
      next:()=>{
        this.getCarreras();
      }
    })
  }
  editar(id:number){
    this.router.navigate(['/carreras/editar', id]);
  }
}
