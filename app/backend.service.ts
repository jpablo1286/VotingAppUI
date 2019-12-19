import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {

  urlBase="http://votingapp.juanrivera.org:8000/"

  token="cb63835c1446ebe99a3bf31073e7b21f02f4fbf6";
  countryCode="";
  httpOptions: any;
  hasMessage=false;
  retries=0
  error=false;
  errorMessage="";
  message="";
  votes: any;
  colors: any;
  pets: any;
  votesUpdated = new Subject();
  petsUpdated = new Subject();
  colorsUpdated = new Subject();
  errorInfo = new Subject();
  messageService = new Subject();

  constructor(private httpClient: HttpClient) {
  }

  getVotes(){
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization':  'Token '+ this.token
       })
    };
    this.httpClient.get(this.urlBase + 'vote/list',this.httpOptions).subscribe((res)=>{
        this.retries = 0;
        this.votes = res;
        this.votesUpdated.next();
        this.clearErrors();

      },
      (err) => {
        this.setError("Error retriving data");
        this.retries = this.retries + 1;
        if (this.retries < 4)
        {
          this.getVotes();
        }
      }
    );
  }

  getColors(){
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization':  'Token '+ this.token
       })
    };
    this.httpClient.get(this.urlBase + 'vote/colors',this.httpOptions).subscribe((res)=>{
        this.retries = 0;
        this.colors = res;
        this.colorsUpdated.next();
        this.clearErrors();

      },
      (err) => {
        this.setError("Error retriving data");
        this.retries = this.retries + 1;
        if (this.retries < 4)
        {
          this.getVotes();
        }
      }
    );
  }

  getPets(){
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization':  'Token '+ this.token
       })
    };
    this.httpClient.get(this.urlBase + 'vote/pets',this.httpOptions).subscribe((res)=>{
        this.retries = 0;
        this.pets = res;
        this.petsUpdated.next();
        this.clearErrors();

      },
      (err) => {
        this.setError("Error retriving data");
        this.retries = this.retries + 1;
        if (this.retries < 4)
        {
          this.getVotes();
        }
      }
    );
  }
  createVote(name:string, color:string, cats_or_dogs:string){
    this.setError("Prueba");
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization':  'Token '+ this.token
       })
    };
    this.httpClient.post(this.urlBase + 'vote/create',{name:name, color: color, cats_or_dogs: cats_or_dogs},this.httpOptions).subscribe((res)=>{
        this.clearErrors();
        this.setMessage("Vote sent successfully ");
      },
      (err) => {
        this.setError("Vote failed: "+err);
      }
    );
  }

 clearErrors(){
   this.error=false;
   this.errorMessage="";
   this.errorInfo.next();
 }
 setError(myError:string){
   this.error=true;
   this.errorMessage=myError;
   this.errorInfo.next();
   this.clearMessage();
   this.messageService.next();
 }


 setMessage(myMessage:string){
   this.hasMessage=true;
   this.message = myMessage;
   this.messageService.next();
   this.clearErrors();
   this.errorInfo.next();
 }

 clearMessage(){
   this.hasMessage=false;
   this.message = "";
   this.messageService.next();
 }

}
