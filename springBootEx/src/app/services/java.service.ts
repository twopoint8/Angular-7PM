import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User.model';
@Injectable({
  providedIn: 'root'
})
export class JavaService {

  constructor(private http:HttpClient) { }

  public getUsers():Observable<User[]>{
    
    return this.http.get<User[]>("http://192.168.1.15:9090/getall");
  }
}
