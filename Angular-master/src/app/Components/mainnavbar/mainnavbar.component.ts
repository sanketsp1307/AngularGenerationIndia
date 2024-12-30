import { Component, OnDestroy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { AboutComponent } from '../about/about.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { NavbarService } from '../../Services/navbar.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mainnavbar',
  imports: [RouterOutlet, RouterLink, CommonModule, FormsModule],
  templateUrl: './mainnavbar.component.html',
  styleUrl: './mainnavbar.component.scss'
})
export class MainnavbarComponent implements OnDestroy{
  show:boolean=true;
  subscription:Subscription;
    constructor(private navbarservice:NavbarService){
      this.subscription = this.navbarservice.showNavbar.subscribe((value)=>{
        this.show=value;
      })

    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }


}
