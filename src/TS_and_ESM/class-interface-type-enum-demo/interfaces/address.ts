import { AddressType } from "../types/address-type";

export interface Address {
    addressType: AddressType;
    country: string;
    city: string;
    street: string;
    postCode: string;
}