function convertToLowerCase<T extends string | null>(text: T): T extends string ? string : null {

    return text?.toLowerCase() as any;
}

const a1 = convertToLowerCase('').trim();






function convertToUpperCase<T extends string | null>(text: T): T extends infer R ? R : never {

    return text?.toUpperCase() as any;
}

const a2 = convertToUpperCase('').trim();





export { };