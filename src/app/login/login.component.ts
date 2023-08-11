import { Component } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {email:'' , password:''};
  userRegistro = {name: "" ,emailRegister:"" , passwordRegister:"" , role:"USER" }
  apiResposta = "";
  constructor(private loginService: LoginServiceService ){};
  
  public login(){
    this.loginService.login(this.user);
     
    };
    public registrar(){
      
      this.loginService.salvarUsuario(this.userRegistro).subscribe(data =>{
        console.info("ok");
        alert('Registrado com Sucesso')
    });
      };
      

  }


