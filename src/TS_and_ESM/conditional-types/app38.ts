
// Function overload
{
    interface IdLabel {
        id: number;
    }

    interface NameLabel {
        name: string;
    }

    function createLabel(id: number): IdLabel;
    function createLabel(name: string): NameLabel;
    function createLabel(nameOrId: string | number): IdLabel | NameLabel;
    function createLabel(nameOrId: any): any {
        return nameOrId;
    }

    const a1: IdLabel = createLabel(0);
    const a2: NameLabel = createLabel("");
    const a3: IdLabel | NameLabel = createLabel(Math.random() ? "" : 0);
}

// Narrowing return type and casting return value as any
{
    interface IdLabel {
        id: number;
    }

    interface NameLabel {
        name: string;
    }

    type NameOrId<T> = T extends number ? IdLabel : NameLabel;

    function createLabel<T extends number | string>(nameOrId: T): NameOrId<T> {

        return nameOrId as any;
    }

    const a1: IdLabel = createLabel(0);
    const a2: NameLabel = createLabel("");
    const a3: IdLabel | NameLabel = createLabel(Math.random() ? "" : 0);
}

// Narrowing return type and casting return value as any
{
    function capitalize<T extends string | string[]>(input: T): T extends string[] ? string[] : string {
        if (typeof input === 'string') {
            return input[0].toUpperCase() + input.slice(1) as any;
        } else {
            return input.map(elt => capitalize(elt)) as any;
        }
    }

    const a1: string = capitalize("hello");
    const a2: string[] = capitalize(["hello", "world"]);
    const a3: string | string[] = capitalize(Math.random() ? "hello" : ["hello", "world"]);
}

export { };