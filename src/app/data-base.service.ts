import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  baseUrl = 'http://127.0.0.1:5000';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllData(): Observable<any> {
    console.log("1.)\n", this.http.get(this.baseUrl + '/api/stocks/'), "\n2.)\n", { headers: this.httpHeaders });
    return this.http.get(this.baseUrl + '/api/stocks/', { headers: this.httpHeaders });
  }
}
