class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;

    constructor(name: string) {
        this.name = name;
    }
}

let dad: Octopus = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // error! name is readonly.

console.log();


export { };