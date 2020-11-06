import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewStockComponent } from './stock/add-new-stock/add-new-stock.component';
import { AddNewSupplierComponent } from './supplier/add-new-supplier/add-new-supplier.component';
import { MainComponent } from './main/main.component';
import { StockComponent } from './stock/stock.component';
import { SupplierComponent } from './supplier/supplier.component';
import { UpdateComponent } from './stock/update/update.component';
import { UpdateSupplierComponent } from './supplier/update-supplier/update-supplier.component';

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
            path: "update/:stockId",
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
            path: "update-supplier/:supplierId",
            component: UpdateSupplierComponent
          },
          {
            path: "add-new-supplier",
            component: AddNewSupplierComponent
          }
        ]
      }      
    ]
  },
  // Calısmıyor :/
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
