function carInfo(manufacturer, modelName, ...options) {
    const car = {
        manufacturer,
        modelName,
        options: Object.fromEntries(options),
    };
    return car;
}
const car1 = carInfo("Toyota", "Corolla", ["color", "silver"], ["year", 2020]);
console.log(car1);
const car2 = carInfo("Ford", "Mustang", ["color", "red"], ["transmission", "automatic"], ["trim", "GT"]);
console.log(car2);
export {};
