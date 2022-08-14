import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vocher',
  templateUrl: './vocher.component.html',
  styleUrls: ['./vocher.component.css']
})
export class VocherComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public moveToBuyer():void{
    this.router.navigate(['buyer']);
  }

  public moveToUsers():void{
    this.router.navigate(['user']);
  }

}
