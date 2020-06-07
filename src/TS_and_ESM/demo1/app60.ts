type Keys = 'option1' | 'option2';
type Flags = { [K in Keys]: boolean };

// type Flags = {
//     option1: boolean;
//     option2: boolean;
// }

let obj1: Flags = {
    option1: true,
    option2: false
};

console.log();

export { };