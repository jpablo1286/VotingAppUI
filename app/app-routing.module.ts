import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VotingFormComponent } from './votes/voting-form/voting-form.component'

const routes: Routes = [
  { path: '', component: VotingFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
