export class MaterialStock {
    stock_name;

    constructor() {
        this.stock_name = [
            new NewStock("pamuk"),
            new NewStock("buğday"),
            new NewStock("elma"),
            new NewStock("armut")
        ];
    }
}

export class NewStock {
    stock;

    constructor(stock) {
        this.stock = stock;
    }
}
// total_amount = models.DecimalField(max_digits = 8, decimal_places = 2)
// is_active = models.BooleanField(default = False)
// stock_name = models.CharField(max_length = 140, blank = True, null = True)
// unit_price = models.DecimalField(max_digits = 8, decimal_places = 2)
// currency = models.ForeignKey(Currency, on_delete = models.SET_NULL, blank = True, null = True)
// updated_date = models.DateTimeField(auto_now_add = True, blank = True)
// created_date = models.DateTimeField(auto_now_add = True, blank = True)
// basic_unit = models.ForeignKey(BasicUnit, on_delete = models.SET_NULL, blank = True, null = True)
// supplier = models.ForeignKey(Supplier, on_delete = models.SET_NULL, blank = True, null = True)