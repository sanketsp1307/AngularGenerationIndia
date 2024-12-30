import { Component } from '@angular/core';
import { MainnavbarComponent } from '../mainnavbar/mainnavbar.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-sign-up',
  imports: [MainnavbarComponent,ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private http:HttpClient) {
    
    this.registerForm = this.fb.group({
      userName: ['', [Validators.required]],
      emailId: ['', [Validators.required]],
      name: ['', Validators.required],
      password: ['', [Validators.required]],
      cpassword: ['', Validators.required],
    }, { validators: this.passwordMatchValidator });
  }

  // Custom validator for matching passwords
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('cpassword')?.value
      ? null
      : { passwordMismatch: true };
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.http.post('http://localhost:8080/registeration/add',this.registerForm.value).subscribe({
        next: (response) => {
          alert('User registered successfully!');
          this.registerForm.reset();
        },
        error: (error) => {
          console.error('Error occurred while registering:', error);
          alert('Failed to register. Please try again.');
        },
      });
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
    
}
