interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
    tick(): void;
}

class DigitalClock implements ClockInterface {
    hour: number;
    minute: number;

    constructor(h: number, m: number) {
        this.hour = h;
        this.minute = m;
    }

    tick(): void {
        console.log("beep beep");
    }
}

class AnalogClock implements ClockInterface {
    constructor(public h: number, public m: number) { }
    
    tick(): void {
        console.log("tick tock");
    }
}



function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

let digitalClock = createClock(DigitalClock, 12, 17);
let analogClock = createClock(AnalogClock, 7, 32);

console.log();

export { };