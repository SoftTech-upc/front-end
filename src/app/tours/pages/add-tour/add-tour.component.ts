import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Tour} from "../../model/tour";
import {TourService} from "../../services/tour.service";

@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.css']
})
export class AddTourComponent implements OnInit {
  tourData: Tour
  activities: { title: string, description: string }[] = [];
  tourId: any
  edit: boolean

  @ViewChild('tourForm', {static: false})
  tourForm!: NgForm;

  constructor(private tourService: TourService, private route: ActivatedRoute, private router: Router) {
    this.tourData = {} as Tour
    this.tourId= this.route.snapshot.paramMap.get('id');
    this.edit = !!this.tourId;
  }

  ngOnInit(): void {
    if (this.edit) {
      this.tourService.getById(this.tourId).subscribe((response: any) => {
        this.tourData = response
      })
    }
  }

  addActivity() {
    this.activities.push({ title: '', description: '' });
  }

  removeActivity(index: number) {
    this.activities.splice(index, 1);
  }

  onSubmit() {
    if (this.edit) {
      this.tourService.update(this.tourId, this.tourData).subscribe()
    } else {
      let createdTourId: number
      this.tourData.isOffer = !!this.tourData.newPrice
      this.tourData.score = 0
      this.tourData.creationDate = new Date()
      this.tourData.agencieId = 1 // TODO: colocar el id de la agencia que este iniciado sesion
      this.tourService.create(this.tourData).subscribe((response) => {
        createdTourId = response.id
      })

      this.router.navigateByUrl('/agency/profile/1');
    }
  }
}
