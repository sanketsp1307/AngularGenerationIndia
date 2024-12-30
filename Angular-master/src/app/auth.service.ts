import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddDonorComponent } from './Components/add-donor/add-donor.component';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }


  private baseUrl="http://localhost:8080/donor/get"

  gets():Observable<Auth[]>{
      return this.httpClient.get<Auth[]>(`${this.baseUrl}`);
  }
}
