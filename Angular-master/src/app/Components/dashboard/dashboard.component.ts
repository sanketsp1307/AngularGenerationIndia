import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { NavbarService } from '../../Services/navbar.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit,OnDestroy{
  constructor(private navbarservice:NavbarService){

  }
  ngOnDestroy(): void {
      this.navbarservice.display();
  }

  ngOnInit(): void {
    this.navbarservice.hide();
  }

}
