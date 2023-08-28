import { Component } from '@angular/core';
import { ListarReceitasService } from 'src/app/service/listar-receitas.service';
@Component({
  selector: 'app-receitas-sem-gluten-ia',
  templateUrl: './receitas-sem-gluten-ia.component.html',
  styleUrls: ['./receitas-sem-gluten-ia.component.css']
})
export class ReceitasSemGlutenIaComponent {

  constructor(private receitasService : ListarReceitasService ){}

  ing: string = '';
  resposta : any = '';

  submitForm() {
    if (this.ing) {
      
      this.receitasService.pegarReceitaSemGlutenIa(this.ing).subscribe(data =>{
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
