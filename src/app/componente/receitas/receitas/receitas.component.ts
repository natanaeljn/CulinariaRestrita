import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Receitas } from 'src/app/model/receitas';
import { ListarReceitasService } from 'src/app/service/listar-receitas.service';


@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit{


  receitas: Observable<Receitas[]> | any;
  p: string|number|undefined;
  total : Number|any;    

  constructor(private receitasService : ListarReceitasService ){}

  ngOnInit(): void {
    this.receitasService.pegarTodasAsReceitas().subscribe(data =>{
      this.receitas = data.content;
      this.total = data.totalElements
  });
  }

  carregarPagina(page: any){
    this.receitasService.pegarTodasAsReceitasPagina(page -1).subscribe(data =>{
      this.receitas = data.content;
      this.total = data.totalElements
  });
  }

}
