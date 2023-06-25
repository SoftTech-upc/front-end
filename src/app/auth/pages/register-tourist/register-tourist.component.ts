import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Tourist} from "../../../tourists/model/tourist";
import {Router} from "@angular/router";
import {TouristService} from "../../../tourists/services/tourist.service";

@Component({
  selector: 'app-register-tourist',
  templateUrl: './register-tourist.component.html',
  styleUrls: ['./register-tourist.component.css']
})
export class RegisterTouristComponent {
  touristData: Tourist

  @ViewChild('registerTouristForm', {static: false})
  registerTouristForm!: NgForm;

  constructor(private router: Router, private touristService: TouristService){
    this.touristData = {} as Tourist
  }

  onSubmit() {
    this.touristService.create(this.touristData).subscribe(() => {
      this.router.navigate(['/login'])
    })
  }
}
