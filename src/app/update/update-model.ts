import { Supplier } from '../supplier/supplier-model';
import { MaterialStock } from '../stock/stock-model';

export class Update implements Supplier, MaterialStock {
    model_stock = new MaterialStock();
    stock_name = this.model_stock.stock_name

    model_supplier = new Supplier();
    supplier_name = this.model_supplier.supplier_name

    update;

}