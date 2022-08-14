import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService){}
  public checkValidation(addForm:NgForm):void{
  this.loginService.checkValidation(addForm.value);
  }


  ngOnInit(): void {
  }

}
