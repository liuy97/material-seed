import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { demoRoutes } from './material-demo/demo-app/routes';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'demo', pathMatch: 'full'},
      ...demoRoutes,
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
