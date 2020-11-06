import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Supplier } from './supplier-model';
import { SupplierService } from './supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css'],
  providers: [SupplierService]
})
export class SupplierComponent implements OnInit {

  getAllSupplierObject: Observable<any>;

  constructor(private supplierService: SupplierService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.supplierService.getAllSupplierLists().subscribe(
      res => {
        this.getAllSupplierObject = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  navigateToStockId(id) {
    this.router.navigate(['/supplier/update', id]);
 }
}
