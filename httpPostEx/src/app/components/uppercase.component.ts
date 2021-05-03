import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { Uppercase } from '../model/uppercase.model';
import { UppercaseService } from '../services/uppercase.service';

@Component({
  selector: 'uppercase',
  templateUrl: './uppercase.component.html',
  styleUrls: ['./uppercase.component.css']
})
export class UppercaseComponent implements OnInit {

  result:any;
  my_msg:any;
  constructor(private service:UppercaseService, private spinner:SpinnerVisibilityService) { }

  ngOnInit(): void {
  }

  clickMe(arg1:any):any{
    this.spinner.show();
    this.service.convertToUppercase({"message":arg1}).subscribe(
      (posResp)=>{
        this.result=posResp;
        this.spinner.hide();
      },
      (errResp:HttpErrorResponse)=>{
        console.log(errResp)
        this.spinner.hide();
      });
  }
}
