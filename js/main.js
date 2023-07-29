// Objects Boi!
// key-value pair in Curly {} Braces

/* const myObj = { name: "Andy" };

const anotherObj = {
    name: "Andy",
    alive: true,
    answer: 42,
    pay: 100,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced Tea"
    },
    action: function () {
        console.log('$' + this.pay * 52);
    },
    taxesOwed: function () {
        console.log('$' + (this.pay * 52) * .33);
    }
};

anotherObj.taxesOwed(); */

/* anotherObj.action();
console.log("My name is " + anotherObj.name + ", and I love " + anotherObj["beverage"].morning + " in the Mornings!"); */


/* const vehicle = {
    wheels: 4,
    engine: function () {
        return "Vroooom!";
    }
};

const truck = Object.create(vehicle);
truck.doors = 2;

console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
    return "Whoooosh!";
};
console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.engine());
tesla.engine = function () {
    return "Shhhhhhhh....";
};

console.log(tesla.engine()); */

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};
// destructuring objects

const { guitar: myVariable } = band;

console.log(myVariable);








/* band.keyboard = "Tom the Loser";
delete band.drums;
console.log(band.guitar);

console.log(Object.values(band));
console.log(Object.keys(band));

for (let job in band) {
    console.log(`On ${job} we have ${band[job]}!!!`);
}; */