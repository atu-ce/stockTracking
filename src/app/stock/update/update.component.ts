import { Component, OnInit, ViewChild } from '@angular/core';
import { StockService } from '../stock.service';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private stockService: StockService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    // Sadece islem yapilan id'deki stock listesini getirmek icin.
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

  // Guncellestirecegimiz bilgiyi listeden secmek icin.
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

  showSuccess(){
    this.toastr.success("Güncelleme gerçekleşti.");
    setTimeout(() => {this.refresh();}, 2500);
  }

  // Sayfayi yenilemek icin 
  refresh(): void {
    window.location.reload();
  }
  
  onSubmit(f: NgForm) {
    
    if (f.valid) {
      // Django'daki veri tabani listesiyle gonderilecek listenin ayni olmasi icin eklenen degiskenler.
      this.currencyObject.forEach(item => {
        if (f.value.currency_code == item.code) {
          f.value.currency = item.id;
        };
      });

      this.basicUnitObject.forEach(item => {
        if (f.value.basic_unit_code == item.code) {
          f.value.basic_unit = item.id;
        };
      });

      this.supplierObject.forEach(item => {
        if (f.value.supplier_name == item.name) {
          f.value.supplier = item.id;
        };
      });

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