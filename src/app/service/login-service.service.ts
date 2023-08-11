import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  

  constructor(private http : HttpClient , private router: Router) {
   

  }
  login(user: any) {
    return this.http.post(AppConstants.baseLoginTarget, user , { responseType: 'text' }).subscribe(
      (data: any) =>{
        var token = data;
        localStorage.setItem("token", token);
        console.info(localStorage.getItem("token"));
        this.router.navigate(['home']);
      },
      error => {
      
        console.error("Erro ao fazer login ");
        alert('Acesso Negado!')
       }
      
    );
  }
  
  salvarUsuario(user:any): Observable<any> {
		return this.http.post<any>(AppConstants.baseRegistrarTarget, user);
	}

  }

