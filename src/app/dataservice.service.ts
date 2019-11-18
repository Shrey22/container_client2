import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(public http : HttpClient) { }

  Getdata()
  {
   return this.http.get("http://200.0.1.188:4000/movie");
  }
 
}
