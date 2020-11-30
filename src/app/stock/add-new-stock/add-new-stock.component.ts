import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-add-new-stock',
  templateUrl: './add-new-stock.component.html',
  styleUrls: ['./add-new-stock.component.css'],
  providers: [StockService]
})
export class AddNewStockComponent implements OnInit {

  stockObject = new FormGroup({
    total_amount: new FormControl(''),
    is_active: new FormControl(''),
    stock_name: new FormControl(''),
    unit_price: new FormControl(''),
    currency_code: new FormControl(''),
    basic_unit_code: new FormControl(''),
    supplier_name: new FormControl('')
  });

  supplierObject:any;
  currencyObject:any;
  basicUnitObject:any;

  constructor(
    private stockService: StockService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
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

  showSuccess(){
    this.toastr.success("Yeni stok bilgileri eklendi.");
    setTimeout(() => {this.refresh();}, 1125);
  }

  refresh(): void {
    window.location.reload();
  }

  onSubmit() {
    if (this.stockObject.valid) {
      this.currencyObject.forEach( item=> {
        if(this.stockObject.value.currency_code == item.code){
          this.stockObject.value.currency =item.id;
        };
      }); 
  
      this.basicUnitObject.forEach( item=> {
        if(this.stockObject.value.basic_unit_code == item.code){
          this.stockObject.value.basic_unit =item.id;
        };
      }); 
  
      this.supplierObject.forEach( item=> {        
        if(this.stockObject.value.supplier_name == item.name){
          this.stockObject.value.supplier =item.id;
        };
      });

      this.stockService.postNewStockObject(this.stockObject.value).subscribe(
        res => { },
        err => {
          throw err
        }
      );
    }
  }
}
