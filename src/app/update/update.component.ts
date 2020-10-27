import { Component, OnInit } from '@angular/core';
import { Update } from './update-model';
import { StockSuppModel } from '../update-stock-supp/stock-supp.model'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  stocks: any[];
  suppliers: any[];

  stock: string;
  supplier: string;

  index: number;

  model = new StockSuppModel();
  model_update = new Update();

  constructor() {
    this.getInfo();
  }



  ngOnInit(): void { }


  getInfo() {
    this.stocks = this.model_update.stock_name;
    this.suppliers = this.model_update.supplier_name;
  }

  postValue(stock: string, supplier: string, i: number) {
    // debugger; kod calısırken ve console acıkken bu kodu gorurse kodlar durur ve inceleme imkani verir.
    this.index = i
    this.model.stock = stock;
    this.model.supplier = supplier;
  }

  submit() {
    this.stocks[this.index].stock = this.model.stock;
    this.suppliers[this.index].supplier = this.model.supplier;
  }
}
