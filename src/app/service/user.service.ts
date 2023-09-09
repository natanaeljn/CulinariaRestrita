import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usuarioLogado: any;

  constructor(private http : HttpClient , private router: Router) {}

  setarUsuarioLogado(user: any) {
    this.usuarioLogado = user;
  }

  pegarUsuarioLogado(): any {
    console.info('teste usuario logadfo' +this.usuarioLogado);
    return this.usuarioLogado;
  }

  limparUsuarioLogado() {
    this.usuarioLogado = null;
  }
  buscarUsuario(email:any): Observable<any> {
    return this.http.get<any>(AppConstants.buscarUsuario + email)
   }
   attUsuario(user:any): Observable<any> {
    return this.http.post<any>(AppConstants.attUsuario,user)
   }

}