import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-add-new-supplier',
  templateUrl: './add-new-supplier.component.html',
  styleUrls: ['./add-new-supplier.component.css'],
  providers: [SupplierService]
})
export class AddNewSupplierComponent implements OnInit {

  supplierObject = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private supplierService: SupplierService) { }

  ngOnInit() { }

  refresh(): void {
    window.location.reload();
  }

  onSubmit() {
    if (this.supplierObject.valid) {
      this.supplierService.postNewSupplierObject(this.supplierObject.value).subscribe(
        res => { },
        err => {
          throw err
        }
      );
    }
  }
}
