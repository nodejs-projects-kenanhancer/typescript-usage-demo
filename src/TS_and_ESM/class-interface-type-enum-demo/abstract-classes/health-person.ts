import { BasePerson } from "./base-person";
import { Gender } from "../types/gender";
import { BloodGroup } from "../types/blood-groups";
import { Contact } from "../interfaces/contact";
import { Address } from "../interfaces/address";

export abstract class HealthPerson extends BasePerson {

    private _hospital: string = "";

    constructor(id: number,
        firstName: string,
        lastName: string,
        age: number,
        gender: Gender,
        bloodGroup: BloodGroup,
        contacts: Array<Contact>,
        address: Address[],
        hospital: string = ""
    ) {
        super(id, firstName, lastName, age, gender, bloodGroup, contacts, address);

        this._hospital = hospital;
    }

    get hospital(): string {
        return this._hospital;
    }

    set hospital(value: string) {
        this._hospital = value;
    }

}