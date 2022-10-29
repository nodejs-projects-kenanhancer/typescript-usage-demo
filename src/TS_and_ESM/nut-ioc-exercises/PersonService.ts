// import PersonService = business.logic.person.interfaces.PersonService;

namespace business.logic.person {
  @decorators.Dependency()
  export class PersonService implements interfaces.PersonService {
    constructor(
      private validators: Partial<
        Record<keyof dto.PersonDTO, validation.StringValidator>
      >
    ) {}

    private validate(data: dto.PersonDTO) {
      for (const key in this.validators) {
        if (Object.prototype.hasOwnProperty.call(this.validators, key)) {
          const element = this.validators[key as keyof dto.PersonDTO];

          if (
            key in data &&
            element?.isAcceptable(data[key as keyof dto.PersonDTO])
          ) {
          }
        }
      }
    }

    createPerson(data: dto.PersonDTO): void {}
  }
}

const a1 = new business.logic.person.PersonService({
  email: new business.logic.validation.EmailValidator(),
});
