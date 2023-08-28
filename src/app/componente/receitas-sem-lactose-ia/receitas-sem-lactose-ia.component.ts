import { Component } from '@angular/core';
import { ListarReceitasService } from 'src/app/service/listar-receitas.service';
@Component({
  selector: 'app-receitas-sem-lactose-ia',
  templateUrl: './receitas-sem-lactose-ia.component.html',
  styleUrls: ['./receitas-sem-lactose-ia.component.css']
})
export class ReceitasSemLactoseIaComponent {

  constructor(private receitasService : ListarReceitasService ){}

  ing: string = '';
  resposta : any = '';

  submitForm() {
    if (this.ing) {
      
      this.receitasService.pegarReceitaSemLactoseIa(this.ing).subscribe(data =>{
        this.resposta = data;
        
    });
      
    } else {
      alert('Preencha todos os campos!');
    }
  }

  limparReceita(){
    this.resposta = "";
  }
}