import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewStockComponent } from './stock/add-new-stock/add-new-stock.component';
import { AddNewSupplierComponent } from './supplier/add-new-supplier/add-new-supplier.component';
import { MainComponent } from './main/main.component';
import { StockComponent } from './stock/stock.component';
import { SupplierComponent } from './supplier/supplier.component';
import { UpdateComponent } from './stock/update/update.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "stock",
        component: StockComponent,
        children: [
          {
            path: "update",
            component: UpdateComponent,
          },
          {
            path: "add-new-stock",
            component: AddNewStockComponent
          }
        ]
      },
      {
        path: "supplier",
        component: SupplierComponent,
        children: [
          {
            path: "add-new-supplier",
            component: AddNewSupplierComponent
          }
        ]
      }      
    ]
  },
  // {
  //   path: "**",
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
