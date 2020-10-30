import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
// import { TodoComponent } from './todo/todo.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { SupplierComponent } from './supplier/supplier.component';
import { BasicUnitComponent } from './basic-unit/basic-unit.component';
import { CurrencyRateComponent } from './currency-rate/currency-rate.component';
import { CurrencyComponent } from './currency/currency.component';
import { UpdateComponent } from './update/update.component';
import { AddNewStockComponent } from './add-new-stock/add-new-stock.component';
import { AddNewSupplierComponent } from './add-new-supplier/add-new-supplier.component';
import { TotalAmountComponent } from './total-amount/total-amount.component';
import { IsActiveComponent } from './is-active/is-active.component';
import { UnitPriceComponent } from './unit-price/unit-price.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    // TodoComponent,
    MainComponent,
    SupplierComponent,
    BasicUnitComponent,
    CurrencyRateComponent,
    CurrencyComponent,
    UpdateComponent,
    AddNewStockComponent,
    AddNewSupplierComponent,
    TotalAmountComponent,
    IsActiveComponent,
    UnitPriceComponent
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
