import { Component, OnInit } from '@angular/core';
import { Inject, Injectable } from "@angular/core";
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { BuyerService } from './buyer.service';
import { Buyer } from './buyer';



@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
@Injectable({
  providedIn:'root'
})
export class BuyerComponent implements OnInit {
  [x: string]: any;
  public buyers:Buyer[];
  public buyer:Buyer;

  constructor(private buyerService:BuyerService,private router:Router){}

  ngOnInit(): void {
    this.getBuyer();
  }
  public getBuyer():void{
   this.buyerService.getAllBuyer().subscribe(
    (response:Buyer[])=>{
      this.buyers=response; 
    },
    (error: HttpErrorResponse) =>{
      alert(error.message); 
    }
   );
  }
 
  public addBuyers(addForm:NgForm):void{
   var name= (addForm.value).buyerName;
   var newName=(name.charAt(0)+"").toUpperCase()+""+name.substring(1);
   (addForm.value).buyerName=newName;
    this.buyerService.addBuyer(addForm.value).subscribe(
      (response:Buyer)=>{
        this.getBuyer();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      
    )
    document.getElementById('addFormClose').click();
  }

  public onOpenModal(buyer:Buyer):void{
    this.buyer=buyer;
  }

  public editBuyers(addForm:NgForm): void{
    var name= (addForm.value).buyerName;
   var newName=(name.charAt(0)+"").toUpperCase()+""+name.substring(1);
   (addForm.value).buyerName=newName;
    this.buyerService.addBuyer(addForm.value).subscribe(
      (response:Buyer)=>{
        this.getBuyer();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      
    )
    document.getElementById('editFormClose').click();
  }

  public onDeleteBuyer(buyerId:number):void{
    this.buyerService.onDeleteBuyer(buyerId).subscribe(
      (response:void)=>{
        this.getBuyer();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

    );
  }

 public searchBuyer(key:string):void{
  this.buyerService.searchBuyer(key).subscribe(
    (response:Buyer[])=>{
      this.buyers=response; 
      
    },
    (error: HttpErrorResponse) =>{
      
        this.getBuyer();
      
    }
  );
 }

 public movetovocher():void{
   this.router.navigate(['vocher']); 
}

public moveToUsers():void{
  this.router.navigate(['user']);
}

}


