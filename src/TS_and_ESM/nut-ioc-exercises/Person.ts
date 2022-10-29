namespace business.logic.person.interfaces {
  export interface PersonService {
    createPerson(data: dto.PersonDTO): void;
  }
}
