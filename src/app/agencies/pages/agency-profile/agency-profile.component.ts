import {Component, ViewChild} from '@angular/core';
import { OnInit } from "@angular/core";
import { AgencyService } from "../../services/agency/agency.service";
import {Agency} from "../../model/agency";
import {NgForm} from "@angular/forms";
import { DataSource } from '@angular/cdk/collections';
import { ServiceClass } from 'src/app/services/model/service';
import { ServicesService } from 'src/app/services/services/service/services.service';

@Component({
  selector: 'app-agency-profile',
  templateUrl: './agency-profile.component.html',
  styleUrls: ['./agency-profile.component.css']
})
export class AgencyProfileComponent implements OnInit {

  agencyData: Agency
  edit: Boolean
  data_!: ServiceClass[];

  @ViewChild('agencyForm', {static: false})
  agencyForm!: NgForm;

  constructor(private agencyService: AgencyService, private service: ServicesService) {
    this.agencyData = {} as Agency
    this.edit = false
  }

  ngOnInit(): void {
    this.agencyService.getById(1).subscribe((response: any) => {
      this.agencyData = response
    })
    this.getServices()
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
    this.agencyService.deleteItem(id).subscribe(
      () => console.log('Elemento eliminado'),
      error => console.error(error)
    );
    this.getServices()




    
    // this.deleteService.deleteItem(id)
    //   .subscribe(
    //     () => console.log('Elemento eliminado'),
    //     error => console.error(error)
    //   );
  }



  getByIdAgency(id: number){
    this.agencyService.getById(id);
  }

  
  getServices(){
    this.service.getAll()
        .subscribe((data: ServiceClass[])=>{
          this.data_=data;
        })
  }

}
