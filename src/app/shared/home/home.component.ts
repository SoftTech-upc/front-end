import {Component, OnInit} from '@angular/core';
import {TourService} from "../../tours/services/tour.service";
import {Tour} from "../../tours/model/tour";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arrayScore: Tour[]
  arrayPrice: Tour[]
  arrayNew: Tour[]
  constructor(private tourService: TourService) {
    this.arrayPrice = []
    this.arrayScore = []
    this.arrayNew = []
  }
  ngOnInit(): void {
    this.getPriceData()
    this.getScoreData()
    this.getNewData()
  }

  getPriceData(){
    this.tourService.getAllByDate()
      .subscribe((response: any)=>{
        this.arrayPrice = response.slice(0, 5)
      })
  }

  getScoreData(){
    this.tourService.getAllByScore()
      .subscribe((response: any)=>{
        this.arrayScore = response.slice(0, 5)
      })
  }

  getNewData(){
    this.tourService.getAllByNew()
      .subscribe((response: any)=>{
        this.arrayNew = response.slice(0, 5)
      })
  }
}
