import {Component, ViewChild} from '@angular/core';
import { OnInit } from "@angular/core";
import { AgencyService } from "../../services/agency/agency.service";
import {Agency} from "../../model/agency";
import {NgForm} from "@angular/forms";
import { DataSource } from '@angular/cdk/collections';
import { ServiceClass } from 'src/app/services/model/service';

@Component({
  selector: 'app-agency-profile',
  templateUrl: './agency-profile.component.html',
  styleUrls: ['./agency-profile.component.css']
})
export class AgencyProfileComponent implements OnInit {

  agencyData: Agency
  edit: Boolean

  @ViewChild('agencyForm', {static: false})
  agencyForm!: NgForm;

  constructor(private agencyService: AgencyService) {
    this.agencyData = {} as Agency
    this.agencyService = {} as ServiceClass
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
      console.log(this.agencyData)
    });
  }

  deleteService(id: number){
    this.agencyService.delete(id)
    console.log("delete")
  }

  getByIdAgency(id: number){
    this.agencyService.getById(id);
  }

}
