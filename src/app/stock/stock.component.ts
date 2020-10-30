import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { MaterialStock } from './stock-model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(private dataBaseService: DataBaseService) { }

  ngOnInit(): void {
  }

  model_stock = new MaterialStock();

  getStock() {
    return this.model_stock.stock_name;
  }
}
