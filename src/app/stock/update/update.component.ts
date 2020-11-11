import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [StockService]
})

export class UpdateComponent implements OnInit {

  stockObject: any;
  currencyObject: any;
  basicUnitObject: any;
  supplierObject: any;

  constructor(private stockService: StockService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const stockId = params.get('stockId');
      this.stockService.getStockById(stockId).subscribe(
        res => {
          this.stockObject = res;
        },
        err => {
          throw err;
        }
      )
    });
    this.getCurrencyList();
    this.getBasicUnitList();
    this.getSupplierList();
  }

  getSupplierList(): void {
    this.stockService.getAllSupplierLists().subscribe(
      res => {
        this.supplierObject = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  getCurrencyList(): void {
    this.stockService.getAllCurrenciesLists().subscribe(
      res => {
        this.currencyObject = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  getBasicUnitList(): void {
    this.stockService.getAllBasicUnitLists().subscribe(
      res => {
        this.basicUnitObject = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      f.value.id = this.stockObject.id;
      this.stockService.putStock(f.value).subscribe(
        res => { },
        err => {
          throw err
        }
      );
    };
  }
}