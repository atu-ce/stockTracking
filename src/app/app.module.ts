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

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    MainComponent,
    SupplierComponent,
    UpdateComponent,
    AddNewStockComponent,
    AddNewSupplierComponent,
    UpdateSupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //Pathlerı belırlemek ıcın ımport ettık
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
