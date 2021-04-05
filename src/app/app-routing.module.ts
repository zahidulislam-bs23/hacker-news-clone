import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/auth/services/auth.guard';
import { Shell } from './shell/services/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: '',
      loadChildren: () =>
        import('./modules/home/home.module').then((m) => m.HomeModule),
    },
    {
      path: 'newest',
      loadChildren: () =>
        import('./modules/home/home.module').then((m) => m.HomeModule),
    },
    {
      path: 'jobs',
      loadChildren: () =>
        import('./modules/job/job.module').then((m) => m.JobModule),
    },
    {
      path: 'ask',
      loadChildren: () =>
        import('./modules/ask/ask.module').then((m) => m.AskModule),
    },
    {
      path: 'show',
      loadChildren: () =>
        import('./modules/show/show.module').then((m) => m.ShowModule),
    },
  ]),
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'submit',
    loadChildren: () =>
      import('./modules/submit/submit.module').then((m) => m.SubmitModule),
    canActivate: [AuthGuard],
  },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
