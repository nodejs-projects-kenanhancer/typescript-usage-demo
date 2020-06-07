enum Gender { MALE, FEMALE }

interface IPerson {
    name: string;
    gender: Gender;
}

interface IEmployee extends IPerson {
    empCode: number;
    getSalary(empCode: number): number;
}

class Employee implements IEmployee {
    empCode: number;
    name: string;
    gender: Gender;

    constructor(code: number, name: string, gender: Gender) {
        this.empCode = code;
        this.name = name;
        this.gender = gender
    }

    getSalary(empCode: number): number {
        return 20000;
    }
}

let empObj: IEmployee = new Employee(1, "Bill", Gender.MALE);

console.log(empObj);

export { };