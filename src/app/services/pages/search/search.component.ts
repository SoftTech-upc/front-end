import {Component, OnInit} from '@angular/core';
import {ServiceClass} from "../../model/service";
import {ServicesService} from "../../services/services.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  data_: any;

  constructor(private ser: ServicesService) {
  }

  ngOnInit(): void {

    this.getDates()
  }

  getDates() {
    this.ser.get()
      .subscribe((data: any) => {
        this.data_ = data;
        console.log(this.data_)
      })

  }
}


