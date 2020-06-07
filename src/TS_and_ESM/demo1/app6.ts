function buildName(firstName: string, lastName?: string) {
    if (lastName) return firstName + " " + lastName;

    return firstName;
}

let result1 = buildName("Bob");
let result2 = buildName("Bob", "Adams");


export { };