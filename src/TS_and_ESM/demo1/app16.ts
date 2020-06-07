// Function Types

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function (source: string, subString: string) {
    let result = source.search(subString);

    return result > -1;
};

mySearch = function (src: string, subStr: string): boolean {
    let result = src.search(subStr);

    return result > -1;
};

// TypeScript’s contextual typing can infer the argument types
mySearch = function (src, sub) {
    let result = src.search(src);

    return result > -1;
};


export { };