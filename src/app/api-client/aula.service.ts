import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { AulaType } from "./api.types";

@Injectable({
  providedIn: 'root',
})
export class AulaService {
  private basePath = `http://18.217.180.20/api/aulas`;

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<AulaType[]> {
    return this.http.get<AulaType[]>(`${this.basePath}`);
  }

  getBy(id: number): Observable<AulaType> {
    return this.http.get<AulaType>(`${this.basePath}/${id}`);
  }

  create(aula: AulaType): Observable<AulaType> {
    return this.http.post<AulaType>(`${this.basePath}/create`, aula);
  }

  update(aula: AulaType): Observable<AulaType> {
    return this.http.put<AulaType>(`${this.basePath}/update/${aula.id}`, aula);
  }

  delete(id: number): Observable<AulaType> {
    return this.http.delete<AulaType>(`${this.basePath}/${id}`);
  }
}
