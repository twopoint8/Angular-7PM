import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../Modal/spring.modal';

@Injectable({
  providedIn: 'root'
})
export class JavaService {

  constructor(private http:HttpClient) { }

  public getUsers():Observable <User[]>{

    return this.http.get<User[]>("http://localhost:8080/api/demo");
  }
};
