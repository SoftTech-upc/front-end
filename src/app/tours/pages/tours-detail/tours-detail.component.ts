import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
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
  tourReviewData: TourReview
  displayedColumns: string[] = ['name', 'date', 'comment', 'score'];
  displayedColumnsReservation: string[] = ['name', 'amount', 'scheduledDate', 'status'];
  type: any

  @ViewChild('tourDetailForm', {static: false})
  tourDetailForm!: NgForm;

  constructor(
    private tourService: TourService,
    private activityService: ActivityService,
    private tourReviewService: TourReviewService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.tourDetailData = {} as Tour;
    this.tourReviewData = {} as TourReview;
    this.edit = false;
    this.activities = [];
    this.tourDetail_id = this.route.snapshot.paramMap.get('id');
    this.type = localStorage.getItem('type')
  }

  ngOnInit(): void {
    this.tourService.getById(this.tourDetail_id).subscribe((response: any) => {
      this.tourDetailData = response;
    });

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.tourService.getById(this.tourDetail_id).subscribe((response: any) => {
          this.tourDetailData = response;
        });
      }
    });
  }

  onSubmit() {
    this.tourService.update(this.tourDetailData.id, this.tourDetailData).subscribe((response: any) => {
      this.tourDetailData = response
      this.edit = false
    });
  }
}
