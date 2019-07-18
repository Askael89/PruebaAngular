import { Injectable } from '@angular/core';
import * as io from "socket.io-client";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  url: string = "https://socket-numbers.herokuapp.com";
  public socket: SocketIOClient.Socket;
  constructor() { 
    this.socket = io(this.url);
  }

  onNewMessage(){
    this.socket.connect();
    return Observable.create(observer => {
      this.socket.on('numeros', msg => {
        observer.next(msg);
      })
    });
  }
}
