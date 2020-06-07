// Type Aliases

type Name = string
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
    if (typeof n === "string") {
        return n;
    }

    return n();
}





type Container<T> = { value: T };

type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
};

type LinkedList<T> = T & { next: LinkedList<T> };

interface Person{
    name: string;
}

let people: LinkedList<Person>;

let tree: Tree<Person>;

export { };