import { StringValidator } from "./string-validator";
import { ZipCodeValidator } from "./zip-code-validator";
import { LettersOnlyValidator } from "./letters-only-validator";

const validators: { [s: string]: StringValidator; } = {};

validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();

const strings = ["Hello", "98052", "101"];

for (const s of strings) {
    for (const name in validators) {
        const isMatch = validators[name].isAcceptable(s);

        console.log(`'${s}}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
    }
}