import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , FormControl,
    FormGroup
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'Arch CRM';
  name = 'Anna';

 /* clientUserProfile = new FormGroup ({
    firstName: new FormControl (''),
    lastName : new FormControl(''),
    email : new FormControl(''),
    address : new FormControl('')

  });

  onSubmit() {
    console.log(this.clientUserProfile.value)
  } */
} 
