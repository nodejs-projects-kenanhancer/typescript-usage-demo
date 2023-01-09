import { IHelper, LuckyNumber } from "./app24-5";

@LuckyNumber(4)
export class Helper implements IHelper {
  constructor() {
    console.log();
    console.log();
  }

  getFullName(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`;
  }
}
