import { BasePerson } from "./base-person";
import { Gender } from "../types/gender";
import { BloodGroup } from "../types/blood-groups";
import { Contact } from "../interfaces/contact";
import { Address } from "../interfaces/address";

export abstract class EducationPerson extends BasePerson {

    constructor(id: number,
        firstName: string,
        lastName: string,
        age: number,
        gender: Gender,
        bloodGroup: BloodGroup,
        contacts: Array<Contact>,
        address: Address[],
        private schoolName: string
    ) {
        super(id, firstName, lastName, age, gender, bloodGroup, contacts, address);

    }

    get school(): string {
        return this.schoolName;
    }

    set school(value: string) {
        this.schoolName = value;
    }
}