import { Inject, Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpClientModule } from  '@angular/common/http';
import { Observable } from "rxjs";

import { Buyer } from "./buyer";

@Injectable({
    providedIn:'root'
})
export class BuyerService{

    private apiServerUrl=environment.apiBaseUrl;
    constructor(private http: HttpClient){}
    public getAllBuyer():Observable<Buyer[]>{
        return  this.http.get<Buyer[]>(`${this.apiServerUrl}/admin/allBuyer`);
    }

    public addBuyer(buyer:Buyer):Observable<Buyer>{
        return this.http.post<Buyer>(`${this.apiServerUrl}/admin/addBuyer`,buyer);
    }

    public onDeleteBuyer(buyerId:number):Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/admin/delete/${buyerId}`);
    }

    public searchBuyer(buyerName:string):Observable<Buyer[]>{
        return this.http.get<Buyer[]>(`${this.apiServerUrl}/admin/findByName/${buyerName}`);
    }
}