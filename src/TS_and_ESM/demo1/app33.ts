function padLeft(value: string, padding: any): string {
    let typeOfPadding = typeof padding;

    if (typeOfPadding === "number") {
        return Array((<number>padding) + 1).join(" ") + value;
    }
    if (typeOfPadding === "string") {
        return padding + value;
    }

    throw new Error(`Expected string or number, got '${padding}'.`);
}

let indentedString: string = padLeft("Hello world", 4);

console.log(indentedString);

export { };