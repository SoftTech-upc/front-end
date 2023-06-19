import {Component, OnInit} from '@angular/core';
import {Tour} from "../../model/tour";
import {TourService} from "../../services/tour.service";

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  arrayTours: Tour[]
  constructor(private tourService: TourService) {
    this.arrayTours = []
  }
  ngOnInit(): void {
    this.getTours()
  }

  getTours(){
    this.tourService.getAll()
      .subscribe((response: any)=>{
        this.arrayTours = response
      })
  }
}
