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