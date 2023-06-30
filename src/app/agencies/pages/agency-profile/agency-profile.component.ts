import {Component, ViewChild} from '@angular/core';
import { OnInit } from "@angular/core";
import { AgencyService } from "../../services/agency/agency.service";
import {Agency} from "../../model/agency";
import {NgForm} from "@angular/forms";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
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
  agencyId: any;

  @ViewChild('agencyForm', {static: false})
  agencyForm!: NgForm;

  constructor(private agencyService: AgencyService, private agencyReviewService: AgencyReviewService, private tourService: TourService, private route: ActivatedRoute, private router: Router) {
    this.agencyData = {} as Agency
    this.edit = false
    this.agencyId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.agencyService.getById(this.agencyId).subscribe((response: any) => {
      this.agencyData = response
    })

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.agencyService.getById(this.agencyId).subscribe((response: any) => {
          this.agencyData = response
        })
      }
    });
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
}
