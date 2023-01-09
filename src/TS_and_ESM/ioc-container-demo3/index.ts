type ClassType<T = any> = new (...args: any[]) => T;

interface IIocContainer<TExtends = never> {
  register<
    TName extends string,
    TDependency extends ClassType,
    TConstructorParameter extends ClassType
  >(
    name: TName,
    dependency: TDependency,
    constructorParameters: Array<TConstructorParameter>
  ): IIocContainer<TName | TExtends>;

  build(): TExtends;
}

class DependencyMetadata {
  constructor(
    public name: string,
    public dependency: ClassType,
    public constructorParameters: Array<ClassType>
  ) {}
}

class IocContainer<TExtends = never> implements IIocContainer<TExtends> {
  private dependencyMetadataContainer = new Map<string, DependencyMetadata>();

  register<
    TName extends string,
    TDependency extends ClassType,
    TConstructorParameter extends ClassType
  >(
    name: TName,
    dependency: TDependency,
    constructorParameters: Array<TConstructorParameter>
  ) {
    this.dependencyMetadataContainer.set(
      name,
      new DependencyMetadata(name, dependency, constructorParameters)
    );

    // return new IocContainer<TExtends | TName>();
    return this;
  }

  build() {
    return undefined as TExtends;
  }
}

const iocContainer = new IocContainer();

export function Dependency<T extends new (...args: any) => any>(
  constructor: T
) {
  const constructorParamTypes = Reflect.getMetadata(
    "design:paramtypes",
    constructor
  );

  console.log("Dependency is being loaded => ", constructor);

  console.log("Dependency Constructor Parameters => ", constructorParamTypes);

  iocContainer.register(constructor.name, constructor, constructorParamTypes);

  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      console.log("Dependency is being created");
    }
  };
}

abstract class IHelper {
  abstract getFullName(firstName: string, lastName: string): string;
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

export {};
