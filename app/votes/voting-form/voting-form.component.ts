import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voting-form',
  templateUrl: './voting-form.component.html',
  styleUrls: ['./voting-form.component.css']
})
export class VotingFormComponent implements OnInit {
  error=false;
  errorMessage="";
  hasMessage=false;
  message="";
  selectedColor="QUESTION";
  selectedPet="QUESTION";
  constructor() { }

  ngOnInit() {
  }

}
