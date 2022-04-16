{
    //Tuple Types
    const x: [string, number] = ['hello', 10];

    x[0] = 'world';

    x[1] = 20;

    console.log(`Hello ${x[0]}, ${x[1]}`);

    const [a, b] = x;

    const a1: Array<string | number> = [...x];

    const a2 = [...x];

    const a3: [string, number, Date?] = ['hello', 11];

    const [name, age, birthDate = new Date()] = a3;

    const a4: [Record<PropertyKey, any>, (p: Record<PropertyKey, any>) => void] = [{}, (p) => { }];

    const [counter, setCounter] = a4;

    setCounter({ ...counter, name: 'kenan' });
}

{
    //Union Types
    interface RunOptions {
        program: string;
        commandline: string | string[] | (() => string);
    }

    const a1: RunOptions = {
        program: '',
        commandline: '-hello world'
    };

    const a2: RunOptions = {
        program: '',
        commandline: ['-hello', 'world']
    };

    const a3: RunOptions = {
        program: '',
        commandline: () => '-hello world'
    };
}

{
    //Stricker Generics
    function equal<T>(lhs: T, rhs: T): boolean {
        return lhs === rhs;
    }

    const a1 = equal(11, 12);

    const a2 = equal<string | number>(42, "hello");

    const choose2 = <T, U>(a: T, b: U) => {
        return Math.random() > 0.5 ? a : b;
    };

    const a3 = choose2('hello', 'world');

    const a4 = choose2('hello', 11);

    const a5 = choose2({ a: 'hello' }, { b: 'world' });
}

{
    //Type Aliases
    type PrimitiveArray = Array<string | number | boolean>;

    type MyNumber = number;

    type Callback = () => void;
}

{
    //const enum(completely inlined enums)
    //The new const enum declaration works just like a regular enum for type safety, but erases completely at compile time

    const enum Suit {
        Clubs,
        Diamonds,
        Hearts,
        Spades
    }

    const a1 = Suit.Spades; // emits const a1 = 3;

    enum MyFlags {
        None = 0,
        Neat = 1,
        Cool = 2,
        Awesome = 4,
        Best = Neat | Cool | Awesome
    }

    const a2 = MyFlags.Best; // emits const a2 = 7;
}

{
    //Destructuring in declarations and assignments

    {
        const user = {
            name: 'kenan',
            password: '0110010',
            isAdmin: true
        };

        const { name, password, isAdmin } = user;
    }

    {
        type User = {
            name: string;
            password: string;
            isAdmin?: boolean;
        };

        const user: User = {
            name: 'kenan',
            password: '0110010'
        };

        const { name, password, isAdmin = false } = user;
    }

    {
        const numbers: Array<number> = [1, 2, 3];

        const [x, y, z, q = 4] = numbers;
    }

    {
        function drawText({ text = "", location: [x, y] = [0, 0], bold = false }) {
            // Draw text
        }

        // Call drawText with an object literal
        const item = { text: "someText", location: [1, 2] as [number, number], style: "italics" };
        drawText(item);
    }

    {
        let x = 1;
        let y = 2;

        [y, x] = [x, y]; // emits y = 1 and x = 2;
    }

    {
        class Color {
            kind: string;
            red: string;
            green: string;
            blue: string;

            constructor(kind: string, red: string, green: string, blue: string) {
                this.kind = kind;
                this.red = red;
                this.green = green;
                this.blue = blue;
            }
        }

        function test() {
            return new Color('', '', '', '');
        }

        const a1 = new Color(
            '',
            '',
            '',
            '');
    }
}

export { };