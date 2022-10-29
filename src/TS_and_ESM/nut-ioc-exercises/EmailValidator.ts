namespace business.logic.validation {
  const emailRegexp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  export class EmailValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && emailRegexp.test(s);
    }
  }
}
