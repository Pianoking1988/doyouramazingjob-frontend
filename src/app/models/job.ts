export class Job {
  text: string;
  description: string;
  subJobs: Job[];
  editing: boolean;

  public isValid() {
    return this.text !== undefined && this.text.trim().length > 0
      && this.description !== undefined && this.description.trim().length > 0;
  }
}
