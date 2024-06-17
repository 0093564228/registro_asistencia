import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { ProgramacionType } from "./api.types";

@Injectable({
  providedIn: "root",
})
export class ProgramacionService {
  private basePath = `http://localhost:8080/api/programacion`

  constructor(
    private readonly http: HttpClient,
  ) {}

  getAll(): Observable<ProgramacionType[]> {
    return this.http.get<ProgramacionType[]>(`${this.basePath}`);
  }

  getBy(id: number): Observable<ProgramacionType> {
    return this.http.get<ProgramacionType>(`${this.basePath}/${id}`);
  }
  
  create(programacion: ProgramacionType): Observable<ProgramacionType> {
    return this.http.post<ProgramacionType>(`${this.basePath}/create`, programacion);
  }

  update(programacion: ProgramacionType): Observable<ProgramacionType> {
    return this.http.put<ProgramacionType>(`${this.basePath}/update/${programacion.id}`, programacion);
  }

  delete(id: number): Observable<ProgramacionType> {
    return this.http.delete<ProgramacionType>(`${this.basePath}/${id}`);
  }
}