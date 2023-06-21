import { Component, OnInit } from '@angular/core';
import { AgencyService } from '../../services/agency/agency.service';
import {Agency} from "../../model/agency";

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {

  arrayAgencies: Agency[]
  constructor(private agencyService: AgencyService) {
    this.arrayAgencies = []
  }
  ngOnInit(): void {
    this.getAgencies()
  }

  getAgencies(){
    this.agencyService.getAll()
      .subscribe((response: any)=>{
        this.arrayAgencies = response
      })
  }

}
