import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewStockComponent } from './add-new-stock/add-new-stock.component';
import { AddNewSupplierComponent } from './add-new-supplier/add-new-supplier.component';
// import { BasicUnitComponent } from './basic-unit/basic-unit.component';
// import { CurrencyRateComponent } from './currency-rate/currency-rate.component';
// import { CurrencyComponent } from './currency/currency.component';
import { MainComponent } from './main/main.component';
import { StockComponent } from './stock/stock.component';
import { SupplierComponent } from './supplier/supplier.component';
import { UpdateComponent } from './update/update.component';
// import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      // {
      //   path: "todo",
      //   component: TodoComponent
      // },
      {
        path: "stock",
        component: StockComponent
      },
      {
        path: "supplier",
        component: SupplierComponent
      },
      {
        path: "update",
        component: UpdateComponent,
      },
      {
        path: "add-new-stock",
        component: AddNewStockComponent
      },
      {
        path: "add-new-supplier",
        component: AddNewSupplierComponent
      }
      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
