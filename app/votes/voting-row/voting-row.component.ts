import { Component, OnInit } from '@angular/core';

export interface Vote {
  name: string;
  color: string;
  cats_or_dogs: string;
}

@Component({
  selector: 'app-voting-row',
  templateUrl: './voting-row.component.html',
  styleUrls: ['./voting-row.component.css']
})
export class VotingRowComponent implements OnInit {
  votes: Vote[] = [
    {name: 'Juan P', color:'RED', cats_or_dogs:'DOGS'},
    {name: 'Pedro', color:'BLUE', cats_or_dogs:'CATS'}
  ];
  displayedColumns: string[] = ['name','color', 'cats_or_dogs'];
  constructor() { }

  ngOnInit() {
  }

}
