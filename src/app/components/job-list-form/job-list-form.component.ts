import { Component, OnInit, Input } from '@angular/core';

import { Job } from './../../models/job';

@Component({
  selector: 'app-job-list-form',
  templateUrl: './job-list-form.component.html',
  styleUrls: ['./job-list-form.component.css']
})
export class JobListFormComponent implements OnInit {

  private job: Job = new Job();
  @Input() private jobList: Job[] = null;

  constructor() { }

  ngOnInit() { }

  public addJob() {
    if (this.job.isValid()) {
      this.jobList.push(this.job);
      this.reset();
    }
  }

  private reset() {
    this.job = new Job();
  }

}
