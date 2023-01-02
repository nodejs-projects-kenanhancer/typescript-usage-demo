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

function register<
  T extends new (...args: any) => any,
  K extends string,
  L extends () => any
>(arg: T, name: K, next?: L) {
  const obj = { [name]: arg };

  return {
    register: <T extends new (...args: any) => any, K extends string>(
      arg2: T,
      name2: K
    ) => {
      const nextFunc = () => {
        if (next) {
          const aa = next();

          return { ...aa, [name2]: arg2, ...obj };
        }

        return obj;
      };

      return register(arg2, name2, nextFunc);
    },
    build: () => {
      const a1 = next!();

      return { ...a1, ...obj };
    },
  };
}

const obj = register(DigitalClock, "DigitalClock")
  .register(AnalogClock, "AnalogClock")
  .register(SandGlassClock, "SandGlassClock")
  .register(OilClock, "OilClock")
  .build();

console.log(obj);

export {};
