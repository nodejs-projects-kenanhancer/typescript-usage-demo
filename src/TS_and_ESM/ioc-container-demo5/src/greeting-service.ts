import { IHelper } from "./helper";
import { Dependency } from "../ioc-container";

export abstract class IGreetingService {
  abstract sayHello(firstName: string, lastName: string): string;
  abstract sayGoodbye(firstName: string, lastName: string): string;
}

@Dependency
export class GreetingService implements IGreetingService {
  constructor(private readonly helper: IHelper) {
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
