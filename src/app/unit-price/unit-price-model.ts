export class UnitPrice {
    unit_price;

    constructor() {
        this.unit_price = [
            new NewPrice("1.34"),
            new NewPrice("2.75"),
            new NewPrice("3.90"),
            new NewPrice("1.55")
        ];
    }
}

export class NewPrice {
    price;

    constructor(price) {
        this.price = price;
    }
}