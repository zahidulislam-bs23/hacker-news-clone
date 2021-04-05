import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowRoutingModule } from './show-routing.module';
import { ShowComponent } from './components/show.component';
import { SharedModule } from 'src/app/@shared';

@NgModule({
  declarations: [ShowComponent],
  imports: [CommonModule, ShowRoutingModule, SharedModule],
})
export class ShowModule {}
