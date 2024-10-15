import { Injectable } from '@angular/core';
import { Client } from './models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  client: Client[] = [
    new Client(1, 'John', 'Walmart', 'john@gmail.com', 18008881234 ),
    new Client(2, 'Jane', 'Aldi', 'jane@gmail.com', 18008881235 ),
    new Client(3, 'Mary', 'Google', 'mary@gmail.com', 18008881634 ),
    new Client(4, 'Angeles', 'Sand Canyon Co.', 'angeles@gmail.com', 18018881234 ),
    new Client(5, 'Yoni', 'Apple', 'yoni@gmail.com', 18008887234 )

  ];

  getClient(){
    return this.client;
  }

  constructor() { }
}
