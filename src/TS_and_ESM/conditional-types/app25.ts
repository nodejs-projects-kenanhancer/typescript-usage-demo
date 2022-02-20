type Duck = { quack: () => void };
type Cat = { meow: () => void };
type Dog = { bark: () => void };
type Seal = { bark: () => void };
type Wolf = { howl: () => void };
type Lion = { roar: () => void };
type Leopard = { roar: () => void };
type Jaguar = { roar: () => void };
type Tiger = { roar: () => void };
type Bear = { roar: () => void };
type Whale = { sing: () => void };
type Shark = {};
type Dolphin = { click: () => void };
type Pig = { oink: () => void };
type Cow = { moo: () => void };
type Sheep = { baa: () => void };
type Snake = { hiss: () => void };
type Zebra = { neigh: () => void };
type Horse = { neigh: () => void };
type Squirrel = { squeak: () => void };
type Rabbit = { squeak: () => void };
type Rat = { squeak: () => void };
type Mouse = { squeak: () => void };
type Hamster = { squeak: () => void };
type Bat = { squeak: () => void };
type Penguin = { squawk: () => void };
type Parrot = { squawk: () => void };
type Peacock = { squawk: () => void };
type Monkey = { scream: () => void };
type Hippopotamus = { growl: () => void };
type Frog = { croak: () => void };
type Donkey = { bray: () => void };

type Animal = Duck | Cat | Dog | Seal | Wolf | Lion | Leopard | Jaguar | Tiger | Bear | Whale | Shark | Dolphin | Pig | Cow | Sheep | Snake
    | Zebra | Horse | Squirrel | Rabbit | Rat | Mouse | Hamster | Bat | Parrot | Peacock | Monkey | Hippopotamus | Frog | Donkey | Penguin;

type ExtractRoarAnimal<T> = T extends { roar(): void } ? T : never;


type RoarAnimalV1 = ExtractRoarAnimal<Animal>;
// or
type RoarAnimalV2 = Extract<Animal, { roar: () => void }>;


export { };