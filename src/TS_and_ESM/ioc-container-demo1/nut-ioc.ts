import "reflect-metadata";

export type LifeTime = "Transient" | "Singleton" | "Scoped";

export class TypeMetadata {
  instance: any;

  constructor(
    public name: string,
    public constructorType: new (...args: any) => any,
    public constructorParamTypes: Array<Type>,
    public registerType: abstract new (...args: any) => any,
    public lifeTime: LifeTime = "Singleton"
  ) {}
}

export class IocContainer {
  private dependencyMetadataContainer = new Map<string, TypeMetadata>();
  private indexContainer = new Map<Function, string>();

  private registerMetadata<
    TName extends string,
    TInstance extends new (...args: any) => any,
    TRegister extends abstract new (...args: any) => any
  >(
    name: TName,
    constructorType: TInstance,
    constructorParamTypes: Array<Type>,
    registerType: TRegister,
    lifeTime: LifeTime = "Singleton"
  ) {
    const typeMetadata = new TypeMetadata(
      name,
      constructorType,
      constructorParamTypes,
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
    constructorType: TInstance,
    constructorParamTypes: Array<Type>,
    registerType: TRegister,
    lifeTime: LifeTime = "Singleton"
  ) {
    this.registerMetadata(
      name,
      constructorType,
      constructorParamTypes,
      registerType,
      lifeTime
    );

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

export class RegisterWrapper<TExtended> {
  public innerType!: InnerType<TExtended>;

  constructor(private container: IocContainer) {}

   register<
    TName extends string,
    TInstance extends new (...args: any) => any,
    TRegister extends abstract new (...args: any) => any
  >(
    name: TName,
    constructorType: TInstance,
    constructorParamTypes: Array<Type>,
    registerType: TRegister,
    lifeTime: LifeTime = "Singleton"
  ) {
    return this.container.register<TName, TInstance, TRegister, TExtended>(
      name,
      constructorType,
      constructorParamTypes,
      registerType,
      lifeTime
    );
  }

  build() {
    return this.container.build<TExtended>();
  }

  get: TExtended = undefined as TExtended;
}

export class InnerType<T> {}

export class IocContainerDependencyProvider<T> {
  constructor(private dependencyMetadataContainer: Map<string, TypeMetadata>) {}

  get<P extends keyof T>(name: P) {
    const dependencyMetadata = this.dependencyMetadataContainer.get(
      name as string
    );

    if (dependencyMetadata) {
      const { constructorType, lifeTime } = dependencyMetadata;

      let instance: T[P];

      switch (lifeTime) {
        case "Scoped":
          throw new Error(`${lifeTime} LifeTime is not implemented.`);
        case "Singleton":
          if (!dependencyMetadata.instance) {
            dependencyMetadata.instance =
              constructorType && (new constructorType() as T[P]);
          }

          instance = dependencyMetadata.instance;
          break;
        case "Transient":
          instance = constructorType && (new constructorType() as T[P]);

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
    const { constructorType, lifeTime } = dependencyMetadata;
  }
}

// const iocContainer = new IocContainer();

export function DependencyV2<T>(iocContainer: RegisterWrapper<T>) {
  return function <T extends new (...args: any) => any>(constructor: T) {
    console.log("DEPENDENCY ==>", constructor);

    const constructorParamTypes = Reflect.getMetadata(
      "design:paramtypes",
      constructor
    );

    console.log(constructorParamTypes);

    iocContainer.register(
      "kenan",
      constructor as any,
      constructorParamTypes,
      constructor as any
    );

    return class extends constructor {
      constructor(...args: any[]) {
        console.log("Dependency is being created");
        super(...args);
        console.log("Dependency is created");
      }
    };
  };
}

export function Dependency<T extends new (...args: any) => any>(
  constructor: T
) {
  console.log("DEPENDENCY ==>", constructor);

  const constructorParamTypes = Reflect.getMetadata(
    "design:paramtypes",
    constructor
  );

  console.log(constructorParamTypes);

  return class extends constructor {
    constructor(...args: any[]) {
      console.log("Dependency is being created");
      super(...args);
      console.log("Dependency is created");
    }
  };
}

export interface Type<T = any> extends Function {
  new (...args: any[]): T;
}

export function Module(imports: Array<Type>) {
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
