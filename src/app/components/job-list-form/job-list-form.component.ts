import { Component, OnInit, Input } from '@angular/core';

import { Job } from './../../models/job';

@Component({
  selector: 'app-job-list-form',
  templateUrl: './job-list-form.component.html',
  styleUrls: ['./job-list-form.component.css']
})
export class JobListFormComponent implements OnInit {

  private newJob: boolean = true;
  @Input() private job: Job;
  @Input() private jobList: Job[] = null;

  constructor() { }

  ngOnInit() {
    if (this.job !== undefined) {
      this.newJob = false;
    } else {
      this.job = new Job();
    }
  }

  public saveJob() {
    if (this.job.isValid()) {
      this.jobList.push(this.job);
      this.reset();
    }
  }

  private reset() {
    this.job = new Job();
  }

  public getIcon() {
    return this.newJob
        ? "https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-128.png"
        : "http://megaicons.net/static/img/icons_sizes/8/178/512/editing-edit-icon.png";
  }
}
