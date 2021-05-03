import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Uppercase } from '../model/uppercase.model';

@Injectable({
  providedIn: 'root'
})
export class UppercaseService {

  constructor(private http:HttpClient) { }

  public convertToUppercase(data:Uppercase):Observable<Uppercase>{
    return this.http.post<Uppercase>(`http://test-routes.herokuapp.com/test/uppercase`, data);

  };
}
