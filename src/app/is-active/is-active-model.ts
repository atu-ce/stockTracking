export class IsActive {
    is_active: any;

    constructor() {
        this.is_active = [
            new NewIsActive(false),
            new NewIsActive(true),
            new NewIsActive(true),
            new NewIsActive(false)
        ];
    }
}

export class NewIsActive {
    active: boolean;

    constructor(active) {
        this.active = active;
    }
}