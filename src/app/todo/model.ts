export class Model {
    user;
    items;

    constructor() {
        this.user = 'Ahmet Tayyip UZUN';
        this.items = [
            new TodoItem("Kahvaltı", false),
            new TodoItem("Sinema", false),
            new TodoItem("Spor", false),
            new TodoItem("Writing code", true)
        ];
    }
}

export class TodoItem {
    description;
    action;

    constructor(description, action) {
        this.description = description;
        this.action = action;
    }
}