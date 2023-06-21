import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Tourist} from "../../model/tourist";
import {TouristService} from "../../services/tourist.service";

@Component({
  selector: 'app-tourist-profile',
  templateUrl: './tourist-profile.component.html',
  styleUrls: ['./tourist-profile.component.css']
})
export class TouristProfileComponent implements OnInit {
  touristData: Tourist
  edit: Boolean
  tourist_id: any;

  @ViewChild('touristForm', {static: false})
  touristForm!: NgForm;

  constructor(private touristService: TouristService, private route: ActivatedRoute) {
    this.touristData = {} as Tourist
    this.edit = false
    this.tourist_id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.touristService.getById(this.tourist_id).subscribe((response: any) => {
      this.touristData = response
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
}
