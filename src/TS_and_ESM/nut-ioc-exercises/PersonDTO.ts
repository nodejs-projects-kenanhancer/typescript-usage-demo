namespace business.logic.person.dto {
  export class PersonDTO {
    constructor(
      public personId: string,
      public firstName: string,
      public lastName: string,
      public email: string
    ) {}
  }
}
