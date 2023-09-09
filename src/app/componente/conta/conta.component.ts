import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit{
  user: User = new User();
  usuarioLogado =localStorage.getItem("email");
  

  constructor(private userService : UserService ){};
  ngOnInit(): void {
    
    this.userService.buscarUsuario(this.usuarioLogado).subscribe(data=>{
    this.user = data;
    console.info(this.user.id);

    });

  }

  salvarAlteracoes() {
    this.userService.attUsuario(this.user).subscribe(data=>{
      alert('atualizado com sucesso')
    });
  };


}
