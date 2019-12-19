import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {

  urlBase="http://voting-back:8000/"

  token:"013c20d490866e1c8ea2a3838e75175ee08d3945";
  countryCode="";
  httpOptions: any;
  hasMessage=false;
  retries=0
  error=false;
  errorMessage="";
  message="";
  votes: any;
  votesUpdated = new Subject();
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
        this.setError("Error al traer los datos");
        this.retries = this.retries + 1;
        if (this.retries < 4)
        {
          this.getVotes();
        }
      }
    );
  }


  createVote(name:string, color:string, cats_or_dogs:string){
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization':  'Token '+ this.token
       })
    };
    this.httpClient.post(this.urlBase + 'vote/create',{name:name, color: color, cats_or_dogs: cats_or_dogs},this.httpOptions).subscribe((res)=>{
        this.clearErrors();
        this.setMessage("Se subscribio con exito");
      },
      (err) => {
        this.setError("Error al subscribir");
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
