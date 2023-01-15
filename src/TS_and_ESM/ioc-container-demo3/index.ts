import "reflect-metadata";

type ClassType<T = any> = new (...args: any[]) => T;

class DependencyMetadata {
  constructor(
    public readonly name: string,
    public readonly dependency: ClassType,
    public readonly constructorParameters?: Array<ClassType>
  ) {}
}

interface IIocContainer<TExtends = never> {
  register<
    TName extends string,
    TDependency extends ClassType,
    TConstructorParameter extends ClassType
  >(
    name: TName,
    dependency: TDependency,
    constructorParameters?: Array<TConstructorParameter>
  ): IIocContainer<TName | TExtends>;

  build(): IIocContainerDefaultDependencyResolver<TExtends>;
}

interface IIocContainerDefaultDependencyResolver<TExtends = never> {
  resolve(dependency: TExtends): any;
}

class IocContainerDefaultDependencyResolver<TExtends = never>
  implements IIocContainerDefaultDependencyResolver<TExtends>
{
  constructor(
    private readonly dependencyMetadataContainer: Map<
      string,
      DependencyMetadata
    >
  ) {}

  resolve() {
    return {} as TExtends;
  }
}

interface IIocContainerBuilder<TExtends = never> {
  build(): IIocContainerDefaultDependencyResolver<TExtends>;
}

class IocContainerDefaultBuilder<TExtends = never>
  implements IIocContainerBuilder<TExtends>
{
  constructor(
    private readonly dependencyMetadataContainer: Map<
      string,
      DependencyMetadata
    >,
    private readonly dependencyContainerResolver: IIocContainerDefaultDependencyResolver<TExtends> = new IocContainerDefaultDependencyResolver<TExtends>(
      dependencyMetadataContainer
    )
  ) {}

  build() {
    return this.dependencyContainerResolver;
  }
}

class IocContainer<TExtends = never> implements IIocContainer<TExtends> {
  constructor(
    private readonly dependencyMetadataContainer: Map<
      string,
      DependencyMetadata
    >,
    private readonly dependencyContainerBuilder = new IocContainerDefaultBuilder<TExtends>(
      dependencyMetadataContainer
    )
  ) {}

  register<
    TName extends string,
    TDependency extends ClassType,
    TConstructorParameter extends ClassType
  >(
    name: TName,
    dependency: TDependency,
    constructorParameters?: Array<TConstructorParameter>
  ) {
    this.dependencyMetadataContainer.set(
      name,
      new DependencyMetadata(name, dependency, constructorParameters)
    );

    return new IocContainer<TName | TExtends>(this.dependencyMetadataContainer);
  }

  build() {
    return this.dependencyContainerBuilder.build();
  }
}

class IocContainerFactory {
  static getContainer() {
    const dependencyMetadataContainer = new Map<string, DependencyMetadata>();

    const iocContainer = new IocContainer(dependencyMetadataContainer);

    return iocContainer;
  }
}

const iocContainer = IocContainerFactory.getContainer();

function Dependency<T extends ClassType>(constructor: T) {
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
  }

  getFullName(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`;
  }
}

abstract class IGreetingService {
  abstract sayHello(firstName: string, lastName: string): string;
  abstract sayGoodbye(firstName: string, lastName: string): string;
}

@Dependency
class GreetingService extends IGreetingService {
  constructor(private readonly helper: IHelper) {
    super();
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

// const a1 = iocContainer.register("Helper", Helper).register("Helper2", Helper);

// const a2 = a1.build();

// a2.resolve("Helper");

const a1 = iocContainer.build();

export {};
