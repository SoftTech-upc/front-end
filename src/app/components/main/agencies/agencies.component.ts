import { Component, OnInit } from '@angular/core';
import { AgenciesService } from '../../../services/agencies.service';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {

  data_:any;
constructor(private agenciesService: AgenciesService){}

ngOnInit(): void {
  this.getDates()
}

getDates(){
  this.agenciesService.get()
  .subscribe((data: any)=>{
    this.data_= data;
  })
}

}
