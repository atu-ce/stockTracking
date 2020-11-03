import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { StockService } from '../stock.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [StockService]
})
export class UpdateComponent implements OnInit {

  @Input() getDatas: Observable<any>;

  index: number;
  model = new NewModel();

  constructor(private dateBase: StockService) {
  }

  ngOnInit(): void {
    console.log("data(from update): ", this.getDatas)
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

  submit() {
    console.log("submit çalıştı");
    console.log("index update: ",this.index);
    
    this.getDatas[this.index].stock_name = this.model.stock;
    this.getDatas[this.index].supplier_name = this.model.supplier;
    this.getDatas[this.index].total_amount = this.model.totalAmount;
    this.getDatas[this.index].is_active = this.model.isActive;
    this.getDatas[this.index].unit_price = this.model.unitPrice;
    this.getDatas[this.index].basic_unit = this.model.basicUnit;
    this.getDatas[this.index].currency_code = this.model.currency_code;
    console.log("update deneme:\n", this.getDatas);
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