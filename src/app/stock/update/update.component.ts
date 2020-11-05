import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [StockService]
})

export class UpdateComponent implements OnInit {

  index: number;
  model = new NewModel();
  getAllStockObje: Observable<any>;
  
  constructor(private stockService: StockService) { }

  getStocksList(): void {
    this.stockService.getAllStockLists().subscribe(
      res => {
        this.getAllStockObje = res;
        console.log("data(from update): ", res)
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.getStocksList();
  }

  postValue(stock: string, supplier: string, total_amount, is_active: boolean, unit_price, basic_unit, currency_code, i: number) {
    console.log("postValue çalıştı");

    this.index = i-1
    this.model.stock = stock;
    this.model.supplier = supplier;
    this.model.totalAmount = total_amount;
    this.model.isActive = is_active;
    this.model.unitPrice = unit_price;
    this.model.basicUnit = basic_unit;
    this.model.currency_code = currency_code;
  }

  submit(): void {
    console.log("submit çalıştı");
    console.log("index update: ",this.index);
    
    this.getAllStockObje[this.index].stock_name = this.model.stock;
    this.getAllStockObje[this.index].supplier_name = this.model.supplier;
    this.getAllStockObje[this.index].total_amount = this.model.totalAmount;
    this.getAllStockObje[this.index].is_active = this.model.isActive;
    this.getAllStockObje[this.index].unit_price = this.model.unitPrice;
    this.getAllStockObje[this.index].basic_unit = this.model.basicUnit;
    this.getAllStockObje[this.index].currency_code = this.model.currency_code;

    console.log("update deneme:\n", this.getAllStockObje);
    
    // Güncellenen datayi geri django'ya göndermek icin eklenen kodlar, şimdilik askiya alindi.
    // this.stockService.putAllStockLists(this.getAllStockObje).subscribe(
    //   res =>{
    //     console.log(res);
        
    //   },
    //   err =>{
    //     console.error(err);
        
    //   }
    // );    
  }
}

export class NewModel {
  stock: string;
  supplier: string;
  totalAmount: any;
  isActive: any;
  unitPrice: any;
  currency_code: any;
  basicUnit: any;
}