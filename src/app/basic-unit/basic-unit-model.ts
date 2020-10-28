export class BasicUnit {
    basic_unit;

    constructor() {
        this.basic_unit = [
            new NewBasicUnit("kg"),
            new NewBasicUnit("lt"),
            new NewBasicUnit("kg"),
            new NewBasicUnit("kg")
        ];
    }
}

export class NewBasicUnit {
    new_basic_unit;

    constructor(new_basic_unit) {
        this.new_basic_unit = new_basic_unit;
    }
}