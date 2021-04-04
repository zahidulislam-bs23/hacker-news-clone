import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { CommonHttpService } from 'src/app/@core/services/common-http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  constructor(private http: CommonHttpService) {}

  getNewStories(startFrom?: number) {
    const limitTo = 29;
    let startAt = startFrom ? startFrom : 0;
    const endPoint = `newstories.json?print=pretty&startAt="${startAt}"&endAt="${
      startAt + limitTo
    }"&orderBy="$key"`;
    return this.http.get(endPoint);
  }

  getTopStories(startFrom?: number) {
    const limitTo = 29;
    let startAt = startFrom ? startFrom : 0;
    const endPoint = `topstories.json?print=pretty&startAt="${startAt}"&endAt="${
      startAt + limitTo
    }"&orderBy="$key"`;
    return this.http.get(endPoint);
  }
}
