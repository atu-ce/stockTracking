import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
  currencyRateListForTL: any;
  currencyRateListForEUR: any;
  baseCurrency = "USD";
  currenyCode: string;
  show: boolean;

  constructor(
    private currencyService: CurrencyService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.getCurrencyList();
    this.getCurrencyRateForTL();
    this.getCurrencyRateForEUR();
  }

  showSuccess(){
    this.toastr.success("Değişim başarılı.");
    setTimeout(() => {this.refresh();}, 1125);
  }

  refresh(): void {
    window.location.reload();
  }

  getCurrencyList(): void {
    // Veri tabanindaki Base_currency disindaki tüm currency'yi getirir.
    this.currencyService.getAllCurrenciesLists().subscribe(
      (res: any[]) => {
        const index = res.findIndex(item => item.code === this.baseCurrency);
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

  getCurrencyRateForTL(): void {
    this.currencyService.getCurrencyRateTL().subscribe(
      (res: any[]) => {
        this.currencyRateListForTL = res;
      },
      error => {
        throw error;
      }
    );
  }

  getCurrencyRateForEUR(): void {
    this.currencyService.getCurrencyRateEUR().subscribe(
      (res: any[]) => {
        this.currencyRateListForEUR = res;
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

  newCurrencyRate() {
    this.currencyService.postNewCurrencyRate(this.selectedObje).subscribe(
      res => { },
      err => {
        throw err
      }
    );
  }

}
