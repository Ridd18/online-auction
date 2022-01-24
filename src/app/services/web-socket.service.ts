import { Injectable } from '@angular/core';
import { Bid } from '../bid';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  webSocket: WebSocket;
  bidMessage: Bid[] = [];

  constructor() { }

  public openWebSocket()
  {
    this.webSocket = new WebSocket("ws://localhost:8090/auction/bid");

    this.webSocket.onopen = (event) => {
      console.log('open:', event)
    };


    this.webSocket.onmessage = (event) => {
     const Bid = JSON.parse(event.data);
     this.bidMessage.push(Bid);
    };


    this.webSocket.onclose = (event) => {
      console.log('close:', event)
    };

  }

  public sendBid(sendBid: Bid)
  {
    this.webSocket.send(JSON.stringify(sendBid));
  }

  public closeWebSocket()
  {
    this.webSocket.close();
  }
}
