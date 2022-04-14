class User {
    constructor(public id: number) { }
}

class Admin extends User {
    constructor(id: number, public isSuperAdmin: boolean) { super(id) }
}

{
    const a1: User = new User(1);

    const a2: User = new Admin(1, true);
}

{
    function login<T extends User>(user: T) { }

    login(new User(1));

    login(new Admin(1, true));

    // login(111);
}

{
    function login(user: User) { }

    login(new User(1));

    login(new Admin(1, true));

    // login(111);
}

{
    type IsSubType<TChild, TSuper> = TChild extends TSuper ? true : false;

    type T1 = IsSubType<User, Admin>;

    type T2 = IsSubType<Admin, User>;

    type T3 = IsSubType<'hello', string>;

    type T4 = IsSubType<string, 'hello'>;

    type T5 = IsSubType<111, number>;

    type T6 = IsSubType<number, 111>;

    type T7 = IsSubType<Map<string, string>, object>;

    type T8 = IsSubType<object, Map<string, string>>;

    type T9 = IsSubType<Promise<Admin>, Promise<User>>;

    type T10 = IsSubType<Promise<User>, Promise<Admin>>;
}

{
    interface Repository<T extends Admin> { }

    type T1 = Repository<User>;

    type T2 = Repository<Admin>;
}

export { };