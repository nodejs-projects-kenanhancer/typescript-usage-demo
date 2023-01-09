import { IHelper } from "./Helper";
import { Dependency } from "../nut-ioc";

export abstract class IGreetingService {
  abstract sayHello(firstName: string, lastName: string): string;
  abstract sayGoodbye(firstName: string, lastName: string): string;
}

@Dependency
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
