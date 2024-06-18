import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { AsistenciaType } from "./api.types";

@Injectable({
  providedIn: "root",
})
export class AsistenciaService {
  private basePath = `http://18.217.180.20/api/asistencias`

  constructor(
    private readonly http: HttpClient,
  ) {}

  getAll(): Observable<AsistenciaType[]> {
    return this.http.get<AsistenciaType[]>(`${this.basePath}`);
  }

  getBy(id: number): Observable<AsistenciaType[]> {
    return this.http.get<AsistenciaType[]>(`${this.basePath}/${id}`);
  }

  create(asistencia: AsistenciaType): Observable<AsistenciaType[]> {
    return this.http.post<AsistenciaType[]>(`${this.basePath}/create`, asistencia);
  }

  update(asistencia: AsistenciaType): Observable<AsistenciaType> {
    return this.http.put<AsistenciaType>(`${this.basePath}/update/${asistencia.id}`, asistencia);
  }

  delete(id: number): Observable<AsistenciaType> {
    return this.http.delete<AsistenciaType>(`${this.basePath}/${id}`);
  }
}
