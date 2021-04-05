import { Injectable } from '@angular/core';
import { CommonHttpService } from 'src/app/@core/services/common-http.service';
import { IStory } from 'src/app/@shared/interfaces';
@Injectable({
  providedIn: 'root',
})
export class SubmitStoryService {
  constructor(private http: CommonHttpService) {}

  createStory(story: IStory) {
    // Its quite impossible to use project local json file for post request.
    // Thats why I'm using fake placeholder API to create fake post environment.
    return this.http.post('https://jsonplaceholder.typicode.com/posts', story);
  }
}
