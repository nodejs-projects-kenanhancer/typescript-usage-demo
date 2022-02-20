const createUser = (userName: string) => {
    return {
        type: 'CreateUser',
        payload: userName
    } as const;
};

const deleteUser = (userId: number) => {
    return {
        type: 'DeleteUser',
        payload: userId
    } as const;
};

type UserActions = ReturnType<typeof createUser> | ReturnType<typeof deleteUser>;

const action1: UserActions = { type: 'CreateUser', payload: '' };

const action2: UserActions = { type: 'DeleteUser', payload: 11 };

export { };