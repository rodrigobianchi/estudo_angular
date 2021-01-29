import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  private url = environment.host + "usuario"

  public salvar(usuario: Usuario):Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario)
  }

  public getUsuario(): Usuario {
    let usuario = new Usuario()
    usuario.nome = "Rodrigo";
    usuario.email = "rodrigoluizbianchi@gmail.com";

    return usuario;
  }

  public listarUsuario():Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url) 
  }

  public deletar(id: string): Observable<any>{
    return this.http.delete(this.url + "/" + id)
  }
}
