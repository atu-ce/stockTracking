import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private modals: any[] = [];

  baseUrl = 'http://127.0.0.1:5000/api/';
  endPointCurrency = 'currency-rates/';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllCurrencyRateLists(): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.endPointCurrency}`, { headers: this.httpHeaders });
  }

  getCurrencyRateById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.endPointCurrency}${id}`, { headers: this.httpHeaders });
  }

  getCurrencyRateByCode(currency = 'TL'): Observable<any>  {
    const endpoint = 'currency-last-rate/';
    const myparams = new HttpParams()
      .append('currency', currency);
    return this.http.get(`${this.baseUrl}${endpoint}`, { headers: this.httpHeaders, params: myparams });
  }
}
