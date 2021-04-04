import { Injectable } from '@angular/core';
import { CommonHttpService } from 'src/app/@core/services/common-http.service';
export interface IStory {
  title: string;
  url?: string;
  text?: string;
}
@Injectable({
  providedIn: 'root',
})
export class SubmitStoryService {
  constructor(private http: CommonHttpService) {}

  createStory(story: IStory) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', story);
  }
}
