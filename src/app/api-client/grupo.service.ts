import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { GrupoMateriaType } from "./api.types";

@Injectable({
  providedIn: "root",
})
export class GrupoMateriaService {
  private basePath = `http://localhost:8080/api/grupos`

  constructor(
    private readonly http: HttpClient,
  ) {}

  getAll(): Observable<GrupoMateriaType[]> {
    return this.http.get<GrupoMateriaType[]>(`${this.basePath}`);
  }

  getBy(id: number): Observable<GrupoMateriaType> {
    return this.http.get<GrupoMateriaType>(`${this.basePath}/${id}`);
  }
  
  create(grupo: GrupoMateriaType): Observable<GrupoMateriaType[]> {
    return this.http.post<GrupoMateriaType[]>(`${this.basePath}/create`, grupo);
  }

  update(grupo: GrupoMateriaType): Observable<GrupoMateriaType> {
    return this.http.put<GrupoMateriaType>(`${this.basePath}/update/${grupo.id}`, grupo);
  }

  delete(id: number): Observable<GrupoMateriaType> {
    return this.http.delete<GrupoMateriaType>(`${this.basePath}/${id}`);
  }
}