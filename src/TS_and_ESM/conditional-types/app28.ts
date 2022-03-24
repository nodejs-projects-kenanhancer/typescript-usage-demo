type Action =
    | { type: 'INIT' }
    | { type: 'SYNC' }
    | { type: 'SIGN_UP', userName: string, password: string, attributeList: Array<any> }
    | { type: 'SIGN_IN', userName: string, pasword: string }
    | { type: 'SIGN_IN_SUCCESS', accessToken: string }
    | { type: 'SIGN_IN_FAILURE', error: string }
    | { type: 'SIGN_OUT', userName: string }
    | { type: 'FORGOT_PASSWORD', userName: string }
    | { type: 'FORGOT_PASSWORD_SUCCESS', verificationCode: string }
    | { type: 'CHANGE_PASSWORD', userName: string, oldPassword: string, newPassword: string }
    | { type: 'CONFIRM_REGISTRATION', userName: string, confirmationCode: string }
    | { type: 'RESEND_CONFIRMATION_CODE', userName: string }
    | { type: 'DELETE_USER', userName: string }
    | { type: 'GET_SESSION', userName: string }
    | { type: 'GET_SESSION_SUCCESS', session: string };

type ActionType = Action['type'];

type KeysOfUnion<T> = T extends T ? keyof T : never;

type ActionKeys = KeysOfUnion<Action>;



type T3<T> = T extends any ? {} extends Omit<T, 'type'> ? never : { [K in keyof Omit<T, 'type'>]: T[K] } : never;

type T4 = T3<Action>

type T5<TAction, TActionType extends ActionType> = TAction extends { type: TActionType } ? T3<TAction> : never;

type T6 = T5<Action, 'INIT'>;

type T7<TAction> = TAction extends { type: infer TActionType } ? TAction extends { type: TActionType } ? T3<TAction> : never : never;

type T8 = T7<Action>

function dispatch<TActionType extends ActionType>(actionType: TActionType): void
function dispatch<TActionType extends ActionType>(actionType: TActionType, payload: T5<Action, TActionType>): void
function dispatch(...args: any[]): void {

}

dispatch('INIT');
dispatch('DELETE_USER', { userName: '' });
dispatch('INIT');

dispatch('CHANGE_PASSWORD', {})

export { };