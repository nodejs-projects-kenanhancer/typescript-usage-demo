{
    class Class<T>{
        constructor(public data: T) { }

        foo = <U extends T>(bar: U[]) => {
            return (this as unknown) as Class<T>;
        };

        bar = <U extends T>(cb: (qux: U) => void) => {
            return (this as any) as Class<T>;
        };

        baz = <U extends T>(p1: U) => {
            this.data = p1;
        }
    }

    new Class({ name: "", id: "" }).foo([{ name: "kenan", id: "132" }]).bar((p) => p.id);

    new Class(111).foo([1, 2, 3]).bar((p1) => p1).data;

    new Class(11).foo([1, 2, 3]).bar(p => p).baz(3);
}

{
    class Class<T>{
        constructor(public data: T) { }

        foo(p1: T[]) {
            return this;
        }

        bar(cb: (p1: T) => void) {
            return this;
        }

        baz(p1: T) {
            this.data = p1;
        }
    }

    new Class({ name: '', id: '' }).foo([{ name: 'kenan', id: '123' }]).bar(p1 => p1).data;

    new Class(111).foo([1, 2, 3]).bar(p1 => p1).data;
}

{
    class Class<T>{
        constructor(public data: T) { }

        foo<U extends T>(p1: U[]) {
            return this;
        }

        bar(cb: (p1: T) => void) {
            return this;
        }

        baz(p1: T) {
            this.data = p1;
        }
    }

    new Class(11).foo([1, 2, 3]).bar(p1 => p1).data;
}

{
    type Transform<T> = T extends any ? T[keyof T] : never;

    type Output = Transform<{ firstName: string; age: number }>;
}

{
    type Transform<T> = T extends Record<string, infer A> ? A : never;

    type Output = Transform<{ firstName: 'kenan', age: 11 } | { birthDate: Date }>;
}

{
    type Transform<T> = T extends { [P in keyof T]: infer R } ? R : never;

    type Output = Transform<{ firstName: 'kenan', age: 11 } | { birthDate: Date }>;
}

{
    type ObjectFieldNames<T> = keyof T;

    type PersonType = { personId: number; firstName: string; lastName: string; birthDate: Date };

    type FieldNames = ObjectFieldNames<PersonType>;

    const a1: FieldNames = 'birthDate';
}

{
    type ObjectFieldNames<T> = keyof T;

    type PersonType = { personId: number; firstName: string; lastName: string; birthDate: Date };

    type UserType = { userId: string; userName: string; password: string; isAdmin: boolean };

    type FieldNames = ObjectFieldNames<PersonType | UserType>; // never
}

{
    type ObjectFieldNames<T> = T extends any ? keyof T : never;

    type PersonType = { personId: number; firstName: string; lastName: string; birthDate: Date };

    type UserType = { userId: string; userName: string; password: string; isAdmin: boolean };

    type EventType = { id: string; eventType: "Info" | "Error"; data: any };

    type FieldNames = ObjectFieldNames<PersonType | UserType | EventType>;

    const a1: FieldNames = 'eventType';
}

{
    type ObjectFieldNames<T> = T extends { [P in infer A]: any } ? A : never;

    type PersonType = { personId: number; firstName: string; lastName: string; birthDate: Date };

    type UserType = { userId: string; userName: string; password: string; isAdmin: boolean };

    type FieldNames = ObjectFieldNames<PersonType | UserType>;

    const a1: FieldNames = 'birthDate';
}

{
    type ObjectFieldNames<T> = T extends Record<infer K, any> ? K : never;

    type PersonType = { personId: number; firstName: string; lastName: string; birthDate: Date };

    type UserType = { userId: string; userName: string; password: string; isAdmin: boolean };

    type FieldNames = ObjectFieldNames<PersonType | UserType>;

    const a1: FieldNames = 'birthDate';
}

{
    type ObjectFieldTypes<T> = T[keyof T];

    type PersonFieldTypes = ObjectFieldTypes<{ personId: number; firstName: string; lastName: string; birthDate: Date }>;
}

{
    // type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];

    type FunctionFieldNames<T> = T extends any ? { [P in keyof T]: T[P] extends Function ? P : never } : never;

    interface Car {
        manufacturer: string;
        model: string;
        year: number;
        changeColor: () => {

        }
    }

    type T1 = FunctionFieldNames<Car>;

    // const a1: T1 = ''
}

{
    type FunctionFieldNames<T> = T extends any ? { [P in keyof T]: T[P] extends Function ? P : never }[keyof T] : never;

    interface Car {
        manufacturer: string;
        model: string;
        year: number;
        changeColor: () => {

        }
    }

    type UserType = {
        userId: string;
        userName: string;
        password: string;
        isAdmin: boolean;
        login: () => {

        }
    };


    type T1 = FunctionFieldNames<Car | UserType>;

    const a1: T1 = 'changeColor';
}




export { };