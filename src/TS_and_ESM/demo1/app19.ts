interface NumberDictionary {
    [index: string]: number;

    length: number;

    // name: string; // error
}

interface NumberOrStringDictionary{
    [index: string]: number | string;

    length: number;

    name: string; // ok

    // isDeleted: boolean; // error
}


export { };