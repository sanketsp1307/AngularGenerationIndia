import { Component } from '@angular/core';
import { AddDonorComponent } from '../add-donor/add-donor.component';
import { MainnavbarComponent } from '../mainnavbar/mainnavbar.component';

@Component({
  selector: 'app-about',
  imports: [MainnavbarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
