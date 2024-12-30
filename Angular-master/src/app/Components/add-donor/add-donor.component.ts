import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { NavbarService } from '../../Services/navbar.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Client } from '../../Class/Client';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-donor',
  imports: [NavbarComponent,CommonModule,FormsModule,AddDonorComponent,ReactiveFormsModule,HttpClientModule],
  templateUrl: './add-donor.component.html',
  styleUrl: './add-donor.component.scss'
})
export class AddDonorComponent {

  
    constructor(private navbarservice:NavbarService,private http:HttpClient){
    
      }
      ngOnDestroy(): void {
          this.navbarservice.display();
      }
    
      ngOnInit(): void {
        this.navbarservice.hide();
      }

      donorForm = new FormGroup({
        donorName: new FormControl('', [Validators.required]),
        donorGender: new FormControl('', [Validators.required]),
        donorDob: new FormControl('', [Validators.required]),
        donorMobileNo: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
        donorEmailId: new FormControl('', [Validators.required, Validators.email]),
        donorBloodGroup: new FormControl('', [Validators.required]),
        donorAddress: new FormControl('', [Validators.required]),
        donorBloodUnit: new FormControl('', [Validators.required, Validators.min(1)]),
      });

      // Form Submission
      handleSubmit(): void {
        if (this.donorForm.valid) {
          // Extract form data
          const donorData = this.donorForm.value;
    
          // Send data to the backend
          this.http.post('http://localhost:8080/donor/add', donorData).subscribe({
            next: (response) => {
              console.log('Donor added successfully:', response);
              alert('Donor added successfully:');
              this.donorForm.reset(); // Reset the form after successful submission
            },
            error: (error) => {
              console.error('Error adding donor:', error);
              alert('Failed to add donor. Please try again.');
            },
          });
        } else {
          alert('Please fill all required fields correctly.');
        }
     
      }
}
