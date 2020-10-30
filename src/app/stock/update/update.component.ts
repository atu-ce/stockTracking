import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../../data-base.service';
import { Update } from './update-model';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  //Düzeltilecek
  // @Input() datas: any[];
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

  constructor(private dateBase: DataBaseService) {
    this.getInfo();
  }

  ngOnInit(): void { }

  getInfo() {
    this.stocks = this.model_update.stock_name_obje;
    this.suppliers = this.model_update.supplier_name_obje;
    this.total_amounts = this.model_update.total_amount_obje;
    this.is_actives = this.model_update.is_active_obje;
    this.unit_prices = this.model_update.unit_price_obje;
    this.basic_units = this.model_update.basic_unit_oble;
    this.currencies = this.model_update.currency_obje;
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

export class NewModel{
  stock: string;
  supplier: string;
  totalAmount: any;
  isActive: any;
  unitPrice: any;
  currency: any;
  basicUnit: any;
}