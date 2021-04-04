import { Component, OnInit } from '@angular/core';
import { StoryService } from '../services/story.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  news = [];
  constructor(private newsService: StoryService) {}

  ngOnInit(): void {
    this.getTopStories();
  }

  async getTopStories() {
    this.news = await this.newsService.getTopStories();
    console.log(
      '## ~ file: home.component.ts ~ line 19 ~ HomeComponent ~ getNews ~ this.news',
      this.news
    );
  }

  async LoadMore() {
    const news = await this.newsService.getNewStories(this.news.length + 1);
    this.news = this.news.concat(news);
    console.log(
      '## ~ file: home.component.ts ~ line 19 ~ HomeComponent ~ getNews ~ this.news',
      this.news
    );
  }
}
