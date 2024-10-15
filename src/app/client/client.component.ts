import { Component } from '@angular/core';
import { Client } from '../models/client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {

 client: Client[]=[];

  showClient = true;

  categories = [
    {title: "Design", progress: "started"},
    {title: "Layout", progress: "Done"}
  ]

constructor (private clientService: ClientService) {} 

ngOnInit():void{
  this.client = this.clientService.getClient();
}

}
