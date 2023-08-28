import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class ListarReceitasService {

  constructor(private http: HttpClient) { }

  pegarTodasAsReceitas(): Observable<any> {
    return this.http.get<any>(AppConstants.baseTodasAsReceitas)
   }

   pegarTodasAsReceitasPagina(page:any): Observable<any> {
    return this.http.get<any>(AppConstants.baseTodasAsReceitasPage + page)
   }

   pegarTodasAsReceitasSemGluten(): Observable<any> {
    return this.http.get<any>(AppConstants.baseTodasAsReceitasSemGluten + 'g');
   }

   pegarTodasAsReceitasPaginaGluten(page:any): Observable<any> {
    return this.http.get<any>(AppConstants.baseTodasAsReceitasSemGlutenPage + page)
   }

   pegarTodasAsReceitasSemLactose(): Observable<any> {
    return this.http.get<any>(AppConstants.baseTodasAsReceitasSemGluten + 'l');
   }
   pegarTodasAsReceitasPaginaLactose(page:any): Observable<any> {
    return this.http.get<any>(AppConstants.baseTodasAsReceitasSemGlutenPage + page)
   }

   pegarReceitaSemGlutenIa(ing:any): Observable<string> {
    return this.http.get<any>(AppConstants.receitaGlutenIa + ing, { responseType: 'text' as 'json' })
   }
   pegarReceitaSemLactoseIa(ing:any): Observable<string> {
    return this.http.get<any>(AppConstants.receitaLactoseIa + ing, { responseType: 'text' as 'json' })
   }
}
