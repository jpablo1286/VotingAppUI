import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VotingFormComponent } from './votes/voting-form/voting-form.component';
import { VotingResultsComponent } from './votes/voting-results/voting-results.component';

const routes: Routes = [
  { path: '', component: VotingFormComponent },
  { path: 'results', component: VotingResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
