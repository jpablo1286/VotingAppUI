import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

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
  @Input() votes: Vote[];
  displayedColumns: string[] = ['name','color', 'cats_or_dogs'];
  constructor() { }

  ngOnInit() {
  }

}
