import { Inject, Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpClientModule } from  '@angular/common/http';
import { Observable } from "rxjs";


import { User } from "./user";

@Injectable({
    providedIn:'root'
})
export class UserService{
    private apiServerUrl=environment.apiBaseUrl;
    constructor(private http: HttpClient){}

    public addUser(user:User):Observable<User>{
        return this.http.post<User>(`${this.apiServerUrl}/admin/saveUser`,user);
    }
    public getUser():Observable<User[]>{
        return  this.http.get<User[]>(`${this.apiServerUrl}/admin/allUsers`);
    }
}