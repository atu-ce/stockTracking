import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../../data-base.service';
import { Update } from './update-model';
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
  //Düzeltilecek
  @Input() getDatas: Observable<any>;
  // @Output() changeDatas = new EventEmitter();

  // change() {
  //   this.changeDatas.emit();
  // }
  //Düzeltilecek

  stocks: any;
  suppliers: any;
  total_amounts: any;
  is_actives: any;
  unit_prices: any;
  basic_units: any;
  currencies: any;

  index: number;

  model = new NewModel();
  model_update = new Update();

  constructor(private dateBase: StockService) {
  }

  ngOnInit(): void {
    this.getInfo();
    console.log("data(from update): ", this.getDatas)
  }

  getInfo() {
    this.getDatas.forEach(item => {
      this.stocks = item.stock_name;
      this.suppliers = item.supplier_name;
      this.total_amounts = item.total_amount;
      this.is_actives = item.is_active;
      this.unit_prices = item.unit_price;
      this.basic_units = item.basic_unit;
      this.currencies = item.currency_code;
      this.index = item.id
    });
  }

  postValue(stock: string, supplier: string, total_amount, is_active: boolean, unit_price, basic_unit, currency, i: number) {
    // debugger; kod calısırken ve console acıkken bu kodu gorurse kodlar durur ve inceleme imkani verir.
    this.index = i
    this.model.stock = stock;
    this.model.supplier = supplier;
    this.model.totalAmount = total_amount;
    this.model.isActive = is_active;
    this.model.unitPrice = unit_price;
    this.model.basicUnit = basic_unit;
    this.model.currency = currency;
  }

  submit() {
    this.stocks[this.index].stock = this.model.stock;
    this.suppliers[this.index].supplier = this.model.supplier;
    this.total_amounts[this.index].amount = this.model.totalAmount;
    this.is_actives[this.index].active = this.model.isActive;
    this.unit_prices[this.index].price = this.model.unitPrice;
    this.basic_units[this.index].new_basic_unit = this.model.basicUnit;
    this.currencies[this.index].newCurrency = this.model.currency;
  }
}

export class NewModel {
  stock: string;
  supplier: string;
  totalAmount: any;
  isActive: any;
  unitPrice: any;
  currency: any;
  basicUnit: any;
}