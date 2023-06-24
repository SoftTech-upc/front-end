import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Credentials } from '../../model/credentials';
import { Router } from '@angular/router';
import { TouristService } from 'src/app/tourists/services/tourist.service';
import { TourService } from '../../../tours/services/tour.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  cred: Credentials = {
    email:'',
    password:''
  }
  constructor(private router: Router, private tourService: TouristService){
    
  }
  login(form: NgForm){
    console.log("Form value: ", form.value)
    this.tourService.login(this.cred).subscribe(response => {
      this.router.navigate(['/']);
    })
  }
}
