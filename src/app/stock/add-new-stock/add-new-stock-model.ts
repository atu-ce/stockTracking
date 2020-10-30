import { Supplier } from '../../supplier/supplier-model';
import { MaterialStock } from '../stock-model';
import { TotalAmount } from '../../total-amount/total-amount-model';
import { IsActive } from '../../is-active/is-active-model';
import { UnitPrice } from '../../unit-price/unit-price-model';
import { BasicUnit } from '../../basic-unit/basic-unit-model';
import { Currency } from '../../currency/currency-model';

export class AddNewStock {
    model_stock = new MaterialStock();
    stock_name_obje = this.model_stock.stock_name;

    model_supplier = new Supplier();
    supplier_name_obje = this.model_supplier.supplier_name;

    model_amount = new TotalAmount();
    total_amount_obje = this.model_amount.total_amount;

    model_is_active = new IsActive();
    is_active_obje = this.model_is_active.is_active;

    model_unit_price= new UnitPrice();
    unit_price_obje= this.model_unit_price.unit_price;

    model_basic_unit= new BasicUnit();
    basic_unit_oble= this.model_basic_unit.basic_unit;

    model_currency= new Currency();
    currency_obje= this.model_currency.currency;

}