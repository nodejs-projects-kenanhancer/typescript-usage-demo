interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();

    constructor(h: number, m: number) { }
}

let clock: ClockInterface = new Clock(2, 10);

console.log();

export { };