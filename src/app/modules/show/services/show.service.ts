import { Injectable } from '@angular/core';
import { CommonHttpService } from 'src/app/@core/services/common-http.service';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  pageLimit: number = 29;
  constructor(private http: CommonHttpService) {}

  getShows(startFrom?: number) {
    let startAt = startFrom ? startFrom : 0;
    const endPoint = `showstories.json?print=pretty&startAt="${startAt}"&endAt="${
      startAt + this.pageLimit
    }"&orderBy="$key"`;
    return this.http.get(endPoint);
  }
}
