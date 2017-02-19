export class Job {
  text: string;
  description: string;
  subJobs: Job[];

  created: Date = new Date();
  updated: Date;

  editing: boolean;

  public isValid() {
    return this.text !== undefined && this.text.trim().length > 0
      && this.description !== undefined && this.description.trim().length > 0;
  }
}
