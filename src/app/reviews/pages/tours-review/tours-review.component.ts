import { Component, ViewChild } from '@angular/core';
import { TourReview } from '../../model/tour-review';
import { NgForm } from '@angular/forms';
import { TourReviewService } from '../../services/tour-review.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tours-review',
  templateUrl: './tours-review.component.html',
  styleUrls: ['./tours-review.component.css']
})
export class ToursReviewComponent {
  tourReviewData: TourReview
  tourReviewId: any
  edit: boolean

  @ViewChild('tourForm', {static: false})
  tourForm!: NgForm;

  constructor(private tourReviewService: TourReviewService, private route: ActivatedRoute, private router: Router) {
    this.tourReviewData = {} as TourReview
    this.tourReviewId= this.route.snapshot.paramMap.get('id');
    this.edit = !!this.tourReviewId;
  }

  ngOnInit(): void {
    if (this.edit) {
      this.tourReviewService.getById(this.tourReviewId).subscribe((response: any) => {
        this.tourReviewData = response
      })
    }
  }

  onSubmit() {
    if (this.edit) {
      this.tourReviewService.update(this.tourReviewId, this.tourReviewData).subscribe()
    } else {
      let createdTourReviewId: number
      this.tourReviewData.date = new Date()
      this.tourReviewData.customer_id = 1 // TODO: colocar el id de la agencia que este iniciado sesion
      this.tourReviewData.tour_id = 1 
      this.tourReviewService.create(this.tourReviewData).subscribe((response) => {
        createdTourReviewId = response.id
      })

      this.router.navigateByUrl('/agency-review');
    }
  }
}
