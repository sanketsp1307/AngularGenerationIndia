import { routes } from './../../app.routes';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router, RouterLink, RouterOutlet, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { MainnavbarComponent } from '../mainnavbar/mainnavbar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports:[SignUpComponent,MainnavbarComponent,ReactiveFormsModule,NavbarComponent,RouterLink,RouterOutlet,FormsModule,CommonModule,DashboardComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], // Corrected plural 'styleUrls'
})
export class LoginComponent {

  
  private apiUrl = 'http://localhost:8080/registeration/get'; // Backend URL

  userName = ''; // Placeholder for username input
  emailId = ''; // Placeholder for email input
  password = ''; // Placeholder for password input
  resultMessage = ''; // Placeholder for messages to display to the user
form: any;

  constructor(private http: HttpClient, private router: Router) {}

  // Method to check if the user exists
  checkUserExists(emailId: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('emailId', emailId) // Ensure keys match the backend API
      .set('password', password);

    return this.http.get<any>(this.apiUrl, { params});
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  // Method to handle login
  checkUser() {
    this.checkUserExists(this.emailId, this.password).subscribe(
      (response) => {
        console.log('Login successful! Redirecting...');
        setTimeout(() => this.router.navigate(['/dashboard']), 1000);
      },
      (error) => {
        if (error.status === 404) {
          this.resultMessage = 'User not found. Please check your email.';
        } else if (error.status === 401) {
          this.resultMessage = 'Invalid password. Please try again.';
        } else {
          this.resultMessage = 'Error checking user. Please try again later.';
        }
      }
    );
  }
  
}
