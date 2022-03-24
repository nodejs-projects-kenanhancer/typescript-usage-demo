type Action =
    | { type: 'INIT' }
    | { type: 'SYNC' }
    | { type: 'LOG_IN', emailAddress: string }
    | { type: 'LOG_IN_SUCCESS', accessToken: string };

type T1<T extends { type: any }> = T extends T ? keyof T : never

type T11 = T1<Action>

type KeysOfUnion<T> = T extends T ? keyof T : never;

type T2 = KeysOfUnion<Action>;

type T3<T> = T extends T ? keyof T : never;

type T4 = { type: 'INIT' } & { type: 'LOG_IN', emailAddress: string }

export { };