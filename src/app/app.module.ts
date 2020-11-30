import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { SupplierComponent } from './supplier/supplier.component';
import { UpdateComponent } from './stock/update/update.component';
import { AddNewStockComponent } from './stock/add-new-stock/add-new-stock.component';
import { AddNewSupplierComponent } from './supplier/add-new-supplier/add-new-supplier.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateSupplierComponent } from './supplier/update-supplier/update-supplier.component';
// import { ModalComponent } from './modal/modal.component'; # Modal gerekli oldugunda yorum satirini kaldirirsin.
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    MainComponent,
    SupplierComponent,
    UpdateComponent,
    AddNewStockComponent,
    AddNewSupplierComponent,
    UpdateSupplierComponent,
    // ModalComponent # Modal gerekli oldugunda yorum satirini kaldirirsin.
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //Pathlerı belırlemek ıcın ımport ettık
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      extendedTimeOut: 1000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      disableTimeOut: false,
      progressBar: true,
      progressAnimation: 'decreasing',
    }),

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }