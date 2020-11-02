import { Component } from '@angular/core';
import { DataBaseService } from './data-base.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataBaseService]
})
export class AppComponent {

  datas = [ ];

  constructor(private dateBase: DataBaseService) {
    this.getData();
  }

  getData = () => {
    this.dateBase.getAllData().subscribe(
      data => {
        this.datas = data;
        console.log("data(from app-component): ", data)
      },
      error => {
        console.log(error);
      }
    );
  };
}
