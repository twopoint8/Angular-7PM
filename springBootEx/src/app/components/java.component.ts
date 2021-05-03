import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/User.model';
import { JavaService } from '../services/java.service';

@Component({
  selector: 'java',
  templateUrl: './java.component.html',
  styles: [
  ]
})
export class JavaComponent implements OnInit {

  public data:User[];
  constructor(private service:JavaService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(
     (posRes) => {
       this.data=posRes;
     },
     (errResp:HttpErrorResponse)=>{
       console.log(errResp);
     });

     console.log("Vishnat");
  }

}
