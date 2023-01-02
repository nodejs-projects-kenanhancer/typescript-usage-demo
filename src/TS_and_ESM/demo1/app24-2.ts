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

class IocContainer {
  container = {};

  register<T extends new (...args: any) => any, K extends string>(
    arg: T,
    name: K
  ) {

    this.container = {
      ...this.container,
      ...{ [name]: arg },
    } as typeof this.container & Record<K, T>;

    return this;
  }

  build() {
    // const values = Object.values(this.container).reduce(
    //   (pv, cv) => ({ ...(pv as any)(), ...(cv as any)() }),
    //   {}
    // );

    return this.container;
  }
}

const container = new IocContainer();

const obj1 = container.register(DigitalClock, "DigitalClock").build();

export {};
