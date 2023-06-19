import {Component, ViewChild} from '@angular/core';
import { OnInit } from "@angular/core";
import { AgencyService } from "../../services/agency/agency.service";
import {Agency} from "../../model/agency";
import {NgForm} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-agency-profile',
  templateUrl: './agency-profile.component.html',
  styleUrls: ['./agency-profile.component.css']
})
export class AgencyProfileComponent implements OnInit {

  agencyData: Agency
  edit: Boolean
  agency_id: any;

  @ViewChild('agencyForm', {static: false})
  agencyForm!: NgForm;

  constructor(private agencyService: AgencyService, private route: ActivatedRoute) {
    this.agencyData = {} as Agency
    this.edit = false
    this.agency_id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.agencyService.getById(this.agency_id).subscribe((response: any) => {
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
