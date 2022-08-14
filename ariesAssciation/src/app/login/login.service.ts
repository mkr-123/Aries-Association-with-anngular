import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpClientModule, HttpEventType, HttpHeaders, HttpResponse } from  '@angular/common/http';
import { Router } from '@angular/router';


import { Login } from "./login";
import { environment } from "src/environments/environment";





@Injectable({
    providedIn:'root'
})

export class LoginService implements HttpResponse<Boolean> {
    private apiServerUrl=environment.apiBaseUrl;
  
   
   
    constructor(private http: HttpClient,private router:Router){}
    body: Boolean;
    type: HttpEventType.Response;
    clone(): HttpResponse<Boolean>;
    clone(update: { headers?: HttpHeaders; status?: number; statusText?: string; url?: string; }): HttpResponse<Boolean>;
    clone<V>(update: { body?: V; headers?: HttpHeaders; status?: number; statusText?: string; url?: string; }): HttpResponse<V>;
    clone(update?: unknown): HttpResponse<Boolean> | HttpResponse<Login> {
        throw new Error("Method not implemented.");
    }
    headers: HttpHeaders;
    status: number;
    statusText: string;
    url: string;
    ok: boolean;

  
    public checkValidation(login:Login):any{
   return this.http.post<Boolean>(`${this.apiServerUrl}/login/check/${login.userName}/${login.password}`,login).
    forEach((value:Boolean)=>{
if(value===true){
    this.router.navigate(['buyer']);
}
else{
   alert("You have wrong Password Or Username please check");
}
});
  
    }
}




