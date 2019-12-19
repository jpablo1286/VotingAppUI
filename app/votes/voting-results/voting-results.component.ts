import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../backend.service';

export interface Pet {
  name: string;
  petresult: string;
  percentage: string;
}

export interface Color {
  name: string;
  colorresult: string;
  percentage: string;
}

export interface Vote {
  name: string;
  color: string;
  cats_or_dogs: string;
}

@Component({
  selector: 'app-voting-results',
  templateUrl: './voting-results.component.html',
  styleUrls: ['./voting-results.component.css']
})
export class VotingResultsComponent implements OnInit {

  pets: Pet[] = [
    {name: 'CATS', petresult: '12', percentage: '60'},
    {name: 'DOGS', petresult: '8', percentage: '40'}
  ];

  colors: Color[] = [
    {name: 'RED', colorresult: '12', percentage: '20'},
    {name: 'BLUE', colorresult: '8', percentage: '20'},
    {name: 'YELLOW', colorresult: '12', percentage: '30'},
    {name: 'GREEN', colorresult: '12', percentage: '30'}
  ];

  votes: Vote[] = [
    {name: 'Juan P', color:'RED', cats_or_dogs:'DOGS'},
    {name: 'Pedro', color:'BLUE', cats_or_dogs:'CATS'}
  ];

  error=false;
  errorMessage="";
  hasMessage=false;
  message="";
  gotResults=false;
  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.backendService.messageService.subscribe(
        ()=>{
          this.message = this.backendService.message;
          this.hasMessage = this.backendService.hasMessage;
        }
      );
    this.backendService.errorInfo.subscribe(
        ()=>{
          this.error = this.backendService.error;
          this.errorMessage = this.backendService.errorMessage;
        }
      );
    this.backendService.votesUpdated.subscribe(
        ()=>{
          this.votes = this.backendService.votes;
          this.gotResults = true;
        }
      );
    this.backendService.colorsUpdated.subscribe(
        ()=>{
          this.colors = this.backendService.colors;
          this.gotResults = true;
        }
      );
    this.backendService.petsUpdated.subscribe(
        ()=>{
          this.pets = this.backendService.pets;
          this.gotResults = true;
        }
      );

  }
getResults() {
  this.backendService.getVotes();
  this.backendService.getColors();
  this.backendService.getPets();
 }
}
