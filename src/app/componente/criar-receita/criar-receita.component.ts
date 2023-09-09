import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Receitas } from 'src/app/model/receitas';
import { ListarReceitasService } from 'src/app/service/listar-receitas.service';

@Component({
  selector: 'app-criar-receita',
  templateUrl: './criar-receita.component.html',
  styleUrls: ['./criar-receita.component.css']
})
export class CriarReceitaComponent {
  receitaRegistro = {nameRecipe: "" ,tipo:"" , preparation:"", imagem:""  }
  ingredienteRegistro = {nameIngredient: 'Obrigatorio o nome' , value: 0 , quantityG : 0 , quantityKg : 0 , quantity : 0 , quantityCups: 0 
  ,quantitySpoons : 0}
 id: number | undefined;
 mostrarIngredientes: boolean = false;
 receita : Receitas =  new Receitas();
 usuarioLogado =localStorage.getItem("email");
 imagem: File | null = null;
 
 constructor(private receitasService : ListarReceitasService , private router: Router ){}
 
 

 onImagemSelecionada(event: any) {
  const fileList: FileList = event.target.files;
  if (fileList.length > 0) {
    this.imagem = fileList[0];
  }
}


  salvarReceita() {
    if(!this.imagem){
      this.receitasService.salvarReceitaSemImg(this.receitaRegistro , this.usuarioLogado ).subscribe(data=>{
          this.id = data.id;
        alert('Agora logo abaixo adicione os ingredientes desta receita')
     this.mostrarIngredientes = true;
     });
}
    else{


    const formData = new FormData();
    formData.append('nameRecipe', this.receitaRegistro.nameRecipe);
    formData.append('tipo', this.receitaRegistro.tipo);
    formData.append('preparation', this.receitaRegistro.preparation);
     if (this.imagem) {
      formData.append('imagem', this.imagem);
    }

  


    this.receitasService.salvarReceita(formData , this.usuarioLogado ).subscribe(data=>{

      

       this.id = data.id;
       console.info(this.id);
    });
    alert('Agora logo abaixo adicione os ingredientes desta receita')
    this.mostrarIngredientes = true;
  }
  }
  salvarIngrediente(){

    if (!this.ingredienteRegistro.nameIngredient || this.ingredienteRegistro.nameIngredient.trim() === '') {
      alert('Por favor, insira um nome de ingrediente válido antes de salvar.');
      return; 
    }
    this.receitasService.salvarIngrediente(this.ingredienteRegistro , this.id).subscribe(data=>{
      console.info(this.id);
   });
   alert('Ingrediente salvo com sucesso , adicione o restante se necessario , senao clique em finalizar')

  }


  finalizar() {
    this.router.navigate(['/home']);
  }


  verificarQuantidadeCups(value: number) {
    if (value === null) {
      this.ingredienteRegistro.quantityCups = 0;
    }
  }
  verificarQuantidadecolher(value: number) {
    if (value === null) {
      this.ingredienteRegistro.quantitySpoons = 0;
    }
  }
  verificarQuantidadeUnitaria(value: number) {
    if (value === null) {
      this.ingredienteRegistro.quantity = 0;
    }
  }
  verificarQuantidadeG(value: number) {
    if (value === null) {
      this.ingredienteRegistro.quantityG = 0;
    }
  }
  verificarQuantidadeKg(value: number) {
    if (value === null) {
      this.ingredienteRegistro.quantityKg = 0;
    }
  }
  verificarvalue(value: number) {
    if (value === null) {
      this.ingredienteRegistro.value = 0;
    }
  }



}