import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AskRoutingModule } from './ask-routing.module';
import { AskComponent } from './comments/ask.component';
import { SharedModule } from 'src/app/@shared';

@NgModule({
  declarations: [AskComponent],
  imports: [CommonModule, AskRoutingModule, SharedModule],
})
export class AskModule {}
