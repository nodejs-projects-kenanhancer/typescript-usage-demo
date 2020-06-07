type Species = "Cat" | "Dog" | "Bird";

interface Pet {
    species: Species;
    eat(): void;
    walk(): void;
    sleep(): void;
}

interface Cat extends Pet {
    species: "Cat";
}

interface Dog extends Pet {
    species: "Dog";
}

interface Bird extends Pet {
    species: "Bird";
    sing(): void;
}

function catProvider(name: string): Cat {
    return {
        species: "Cat",
        eat: function () {
            console.log(`${name} eats`);
        },
        walk: function () {
            console.log(`${name} walks.`);
        },
        sleep: function () {
            console.log(`${name} sleeps.`);
        }
    };
}

function dogProvider(name: string): Dog {
    return {
        species: "Dog",
        eat: function () {
            console.log(`${name} eats`);
        },
        walk: function () {
            console.log(`${name} walks.`);
        },
        sleep: function () {
            console.log(`${name} sleeps.`);
        }
    };
}

function birdProvider(name: string): Bird {
    return {
        species: "Bird",
        eat: function () {
            console.log(`${name} eats`);
        },
        walk: function () {
            console.log(`${name} walks.`);
        },
        sleep: function () {
            console.log(`${name} sleeps.`);
        },
        sing: function () {
            console.log(`${name} sings.`);
        }
    };
}

enum Animals { Bird, Cat, Dog }

let petProviders = {
    [Animals.Bird]: birdProvider,
    [Animals.Cat]: catProvider,
    [Animals.Dog]: dogProvider
};


type ProviderFunc = (name: string) => Pet;

function buyPet(pet: Species, name: string): Pet {

    let provider: ProviderFunc = petProviders[Animals[pet]];

    return provider(name);
}

let dog: Pet = buyPet("Dog", "Rocky");

console.log(dog);

export { };