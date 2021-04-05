import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { JobComponent } from './components/job.component';
import { SharedModule } from 'src/app/@shared';

@NgModule({
  declarations: [JobComponent],
  imports: [CommonModule, JobRoutingModule, SharedModule],
})
export class JobModule {}
