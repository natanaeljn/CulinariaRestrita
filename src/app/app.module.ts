import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'
import {RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorModule } from './service/header-interceptor.service';
import { ReceitasComponent } from './componente/receitas/receitas/receitas.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReceitasSemGlutenComponent } from './componente/receitas-sem-gluten/receitas-sem-gluten.component';
import { ReceitasSemLactoseComponent } from './componente/receitas-sem-lactose/receitas-sem-lactose.component';
import { HeaderComponent } from './header/header.component';
import { ReceitasSemGlutenIaComponent } from './componente/receitas-sem-gluten-ia/receitas-sem-gluten-ia.component';
import { ReceitasSemLactoseIaComponent } from './componente/receitas-sem-lactose-ia/receitas-sem-lactose-ia.component';
import { ContaComponent } from './componente/conta/conta.component';
import { CriarReceitaComponent } from './componente/criar-receita/criar-receita.component';
import { ListarReceitaComponent } from './componente/listar-receita/listar-receita.component';

export const appRouters: Routes=[
  {path : 'home' , component : HomeComponent},
  {path : 'login', component : LoginComponent},
  {path : '', component : LoginComponent},
  {path: 'listarReceitas' , component : ReceitasComponent},
  {path:'listarReceitasSemGluten', component:ReceitasSemGlutenComponent},
  {path:'listarReceitasSemLactose', component:ReceitasSemLactoseComponent},
  {path:'receitaGlutenIa', component:ReceitasSemGlutenIaComponent},
  {path:'receitaLactoseIa' , component:ReceitasSemLactoseIaComponent},
  {path:'conta' , component: ContaComponent},
  {path:'criarReceita' , component: CriarReceitaComponent},
  {path:'listarReceita/:idRec' , component: ListarReceitaComponent}
];

export const routes : ModuleWithProviders<any> = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ReceitasComponent,
    ReceitasSemGlutenComponent,
    ReceitasSemLactoseComponent,
    HeaderComponent,
    ReceitasSemGlutenIaComponent,
    ReceitasSemLactoseIaComponent,
    ContaComponent,
    CriarReceitaComponent,
    ListarReceitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
