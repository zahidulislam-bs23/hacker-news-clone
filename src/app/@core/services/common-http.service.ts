import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommonHttpService {
  baseUrl = environment.serverUrl;
  constructor(private http: HttpClient) {}

  getDomainFromUrl(url: string): string {
    let domain = new URL(url);
    return domain.hostname.replace('www.', '');
  }

  getSingleData = (id: number) =>
    this.http.get(this.baseUrl + `item/${id}.json?print=pretty`);

  get(endPoint: string): Promise<any> {
    return this.http
      .get(this.baseUrl + endPoint)
      .pipe(
        switchMap((ids: any) =>
          forkJoin(Object.values(ids).map(this.getSingleData))
        ),
        map((stories: any[]) => {
          stories.map((story) => {
            if (story.url) {
              story.domain = this.getDomainFromUrl(story.url);
            }
          });
          return stories;
        }),
        take(1)
      )
      .toPromise();
  }
}
