import { Dependency } from "../ioc-container";

export abstract class IHelper {
  abstract getFullName(firstName: string, lastName: string): string;
}

@Dependency
export class Helper implements IHelper {
  constructor() {
    console.log();
  }

  getFullName(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`;
  }
}
