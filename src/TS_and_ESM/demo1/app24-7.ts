import { IGreetingService, IHelper, LuckyNumber } from "./app24-5";

@LuckyNumber(3)
// @ParamTypes(String, Helper)
export class GreetingService extends IGreetingService {
  constructor(public helper: IHelper) {
    super();
    console.log();
    console.log();
  }

  sayHello(firstName: string, lastName: string) {
    const fullName = this.helper.getFullName(firstName, lastName);

    return `Hello ${fullName}`;
  }

  sayGoodbye(firstName: string, lastName: string) {
    const fullName = this.helper.getFullName(firstName, lastName);

    return `Goodbye, ${fullName}`;
  }
}
