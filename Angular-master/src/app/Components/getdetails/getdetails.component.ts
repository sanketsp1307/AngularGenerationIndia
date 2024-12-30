import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Auth } from '../../auth';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-getdetails',
  imports: [FormsModule, CommonModule, NavbarComponent],
  templateUrl: './getdetails.component.html',
  styleUrl: './getdetails.component.scss'
})
export class GetdetailsComponent implements OnInit{

  

  getList:Auth[]=[];
  current:string='';
  constructor(private auth:AuthService){}

  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    this.auth.gets().subscribe((res:any)=>{
      this.getList=res;

    })
    

  }

  change(val:string){
      this.current=val;
  }

  


  


}
