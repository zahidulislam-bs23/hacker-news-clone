import { Component, OnInit } from '@angular/core';
import { IShow } from 'src/app/@shared/interfaces';
import { ShowService } from '../services/show.service';

@Component({
  selector: 'app-shows',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  shows: IShow[] = [];
  constructor(private showService: ShowService) {}

  ngOnInit(): void {
    this.getShows();
  }

  async getShows() {
    this.shows = await this.showService.getShows();
  }

  async loadMore() {
    const shows = await this.showService.getShows(this.shows.length + 1);
    this.shows = this.shows.concat(shows);
  }
}
