type Lower = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z';
type AllowedChars = Lower | '.' | '@'

type RestrictedToChars<T extends string, A extends string, Y = T, N = never> =
  string extends T ? N :
  T extends `${infer F}${infer F}${infer F}${infer F}${infer F}${infer F}${infer R}` ?
  [F] extends [A] ? RestrictedToChars<R, A, Y, N> : N :
  T extends `${infer F}${infer F}${infer F}${infer R}` ?
  [F] extends [A] ? RestrictedToChars<R, A, Y, N> : N :
  T extends `${infer F}${infer R}` ?
  [F] extends [A] ? RestrictedToChars<R, A, Y, N> : N :
  Y

type SplitChars<T extends string> = string extends T ? string[] :
  T extends `${infer F1}${infer F2}${infer F3}${infer F4}${infer F5}${infer F6}${infer R}` ? [F1, F2, F3, F4, F5, F6, ...SplitChars<R>] :
  T extends `${infer F1}${infer F2}${infer F3}${infer R}` ? [F1, F2, F3, ...SplitChars<R>] :
  T extends `${infer F1}${infer R}` ? [F1, ...SplitChars<R>] :
  []

type CheckMaxLength<T extends string, L extends number, Y = T, N = never> =
  SplitChars<T>[L] extends undefined ? Y : N;

type Email<T extends string> = T &
  CheckMaxLength<T, 32, RestrictedToChars<
    `${Lowercase<T>}`, AllowedChars, T, ["Email can only contain alphabet or @ or ."]
  >, ["Email needs to be 32 characters or less"]>;

type User<T extends string> = {
  name: string;
  email: Email<T>;
}

const user = <T extends string>(user: User<T>) => user;

user({ name: "Dave Morrison", email: "Dave.Morrison@gmail.com" }); // okay
user({ name: "Van Morrison", email: "Van-Morrison@gmail.com" }); // error!
// ------------------------> ~~~~~
// '["Email can only contain alphabet or @ or ."]'
user({ name: "Jim Morrison", email: "Jim.Morrison.is.my.name.and.it.is.too.long@gmail.com" }); // error!
// ------------------------> ~~~~~
// '["Email needs to be 32 characters or less"]'


