import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Ingredients } from 'src/app/model/ingredients';
import { Receitas } from 'src/app/model/receitas';
import { ListarReceitasService } from 'src/app/service/listar-receitas.service';

@Component({
  selector: 'app-listar-receita',
  templateUrl: './listar-receita.component.html',
  styleUrls: ['./listar-receita.component.css']
})
export class ListarReceitaComponent implements OnInit{
  ingredientes: Observable<Ingredients[]> | any;
  receita : Receitas = new Receitas();
  recipeId: Number = 0;

  constructor(private receitaService: ListarReceitasService,private router: ActivatedRoute){}


  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
     const recipeIdForm = params.get('idRec');
     
      if (recipeIdForm) {
        const numeroInteiro = parseInt(recipeIdForm, 10);
        this.recipeId = numeroInteiro;
      }
    });

    this.receitaService.pegarReceita(this.recipeId).subscribe(data =>{
      this.receita = data;
      console.info(this.receita.nameRecipe);
      this.receitaService.carregarImagemParaObjetoUnico(this.receita, 'image');
})

this.receitaService.pegarIngredientes(this.recipeId).subscribe(data =>{
  this.ingredientes= data;
  })
   




    



  }

}
