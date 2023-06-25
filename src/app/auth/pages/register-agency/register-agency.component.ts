import {Component, ViewChild} from '@angular/core';
import {Agency} from "../../../agencies/model/agency";
import {AgencyService} from "../../../agencies/services/agency/agency.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-agency',
  templateUrl: './register-agency.component.html',
  styleUrls: ['./register-agency.component.css']
})
export class RegisterAgencyComponent {
  agencyData: Agency

  @ViewChild('registerAgencyForm', {static: false})
  registerAgencyForm!: NgForm;

  constructor(private router: Router, private agencyService: AgencyService){
    this.agencyData = {} as Agency
  }

  onSubmit() {
    this.agencyData.score = 0
    this.agencyService.create(this.agencyData).subscribe(() => {
      this.router.navigate(['/login'])
    })
  }
}
