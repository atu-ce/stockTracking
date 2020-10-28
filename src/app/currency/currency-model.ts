export class Currency {
    currency;

    constructor() {
        this.currency = [
            new NewCurrency("USB"),
            new NewCurrency("EUR"),
            new NewCurrency("TL"),
            new NewCurrency("TL")
        ];
    }
}

export class NewCurrency {
    newCurrency;

    constructor(newCurrency) {
        this.newCurrency = newCurrency;
    }
}