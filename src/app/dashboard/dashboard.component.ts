import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../models/client';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  client: Client[] = []

  constructor (private clientService: ClientService) {} 

ngOnInit():void{
  this.client = this.clientService.getClient();
}


}
