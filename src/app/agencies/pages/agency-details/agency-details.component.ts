import { Component, OnInit, ViewChild } from '@angular/core';
import { Agency } from '../../model/agency';
import { AgencyService } from '../../services/agency/agency.service';
import { AgencyReview } from 'src/app/reviews/model/agency-review';
import { ActivatedRoute } from '@angular/router';
import { AgencyReviewService } from 'src/app/reviews/services/agency-review.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-agency-details',
  templateUrl: './agency-details.component.html',
  styleUrls: ['./agency-details.component.css']
})
export class AgencyDetailsComponent implements OnInit{
  agencyDetailData: Agency
  edit: Boolean
  tourDetail_id: any;
  agencyReview1: AgencyReview[]; 
  agencyReviewData: AgencyReview

  @ViewChild('agencyDetailForm', {static: false})
  agencyDetailForm!: NgForm;

  constructor(
    private agencyService: AgencyService,
    private agencyReviewService: AgencyReviewService,
    private route: ActivatedRoute
  ) {
    this.agencyDetailData = {} as Agency;
    this.agencyReviewData = {} as AgencyReview;
    this.edit = false;
    this.agencyReview1 = [];
    this.tourDetail_id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.agencyService.getById(this.tourDetail_id).subscribe((response: any) => {
      this.agencyDetailData = response;
      this.getAgencyReviewByTourId(this.agencyDetailData.id);
    });
  }
  
  editAgency(): void {
    this.edit = true
  }
  onSubmit() {
    this.agencyService.update(this.agencyDetailData.id, this.agencyDetailData).subscribe((response: any) => {
      this.agencyDetailData = response
      this.edit = false
    });
  }

  getAgencyReviewByTourId(agencyId: number): void {
    this.agencyReviewService.getAgencyReviewByTourId(agencyId).subscribe((response: any) => {
      const tourRevieww: AgencyReview[] = [];
      response.forEach((agencyReview: AgencyReview) => {
        if (agencyReview.agency_id === agencyId) {
          tourRevieww.push(agencyReview);
        }
      });
      this.agencyReview1 = tourRevieww;
    });
  }
}
