import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubmitStoryService } from '../services/submit-story.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
})
export class SubmitComponent implements OnInit {
  error: string;
  storyForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private storyService: SubmitStoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createStoryForm();
  }

  createStoryForm() {
    this.storyForm = this.formBuilder.group({
      title: ['', Validators.required],
      url: [''],
      text: [''],
    });
  }

  createStory() {
    this.storyService.createStory(this.storyForm.value).subscribe(
      (resp) => {
        this.router.navigate(['/newest']);
      },
      (err) => {
        this.error = '* Something went wrong! Please try again';
      }
    );
  }
}
