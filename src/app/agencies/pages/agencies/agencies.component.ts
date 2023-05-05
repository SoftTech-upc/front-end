import { Component, OnInit } from '@angular/core';
import { AgencyService } from '../../services/agency/agency.service';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {

  data_:any;
  constructor(private agenciesService: AgencyService){}

  ngOnInit(): void {
    this.getDates()
  }

  getDates(){
    this.agenciesService.getAll()
        .subscribe((data: any)=>{
          this.data_= data;
        })
  }

}