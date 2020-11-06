import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [StockService]
})

export class UpdateComponent implements OnInit {

  index: number;
  getStockIdObje: any;
  stockObject: any;

  constructor(private stockService: StockService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const stockId = params.get('stockId');
      this.stockService.getStockById(stockId).subscribe(
        res => {
          this.stockObject = res;
        },
        err => {
          throw err;
        }
      )
    });
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
    if (f.valid) {
      f.value.id = this.stockObject.id;
      this.stockService.putStock(f.value).subscribe(
        res => {
          console.log(res);

        },
        err => {
          throw err
        }
      );
    };
  }
}