import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from "./Componentes/inicio/inicio.component";
import { LoginComponent } from './Componentes/login/login.component';
import { HeremapComponent } from './Componentes/heremap/heremap.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent, children: [
    {path: 'login', component: LoginComponent},
    {path: 'mapa', component: HeremapComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
