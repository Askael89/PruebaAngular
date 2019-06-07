import { Injectable } from '@angular/core';
import { LoginComponent } from 'src/app/Componentes/login/login.component';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})


export class RequestService {

  constructor(private httpClient: HttpClient) { }

  url = environment;

    // POST User from given data
  loginUser(User){
    return this.httpClient.post(`${this.url.url}api/chat/login`,User)
  }
}

