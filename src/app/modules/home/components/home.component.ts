import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IStory } from 'src/app/@shared/interfaces';
import { StoryService } from '../services/story.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  stories: IStory[] = [];
  constructor(private newsService: StoryService, private router: Router) {}

  ngOnInit(): void {
    this.loadStoriesBasedOnRoute();
  }

  async loadStoriesBasedOnRoute() {
    this.stories = await this.getStories();
  }

  getStories(startFrom?: number) {
    return this.router.url === '/newest'
      ? this.newsService.getNewStories(startFrom)
      : this.newsService.getTopStories(startFrom);
  }

  async loadMore() {
    const news = await this.getStories(this.stories.length + 1);
    this.stories = this.stories.concat(news);
  }
}
