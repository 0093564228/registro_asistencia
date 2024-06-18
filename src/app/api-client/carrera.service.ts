import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { CarreraType } from "./api.types";

@Injectable({
  providedIn: 'root',
})
export class CarreraService {
  private basePath = `http://18.217.180.20/api/carreras`;

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<CarreraType[]> {
    return this.http.get<CarreraType[]>(`${this.basePath}`);
  }

  getBy(id: number): Observable<CarreraType> {
    return this.http.get<CarreraType>(`${this.basePath}/${id}`);
  }

  create(carrera: CarreraType): Observable<CarreraType[]> {
    return this.http.post<CarreraType[]>(`${this.basePath}/create`, carrera);
  }

  update(carrera: CarreraType): Observable<CarreraType> {
    return this.http.put<CarreraType>(
      `${this.basePath}/update/${carrera.id}`,
      carrera
    );
  }

  delete(id: number): Observable<CarreraType> {
    return this.http.delete<CarreraType>(`${this.basePath}/${id}`);
  }
}
