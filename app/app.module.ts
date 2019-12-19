import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VotingFormComponent } from './votes/voting-form/voting-form.component';
import { VotingResultsComponent } from './votes/voting-results/voting-results.component';
import { VotingPetComponent } from './votes/voting-pet/voting-pet.component';
import { VotingColorComponent } from './votes/voting-color/voting-color.component';
import { BackendService } from './backend.service';


@NgModule({
  declarations: [
    AppComponent,
    VotingFormComponent,
    VotingResultsComponent,
    VotingPetComponent,
    VotingColorComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    BackendService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
