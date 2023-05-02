import {Component, ViewChild} from '@angular/core';
import { OnInit } from "@angular/core";
import { AgencyService } from "../../services/agency/agency.service";
import {Agency} from "../../model/agency";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-agency-profile',
  templateUrl: './agency-profile.component.html',
  styleUrls: ['./agency-profile.component.css']
})
export class AgencyProfileComponent implements OnInit {

  agencyData: Agency
  edit: Boolean

  @ViewChild('studentForm', {static: false})
  agencyForm!: NgForm;

  constructor(private agencyService: AgencyService) {
    this.agencyData = {} as Agency
    this.edit = false
  }

  ngOnInit(): void {
    this.agencyService.getById(1).subscribe((response: any) => {
      this.agencyData = response
    })
  }

  editAgency(): void {
    this.edit = true
  }

  onSubmit() {
    this.agencyService.update(this.agencyData.id, this.agencyData).subscribe((response: any) => {
      this.agencyData = response
      this.edit = false
    });
  }

}
