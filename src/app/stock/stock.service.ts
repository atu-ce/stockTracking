import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  baseUrl = 'http://127.0.0.1:5000/api/';
  endPoint = 'stocks/'
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllStockLists(): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.endPoint}`, { headers: this.httpHeaders });
  }

  getStockById(stockId): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.endPoint}${stockId}`, { headers: this.httpHeaders });
  }

  putStock(stockData): Observable<any> {
    return this.http.put(`${this.baseUrl}${this.endPoint}${stockData.id}`, JSON.stringify(stockData), { headers: this.httpHeaders });
  }
}
