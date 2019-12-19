import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../backend.service';
import { Router } from '@angular/router';

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
  constructor(private backendService: BackendService, private router: Router) { }

  ngOnInit() {
    this.backendService.errorInfo.subscribe(
        ()=>{
          this.error = this.backendService.error;
          this.errorMessage = this.backendService.errorMessage;
        }
      );
    this.backendService.messageService.subscribe(
        ()=>{
          this.message = this.backendService.message;
          this.hasMessage = this.backendService.hasMessage;
        }
      );
  }
  vote(name:string, color:string, cats_or_dogs:string){
    if (name != "" && color != "QUESTION" && cats_or_dogs != "QUESTION")
    {
      this.errorMessage = ""
      this.error = false;
      this.backendService.createVote(name, color, cats_or_dogs);
      this.router.navigate(['/results']);
    }
    else
    {
      this.errorMessage = "All fields are mandatory"
      this.error = true;
    }

  }

}
