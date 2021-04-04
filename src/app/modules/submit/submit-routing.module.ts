import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SubmitComponent } from './components/submit.component';

const routes: Routes = [{ path: '', component: SubmitComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class SubmitRoutingModule {}
