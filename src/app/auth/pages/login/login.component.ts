import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Credential } from '../../model/credential';
import { Router } from '@angular/router';
import { TouristService } from 'src/app/tourists/services/tourist.service';
import { TourService } from '../../../tours/services/tour.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentialData: Credential
  constructor(private router: Router, private touristService: TouristService){
    this.credentialData = {} as Credential
  }
  login(form: NgForm){
    this.touristService.login(this.credentialData).subscribe(response => {
      this.router.navigate(['/home']);
    })
  }
}
