import { Component, OnInit, ViewChild } from '@angular/core';
import { AgencyReview } from '../../model/agency-review';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AgencyReviewService } from '../../services/agency-review.service';
import { Tourist } from 'src/app/tourists/model/tourist';
import { Agency } from 'src/app/agencies/model/agency';

@Component({
  selector: 'app-agency-review',
  templateUrl: './agency-review.component.html',
  styleUrls: ['./agency-review.component.css']
})
export class AgencyReviewComponent implements OnInit {
  agencyReviewData: AgencyReview
  agencyReviewId: any
  agencyId: any;
  edit: boolean
  touristId: any

  @ViewChild('tourForm', {static: false})
  tourForm!: NgForm;

  constructor(private agencyReviewService: AgencyReviewService, private route: ActivatedRoute, private router: Router) {
    this.agencyReviewData = {} as AgencyReview
    this.agencyId= this.route.snapshot.paramMap.get('id');
    this.edit = false
    //this.agencyId = localStorage.getItem('id');
    this.touristId = localStorage.getItem('id');
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.agencyReviewData.date = new Date()
      this.agencyReviewData.tourist = {id: this.touristId } as Tourist
      this.agencyReviewData.agency = {id: this.agencyId } as Agency
      this.agencyReviewService.create(this.agencyReviewData).subscribe()
      this.router.navigate(['agency/profile', this.agencyId])
    
  }
}
