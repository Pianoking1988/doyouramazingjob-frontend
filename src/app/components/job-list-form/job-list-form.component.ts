import { Component, OnInit, Input } from '@angular/core';

import { JobListComponent } from '../job-list/job-list.component';

import { Job } from './../../models/job';

@Component({
  selector: 'app-job-list-form',
  templateUrl: './job-list-form.component.html',
  styleUrls: ['./job-list-form.component.css']
})
export class JobListFormComponent implements OnInit {

  private newJob: boolean = true;
  private job: Job = null;
  @Input() private originJob: Job;
  @Input() private jobList: Job[] = null;
  @Input() private jobListComponent: JobListComponent;

  constructor() { }

  ngOnInit() {
    if (this.originJob !== undefined) {
      this.newJob = false;
      this.assignJobFromOrigin();
    } else {
      this.job = new Job();
    }
  }

  public save() {
    if (this.job.isValid()) {
      if (this.newJob) {
        this.job.created = new Date();
        this.jobList.push(this.job);
        this.reset();
      } else {
        this.assignOriginFromJob();
        this.originJob.updated = new Date();
        this.jobListComponent.toggleEditing(this.originJob);
      }
    }
  }

  public reset() {
      this.job = new Job();
  }

  public cancel() {
    this.assignJobFromOrigin();
    this.jobListComponent.toggleEditing(this.originJob);
  }

  public assignJobFromOrigin() {
    this.job = Object.assign(new Job(), this.originJob);
  }

  public assignOriginFromJob() {
    this.originJob.text = this.job.text;
    this.originJob.description = this.job.description;
  }

  public getIcon() {
    return this.newJob
        ? "https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-128.png"
        : "https://image.freepik.com/free-icon/edit-interface-symbol-of-a-pencil-on-a-square-outline-paper_318-61160.jpg";
  }
}
