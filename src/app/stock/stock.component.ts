import { Component, OnInit } from '@angular/core';
import { MaterialStock } from './stock-model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  model_stock = new MaterialStock();

  getStock() {
    return this.model_stock.stock_name;
  }
}
