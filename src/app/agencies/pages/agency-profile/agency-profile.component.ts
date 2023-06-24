import {Component, ViewChild} from '@angular/core';
import { OnInit } from "@angular/core";
import { AgencyService } from "../../services/agency/agency.service";
import {Agency} from "../../model/agency";
import {NgForm} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {TourService} from "../../../tours/services/tour.service";
import { Tour } from 'src/app/tours/model/tour';
import { AgencyReview } from 'src/app/reviews/model/agency-review';
import { AgencyReviewService } from 'src/app/reviews/services/agency-review.service';

@Component({
  selector: 'app-agency-profile',
  templateUrl: './agency-profile.component.html',
  styleUrls: ['./agency-profile.component.css']
})
export class AgencyProfileComponent implements OnInit {

  agencyData: Agency
  edit: Boolean
  agency_id: any;
  tours1: Tour[];
  agencyReview1: AgencyReview[];

  @ViewChild('agencyForm', {static: false})
  agencyForm!: NgForm;

  constructor(private agencyService: AgencyService, private agencyReviewService: AgencyReviewService, private tourService: TourService, private route: ActivatedRoute) {
    this.agencyData = {} as Agency
    this.edit = false
    this.agency_id = this.route.snapshot.paramMap.get('id');
    this.tours1 = [];
    this.agencyReview1 = [];
  }

  ngOnInit(): void {
    this.agencyService.getById(this.agency_id).subscribe((response: any) => {
      this.agencyData = response
      this.getTourByTourId(this.agencyData.id);
      this.getAgencyReviewByTourId(this.agencyData.id);
    })
  }
  editAgency(): void {
    this.edit = true
  }
  onSubmit() {
    this.agencyService.update(this.agencyData.id, this.agencyData).subscribe((response: any) => {
      this.agencyData = response
      this.edit = false
    });
  }

  deleteTour(id: number, index: number) {
      this.tourService.delete(id).subscribe((response: any) => {
        this.agencyData.tours.splice(index, 1)
      });
  }

  getTourByTourId(agencieId: number): void {
    this.tourService.getTourByTourId(agencieId).subscribe((response: any) => {
      const tourss: Tour[] = [];
      response.forEach((tour: Tour) => {
        if (tour.agencieId === agencieId) {
          tourss.push(tour);
        }
      });
      this.tours1 = tourss;
    });
  }

  getAgencyReviewByTourId(agencyId: number): void {
    this.agencyReviewService.getAgencyReviewByTourId(agencyId).subscribe((response: any) => {
      const agencyRevieww: AgencyReview[] = [];
      response.forEach((agencyReview: AgencyReview) => {
        if (agencyReview.agency_id === agencyId) {
          agencyRevieww.push(agencyReview);
        }
      });
      this.agencyReview1 = agencyRevieww;
    });
  }
}
