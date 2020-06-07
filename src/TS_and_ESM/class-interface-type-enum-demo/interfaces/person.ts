import { Gender } from "../types/gender";
import { BloodGroup } from "../types/blood-groups";
import { Contact } from "./contact";
import { Address } from "./address";

export interface Person {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: Gender;
    bloodGroup: BloodGroup;
    contacts: Array<Contact>;
    address: Address[];
    sayHello: () => Promise<string>;
}