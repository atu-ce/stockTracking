import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { error } from 'console';
import { Observable } from 'rxjs';
import { CurrencyService } from './currency.service';


@Component({
  selector: 'currency-modal',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CurrencyComponent implements OnInit {

  currencyList: any[] = [];
  selectedObje: any;
  currenyCode: string;
  show: boolean;

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this.getCurrencyList();
  }

  refresh(): void {
    window.location.reload();
  }

  getCurrencyList(): void {
    // Veri tabanindaki Base_currency disindaki tüm currency'yi getirir.
    this.currencyService.getAllCurrenciesLists().subscribe(
      (res: any[]) => {
        const index = res.findIndex(item => item.code === 'USD');
        if (index > -1) {
          res.splice(index, 1);
        }
        this.currencyList = res;
      },
      error => {
        throw error;
      }
    );
  }

  selected() {
    // Secilen currency'nin guncel listesini getirir.
    this.currencyService.getCurrencyRateByCode(this.currenyCode).subscribe(
      res => {
        this.show = true;
        this.selectedObje = res;
      },
      error => {
        throw error;
      }
    );

  }

}
