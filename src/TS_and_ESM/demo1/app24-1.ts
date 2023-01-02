interface ClockConstructor {
  new (hour: number, minute: number): BaseClock;
}

type TConstructor = new (...args: any[]) => any;

abstract class BaseClock {
  abstract tick(): void;
}

class DigitalClock implements BaseClock {
  hour: number;
  minute: number;

  constructor(h: number, m: number) {
    this.hour = h;
    this.minute = m;
  }

  tick(): void {
    console.log("beep beep");
  }
}

class AnalogClock implements BaseClock {
  constructor(public h: number, public m: number) {}

  tick(): void {
    console.log("tick tock");
  }
}

class SandGlassClock implements BaseClock {
  tick(): void {
    console.log("shhhh");
  }
}

class OilClock implements BaseClock {
  tick(): void {
    console.log("gluk gluk");
  }
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): BaseClock {
  return new ctor(hour, minute);
}

let digitalClock = createClock(DigitalClock, 12, 17);
let analogClock = createClock(AnalogClock, 7, 32);

console.log();

type T1<T> = T extends new (...args: any[]) => infer U ? U : never;
//abstract new (...args: any) => infer R
type T2 = T1<AnalogClock>;

type TT = AnalogClock;

type Constructor<T extends {} = {}> = new (...args: any[]) => T;

type T3 = Constructor<typeof DigitalClock>;

type ConstructorV2<T extends new (...args: any) => any> = T extends new (
  ...args: infer A
) => infer R
  ? new (...args: A) => R
  : never;

type T4 = AnalogClock;

type T4_1 = ConstructorV2<typeof AnalogClock>;

type T5 = typeof AnalogClock;

type T6 = T5 extends { name: infer K } ? K : never;

type MyType<T> = T extends infer R ? R : never;

type T7 = MyType<AnalogClock | DigitalClock>;

type ToArray<Type> = Type extends any ? Type[] : never;

type StrArrOrNumArr = ToArray<string | number>;

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

type StrArrOrNumArr2 = ToArrayNonDist<string | number>;

type T8<T> = [T] extends any ? (...args: any[]) => T : never;

type T9 = T8<string | number>;

type T10<T> = T extends infer R extends { name: string } ? R : never; //`${infer C1}${infer Rest}` ? C1 : never;

let T11 = { DigitalClock };
const register = (function () {
  function registerV2<T extends new (...args: any) => any, K extends string>(
    arg: T,
    name: K
  ) {
    T11 = { ...T11, [name]: arg };

    let a12 = T11 as typeof T11 & Record<K, T>;

    return {
      register: <T extends new (...args: any) => any, K extends string>(
        arg: T,
        name: K
      ) => {
        T11 = { ...T11, [name]: arg };
        
        // let a13 = { ...T11, ...a12, [name]: arg } as typeof T11 &
        //   Record<K, T> &
        //   typeof a12;

        return register
      },
      build: () => {
        const a13 = { ...a12, [name]: arg } as typeof T11 &
          Record<K, T> &
          typeof a12;

        return a13;
      },
    };
  }

  return registerV2;
})();

const llll = register(AnalogClock, "AnalogClock")
  .register(SandGlassClock, "SandGlassClock")
  .register(OilClock, "OilClock")
  .build();

const dkdkkdd = register(SandGlassClock, "SandGlassClock");

// function register<T extends new (...args: any) => any, K extends string>(
//   arg: T,
//   name: K
// ) {
//   T11 = { ...T11, [name]: arg };

//   return T11 as typeof T11 & Record<K, T>;
// }

console.log();

class Some<T> {
  public TName: string;
  constructor(x: new (...args: any) => any) {
    this.TName = x.name;
  }
}

class Another {}

const some = new Some<Another>(Another);

export {};
