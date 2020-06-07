class Person {
    protected name: string;

    protected constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);

        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard: Person = new Employee("Howard", "Sales");
// let john: Person = new Person("John"); // Error: The 'Person' constructor is protected.

console.log();


export { };