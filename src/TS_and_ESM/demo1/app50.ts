class Greeter1 {
    message: string;

    constructor(message: string) {
        this.message = message;
    }

    greet() {
        return "Hello " + this.message;
    }
}

let greeter1: Greeter1 = new Greeter1("World");
greeter1.greet();
//////////////////////////////////////////////////////////




class Greeter2 {
    public message: string;

    public constructor(message: string) {
        this.message = message;
    }

    public greet() {
        return "Hello " + this.message;
    }
}

let greeter2: Greeter2 = new Greeter2("World");
greeter2.greet();
//////////////////////////////////////////////////////////




class Greeter3 {
    private _message: string;

    public constructor(message: string) {
        this._message = message;
    }

    public get message(): string {
        return this._message;
    }

    public greet() {
        return "Hello " + this._message;
    }
}

let greeter3: Greeter3 = new Greeter3("World");
greeter3.greet();
//////////////////////////////////////////////////////////




class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog: Dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
//////////////////////////////////////////////////////////






export { };