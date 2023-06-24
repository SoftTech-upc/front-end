import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Tourist} from "../../model/tourist";
import {TouristService} from "../../services/tourist.service";
import { ReservationService } from 'src/app/reservations/services/reservation.service';
import { Reservation } from 'src/app/reservations/model/reservation';

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

  @ViewChild('touristForm', {static: false})
  touristForm!: NgForm;

  constructor(private touristService: TouristService, private reservationService: ReservationService, private route: ActivatedRoute) {
    this.touristData = {} as Tourist
    this.edit = false
    this.tourist_id = this.route.snapshot.paramMap.get('id');
    this.reservations1 = [];
    this.reservationId = 0;
  }

  ngOnInit(): void {
    this.touristService.getById(this.tourist_id).subscribe((response: any) => {
      this.touristData = response
      this.getReservationByTouristId(this.touristData.id);
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
  
}
