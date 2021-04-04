import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmitRoutingModule } from './submit-routing.module';
import { SubmitComponent } from './submit.component';


@NgModule({
  declarations: [
    SubmitComponent
  ],
  imports: [
    CommonModule,
    SubmitRoutingModule
  ]
})
export class SubmitModule { }
