type Bar<T> = T extends { a: (x: infer U) => void; b: (x: infer L) => void } ? U & L : never;

type T01 = Bar<{ a: (x: boolean) => void; b: (x: Date) => void }>; // string & number


class Animal {
    constructor(public name: string) { }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    bark() { }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    meav() { }
}


let f1: (x: Animal) => void = (x: Animal) => {
    console.log(x.name);
};

let f2: (x: Dog) => void = (x: Dog) => {
    x.bark();
};

let f3: (x: Cat) => void = (x: Cat) => {
    x.meav();
};


f1 = f2;

f2 = f1;

f3 = f1;

const functions: Array<(x: Dog) => void> = [];

functions.push(f2);
functions.push(f1);

for (const fn of functions) {
    fn(new Dog('Markus'));
}

let fn1 = (p: Animal) => {

};

let fn2 = (p: Dog) => {

};

fn2 = fn1;

fn2(new Dog('dkdk'));




declare let v1: Array<Animal>;

declare let v2: Array<Dog>;

v1 = v2;

v2 = v1;

const v3: Array<Animal> = [] as Array<Dog>;

const v4: Array<Dog> = [] as Array<Animal>;


// Classes are COVARIANT (Subtype).
// Covariance means that one type is subtype of another type like Dog is subtype of Animal and Animal is supertype of Dog.
// Covariance accepts subtype but doesn't accept supertype.
// Dog(subtype) instance can be assigned to Animal(supertype) type variable.
// While assigning a variable like below sample, variable type has to be supertype so that subtype of variable can be assigned.
// It is named as covariant.
const v5: Animal = new Dog('markus'); // Covariant(Subtyping)


// Generic classes are COVARIANT (Subtype).
const v6: Array<Animal> = [] as Array<Dog>;


// Function`s return type is COVARIANT (Subtype), but Function`s parameters are CONTRAVARIANT (Subtype).
const v7: (p1: Dog) => Animal = (p: Animal): Dog => {

    return new Dog(p.name);
};








export { };