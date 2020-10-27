import { Component, Input, OnInit } from '@angular/core';
import { StockSuppModel } from '../update-stock-supp/stock-supp.model'

@Component({
  selector: 'app-update-stock-supp',
  templateUrl: './update-stock-supp.component.html',
  styleUrls: ['./update-stock-supp.component.css']
})
export class UpdateStockSuppComponent implements OnInit {
  
  @Input() model= new StockSuppModel();

  constructor() {
    console.log(this.model);
  }
  

  // @Input() stock: string;
  // @Input() supplier: string;

  ngOnInit(): void {
    
  }

}
