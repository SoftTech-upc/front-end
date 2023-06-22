import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../../model/activity';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit{
  arrayActivities: Activity[];
  @Input() inputActivity: Activity;

  constructor(private activityService: ActivityService) {
    this.inputActivity = {} as Activity;
    this.arrayActivities = [];
  }

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities(): void {
    this.activityService.getAll().subscribe((response: any) => {
      this.arrayActivities = response;
    });
  }
}
