const createUserAsync = async (userName: string) => {
    return {
        type: 'CreateUser',
        payload: userName
    } as const;
};

const deleteUserAsync = async (userId: number) => {
    return {
        type: 'DeleteUser',
        payload: userId
    } as const;
};

type ReturnTypeAsync<T extends (...args: any[]) => any> =
    T extends (...args: any[]) => Promise<infer R> ? R : any;

type ActionsAsync = ReturnTypeAsync<typeof createUserAsync> | ReturnTypeAsync<typeof deleteUserAsync>;

export { };