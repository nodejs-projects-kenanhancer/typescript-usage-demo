const a1 = { k: "", s: "" };

class IocContainer<TExtended> {
  name!: TExtended;

  register<TName extends string>(name: TName) {
    return new IocContainer<[TName]>();
  }
}

let cont = new IocContainer();

const getDependencyProvider = <TName extends string, TExtends>(name: TName, last: TExtends) => {
  const ld = cont.register(name);

  return {
    register: <TName extends string>(name: TName) => {
      return getDependencyProvider(name, ld.name);
    },
    item: "" as TName | TExtends,
  };
};

getDependencyProvider("kenan", '')


cont = cont.register("kenan");

cont.register("eren");

cont.register("enejda");

type T1 = typeof cont.name;

// const lsk: T1 = ''

export {};
