{
    function sum(a: number, b: number) {
        return a + b;
    }

    type T1 = typeof sum;

    const total = sum(10, 20);
}

{
    const sum = (a: number, b: number) => a + b;

    type T1 = typeof sum;

    const total = sum(10, 20);
}

{
    function greet(title: string, firstName: string, lastName: string): string;
    function greet(firstName: string, lastName: string): string;
    function greet(...arg: any[]): string {
        let [title, firstName, lastName] = arg;

        !lastName && ([title, lastName] = [lastName, title]);

        const result = `${title} ${firstName} ${lastName}`.trimStart();

        return result;
    }

    const a1 = greet('Mr', 'Kenan', 'Hancer');

    const a2 = greet('Kenan', 'Hancer');
}

{
    type GreetingType =
        | [title: string, firstName: string, lastName: string]
        | [firstName: string, lastName: string];

    function greet(...arg: GreetingType) {
        let [title, firstName, lastName] = arg;

        !lastName
            && ([title, lastName] = [lastName = '', title])
            && ([lastName, firstName] = [firstName, lastName]);

        const result = `${title} ${firstName} ${lastName}`.trimStart();

        return result;
    }

    const a1 = greet('Mr', 'Kenan', 'Hancer');

    const a2 = greet('Kenan', 'Hancer');

    console.log();
}

{
    function greet(greeting: string, ...names: string[]) {
        return `${greeting} ${names.join(', ')}!`;
    }

    const a1 = greet('Hi', 'Kenan', 'Enes', 'Eren');

    const a2 = greet('Hello', 'Enejda', 'Eren', 'Enes', 'Kenan');
}

{
    const Languages = ['tr', 'en'] as const;

    type LanguageType = typeof Languages[number];

    type GreetingType = [greeting: string, ...names: string[], isCapital: boolean, language: LanguageType];

    function greet(...arg: GreetingType) {
        const [greeting, isCapital, language, names] = [arg[0], ...arg.slice(-2) as [boolean, LanguageType], arg.slice(1, -2) as string[]];

        const capitalize =
            (...words: string[]) => words.map(([first, ...rest]) => `${isCapital && first.toLocaleUpperCase(language) || first}${rest.join('')}`);

        return [...capitalize(greeting), capitalize(...names).join(', ')].join(' ');
    }

    const a1 = greet('merhaba', 'kenan', 'Enes', 'eren', true, 'tr');

    const a2 = greet('Hello', 'enejda', 'eren', 'enes', 'kenan', false, "en");

    const a3 = greet('iyi gunler', 'kenan', 'enejda', true, 'en');
}

{
    const Languages = ['tr', 'en'] as const;

    type LanguageType = typeof Languages[number];

    type GreetingType = [greeting: string, ...names: string[], isCapital: boolean, language: LanguageType];

    function greet(...arg: GreetingType) {
        const [greeting, isCapital, language, names] = [arg[0], ...arg.slice(-2) as [boolean, LanguageType], arg.slice(1, -2) as string[]];

        const capitalize =
            (...words: string[]) => words.map(([first, ...rest]) => [isCapital && first.toLocaleUpperCase(language) || first, ...rest].join(''));

        return [...capitalize(greeting), capitalize(...names).join(', ')].join(' ');
    }

    const a1 = greet('merhaba', 'kenan', 'Enes', 'eren', true, 'tr');

    const a2 = greet('Hello', 'enejda', 'eren', 'enes', 'kenan', false, "en");

    const a3 = greet('iyi gunler', 'kenan', 'enejda', true, 'en');
}

{

}

export { };