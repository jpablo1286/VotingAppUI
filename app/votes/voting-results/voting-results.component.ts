import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
