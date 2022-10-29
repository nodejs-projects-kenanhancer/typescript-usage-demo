namespace decorators {
  export const Dependency = (definition?: Record<string, string>) => {
    return (constructor: InstanceType<any>) => {};
  };
}
