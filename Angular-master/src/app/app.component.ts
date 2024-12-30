import { Component } from '@angular/core';
import {RouterLink ,RouterOutlet } from '@angular/router';
import { AddDonorComponent } from './Components/add-donor/add-donor.component';
import { HomeComponent } from "./Components/home/home.component";
import { LoginComponent } from "./Components/login/login.component";
import { AboutComponent } from './Components/about/about.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { MainnavbarComponent } from "./Components/mainnavbar/mainnavbar.component";
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AuthService } from './auth.service';
import { DeleteDonorComponent } from './Components/delete-donor/delete-donor.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent, LoginComponent,DeleteDonorComponent, AboutComponent, SignUpComponent, ContactusComponent, RouterLink, MainnavbarComponent,NavbarComponent,AddDonorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MyRedbankProject';
  
  
}
