function VehicleFactory() {}

function Car(options) {
    this.doors = options.doors;
    this.price = options.price;
    this.color = options.color;
}
function Truck(options) {
    this.doors = options.doors;
    this.wheels = options.wheels;
}

// default vehicle class is Car
VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createVehicle = function (options) {
    switch (options.type) {
        case "car":
            this.vehicleClass = Car;
            break;
        case "truck":
            this.vehicleClass = Truck;
            break;
        default:
            break;
    }
    return new this.vehicleClass(options);
};
const vehicleFactory = new VehicleFactory();

let car = vehicleFactory.createVehicle({
    type: "car",
    color: "red",
    price: 10000,
    doors: 4,
});
let truck = vehicleFactory.createVehicle({
    type: "truck",
    doors: 6,
    wheels: 12,
});

console.log(car);
console.log(truck);
