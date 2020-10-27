export class Supplier {
    supplier_name;

    constructor() {
        this.supplier_name = [
            new NewSupplier("tayyip"),
            new NewSupplier("mehmet"),
            new NewSupplier("ali"),
            new NewSupplier("mahmut")
        ];
    }
}

export class NewSupplier {
    supplier;

    constructor(supplier) {
        this.supplier = supplier;
    }
}