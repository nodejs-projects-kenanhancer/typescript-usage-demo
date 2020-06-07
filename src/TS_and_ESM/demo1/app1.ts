enum Gender { MALE, FEMALE }

let firstName: string = 'Kenan';
let lastName: string = 'Hancer';
let age: number = 36;
let gender: Gender = Gender.MALE;
let contacts: string[] = ["1111-111", "2222-222"];
let hobbies: Array<string> = ["Reading", "Swimming"];
let employee: [number, string] = [1, "Kenan"];
let person: [number, string, boolean] = [1, "Kenan", true];
let user: [number, string, boolean, number, string] = [1, "John", true, 30, "Admin"];
let userList: [number, string][] = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];

function getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

function sayHello(firstName: string, lastName: string): string {
    let fullName: string = getFullName(firstName, lastName);

    return `Hello ${fullName}`;
}

function addNumbers(a: number, b: number): number {
    return a + b;
}

let sum: number = addNumbers(10, 15);

console.log('Sum of the two numbers is ' + sum);

export { };