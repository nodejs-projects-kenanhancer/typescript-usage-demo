const point: readonly [number, number] = [0, 0];

// point[0] = 1;        // Type error
// point.push(0);       // Type error
// point.pop();         // Type error
// point.splice(1, 1);  // Type error


const values1: ReadonlyArray<string> = ["a", "b", "c"];

// values1[0] = "x";      // Type error
// values1.push("x");     // Type error
// values1.pop();         // Type error
// values1.splice(1, 1);  // Type error

const values2: readonly string[] = ["a", "b", "c"];

// values2[0] = "x";      // Type error
// values2.push("x");     // Type error
// values2.pop();         // Type error
// values2.splice(1, 1);  // Type error



function intersperse<T>(elements: readonly T[], separator: T): T[] {
    const newElements = [];
    for (let i = 0; i < elements.length; i++) {
        if (i !== 0) {
            newElements.push(separator);
        }
        newElements.push(elements[i]);
    }
    return newElements;
}

const values: readonly string[] = ["a", "b", "c"];
const valuesWithSeparator = intersperse(values, "x");


export { };