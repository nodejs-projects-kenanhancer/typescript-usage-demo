const TRUE: true = true;
const FALSE: false = false;
const isDeleted: true | false = false;


const requiredEventType: "Click" = "Click";
const color: "Red" | "Green" | "Blue" = "Blue";
const eventType: "click" | "mouseover" | "drag" = "click";

type Result<T> = { success: true, value: T } | { success: false, error: string | number };

const response1: Result<string> = { success: true, value: "Hello World" };
const response2: Result<number> = { success: false, error: 404 };

function parseEmailAddress(input: string | null | undefined): Result<string> {

    if (!input) {
        return { success: false, error: "The email address cannot be empty." };
    }

    if (!/^\S+@\S+\.\S+$/.test(input)) {
        return { success: false, error: "The email address has an invalid format." };
    }

    return { success: true, value: input };
}

const result: Result<string> = parseEmailAddress("kenanhancer@hotmail.com");

console.log(result);

export { };