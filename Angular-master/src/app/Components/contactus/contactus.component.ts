import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize the form
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });

    emailjs.init('2QiB59GhmTuXXHvjq');
  }
    sendFeedback() {
    if (this.form.valid) {
      const feedbackData = {
        from_name: this.form.value.name,
        reply_to: this.form.value.email,
        message: this.form.value.message,
      };

      emailjs.send('service_febwg8e','template_80zg0sr',feedbackData)
        .then(
          (response) => {
            console.log('Feedback submitted successfully!', response);
            alert('Thank you for your feedback!');
            this.form.reset();
          },
          (error) => {
            console.error('Failed to send feedback:', error);
            alert('Oops! Something went wrong.');
          }
        );
    } else {
      console.error('Form is invalid');
      alert('Please fill in all the fields correctly.');
    }
  }

  onExUser(pageName: string): void {
    this.router.navigate([`${LoginComponent}`]);
  }

  onNewUser(pageName: string): void {
    this.router.navigate([`${SignUpComponent}`]);
  }
}