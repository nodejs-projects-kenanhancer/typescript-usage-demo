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

    meow() { }
}

// Covariance (Subtyping) - you are able to assign sub type to super type.

// Classes are covariant.
// Dog and Cat are subtype of Animal so variables of Dog and Cat can be assigned to variable of Animal.
const a1: Animal = new Dog('markus');

const a2: Animal = new Cat('iron');


const a3: Dog = new Dog('markus');


// Generic classes are covariant.
const a4: Array<Animal> = [] as Array<Dog>;

const a5: Array<Animal> = [] as Array<Cat>;





// Function parameter`s is contravariant but return type is covariant




const a6: (p: Dog) => Animal = (p: Animal) => {

    return p;
};



const a7: (p: Cat) => Cat = (p: Animal) => {

    return new Cat(p.name);
}





const a8: (p: Cat) => Animal = (p: Animal) => {

    return new Cat(p.name);
}






export { };