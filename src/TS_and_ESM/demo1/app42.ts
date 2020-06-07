// Numeric Literal Types

let a1: 1 | 2 | 3 | 4 | 5 = 4;

function function1(): 1 | 2 | 3 | 4 | 5 | 6 {

    return 3;
}

function1();



type CustomNumeric = 1 | 2 | 3 | 4 | 5 | 6;

function function2(p1: CustomNumeric): CustomNumeric {
    return p1;
}

let a2: CustomNumeric = function2(3);

let a3: number = function2(4);

function foo(x: 1 | 2) {

}

foo(1);

console.log();

export { };