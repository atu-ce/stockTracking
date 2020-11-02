import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MaterialStock } from './stock-model';
import { StockService } from './stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
  providers: [StockService]
})
export class StockComponent implements OnInit {

  getAllDataObje: Observable<any>;

  constructor(private dateBaseService: StockService) {
    // this.getData();
  }

  ngOnInit(): void {
    this.getData();
  }

  // getData = () => {
  //   this.dateBaseService.getAllData().subscribe(
  //     data => {
  //       this.datas = data;
  //       console.log("data(from stock): ", data)
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // };

  getData(): void {
    this.dateBaseService.getAllData().subscribe(
      res => {
        this.getAllDataObje = res;
        console.log("data(from stock): ", res)
      },
      error => {
        console.log(error);
      }
    );
  }

  model_stock = new MaterialStock();

  getStock() {
    return this.model_stock.stock_name;
  }
}
