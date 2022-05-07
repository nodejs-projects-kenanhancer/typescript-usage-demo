{
    interface Point {
        x: number;
        y: number;
    }

    interface EventArgs { }

    interface KeyEventArgs extends EventArgs {
        modifiers: 'CTRL' | 'SHIFT' | 'ALT';
        keyValue: number;
        shift: boolean;
        ctrl: boolean;
        alt: boolean;
        handled: boolean;
    }

    interface KeyPressEventArgs extends EventArgs {
        handled: boolean;
        keyChar: string;
    }

    interface MouseEventArgs extends EventArgs {
        x: number;
        y: number;
        location: Point;
        delta: number;
        clicks: number;
        button: 'LEFT' | 'RIGHT';
    }



    type AppEvent =
        | { kind: "Click"; } & EventArgs
        | { kind: "DoubleClick"; } & EventArgs
        | { kind: "KeyUp"; } & KeyEventArgs
        | { kind: "KeyPress"; } & KeyPressEventArgs
        | { kind: "KeyDown"; } & KeyEventArgs
        | { kind: "MouseClick"; } & MouseEventArgs
        | { kind: "MouseDoubleClick"; } & MouseEventArgs
        | { kind: "MouseDown"; } & MouseEventArgs
        | { kind: "MouseUp"; } & MouseEventArgs
        | { kind: "MouseMove"; } & MouseEventArgs
        | { kind: "MouseWheel"; } & MouseEventArgs
        | { kind: "MouseEnter"; } & EventArgs
        | { kind: "MouseHover"; } & EventArgs
        | { kind: "MouseLeave"; } & EventArgs;

    function handleEvent(event: AppEvent) {

        switch (event.kind) {
            case 'Click':
                console.log(`It is ${event.kind} event`);
                break;
            case 'DoubleClick':
                console.log(`It is ${event.kind} event`);
                break;
            case 'KeyDown':
                console.log(`It is ${event.kind} event`);
                break;
            case 'KeyPress':
                console.log(`It is ${event.kind} event`);
                break;
            case 'KeyUp':
                console.log(`It is ${event.kind} event`);
                break;
            case 'MouseClick':
                console.log(`It is ${event.kind} event`);
                break;
            case 'MouseDoubleClick':
                console.log(`It is ${event.kind} event`);
                break;
            case 'MouseDown':
                console.log(`It is ${event.kind} event`);
                break;
            case 'MouseUp':
                console.log(`It is ${event.kind} event`);
                break;
            case 'MouseEnter':
                console.log(`It is ${event.kind} event`);
                break;
            case 'MouseHover':
                console.log(`It is ${event.kind} event`);
                break;
            case 'MouseLeave':
                console.log(`It is ${event.kind} event`);
                break;
            case 'MouseMove':
                console.log(`It is ${event.kind} event`);
                break;
            case 'MouseWheel':
                console.log(`It is ${event.kind} event`);
                break;
            default:
                const exhaustiveCheck: never = event;
                throw new Error(`Unrecognized Method ${exhaustiveCheck}`);
        }
    }
}

{
    interface Triangle {
        kind: "triangle";
        sideLength: number;
    }

    interface Circle {
        kind: "circle";
        radius: number;
    }

    interface Square {
        kind: "square";
        sideLength: number;
    }

    type Shape = Circle | Square | Triangle;

    function getArea(shape: Shape) {
        switch (shape.kind) {
            case "circle":
                return Math.PI * shape.radius ** 2;
            case "square":
                return shape.sideLength ** 2;
            case "triangle":
                var s = (shape.sideLength ** 3) / 2;
                var area = Math.sqrt(s * ((s - shape.sideLength) * (s - shape.sideLength) * (s - shape.sideLength)));
                return area;
            default:
                const _exhaustiveCheck: never = shape;
                return _exhaustiveCheck;
        }
    }
}

{
    type Shape = 'Circle' | 'Square' | 'Triangle';

    function getArea(shape: Shape) {
        switch (shape) {
            case "Circle":
                console.log('it is Circle');
                break;
            case "Square":
                console.log('it is Square');
                break;
            case "Triangle":
                console.log('it is Triangle');
                break;
            default:
                const exhaustiveCheck: never = shape;
                throw new Error(`Unhandled area case: ${exhaustiveCheck}`);
        }
    }
}

{
    const formatPrice = (price: number | string) => {
        /* 
          ERROR:
          Property "toFixed" does not exist on type "string | number"
          Property "toFixed" does not exist on type "string" 
        */
        return price.toFixed(2);
    };
}

{
    const formatPrice = (price: number | string) => {
        // "price" is of a "number | string" type
        if (typeof price === "string") {
            // "price" is of a "string" type
            return parseInt(price, 10).toFixed(2);
        }
        // "price" is of a "number" type
        return price.toFixed(2);
    };
}

{
    const formatDate = (value: Date | string) => {
        // "value" is of a "string | Date" type
        if (value instanceof Date) {
            // "value" is of a "Date" type
            return value.toUTCString();
        }
        // "value" is of a "string" type
        return new Date(value).toUTCString();
    };

    console.log(formatDate(new Date("2021-09-01"))); // "Wed, 01 Sep 2021 00:00:00 GMT"
    console.log(formatDate("2021-09-01")); // "Wed, 01 Sep 2021 00:00:00 GMT"
}

{
    const user = { name: "John" };

    console.log("name" in user); // "true"
    console.log("surname" in user); // "false" branch
}

