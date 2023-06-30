import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Tourist} from "../../model/tourist";
import {TouristService} from "../../services/tourist.service";
import { ReservationService } from 'src/app/reservations/services/reservation.service';
import { Reservation } from 'src/app/reservations/model/reservation';
import { TourReview } from 'src/app/reviews/model/tour-review';
import { TourReviewService } from 'src/app/reviews/services/tour-review.service';
import { AgencyReviewService } from 'src/app/reviews/services/agency-review.service';
import { AgencyReview } from 'src/app/reviews/model/agency-review';
import { Agency } from 'src/app/agencies/model/agency';

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
  agencyReview1: AgencyReview[];
  displayedColumns: string[] = ['name', 'amount', 'scheduledDate', 'status'];
  displayedColumnsTourReview: string[] = ['name', 'date', 'comment', 'score'];
  displayedColumnsAgencyReview: string[] = ['name', 'date', 'comment', 'professionalismScore', 'securityScore', 'qualityScore', 'costScore'];

  @ViewChild('touristForm', {static: false})
  touristForm!: NgForm;

  constructor(private touristService: TouristService, private agencyReviewService: AgencyReviewService, private tourReviewService: TourReviewService, private reservationService: ReservationService, private route: ActivatedRoute) {
    this.touristData = {} as Tourist
    this.edit = false
    this.tourist_id = this.route.snapshot.paramMap.get('id');
    this.reservations1 = [];
    this.reservationId = 0;
    this.tourReview1 = [];
    this.agencyReview1 = [];
  }

  ngOnInit(): void {
    this.touristService.getById(this.tourist_id).subscribe((response: any) => {
      this.touristData = response
    })
  }

  editAgency(): void {
    this.edit = true
  }

  onSubmit() {
    this.touristService.update(this.touristData.id, this.touristData).subscribe((response: any) => {
      this.edit = false
    });
  }
}
