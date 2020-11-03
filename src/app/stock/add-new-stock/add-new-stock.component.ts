import { Component, OnInit } from '@angular/core';
import { BasicUnit, NewBasicUnit } from '../../basic-unit/basic-unit-model';
import { Currency, NewCurrency } from '../../currency/currency-model';
import { IsActive, NewIsActive } from '../../is-active/is-active-model';
import { NewSupplier, Supplier } from '../../supplier/supplier-model';
import { Amount, TotalAmount } from '../../total-amount/total-amount-model';
import { NewPrice, UnitPrice } from '../../unit-price/unit-price-model';
import { MaterialStock, NewStock } from '../stock-model';
import { AddNewStock } from './add-new-stock-model';

@Component({
  selector: 'app-add-new-stock',
  templateUrl: './add-new-stock.component.html',
  styleUrls: ['./add-new-stock.component.css']
})
export class AddNewStockComponent implements OnInit {

  stocks: any;
  suppliers: any;
  total_amounts: any;
  is_actives: any;
  unit_prices: any;
  basic_units: any;
  currencies: any;

  model = new NewModel();
  model_add_new_stock = new AddNewStock();

  model_new_stock = new MaterialStock();
  model_new_supplier = new Supplier();
  model_new_basic_unit = new BasicUnit();
  model_new_currency = new Currency();
  model_new_is_active = new IsActive();
  model_new_total_amount = new TotalAmount();
  model_new_unit_price = new UnitPrice();

  constructor() {
    this.getInfo();
  }



  ngOnInit(): void { }

  getInfo() {
    this.stocks = this.model_add_new_stock.stock_name_obje;
    this.suppliers = this.model_add_new_stock.supplier_name_obje;
    this.total_amounts = this.model_add_new_stock.total_amount_obje;
    this.is_actives = this.model_add_new_stock.is_active_obje;
    this.unit_prices = this.model_add_new_stock.unit_price_obje;
    this.basic_units = this.model_add_new_stock.basic_unit_oble;
    this.currencies = this.model_add_new_stock.currency_obje;
  }

  submit(stock: string, supplier: string, total_amount, is_active, unit_price, basic_unit, currency) {

    if (stock != "") {
      console.log("kosuf(submit) calısıyor");
      this.model.stock = stock;
      this.model_new_stock.stock_name.push(new NewStock(this.model.stock));
      console.log("stock(submit-push): ", this.model_new_stock.stock_name, this.model.stock);
    }
    if (supplier != "") {
      this.model.supplier = supplier;
      this.model_new_supplier.supplier_name.push(new NewSupplier(this.model.supplier));
    }
    if (total_amount != "") {
      this.model.totalAmount = total_amount;
      this.model_new_total_amount.total_amount.push(new Amount(this.model.totalAmount));
    }
    if (is_active != "") {
      this.model.isActive = is_active;
      this.model_new_is_active.is_active.push(new NewIsActive(this.model.isActive));
    }
    if (unit_price != "") {
      this.model.unitPrice = unit_price;
      this.model_new_unit_price.unit_price.push(new NewPrice(this.model.unitPrice));
    }
    if (basic_unit != "") {
      this.model.basicUnit = basic_unit;
      this.model_new_basic_unit.basic_unit.push(new NewBasicUnit(this.model.basicUnit));
    }
    if (currency != "") {
      this.model.currency = currency;
      this.model_new_currency.currency.push(new NewCurrency(this.model.currency));
    }
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