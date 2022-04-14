class Animal { }

class Mammal extends Animal { isMammal() { return true } }

class Dog extends Mammal { bark() { } }
class Cat extends Mammal { meow() { } }
class Mouse extends Mammal { squeak() { } }



const v1: (p: Cat) => Mammal = (p: Mammal) => {

    return p;
};


const v2: (p: Dog) => Animal = (p: Mammal) => {

    return p;
}

const v3: Array<Animal> = [] as Array<Mammal>;

v3.push(new Dog());
v3.push(new Cat());





export { };
