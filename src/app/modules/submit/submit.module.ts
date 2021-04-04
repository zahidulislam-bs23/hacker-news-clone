import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmitRoutingModule } from './submit-routing.module';
import { SubmitComponent } from './components/submit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SubmitComponent],
  imports: [CommonModule, SubmitRoutingModule, ReactiveFormsModule],
})
export class SubmitModule {}
