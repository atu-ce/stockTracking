import { Component, OnInit, ViewChild } from '@angular/core';
import { StockService } from '../stock.service';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ModalService } from '../../modal/modal.service';

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
  isChanged: boolean = false;
  changedObjects: Array<any> = [];
  getAndUnchangedStockLists: any;

  constructor(
    private stockService: StockService,
    private route: ActivatedRoute,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    // Sadece islem yapilan id'deki stock listesini getirmek icin.
    this.route.paramMap.subscribe(params => {
      const stockId = params.get('stockId');
      this.stockService.getStockById(stockId).subscribe(
        res => {
          this.stockObject = res;
          this.getAndUnchangedStockLists=this.stockObject;
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

  // Modal bolumu icin.
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
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

  // Sayfayi yenilemek icin 
  refresh(): void {
    window.location.reload();
  }

  
  onSubmit(f: NgForm) {
    console.log(this.getAndUnchangedStockLists);
    console.log(this.stockObject);
    
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

      // Modalda yazilacak metin icin gerekli kodlar.
      if(f.value.total_amount != this.getAndUnchangedStockLists.total_amount){
        this.isChanged = true;
        this.changedObjects.push(`Total Amount değeri: ${this.getAndUnchangedStockLists.total_amount} iken, ${f.value.total_amount} yapıldı.`); 
      }
      if(f.value.is_active != this.getAndUnchangedStockLists.is_active){
        this.isChanged = true;
        this.changedObjects.push(`is Active değeri: ${this.getAndUnchangedStockLists.is_active} iken, ${f.value.is_active} yapıldı.`); 
      }
      if(f.value.stock_name != this.getAndUnchangedStockLists.stock_name){
        this.isChanged = true;
        this.changedObjects.push(`Stock Name değeri: ${this.getAndUnchangedStockLists.stock_name} iken, ${f.value.stock_name} yapıldı.`); 
      }
      if(f.value.unit_price != this.getAndUnchangedStockLists.unit_price){
        this.isChanged = true;
        this.changedObjects.push(`Unit Price değeri: ${this.getAndUnchangedStockLists.unit_price} iken, ${f.value.unit_price} yapıldı.`); 
      }
      if(f.value.currency_code != this.getAndUnchangedStockLists.currency_code){
        this.isChanged = true;
        this.changedObjects.push(`Currency değeri: ${this.getAndUnchangedStockLists.currency_code} iken, ${f.value.currency_code} yapıldı.`); 
      }
      if(f.value.basic_unit_code != this.getAndUnchangedStockLists.basic_unit_code){
        this.isChanged = true;
        this.changedObjects.push(`Basic Unit değeri: ${this.getAndUnchangedStockLists.basic_unit_code} iken, ${f.value.basic_unit_code} yapıldı.`); 
      }
      if(f.value.supplier_name != this.getAndUnchangedStockLists.supplier_name){
        this.isChanged = true;
        this.changedObjects.push(`Supplier Name değeri: ${this.getAndUnchangedStockLists.supplier_name} iken, ${f.value.supplier_name} yapıldı.`); 
      }
      
      this.stockService.putStock(f.value).subscribe(
        res => { },
        err => {
          throw err
        }
      );
    };
  }
}