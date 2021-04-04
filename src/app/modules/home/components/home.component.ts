import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoryService } from '../services/story.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  news = [];
  constructor(private newsService: StoryService, private router: Router) {}

  ngOnInit(): void {
    this.loadStoriesBasedOnRoute();
  }

  async loadStoriesBasedOnRoute() {
    this.news = await this.getStories();
  }

  getStories(startFrom?: number) {
    return this.router.url === '/newest'
      ? this.newsService.getNewStories(startFrom)
      : this.newsService.getTopStories(startFrom);
  }

  async LoadMore() {
    const news = await this.getStories(this.news.length + 1);
    this.news = this.news.concat(news);
  }
}
