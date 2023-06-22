import { Component, OnInit, ViewChild } from '@angular/core';
import { Reservation } from '../../model/reservation';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit{
  reservationData: Reservation
  reservationId: any
  edit: boolean

  @ViewChild('reservationForm', {static: false})
  reservationForm!: NgForm;

  constructor(private reservationService: ReservationService, private route: ActivatedRoute, private router: Router) {
    this.reservationData = {} as Reservation
    this.reservationId= this.route.snapshot.paramMap.get('id');
    this.edit = !!this.reservationId;
  }

  ngOnInit(): void {
    if (this.edit) {
      this.reservationService.getById(this.reservationId).subscribe((response: any) => {
        this.reservationData = response
      })
    }
  }

  onSubmit() {
    if (this.edit) {
      this.reservationService.update(this.reservationId, this.reservationData).subscribe()
    } else {
      let createdReservationId: number
      this.reservationData.customer_id = 1 // TODO: colocar el id del turista que este iniciado sesion
      this.reservationData.service_id = 1 // TODO: enlazar con el id del tour a reservar
      this.reservationData.status = "active"
      this.reservationService.create(this.reservationData).subscribe((response) => {
        createdReservationId = response.id
      })

      this.router.navigateByUrl('/tours');
    }
  }
}
