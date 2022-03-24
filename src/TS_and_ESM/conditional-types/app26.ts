type Action =
    | { type: 'INIT' }
    | { type: 'SYNC' }
    | { type: 'LOG_IN', emailAddress: string }
    | { type: 'LOG_IN_SUCCESS', accessToken: string };

type ActionType = Action['type'];

type KeysOfUnion<T> = T extends T ? keyof T : never;

type KeysOfAction = KeysOfUnion<Action>;

type ActionRecord<TAction extends { type: unknown }, TActionType extends TAction['type']> = TAction extends { type: TActionType } ? Omit<TAction, 'type'> : never;

type ActionRecord2<TAction extends { type: unknown }, TActionType extends TAction['type']> = TAction extends { type: TActionType } ? Pick<TAction, keyof Omit<TAction, 'type'>> : never;

type ActionRecord3<TAction extends { type: unknown }, TActionType extends TAction['type']> = TAction extends { type: TActionType } ? Pick<TAction, Exclude<keyof TAction, 'type'>> : never;

type ExcludeTypeField<A> = { [K in Exclude<keyof A, "type">]: A[K] };

type ExtractSimpleAction<A> = A extends any
    ? {} extends ExcludeTypeField<A>
    ? A
    : never
    : never;

type SimpleActionRecord<TAction extends { type: unknown }> = {} extends Omit<TAction, 'type'> ? TAction : never;

type ExtractActionParameters<A, T> = ExcludeTypeField<Extract<A, { type: T }>>



type a1 = ActionRecord<Action, 'INIT'>;

type a2 = ActionRecord<Action, 'LOG_IN'>;

type a3 = Extract<Action, { type: string }>;

type a4 = Exclude<Action, {} extends Omit<Action, 'type'> ? { type: any } : never>;

type a5 = Omit<Action, 'type'>;

type a6 = ExtractActionParameters<Action, 'LOG_IN'>;

type a7 = ExtractSimpleAction<Action>;

type a8 = ExcludeTypeField<Extract<Action, { type: 'INIT' }>>

type a9<A extends { type: any }> = { [K in Exclude<keyof A, "type">]: A[K] }

type a10 = a9<Action>

type ExtractActionParameters2<A, T> = A extends { type: T }
    ? {} extends Omit<A, 'type'>
    ? never
    : Omit<A, 'type'>
    : never;


type a11 = Pick<Action, keyof Action>;



function dispatch(type: 'INIT' | 'SYNC'): void
function dispatch<TActionType extends ActionType>(type: TActionType, args: ActionRecord<Action, TActionType>): void
function dispatch(type: any): void {
    // Write Business Logic here
}




dispatch('INIT');

dispatch('SYNC');

dispatch('LOG_IN', { emailAddress: 'kh@kh.com' });

dispatch('LOG_IN_SUCCESS', { accessToken: 'blabla', });



export { };