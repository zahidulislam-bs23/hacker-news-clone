import { Component, Input, OnInit } from '@angular/core';
import { IStory } from '../../interfaces';
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {
  @Input() story: IStory;
  @Input() serial: number;
  constructor() {}

  ngOnInit(): void {}
}
