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

type TodoAction =
    | { type: 'INIT' }
    | { type: 'ADD_TODO', text: string }
    | { type: 'REMOVE_TODO', id: string }
    | { type: 'SET_COMPLETED', id: string };




// Wrong usage
type DispatchType1 = (actionType: Action['type'], payload: Extract<Action, { type: Action['type'] }>) => void;

const dispatch1: DispatchType1 = (actionType, payload) => { throw new Error('Not implemented') };

dispatch1('CHANGE_PASSWORD', { type: 'DELETE_USER', userName: '' });

// Wrong usage
type DispatchType2 = <K extends Action['type']>(actionType: K, payload: Extract<Action, { type: K }>) => void;

const dispatch2: DispatchType2 = (actionType, payload) => { throw new Error('Not implemented') };

dispatch2('CHANGE_PASSWORD', { type: 'DELETE_USER', userName: '' });


// Good usage
type DispatchType3 = <K extends Action['type'], J extends Extract<Action, { type: K }>>(actionType: K, payload: J) => void;

const dispatch3: DispatchType3 = (actionType, payload) => { throw new Error('Not implemented') };

dispatch3('DELETE_USER', { type: 'DELETE_USER', userName: '' });

// Good usage
type DispatchType4 = <T extends Action, K extends T['type']>(actionType: K, payload: Extract<T, { type: K }>) => void;

const dispatch4: DispatchType4 = (actionType, payload) => { throw new Error('Not implemented') };

dispatch4('DELETE_USER', { type: 'DELETE_USER', userName: '' });

dispatch4('CONFIRM_REGISTRATION', { type: 'CONFIRM_REGISTRATION', userName: '', confirmationCode: '' });

// Better usage
type DispatchType5 = <T extends Action, K extends T['type'], J extends Extract<T, { type: K }>>(actionType: K, payload: J) => void;

const dispatch5: DispatchType5 = (actionType, payload) => { };

dispatch5('SIGN_IN', { type: 'SIGN_IN', userName: '', pasword: '' });

dispatch5('GET_SESSION_SUCCESS', { type: 'GET_SESSION_SUCCESS', session: '' });


// Ideal usage
type DispatchType6<T extends { type: any }> = <K extends T['type'], J extends Extract<T, { type: K }>>(actionType: K, payload: J) => void;

const dispatch6: DispatchType6<Action> = (actionType, payload) => { };

dispatch6('SIGN_IN', { type: 'SIGN_IN', userName: '', pasword: '' });


type DispatchType7<T extends { type: any }> = <K extends T['type'], J extends Extract<T, { type: K }>>(actionType: K, payload: J) => void;

const dispatch7: DispatchType7<Action> = (actionType, payload) => { };

dispatch7('SIGN_IN', { type: 'SIGN_IN', userName: '', pasword: '' });


const dispatch8: DispatchType7<TodoAction> = (actionType, payload) => { };

dispatch8('ADD_TODO', { type: 'ADD_TODO', text: '' });

dispatch8('SET_COMPLETED', { type: 'SET_COMPLETED', id: '' });


type DispatchType9<T extends { type: any }> = <K extends T['type'], J extends Omit<Extract<T, { type: K }>, 'type'>>(actionType: K, payload: J) => void;

const dispatch9: DispatchType9<Action> = (actionType, payload) => { throw new Error('Not implemented') };

dispatch9('INIT', {});

dispatch9('SIGN_IN', { userName: '', pasword: '' });

dispatch9('CHANGE_PASSWORD', { userName: '', oldPassword: '', newPassword: '' });




// dispatch('CHANGE_PASSWORD');

export { };