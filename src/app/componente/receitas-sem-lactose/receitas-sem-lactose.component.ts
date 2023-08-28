import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Receitas } from 'src/app/model/receitas';
import { ListarReceitasService } from 'src/app/service/listar-receitas.service';
@Component({
  selector: 'app-receitas-sem-lactose',
  templateUrl: './receitas-sem-lactose.component.html',
  styleUrls: ['./receitas-sem-lactose.component.css']
})
export class ReceitasSemLactoseComponent implements OnInit{

  receitas: Observable<Receitas[]> | any;
  p: string|number|undefined;
  total : Number|any;    

  constructor(private receitasService : ListarReceitasService ){}

  ngOnInit(): void {
    this.receitasService.pegarTodasAsReceitasSemLactose().subscribe(data =>{
      this.receitas = data.content;
      this.total = data.totalElements
  });
  }

  carregarPagina(page: any){
    this.receitasService.pegarTodasAsReceitasPaginaGluten(page -1).subscribe(data =>{
      this.receitas = data.content;
      this.total = data.totalElements
  });
  }

}

