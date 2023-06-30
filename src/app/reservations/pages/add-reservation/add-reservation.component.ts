import { Component, OnInit, ViewChild } from '@angular/core';
import { Reservation } from '../../model/reservation';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../../services/reservation.service';
import {Tour} from "../../../tours/model/tour";
import {Tourist} from "../../../tourists/model/tourist";
import {TourService} from "../../../tours/services/tour.service";

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit{
  reservationData: Reservation
  reservationId: any
  edit: boolean
  tourId: any;
  touristId: any
  tourData: Tour

  @ViewChild('reservationForm', {static: false})
  reservationForm!: NgForm;

  constructor(private reservationService: ReservationService, private tourService: TourService, private route: ActivatedRoute, private router: Router) {
    this.reservationData = {} as Reservation
    this.tourData = {} as Tour
    this.tourId = this.route.snapshot.paramMap.get('id');
    this.edit = false;
    this.touristId = localStorage.getItem('id');
  }

  ngOnInit(): void {
    this.tourService.getById(this.tourId).subscribe((response: any) => {
      this.tourData = response
    })
  }

  onSubmit() {
      this.reservationData.tourist = {id: this.touristId} as Tourist
      this.reservationData.tour = {id: this.tourId} as Tour;
      this.reservationData.status = "active"
      this.tourData.isOffer ? this.reservationData.price = this.tourData.newPrice * this.reservationData.amount : this.tourData.price * this.reservationData.amount
      this.reservationService.create(this.reservationData).subscribe()

      this.router.navigateByUrl('/tour/details/' + this.tourId);
  }

}
