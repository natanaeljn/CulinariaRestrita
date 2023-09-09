import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';
import { Receitas } from '../model/receitas';

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

   salvarReceita(receita : any ,  email : any ):Observable<any>{
    return this.http.post<any>(AppConstants.salvarReceita+email,receita)
   }

   salvarIngrediente(ingrediente : any , idReceita: any):Observable<any>{
    return this.http.post<any>(AppConstants.salvarIngrediente+idReceita, ingrediente)
   }
   pegarImagem(nomeImg : any): Observable<any>{
    return this.http.get<any>(AppConstants.procurarImg+ nomeImg ,{ responseType: 'blob' as 'json' })
   }

   carregarImagensParaObjetos(objetos: any[], propriedadeImagem: string) {
    objetos.forEach((objeto) => {
      this.pegarImagem(objeto[propriedadeImagem]).subscribe((imagem) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          objeto.image = e.target?.result as string;
        };
        reader.readAsDataURL(imagem);
      });
    });
  }

  carregarImagemParaObjetoUnico(objeto: any, propriedadeImagem: string) {
    this.pegarImagem(objeto[propriedadeImagem]).subscribe((imagem) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        objeto.image = e.target?.result as string;
      };
      reader.readAsDataURL(imagem);
    });
  }
 

  carregarReceitasParaPagina(page: number, receitas: any[], total: number) {
    this.pegarTodasAsReceitasPagina(page - 1).subscribe(data => {
      receitas.length = 0; 
      receitas.push(...data.content); 
      total = data.totalElements;
      this.carregarImagensParaObjetos(receitas, 'image');
    });
  }
  pegarReceita(recipeId : any):Observable<any>{
    return this.http.get<any>(AppConstants.pegarReceita+ recipeId )
  }
  pegarIngredientes(recipeId: Number):Observable<any>{
    return this.http.get<any>(AppConstants.pegarIngredientes+ recipeId )
  }

  salvarReceitaSemImg(receita : any ,  email : any ):Observable<any>{
    return this.http.post<any>(AppConstants.salvarReceitaSemImagem+email,receita)
   }

}
