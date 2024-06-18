import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { LicenciaType } from "./api.types";

@Injectable({
  providedIn: 'root',
})
export class LicenciaService {
  private basePath = `http://18.217.180.20/api/licencias`;

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<LicenciaType[]> {
    return this.http.get<LicenciaType[]>(`${this.basePath}`);
  }

  getBy(id: number): Observable<LicenciaType> {
    return this.http.get<LicenciaType>(`${this.basePath}/${id}`);
  }

  create(licencia: LicenciaType): Observable<LicenciaType[]> {
    return this.http.post<LicenciaType[]>(`${this.basePath}/create`, licencia);
  }

  update(licencia: LicenciaType): Observable<LicenciaType> {
    return this.http.put<LicenciaType>(
      `${this.basePath}/update/${licencia.id}`,
      licencia
    );
  }

  delete(id: number): Observable<LicenciaType> {
    return this.http.delete<LicenciaType>(`${this.basePath}/${id}`);
  }
}
