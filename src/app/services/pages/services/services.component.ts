import {Component, OnInit} from '@angular/core';
import {ServiceClass} from "../../model/service";
import {ServicesService} from "../../services/service/services.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  data_!: ServiceClass[];

  constructor(private ser: ServicesService){}
  ngOnInit(): void {
    this.getServices()
  }

  getServices(){
    this.ser.getAll()
        .subscribe((data: ServiceClass[])=>{
          this.data_=data;
        })
  }
}