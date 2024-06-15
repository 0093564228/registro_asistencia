import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { UsuarioType } from "./api.types";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  private basePath = `http://localhost:8080/api/users`

  constructor(
    private readonly http: HttpClient,
  ) {}

  getAll(): Observable<UsuarioType[]> {
    return this.http.get<UsuarioType[]>(`${this.basePath}`);
  }

  getBy(id: number): Observable<UsuarioType> {
    return this.http.get<UsuarioType>(`${this.basePath}/${id}`);
  }
  
  create(usuario: UsuarioType): Observable<UsuarioType[]> {
    return this.http.post<UsuarioType[]>(`${this.basePath}/create`, usuario);
  }

  update(usuario: UsuarioType): Observable<UsuarioType> {
    return this.http.put<UsuarioType>(`${this.basePath}/update/${usuario.id}`, usuario);
  }

  delete(id: number): Observable<UsuarioType> {
    return this.http.delete<UsuarioType>(`${this.basePath}/${id}`);
  }
}