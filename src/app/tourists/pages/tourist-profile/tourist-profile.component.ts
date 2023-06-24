import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Tourist} from "../../model/tourist";
import {TouristService} from "../../services/tourist.service";
import { ReservationService } from 'src/app/reservations/services/reservation.service';
import { Reservation } from 'src/app/reservations/model/reservation';
import { TourReview } from 'src/app/reviews/model/tour-review';
import { TourReviewService } from 'src/app/reviews/services/tour-review.service';

@Component({
  selector: 'app-tourist-profile',
  templateUrl: './tourist-profile.component.html',
  styleUrls: ['./tourist-profile.component.css']
})
export class TouristProfileComponent implements OnInit {
  touristData: Tourist
  edit: Boolean
  tourist_id: any;
  reservations1: Reservation[];
  reservationId: number;
  tourReview1: TourReview[]; 

  @ViewChild('touristForm', {static: false})
  touristForm!: NgForm;

  constructor(private touristService: TouristService, private tourReviewService: TourReviewService, private reservationService: ReservationService, private route: ActivatedRoute) {
    this.touristData = {} as Tourist
    this.edit = false
    this.tourist_id = this.route.snapshot.paramMap.get('id');
    this.reservations1 = [];
    this.reservationId = 0;
    this.tourReview1 = [];
  }

  ngOnInit(): void {
    this.touristService.getById(this.tourist_id).subscribe((response: any) => {
      this.touristData = response
      this.getReservationByTouristId(this.touristData.id);
      this.getTourReviewByTouristId(this.touristData.id);
    })
  }

  editAgency(): void {
    this.edit = true
  }

  onSubmit() {
    this.touristService.update(this.touristData.id, this.touristData).subscribe((response: any) => {
      this.touristData = response
      this.edit = false
    });
  }

  getReservationByTouristId(reservationId: number): void {
    this.reservationService.getReservationByTouristId(reservationId).subscribe((response: any) => {
      const reservationss: Reservation[] = [];
      response.forEach((reservation: Reservation) => {
        if (reservation.customer_id === reservationId) {
          reservationss.push(reservation);
        }
      });
      this.reservations1 = reservationss;
    });
  }
  
  getTourReviewByTouristId(tourId: number): void {
    this.tourReviewService.getTourReviewByTourId(tourId).subscribe((response: any) => {
      const tourRevieww: TourReview[] = [];
      response.forEach((tourReview: TourReview) => {
        if (tourReview.customer_id === tourId) {
          tourRevieww.push(tourReview);
        }
      });
      this.tourReview1 = tourRevieww;
    });
  }
}
