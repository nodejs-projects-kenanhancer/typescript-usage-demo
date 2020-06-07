interface KeyValueProcessor {
    (key: number, value: string): void;
}

function addKeyValue(key: number, value: string): void {
    console.log('addKeyValue: key = ' + key + ', value = ' + value);
}

function updateKeyValue(key: number, value: string): void {
    console.log('updateKeyValue: key = ' + key + ', value= ' + value);
}

let kvp: KeyValueProcessor = addKeyValue;
kvp(1, 'Bill');

kvp = updateKeyValue;
kvp(2, 'Steve');

export { };