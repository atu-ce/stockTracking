import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StockService } from './stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
  providers: [StockService]
})
export class StockComponent implements OnInit {

  getAllDataObje: Observable<any>;

  constructor(private dateBaseService: StockService) { }

  ngOnInit(): void {
    this.getData();
  }

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
}
