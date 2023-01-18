import "reflect-metadata";

export type ClassType<T = any> = new (...args: any[]) => T;

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
    public readonly dependencyMetadataContainer: Map<
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

export const iocContainer = IocContainerFactory.getContainer();

export function Dependency<T extends ClassType>(constructor: T) {
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
