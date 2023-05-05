import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AgencyService } from 'src/app/agencies/services/agency/agency.service';
import { ServicesService } from '../../services/service/services.service';

@Component({
  selector: 'app-service-description',
  templateUrl: './service-description.component.html',
  styleUrls: ['./service-description.component.css']
})
export class ServiceDescriptionComponent implements OnInit{

objService: any;
constructor(private serviceService: ServicesService){}
  
ngOnInit(): void {
this.getItem(1)
}

getItem(id: number) {
  this.serviceService.getItem(id)
    .subscribe(
      data => this.objService = data,
      error => console.error(error)
    );
  
  
}






}
