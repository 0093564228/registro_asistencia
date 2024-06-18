import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { MateriaType } from "./api.types";

@Injectable({
  providedIn: 'root',
})
export class MateriaService {
  private basePath = `http://18.217.180.20/api/materias`;

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<MateriaType[]> {
    return this.http.get<MateriaType[]>(`${this.basePath}`);
  }

  getBy(id: number): Observable<MateriaType> {
    return this.http.get<MateriaType>(`${this.basePath}/${id}`);
  }

  create(materia: MateriaType): Observable<MateriaType[]> {
    return this.http.post<MateriaType[]>(`${this.basePath}/create`, materia);
  }

  update(materia: MateriaType): Observable<MateriaType> {
    return this.http.put<MateriaType>(
      `${this.basePath}/update/${materia.id}`,
      materia
    );
  }

  delete(id: number): Observable<MateriaType> {
    return this.http.delete<MateriaType>(`${this.basePath}/${id}`);
  }
}
