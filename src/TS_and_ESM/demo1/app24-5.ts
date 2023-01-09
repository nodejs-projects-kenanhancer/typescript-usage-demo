import "reflect-metadata";

type LifeTime = "Transient" | "Singleton" | "Scoped";

class TypeMetadata {
  instance: any;

  constructor(
    public name: string,
    public instanceType: new (...args: any) => any,
    public registerType: abstract new (...args: any) => any,
    public lifeTime: LifeTime = "Singleton"
  ) {}
}

class IocContainer {
  private dependencyMetadataContainer = new Map<string, TypeMetadata>();
  private indexContainer = new Map<Function, string>();

  private registerMetadata<
    TName extends string,
    TInstance extends new (...args: any) => any,
    TRegister extends abstract new (...args: any) => any
  >(
    name: TName,
    instanceType: TInstance,
    registerType: TRegister,
    lifeTime: LifeTime = "Singleton"
  ) {
    // var types = Reflect.getMetadataKeys('design:', instanceType);

    const typeMetadata = new TypeMetadata(
      name,
      instanceType,
      registerType,
      lifeTime
    );

    this.indexContainer.set(registerType, name);

    this.dependencyMetadataContainer.set(name, typeMetadata);

    return typeMetadata;
  }

  register<
    TName extends string,
    TInstance extends new (...args: any) => any,
    TRegister extends abstract new (...args: any) => any,
    TExtends
  >(
    name: TName,
    instanceType: TInstance,
    registerType: TRegister,
    lifeTime: LifeTime = "Singleton"
  ) {
    this.registerMetadata(name, instanceType, registerType, lifeTime);

    type TExtended = TExtends & {
      [P in TName]: InstanceType<TRegister>;
    };

    return new RegisterWrapper<TExtended>(this);
  }

  build<TExtends>() {
    const dependencyProvider = new IocContainerDependencyProvider<TExtends>(
      this.dependencyMetadataContainer
    );

    return dependencyProvider;
  }
}

class RegisterWrapper<TExtended> {
  constructor(private container: IocContainer) {}

  register<
    TName extends string,
    TInstance extends new (...args: any) => any,
    TRegister extends abstract new (...args: any) => any
  >(
    name: TName,
    instanceType: TInstance,
    registerType: TRegister,
    lifeTime: LifeTime = "Singleton"
  ) {
    return this.container.register<TName, TInstance, TRegister, TExtended>(
      name,
      instanceType,
      registerType,
      lifeTime
    );
  }

  build() {
    return this.container.build<TExtended>();
  }
}

class IocContainerDependencyProvider<T> {
  constructor(private dependencyMetadataContainer: Map<string, TypeMetadata>) {}

  get<P extends keyof T>(name: P) {
    const dependencyMetadata = this.dependencyMetadataContainer.get(
      name as string
    );

    if (dependencyMetadata) {
      const { instanceType, lifeTime } = dependencyMetadata;

      let instance: T[P];

      switch (lifeTime) {
        case "Scoped":
          throw new Error(`${lifeTime} LifeTime is not implemented.`);
        case "Singleton":
          if (!dependencyMetadata.instance) {
            dependencyMetadata.instance =
              instanceType && (new instanceType() as T[P]);
          }

          instance = dependencyMetadata.instance;
          break;
        case "Transient":
          instance = instanceType && (new instanceType() as T[P]);

          break;
        default:
          const exhaustiveCheck: never = lifeTime;
          throw new Error(`Unrecognized LifeTime ${exhaustiveCheck}`);
      }

      return instance;
    }

    return undefined;
  }

  getInstance(dependencyMetadata: TypeMetadata) {
    const { instanceType, lifeTime } = dependencyMetadata;
  }
}

const iocContainer = new IocContainer();

abstract class IDigitalClock {
  abstract hour: number;
  abstract minute: number;
  abstract tick(): void;
}

abstract class IAnalogClock {
  abstract h: number;
  abstract m: number;
  abstract tick(): void;
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

export abstract class IHelper {
  abstract getFullName(firstName: string, lastName: string): string;
}

export abstract class IGreetingService {
  abstract sayHello(firstName: string, lastName: string): string;
  abstract sayGoodbye(firstName: string, lastName: string): string;
}

function ParamTypes(...types: any[]) {
  return Reflect.metadata("design:paramtypes", types);
}

export function LuckyNumber(limit: number) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    // const paramsTypes = Reflect.getMetadata("design:paramtypes", constructor);

    // iocContainer.register(
    //   constructor.name,
    //   constructor as any,
    //   constructor as any
    // );

    // for (const prm of paramsTypes) {
    //   console.log(prm.name);
    // }

    // constructor.prototype.lucky = Math.floor(Math.random() * Math.floor(limit));

    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
      }
    };
  };
}

function Dependency<T extends new (...args: any) => any>(constructor: T) {
  const paramsTypes = Reflect.getMetadata("design:paramtypes", constructor);

  console.log(paramsTypes);

  return class extends constructor {
    constructor(...args: any[]) {
      console.log("Dependency is being created");
      super(...args);
      console.log("Dependency is created");
    }
  };
}

interface Type<T = any> extends Function {
  new (...args: any[]): T;
}
function Module(imports: Array<Type>) {
  return function <T extends new (...args: any) => any>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        console.log(imports);
        console.log("Module is being created");
        super(...args);
        console.log("Module is created");
      }
    };
  };
}

@Dependency
class GreetingService extends IGreetingService {
  constructor(public helper: IHelper) {
    super();
    console.log();
    console.log();
  }

  sayHello(firstName: string, lastName: string) {
    const fullName = this.helper.getFullName(firstName, lastName);

    return `Hello ${fullName}`;
  }

  sayGoodbye(firstName: string, lastName: string) {
    const fullName = this.helper.getFullName(firstName, lastName);

    return `Goodbye, ${fullName}`;
  }
}

@Dependency
class Helper extends IHelper {
  constructor() {
    super();
    console.log();
    console.log();
  }

  getFullName(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`;
  }
}

// @Module()
// class GreetModule {}

// const greetModule = new GreetModule();

// console.log([GreetingService, Helper]);

const dependencyProvider = iocContainer
  .register("AnalogClock", AnalogClock, IAnalogClock)
  .register("DigitalClock", DigitalClock, IDigitalClock, "Transient")
  .register("OilClock", OilClock, IOilClock)
  .register("SandGlassClock", SandGlassClock, ISandGlassClock)
  .register("GreetingService", GreetingService, IGreetingService)
  .register("Helper", Helper, IHelper)
  .build();

const analogClock = dependencyProvider.get("AnalogClock");

console.log(analogClock?.h);

const digitalClock = dependencyProvider.get("DigitalClock");

console.log(digitalClock?.minute);

const helper = dependencyProvider.get("Helper");

console.log(helper?.getFullName("kenan", "hancer"));

const greetingService = dependencyProvider.get("GreetingService");

console.log(greetingService?.sayHello("kenan", "hancer"));

export {};
