interface ReadonlyStringArray {
    readonly [index: number]: string;
}

let myArray: ReadonlyStringArray = ["Alice", "Bob"];

// myArray[2] = "Mallory"; // error

let myStr: string = myArray[1];

console.log(myStr);




interface StringArray {
    [index: number]: string;
}

let myArray2: StringArray;
myArray2 = ["Bob", "Fred"];

let myStr2: string = myArray2[0];

console.log(myStr2);

export { };