interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {

    let _start;
    let counter = function (start: number) { _start = start; } as Counter;
    counter.interval = 123;
    counter.reset = function () { _start = 0; };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

console.log();

export { };