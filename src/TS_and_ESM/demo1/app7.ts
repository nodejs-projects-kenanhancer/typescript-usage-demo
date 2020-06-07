function buildName(firstName: string, lastName: string = "Smith") {
    return firstName + " " + lastName;
}

let result1 =buildName("Bow"); // Bob Smith
let result2 = buildName("Bow", undefined); // Bob Smith
let result3 = buildName("Bob", "Adams"); // Bob Adams

export { };