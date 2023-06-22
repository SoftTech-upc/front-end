import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Tour} from "../../model/tour";
import {TourService} from "../../services/tour.service";
import {Activity} from "../../model/activity";
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-tours-detail',
  templateUrl: './tours-detail.component.html',
  styleUrls: ['./tours-detail.component.css']
})
export class ToursDetailComponent implements OnInit{
  tourDetailData: Tour
  activityData: Activity
  activities: Activity[];
  edit: Boolean
  tourDetail_id: any;

  @ViewChild('tourDetailForm', {static: false})
  tourDetailForm!: NgForm;

  constructor(
    private tourService: TourService,
    private activityService: ActivityService,
    private route: ActivatedRoute
  ) {
    this.tourDetailData = {} as Tour;
    this.activityData = {} as Activity;
    this.activities = [];
    this.edit = false;
    this.tourDetail_id = this.route.snapshot.paramMap.get('id');
  }

  /*ngOnInit(): void {
    this.tourService.getById(this.tourDetail_id).subscribe((response: any) => {
      this.tourDetailData = response;
      this.activityService.getActivitiesByTourId(this.tourDetailData.id).subscribe((activities: Activity[]) => {
        this.activities = activities;
      });
    });
  }*/
  ngOnInit(): void {
    this.tourService.getById(this.tourDetail_id).subscribe((response: any) => {
      this.tourDetailData = response;
      this.getActivitiesByTourId(this.tourDetailData.id); // Pasar el ID del tour
    });
  }
  
  getActivitiesByTourId(tourId: number): void {
    this.activityService.getActivitiesByTourId(tourId).subscribe((activities: Activity[]) => {
      this.activities = activities;
      console.log(this.activities); // Verificar las actividades obtenidas
    });
  }
  editAgency(): void {
    this.edit = true
  }
  onSubmit() {
    this.tourService.update(this.tourDetailData.id, this.tourDetailData).subscribe((response: any) => {
      this.tourDetailData = response
      this.edit = false
    });
  }
}
