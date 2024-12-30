import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactusComponent } from '../contactus/contactus.component';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from "../sign-up/sign-up.component";
import { MainnavbarComponent } from '../mainnavbar/mainnavbar.component';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ContactusComponent, SignUpComponent,MainnavbarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
    current:string='';


    change(val:string){
      this.current=val;
    }
}
