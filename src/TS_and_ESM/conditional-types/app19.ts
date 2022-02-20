class Store<T>{
    itemCreator<U>(
        generate: <P = Omit<T, keyof U>>(item: P) => U
    ): (item: Omit<T, keyof U>) => Omit<T, keyof U> & U {
        return item => ({ ...item, ...generate(item) });
    }
}

type Person = {
    id: string;
    name: string;
    email: string;
    age?: number;
};

const create = new Store<Person>().itemCreator((person) => ({ id: 'ID', extra: 42 }))

const person = create({ name: 'John', email: 'john.doe@foo.com' });

export { };