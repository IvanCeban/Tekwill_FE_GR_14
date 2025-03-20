// class Car {
//     constructor(name, color) {
//         this.carName = name;
//         this.carColor = color;
//     }
// }

// Anonimous class
// let Car = class{
//     constructor(name, color) {
//         this.carName = name;
//         this.carColor = color;
//     }
// }

// Named class
// let Car3 = class Car2{
//     constructor(name, color) {
//         this.carName = name;
//         this.carColor = color;
//     }
// }


class Car {
    constructor(name, color, speed) {
        this.carName = name;
        this.carColor = color;
        this.carSpeed = speed;
    }

    start() {
        console.log('WroomWroom');        
    }

    stop() {
        console.log(this.carName + ' has stopped');
    }

    accelerate(value) {
        this.carSpeed += value;
        console.log(this.carName + ' has accelerated up to ' + this.carSpeed);   
    }
}

let car1 = new Car('Audi', 'white', 120);
let car2 = new Car('Ford', 'black', 80);

// console.log(car1.carName);
// console.log(car2.carColor);
// car1.start();
// car2.stop();
// car1.accelerate(30);

class Truck extends Car {
    constructor(name, color, speed, capacity) {
        super(name, color, speed)

        this.carCapacity = capacity   
    }

    load(value) {
        if(value <= this.carCapacity) {
            console.log(this.carName + ' was loaded with ' + value + ' tons' );
        } else {
            console.log(this.carName + ' can not be loaded with ' + value + ' tons' );
        }
    }
}

let truck1 = new Truck('Volvo', 'red', 240, 40);
let truck2 = new Truck('MAN', 'blue', 40, 140);

// console.log(truck1.carName);
// console.log(truck1.carCapacity);
// truck1.start();

// console.log(truck1);
// truck1.load(45);
// truck2.load(141)

class MegaTruck extends Truck {
    constructor(name, color, speed, capacity, height){
        super(name, color, speed, capacity)

        this.carHeight = height;
    }
}

let megaTruck = new MegaTruck('Belaz', 'yellow', 20, 100500, 50)

// console.log(megaTruck);

// megaTruck.start()

// Getters & Setters



class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height
    }

    set setWidth(value) {
        if(value > 0 ) {
            this.width = value
        } else {
            console.error('Width should be bigger than 0');
        }
    }

    set setHeight(value) {
        if(value > 0 ) {
            this.height = value
        } else {
            console.error('Height should be bigger than 0');
        }
    }
}

let rect1 = new Rectangle(10, 20);
let rect2 = new Rectangle(30, 40);



 rect1.setWidth = 22

function setRectWidth(value) {
    if(value > 0 ) {
        rect1.setWidth = val
    } else {
        console.error('Width should be bigger than 0');
    }
}

 console.log(rect1);
 console.log(rect2);
// console.log(rect.getArea());


