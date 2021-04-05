import { Component, OnInit } from '@angular/core';
import { IJob } from 'src/app/@shared/interfaces';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent implements OnInit {
  jobs: IJob[] = [];
  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.getJobs();
  }

  async getJobs() {
    this.jobs = await this.jobService.getJobs();
  }

  async loadMore() {
    const jobs = await this.jobService.getJobs(this.jobs.length + 1);
    this.jobs = this.jobs.concat(jobs);
  }
}
