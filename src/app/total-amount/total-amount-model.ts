export class TotalAmount {
    total_amount;

    constructor() {
        this.total_amount = [
            new Amount("1071"),
            new Amount("1299"),
            new Amount("1999"),
            new Amount("2023")
        ];
    }
}

export class Amount {
    amount;

    constructor(amount) {
        this.amount = amount;
    }
}