import { Person } from "../interfaces/person";
import { Contact } from "../interfaces/contact";
import { Address } from "../interfaces/address";

export type PersonDetails = Person & Contact & Address;