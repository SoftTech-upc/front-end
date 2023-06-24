import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Tour} from "../../model/tour";
import {TourService} from "../../services/tour.service";
import {Activity} from "../../model/activity";
import { ActivityService } from '../../services/activity.service';
import { TourReview } from 'src/app/reviews/model/tour-review';
import { TourReviewService } from 'src/app/reviews/services/tour-review.service';

@Component({
  selector: 'app-tours-detail',
  templateUrl: './tours-detail.component.html',
  styleUrls: ['./tours-detail.component.css']
})
export class ToursDetailComponent implements OnInit{
  tourDetailData: Tour
  edit: Boolean
  activities: Activity[];
  tourDetail_id: any;
  activities1: Activity[]; 
  tourReview1: TourReview[]; 
  tourReviewData: TourReview

  @ViewChild('tourDetailForm', {static: false})
  tourDetailForm!: NgForm;

  constructor(
    private tourService: TourService,
    private activityService: ActivityService, 
    private tourReviewService: TourReviewService,
    private route: ActivatedRoute
  ) {
    this.tourDetailData = {} as Tour;
    this.tourReviewData = {} as TourReview;
    this.edit = false;
    this.activities = [];
    this.activities1 = [];
    this.tourReview1 = [];
    this.tourDetail_id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.tourService.getById(this.tourDetail_id).subscribe((response: any) => {
      this.tourDetailData = response;
      this.getActivitiesByTourId(this.tourDetailData.id);
      this.getTourReviewByTourId(this.tourDetailData.id);
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
  getActivitiesByTourId(tourId: number): void {
    this.activityService.getActivitiesByTourId(tourId).subscribe((response: any) => {
      const activitiess: Activity[] = [];
      response.forEach((activity: Activity) => {
        if (activity.tourId === tourId) {
          activitiess.push(activity);
        }
      });
      this.activities1 = activitiess;
    });
  }

  getTourReviewByTourId(tourId: number): void {
    this.tourReviewService.getTourReviewByTourId(tourId).subscribe((response: any) => {
      const tourRevieww: TourReview[] = [];
      response.forEach((tourReview: TourReview) => {
        if (tourReview.tour_id === tourId) {
          tourRevieww.push(tourReview);
        }
      });
      this.tourReview1 = tourRevieww;
    });
  }

}
