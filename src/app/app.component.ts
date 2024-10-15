import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Client } from './models/client';
import { ClientService } from './client.service';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, DashboardComponent 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
  
})
export class AppComponent {
  title = 'Arch CRM';
  name = 'Anna';

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

  

  constructor (private clientService: ClientService) {} 

ngOnInit():void{
  this.client = this.clientService.getClient();
 
 }
}
