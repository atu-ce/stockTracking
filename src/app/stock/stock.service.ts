import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  baseUrl = 'http://127.0.0.1:5000/api/';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllStockLists(): Observable<any> {
    return this.http.get(this.baseUrl + 'stocks/', {headers:this.httpHeaders});
  }

  // Güncellenen datayi geri django'ya göndermek icin eklenen kodlar, şimdilik askiya alindi.
  // putAllStockLists(putToStockList) {
  //   return this.http.put(this.baseUrl + 'stocks/', JSON.stringify(putToStockList), {headers:this.httpHeaders});
  // }
}
