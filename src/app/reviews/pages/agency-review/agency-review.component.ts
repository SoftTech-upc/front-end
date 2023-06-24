import { Component, OnInit, ViewChild } from '@angular/core';
import { AgencyReview } from '../../model/agency-review';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AgencyReviewService } from '../../services/agency-review.service';

@Component({
  selector: 'app-agency-review',
  templateUrl: './agency-review.component.html',
  styleUrls: ['./agency-review.component.css']
})
export class AgencyReviewComponent implements OnInit {
  agencyReviewData: AgencyReview
  agencyReviewId: any
  edit: boolean

  @ViewChild('tourForm', {static: false})
  tourForm!: NgForm;

  constructor(private agencyReviewService: AgencyReviewService, private route: ActivatedRoute, private router: Router) {
    this.agencyReviewData = {} as AgencyReview
    this.agencyReviewId= this.route.snapshot.paramMap.get('id');
    this.edit = !!this.agencyReviewId;
  }

  ngOnInit(): void {
    if (this.edit) {
      this.agencyReviewService.getById(this.agencyReviewId).subscribe((response: any) => {
        this.agencyReviewData = response
      })
    }
  }

  onSubmit() {
    if (this.edit) {
      this.agencyReviewService.update(this.agencyReviewId, this.agencyReviewData).subscribe()
    } else {
      let createdAgencyReviewId: number
      this.agencyReviewData.date = new Date()
      this.agencyReviewData.customer_id = 1 // TODO: colocar el id de la agencia que este iniciado sesion
      this.agencyReviewData.agency_id = 1 
      this.agencyReviewService.create(this.agencyReviewData).subscribe((response) => {
        createdAgencyReviewId = response.id
      })

      this.router.navigateByUrl('/home');
    }
  }
}
