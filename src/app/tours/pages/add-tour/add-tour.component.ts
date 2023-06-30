import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Tour} from "../../model/tour";
import {TourService} from "../../services/tour.service";
import {ActivityService} from "../../services/activity.service";
import {Activity} from "../../model/activity";
import {Agency} from "../../../agencies/model/agency";

@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.css']
})
export class AddTourComponent implements OnInit {
  tourData: Tour
  activities: Activity[]
  deleteActivity: any
  tourId: any
  agencyId: any
  edit: boolean

  @ViewChild('tourForm', {static: false})
  tourForm!: NgForm;

  constructor(private tourService: TourService, private activityService: ActivityService,private route: ActivatedRoute, private router: Router) {
    this.tourData = {} as Tour
    this.tourId = this.route.snapshot.paramMap.get('id');
    this.edit = !!this.tourId;
    this.deleteActivity = []
    this.agencyId = localStorage.getItem('id');
    this.activities = []
  }

  ngOnInit(): void {
    if (this.edit) {
      this.tourService.getById(this.tourId).subscribe((response: any) => {
        this.tourData = response
        this.activities = response.activities
      })
    }
  }

  addActivity() {
    this.activities.push({id: 0, name: '', description: '', tour: {id: this.tourId} as Tour});
  }

  removeActivity(index: number) {
    this.deleteActivity.push(this.activities[index].id);
    this.activities.splice(index, 1);
  }

  onSubmit() {
    if (this.edit) {
      this.tourService.update(this.tourId, this.tourData).subscribe()
      this.activities.forEach((activity) => {
        if(activity.id == 0) {
          this.activityService.create(activity).subscribe()
        } else {
          activity.tour = {id: this.tourId} as Tour
          this.activityService.update(activity.id ,activity).subscribe()
        }
      })

      this.deleteActivity.forEach((id: any) => {
        this.activityService.delete(id).subscribe()
      })
    } else {
      let createdTourId: number
      this.tourData.isOffer = !!this.tourData.newPrice
      this.tourData.creationDate = new Date()
      this.tourData.agency = {id: this.agencyId } as Agency
      this.tourService.create(this.tourData).subscribe((response) => {
        createdTourId = response.id
        this.activities.forEach((activity) => {
          activity.tour = {id: createdTourId} as Tour
          this.activityService.create(activity).subscribe()
        })
      })

    }
    this.router.navigate(['/agency/profile', this.agencyId])
  }
}
