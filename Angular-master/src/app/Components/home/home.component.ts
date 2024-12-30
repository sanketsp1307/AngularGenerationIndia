import { Component } from '@angular/core';
import { MainnavbarComponent } from "../mainnavbar/mainnavbar.component";
import { AboutComponent } from '../about/about.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LoginComponent } from '../login/login.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, MainnavbarComponent, HomeComponent, AboutComponent, RouterLink, SignUpComponent,LoginComponent,RouterOutlet, ContactComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
