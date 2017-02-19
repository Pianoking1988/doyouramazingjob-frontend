import { Component, OnInit } from '@angular/core';

import { Job } from './../../models/job';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  private jobList: Job[] = [];

  constructor() {
    this.createPseudoJobList();
   }

  ngOnInit() { }

  public moveUp(clickedIndex: number) {
    this.swapJobs(clickedIndex, clickedIndex - 1);
  }

  public moveDown(clickedIndex: number) {
    this.swapJobs(clickedIndex, clickedIndex + 1);
  }

  private swapJobs(index1: number, index2: number) {
    let tempJob: Job = this.jobList[index1];
    this.jobList[index1] = this.jobList[index2];
    this.jobList[index2] = tempJob;
  }

  public removeJob(index: number) {
    this.jobList.splice(index, 1);
  }

  public toggleEditing(job: Job) {
    job.editing = !job.editing;
  }

  private createPseudoJobList() {
    let job1: Job = new Job();
    job1.text = 'First Job';
    job1.description = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lore ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    this.jobList.push(job1);

    let job2: Job = new Job();
    job2.text = 'Second Job';
    job2.description = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At'
    this.jobList.push(job2);

    let job3: Job = new Job();
    job3.text = 'Third Job';
    job3.description = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    this.jobList.push(job3);
  }

}
