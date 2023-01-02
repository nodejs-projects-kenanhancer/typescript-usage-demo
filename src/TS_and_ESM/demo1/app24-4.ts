abstract class BaseClock {
  abstract tick(): void;
}

abstract class IDigitalClock {
  abstract hour: number;
  abstract minute: number;
}
abstract class IAnalogClock {
  abstract h: number;
  abstract m: number;
}
abstract class ISandGlassClock {}
abstract class IOilClock {}

class DigitalClock extends IDigitalClock {
  hour: number;
  minute: number;

  constructor(h: number, m: number) {
    super();
    this.minute = m;
    this.hour = h;
  }

  tick(): void {
    console.log("beep beep");
  }
}

class AnalogClock extends IAnalogClock {
  constructor(public h: number, public m: number) {
    super();
  }

  tick(): void {
    console.log("tick tock");
  }
}

class SandGlassClock extends ISandGlassClock {
  tick(): void {
    console.log("shhhh");
  }
}

class OilClock extends IOilClock {
  tick(): void {
    console.log("gluk gluk");
  }
}

const register = (function () {
  let state = {};

  function register<
    T extends new (...args: any) => any,
    R extends abstract new (...args: any) => any,
    K extends string,
    L
  >(name: K, type: T, registerType: R) {
    state = { ...state, [name]: type };

    type TResult = L & {
      [P in K]: InstanceType<R>;
    };

    return {
      register: <
        T extends new (...args: any) => any,
        R extends abstract new (...args: any) => any,
        K extends string
      >(
        name: K,
        type: T,
        registerType: R
      ) => {
        return register<T, R, K, TResult>(name, type, registerType);
      },
      build: () => state as TResult,
    };
  }

  return register;
})();

const a1 = register("AnalogClock", AnalogClock, IAnalogClock)
  .register("DigitalClock", DigitalClock, IDigitalClock)
  .register("OilClock", OilClock, IOilClock)
  .register("SandGlassClock", SandGlassClock, ISandGlassClock)
  .build();

console.log();

export {};
