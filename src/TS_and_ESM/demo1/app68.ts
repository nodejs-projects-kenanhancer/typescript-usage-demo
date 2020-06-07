type Page = "Home" | "About" | "Contact";

type PageInfo = {
    title: string;
};

type Record1 = {
    [index: string]: any;
};

type Record2<K extends string | number, V> = {
    [index in K]: V;
};

const a1: Record<"firstName" | "lastName", string> = {
    firstName: "Kenan",
    "lastName": "Hancer"
};

const a2: Record1 = {
    firstName: "Kenan",
    "lastName": "Hancer"
};

const a3: Record2<any, any> = {
    firstName: "Kenan",
    0: "kenanhancer@hotmail.com"
};




export { };