{
    interface Human {
        speak: () => void;
    }

    interface Animal {
        voice: () => void;
    }

    const saySomething = (being: Human | Animal) => {
        // "being" is of a "Human | Animal" type
        if ("speak" in being) {
            // "being" is of a "Human" type
            return being.speak();
        }
        // "being" is of a "Animal" type
        return being.voice();
    };
}

{
    interface Human {
        speak: () => void;
    }

    interface Dog {
        voice: () => void;
    }

    interface Cat {
        voice: () => void;
    }

    const saySomething = (being: Human | Dog | Cat) => {
        // "being" is of a "Human | Dog | Cat" type
        if ("speak" in being) {
            // "being" is of a "Human" type
            return being.speak();
        }
        // "being" is of a "Dog | Cat" type
        return being.voice();
    };
}

{
    type Car = "audi" | "bmw" | "mercedes";

    const chooseCar = (car: Car) => {
        if (car === "audi") {
            return "Vorsprung durch Technik";
        } else if (car === "bmw") {
            return "Sheer Driving Pleasure";
        } else {
            return "The best or nothing";
        }
    };
}

{
    type Car = "audi" | "bmw" | "mercedes";

    const chooseCar = (car: Car) => {
        if (car === "audi") {
            /* 
              ERROR:
              This condition will always return "false" 
              Since the types "audi" and "bmw" have no overlap
            */
            if (car === "bmw") { }
            return "Vorsprung durch Technik";
        } else if (car === "bmw") {
            return "Sheer Driving Pleasure";
        } else {
            return "The best or nothing";
        }
    };
}

{
    interface Audi {
        type: "sedan";
        drive: () => void;
    }

    interface Bmw {
        type: "hatchback";
        race: () => void;
    }

    const chooseCar = (car: Audi | Bmw) => {
        // "car" is of a "Audi | Bmw" type
        if (car.type === "sedan") {
            // "car" is of a "Audi" type
            return car.drive();
        }
        // "car" is of a "Bmw" type
        return car.race();
    };
}

{
    interface Audi {
        drive: () => void;
    }

    interface Bmw {
        race: () => void;
    }

    const isAudi = (car: Audi | Bmw): car is Audi => {
        return (car as Audi).drive() !== undefined;
    };
}

{
    interface Audi {
        drive: () => void;
    }

    interface Bmw {
        race: () => void;
    }

    const isAudi = (car: Audi | Bmw): car is Audi => {
        return (car as Audi).drive() !== undefined;
    };

    const isBmw = (car: Audi | Bmw): car is Bmw => {
        return (car as Bmw).race() !== undefined;
    };

    const chooseCar = (car: Audi | Bmw) => {
        // "car" is of a "Audi | Bmw" type
        if (isAudi(car)) {
            // "car" is of a "Audi" type
            return car.drive();
        }
        // "car" is of a "Bmw" type
        return car.race();
    };
}

{
    interface Audi {
        drive: () => void;
    }

    interface Bmw {
        race: () => void;
    }

    const isOfType = <T>(value: any, property: keyof T): value is T =>
        (value as T)[property] !== undefined;

    const chooseCar = (car: Audi | Bmw) => {
        // "car" is of a "Audi | Bmw" type
        if (isOfType<Audi>(car, "drive")) {
            // "car" is of a "Audi" type
            return car.drive();
        }
        // "car" is of a "Bmw" type
        return car.race();
    };
}

{
    interface Audi {
        drive: () => void;
    }

    interface Bmw {
        race: () => void;
    }

    interface Mercedes {
        drive: () => void;
    }

    const isOfType = <T>(value: any, property: keyof T): value is T =>
        (value as T)[property] !== undefined;

    const chooseCar = (car: Audi | Bmw | Mercedes) => {
        // "car" is of a "Audi | Bmw | Mercedes" type
        if (isOfType<Audi>(car, "drive")) {
            /* 
              We think that the "car" is of a "Audi" type
              But in fact, it can be "Audi | Mercedes"
              Since both interfaces contain "drive()" method
            */
            return car.drive();
        }
        // "car" is of a "Bmw" type
        return car.race();
    };
}

{
    const formatPrice = (price: number | string) => {
        const isString = typeof price === "string";
        if (isString) {
            /* 
              ERROR:
              Property "toFixed" does not exist on type "string | number"
              Property "toFixed" does not exist on type "string" 
            */
            return parseInt(price, 10).toFixed(2);
        }
        /* 
          ERROR:
          Property "toFixed" does not exist on type "string | number"
          Property "toFixed" does not exist on type "string" 
        */
        return price.toFixed(2);
    };
}

{
    type Fruit = 'banana' | 'orange'
    function makeDessert(fruit: Fruit) {
        switch (fruit) {
            case 'banana': return 'Banana Shake'
            case 'orange': return 'Orange Juice'
        }
        fruit // x has type never here
    }
}

{
    type Fruit = 'banana' | 'orange' | 'mango';

    function exhaustiveCheck(param: never): never {
        throw new Error('should not reach here')
    }

    function makeDessert(fruit: Fruit) {
        switch (fruit) {
            case 'banana': return 'Banana Shake'
            case 'orange': return 'Orange Juice'
        }
        exhaustiveCheck(fruit) // ✅ no error
    }
}

{
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

const sendRequest = (url: string, method: HttpMethod) => {
    switch (method) {
        case 'DELETE':

            break;
        case 'GET':

            break;
        case 'POST':

            break;
        case 'PUT':

            break;
        default:
            const exhaustiveCheck: never = method;
            throw new Error(`Unhandled case: ${exhaustiveCheck}`);
    }
};
}

export { };