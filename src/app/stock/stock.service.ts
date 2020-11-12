import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  baseUrl = 'http://127.0.0.1:5000/api/';
  endPointStock = 'stocks/';
  endPointCurrency = 'currencies/';
  endPointBasicUnit = 'basicunits/';
  endPointSupplier = 'suppliers/';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllStockLists(): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.endPointStock}`, { headers: this.httpHeaders });
  }

  getAllSupplierLists(): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.endPointSupplier}`, { headers: this.httpHeaders });
  }

  getStockById(stockId): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.endPointStock}${stockId}`, { headers: this.httpHeaders });
  }

  getAllCurrenciesLists(): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.endPointCurrency}`, { headers: this.httpHeaders });
  }

  getAllBasicUnitLists(): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.endPointBasicUnit}`, { headers: this.httpHeaders });
  }

  putStock(stockData): Observable<any> {
    return this.http.put(`${this.baseUrl}${this.endPointStock}${stockData.id}`, JSON.stringify(stockData), { headers: this.httpHeaders });
  }

  postNewStockObject(newStockData): Observable<any> {
    return this.http.post(`${this.baseUrl}${this.endPointStock}`, newStockData, { headers: this.httpHeaders });
  }
}
