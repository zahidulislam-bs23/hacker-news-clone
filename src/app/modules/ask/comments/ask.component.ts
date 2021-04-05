import { Component, OnInit } from '@angular/core';
import { IAsk } from 'src/app/@shared/interfaces';
import { AskService } from '../services/ask.service';

@Component({
  selector: 'app-asks',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss'],
})
export class AskComponent implements OnInit {
  asks: IAsk[] = [];
  constructor(private askService: AskService) {}

  ngOnInit(): void {
    this.getAsks();
  }

  async getAsks() {
    this.asks = await this.askService.getAsks();
  }

  async loadMore() {
    const asks = await this.askService.getAsks(this.asks.length + 1);
    this.asks = this.asks.concat(asks);
  }
}
