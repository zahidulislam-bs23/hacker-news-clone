import { Component, Input, OnInit } from '@angular/core';
import { IShow } from '../../interfaces';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  @Input() show: IShow;
  @Input() serial: number;
  constructor() {}

  ngOnInit(): void {}
}
