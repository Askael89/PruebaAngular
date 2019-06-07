import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from "./Componentes/inicio/inicio.component";
import { LoginComponent } from './Componentes/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio/login', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent, children: [
    {path: 'login', component: LoginComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
