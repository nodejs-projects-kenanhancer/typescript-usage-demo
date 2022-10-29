namespace business.logic.validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }
}
