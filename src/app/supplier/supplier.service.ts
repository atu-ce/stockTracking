import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  baseUrl = 'http://127.0.0.1:5000/api/';
  endPoint = 'suppliers/'
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllSupplierLists(): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.endPoint}`, { headers: this.httpHeaders });
  }

  getSupplierById(supplierId): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.endPoint}${supplierId}`, { headers: this.httpHeaders });
  }

  putSupplier(supplierData): Observable<any> {
    return this.http.put(`${this.baseUrl}${this.endPoint}${supplierData.id}`, JSON.stringify(supplierData), { headers: this.httpHeaders });
  }
}
