import { BasePerson } from "./base-person";
import { Gender } from "../types/gender";
import { BloodGroup } from "../types/blood-groups";
import { Contact } from "../interfaces/contact";
import { Address } from "../interfaces/address";

abstract class BusinessPerson extends BasePerson {
    private _salary: number;

    public constructor(id: number,
        firstName: string,
        lastName: string,
        age: number,
        gender: Gender,
        bloodGroup: BloodGroup,
        contacts: Array<Contact>,
        address: Address[],
        salary: number
    ) {
        super(id, firstName, lastName, age, gender, bloodGroup, contacts, address);

        this._salary = salary;
    }

    get salary(): number {
        return this._salary;
    }

    set salary(value: number) {
        this._salary = value;
    }
}

export { BusinessPerson };