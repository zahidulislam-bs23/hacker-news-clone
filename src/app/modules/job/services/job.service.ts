import { Injectable } from '@angular/core';
import { CommonHttpService } from 'src/app/@core/services/common-http.service';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  pageLimit: number = 29;
  constructor(private http: CommonHttpService) {}

  getJobs(startFrom?: number) {
    let startAt = startFrom ? startFrom : 0;
    const endPoint = `jobstories.json?print=pretty&startAt="${startAt}"&endAt="${
      startAt + this.pageLimit
    }"&orderBy="$key"`;
    return this.http.get(endPoint);
  }
}
