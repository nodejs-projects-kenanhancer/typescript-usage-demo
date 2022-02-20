function process(text: string): string
function process(text: null): null
function process(text: any) {
    return text?.replace(/f/g, "p");
}


process('').toUpperCase();

// process(null).toUpperCase(); // Type Error!


export { };