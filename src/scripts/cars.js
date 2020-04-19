class Vehicle {
    constructor(type) {
        this.type = type;
    };
    start() {
        return `Starting ${this.type}`;
    };
};

export class Car extends Vehicle {
    constructor(id, brand, price) {
        super("a Car");
        this.id = id;
        this.brand = brand;
        this.price = price;
    }
    identify() {
        return `Car Id: ${this.id} of ${this.brand} costs ${this.price}`;
    }
};