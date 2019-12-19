import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-voting-color',
  templateUrl: './voting-color.component.html',
  styleUrls: ['./voting-color.component.css']
})
export class VotingColorComponent implements OnInit {
  @Input() colorname: string;
  @Input() colorresult: number;
  @Input() percentage: number;
  constructor() { }

  ngOnInit() {
  }

}
