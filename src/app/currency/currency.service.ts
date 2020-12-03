import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getCurrencyRate(): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.endPointCurrency}`, { headers: this.httpHeaders });
  }

  add(modal: any) {
      // add modal to array of active modals
      this.modals.push(modal);
  }

  remove(id: string) {
      // remove modal from array of active modals
      this.modals = this.modals.filter(x => x.id !== id);
  }

  open(id: string) {
      // open modal specified by id
      const modal = this.modals.find(x => x.id === id);
      modal.open();
  }

  close(id: string) {
      // close modal specified by id
      const modal = this.modals.find(x => x.id === id);
      modal.close();
  }
}
