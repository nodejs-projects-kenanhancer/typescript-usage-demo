// Interfaces vs. Type Aliases



type Tags = "img" | "input";

type Alias = { num: number };

interface Interface {
    num: number;
}

const a1: Alias = { num: 3 };

const a2 = function (p1: Alias): void {

    console.log(p1.num);
};

const a3 = function (): Alias {

    return { num: 5 };
};

const a4 = function (p1: Interface): void {
    console.log(p1.num);
};

const a5 = function (): Interface {

    return { num: 3 };
};

a2({ num: 9 });

a4({ num: 3 });



type PersonCommonFields = { firstName: string, lastName: string };

type Person = PersonCommonFields & { isDeleted: true | false };

const person1: Person = { firstName: "kenan", lastName: "hancer", isDeleted: false };

export { };