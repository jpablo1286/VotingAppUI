import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-voting-pet',
  templateUrl: './voting-pet.component.html',
  styleUrls: ['./voting-pet.component.css']
})
export class VotingPetComponent implements OnInit {
  @Input() petname: string;
  @Input() petresult: number;
  @Input() percentage: number;
  constructor() { }

  ngOnInit() {
  }

}
