import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { facultadDTO } from "./api.types";

@Injectable({
  providedIn: 'root',
})
export class FacultadService {
  private basePath = `http://18.217.180.20/api/facultades`;

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<facultadDTO[]> {
    return this.http.get<facultadDTO[]>(`${this.basePath}`);
  }

  getBy(id: number): Observable<facultadDTO> {
    return this.http.get<facultadDTO>(`${this.basePath}/${id}`);
  }

  create(facultad: facultadDTO): Observable<facultadDTO[]> {
    return this.http.post<facultadDTO[]>(`${this.basePath}/create`, facultad);
  }

  update(facultad: facultadDTO): Observable<facultadDTO> {
    return this.http.put<facultadDTO>(
      `${this.basePath}/update/${facultad.id}`,
      facultad
    );
  }

  delete(id: number): Observable<facultadDTO> {
    return this.http.delete<facultadDTO>(`${this.basePath}/${id}`);
  }
}
