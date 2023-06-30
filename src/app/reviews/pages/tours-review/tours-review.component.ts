import { Component, ViewChild } from '@angular/core';
import { TourReview } from '../../model/tour-review';
import { NgForm } from '@angular/forms';
import { TourReviewService } from '../../services/tour-review.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tourist } from 'src/app/tourists/model/tourist';
import { Tour } from 'src/app/tours/model/tour';

@Component({
  selector: 'app-tours-review',
  templateUrl: './tours-review.component.html',
  styleUrls: ['./tours-review.component.css']
})
export class ToursReviewComponent {
  tourReviewData: TourReview
  tourReviewId: any
  tourId: any;
  edit: boolean
  touristId: any

  @ViewChild('tourForm', {static: false})
  tourForm!: NgForm;

  constructor(private tourReviewService: TourReviewService, private route: ActivatedRoute, private router: Router) {
    this.tourReviewData = {} as TourReview
    this.tourId= this.route.snapshot.paramMap.get('id');
    this.edit = false;
    this.touristId = localStorage.getItem('id');
    //this.tourId = 0;
    
  }

  ngOnInit(): void {

  }

  onSubmit() {
    
      this.tourReviewData.date = new Date()
      this.tourReviewData.tourist = {id: this.touristId } as Tourist
      this.tourReviewData.tour = {id: this.tourId } as Tour
      this.tourReviewService.create(this.tourReviewData).subscribe()
      this.router.navigate(['/tour/details', this.tourId])
      //this.router.navigateByUrl('/tour-details/'+ this.tourId);
  }
  
}
