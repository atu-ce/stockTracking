import { Component, OnInit } from '@angular/core';
import { Supplier } from './supplier-model';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  model_supplier = new Supplier();

  getSupplier() {
    return this.model_supplier.supplier_name;
  }

}
