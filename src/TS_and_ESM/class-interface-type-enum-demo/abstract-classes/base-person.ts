import { Person } from "../interfaces/person";
import { Gender } from "../types/gender";
import { BloodGroup } from "../types/blood-groups";
import { Contact } from "../interfaces/contact";
import { Address } from "../interfaces/address";

abstract class BasePerson implements Person {

    public constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public age: number,
        public gender: Gender,
        public bloodGroup: BloodGroup,
        public contacts: Array<Contact>,
        public address: Address[]) { }

    sayHello(): Promise<string> {
        return new Promise((resolve, reject) => resolve("Hello "));
    }

}

export { BasePerson };