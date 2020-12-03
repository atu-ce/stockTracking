import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrencyService } from '../currency/currency.service';
import { StockService } from './stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
  providers: [StockService]
})
export class StockComponent implements OnInit {

  getAllStockObje: Observable<any>;
  currentlyCurrencyRateLists: Observable<any>;

  constructor(
    private stockService: StockService,
    private router: Router,
    private currencyService: CurrencyService
    ) { }

  ngOnInit(): void {
    this.getData();
    // this.currentlyCurrencyRate();
  }

  getData(): void {
    this.stockService.getAllStockLists().subscribe(
      res => {
        this.getAllStockObje = res;
      },
      error => {
        throw error;
      }
    );
  }

  navigateToStockId(id) {
    this.router.navigate(['/stock/update', id]);
  }

  searchStock(stockName: any) {
    this.stockService.getStockByName(stockName).subscribe(
      res => {
        this.getAllStockObje = res;
      },
      err => { throw err; }
    );
  }

  // currentlyCurrencyRate() {
  //   this.currencyService.getAllCurrencyRateLists().subscribe(
  //     res => {
  //       // console.log(res);
  //       this.currentlyCurrencyRateLists =  res;
        
  //     },
  //     err => { throw err; }
  //   );
  // }

}
