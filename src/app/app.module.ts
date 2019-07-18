import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { LoginComponent } from './Componentes/login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RequestService } from './Services/Requests/request.service';
import { HeremapComponent } from './Componentes/heremap/heremap.component';
import { ExcelService } from './Services/excelservice/excel.service';
import { SocketService } from './Services/socketService/socket.service';
import { ChartsModule } from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    HeremapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [
    RequestService,
    ExcelService,
    SocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
