import { Dependency } from "../nut-ioc";

export abstract class IHelper {
  abstract getFullName(firstName: string, lastName: string): string;
}

@Dependency
export class Helper extends IHelper {
  constructor() {
    super();
    console.log();
    console.log();
  }

  getFullName(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`;
  }
}
