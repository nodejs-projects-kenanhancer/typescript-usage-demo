function padLeft(value: string, padding: string | number | boolean): string {
    let typeOfPadding = typeof padding;

    if (typeOfPadding === "number") {
        return Array((<number>padding) + 1).join(" ") + value;
    }
    if (typeOfPadding === "string") {
        return padding + value;
    }
    if (typeOfPadding === "boolean") {
        return "    " + value;
    }

    throw new Error(`Expected string or number, got '${padding}'.`);
}

let indentedString: string = padLeft("Hello World", true);

console.log(indentedString);

export { };