import { Component, Input, OnInit } from '@angular/core';
import { IAsk } from '../../interfaces';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss'],
})
export class AskComponent implements OnInit {
  @Input() ask: IAsk;
  @Input() serial: number;
  constructor() {}

  ngOnInit(): void {}
}
