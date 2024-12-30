import { Component } from '@angular/core';
import { NavbarService } from '../../Services/navbar.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { MainnavbarComponent } from "../mainnavbar/mainnavbar.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-donor',
  imports: [NavbarComponent, MainnavbarComponent,HttpClientModule,ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './delete-donor.component.html',
  styleUrl: './delete-donor.component.scss'
})
export class DeleteDonorComponent {


  deleteForm: FormGroup;
  message: string = '';

  // Injecting HttpClient and FormBuilder
  constructor(private http: HttpClient, private fb: FormBuilder) {
    // Initialize the reactive form with validation for donor ID
    this.deleteForm = this.fb.group({
      donorId: [null, [Validators.required, Validators.min(1)]]
    });
  }

  // Getter for easy access to form controls
  get donorId() {
    return this.deleteForm.get('donorId');
  }

  // Method to handle donor deletion
  deleteDonor() {
    if (this.deleteForm.invalid) {
      this.message = 'Please enter a valid Donor ID.';
      return;
    }

    const donor = this.deleteForm.value.donorId;
    const apiUrl = `http://localhost:8080/donor/delete/${donor}`;

    this.http.delete(apiUrl).subscribe(
      (response) => {
        alert(`Donor with ID ${donor} was deleted successfully.`);
      },
      (error) => {
        this.message = `Error: Unable to delete donor with ID ${donor}.`;
      }
    );
  }
  

}
