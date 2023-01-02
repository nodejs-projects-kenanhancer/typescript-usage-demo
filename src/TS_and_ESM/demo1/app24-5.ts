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

class IocContainer {
  register<
    TName extends string,
    TInstance extends new (...args: any) => any,
    TRegister extends abstract new (...args: any) => any,
    TExtends
  >(name: TName, instanceType: TInstance, registerType: TRegister) {
    type TExtended = TExtends & {
      [P in TName]: InstanceType<TRegister>;
    };

    return new InnerRegister<TExtended>(this);
  }

  build() {}
}

class InnerRegister<TExtended> {
  constructor(private container: IocContainer) {}

  register<
    TName extends string,
    TInstance extends new (...args: any) => any,
    TRegister extends abstract new (...args: any) => any
  >(name: TName, instanceType: TInstance, registerType: TRegister) {
    return this.container.register<TName, TInstance, TRegister, TExtended>(
      name,
      instanceType,
      registerType
    );
  }

  build() {
    return this.container.build() as TExtended;
  }
}

const iocContainer = new IocContainer();

const obj1 = iocContainer
  .register("AnalogClock", AnalogClock, IAnalogClock)
  .register("DigitalClock", DigitalClock, IDigitalClock)
  .register("OilClock", OilClock, IOilClock)
  .register("SandGlassClock", SandGlassClock, ISandGlassClock)
  .build();

console.log();

export {};
