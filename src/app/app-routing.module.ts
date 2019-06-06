import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PadreComponent } from './Componentes/padre/padre.component';
import {HijoComponent} from './Componentes/hijo/hijo.component';

const routes: Routes = [
  {path: '', redirectTo: 'padre', pathMatch: 'full'},
  {path: 'padre', component: PadreComponent, children: [
    {path: 'hijo', component: HijoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
