import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Receitas } from 'src/app/model/receitas';
import { ListarReceitasService } from 'src/app/service/listar-receitas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  receitas: Observable<Receitas[]> | any;
  p: string|number|undefined;
  total : Number|any;    

  constructor(private receitasService : ListarReceitasService , private router: Router){}

  ngOnInit(): void {
    this.receitasService.pegarTodasAsReceitas().subscribe(data =>{
      this.receitas = data.content;
      this.total = data.totalElements
      this.receitasService.carregarImagensParaObjetos(this.receitas, 'image');
        });
      
    }

  carregarPagina(page: any){
    this.receitasService.carregarReceitasParaPagina(page,this.receitas , this.total);
  }
  verReceita(receitaId: number) {
      
    this.router.navigate(['/listarReceita', receitaId]);
  }
}
