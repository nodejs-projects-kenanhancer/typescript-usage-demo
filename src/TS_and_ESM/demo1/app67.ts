type Page = 'home' | 'about' | 'contact';

type PageInfo = {
    title: string;
}

type Record2<K extends keyof any, T extends any> = {
    [P in K]: T;
};

type Record3 = {
    [index: string]: { title: string };
};

type Record4 = {
    [index in "firstName" | "lastName"]: { title: string };
};

type Record5 = {
    [index in string | number]: { title: string };
};

type Record6<K extends keyof any, T extends any> = {
    [index in K]: T;
};

const aa: Record3 = {
    "firstName": { title: "" }, "lastName": { title: "" }
}

const x: Record2<'home' | 'about' | 'contact', { title: string }> = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' },
};

console.log();

export { };