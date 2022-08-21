import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { User } from './user';
import {UserService} from './user.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  [x: string]: any;
  public users:User[];
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  public movetovocher():void{
    this.router.navigate(['vocher']); 
 }

 public moveToBuyer():void{
  this.router.navigate(['buyer']);
 }

 public addUser(addForm:NgForm):void{
   this.userService.addUser(addForm.value).subscribe(
     (response:User)=>{
       this.getUser();
       addForm.reset();
     },
     (error: HttpErrorResponse) => {
       alert(error.message);
     }
     
   )
   document.getElementById('addFormClose').click();
 }

 public getUser():void{
  this.userService.getUser().subscribe(
    (response:User[])=>{
      this.users=response; 
    },
    (error: HttpErrorResponse) =>{
      alert(error.message); 
    }
  );
 }
}
