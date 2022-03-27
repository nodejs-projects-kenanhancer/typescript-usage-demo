{
    function ensureString<T>(value: T): T extends string ? string : null {
        if (typeof value === 'string') {
            return value as any;
        }

        return null as any;
    }

    const a1 = ensureString('');
    const a2 = ensureString(0);
}

export { };