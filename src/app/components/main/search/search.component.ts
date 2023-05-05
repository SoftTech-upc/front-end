import {Component, OnInit} from '@angular/core';
import {ServiceClass} from "../../../Clases/Card";
import {ServicesService} from "../../../services/services.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  data_!: ServiceClass[];
  arrayScore: ServiceClass[]=[]
  arrayPrice: ServiceClass[]=[]
  arrayParaTi: ServiceClass[]=[]
  constructor(private ser: ServicesService){}
ngOnInit(): void {

  this.getDates()

}

getDates(){
  this.ser.get()
  .subscribe((data: ServiceClass[])=>{
    this.data_= data;
  })
}
}


