type LastParameter<T extends (...args: any[]) => any> = T extends (...args: [...infer K, infer L]) => any ? L : never;

type T1 = LastParameter<(firstName: string, lastName: string, age: number) => string>;

type T2 = LastParameter<(firstName: string, lastName: string, age: number, driverLicense: boolean) => string>;


type LastAndRestParameters<T extends (...args: any[]) => any> = T extends (...args: [...infer J, infer K]) => any ? [...J, K] : never;

type T3 = LastAndRestParameters<(firstName: string, lastName: string, age: number) => string>;

type T4 = LastAndRestParameters<(firstName: string, lastName: string, age: number, driverLicense: boolean) => string>;



type NextMiddlewareWithoutArgs = () => any;
type NextMiddlewareWithArgs = (...args: any[]) => any;
type NextMiddleware = NextMiddlewareWithArgs | NextMiddlewareWithoutArgs;

interface Services {
    [P: string]: any;
    id: string;
}

type MiddlewareTypeWithServices<T extends (...args: any[]) => any> = T extends (...args: [...infer J, infer K, infer L]) => any ? K extends Services ? L extends NextMiddleware ? T : never : never : never;

type T5 = MiddlewareTypeWithServices<(context: Record<string, any>, services: Services, next: NextMiddleware) => any>;

type T6 = MiddlewareTypeWithServices<(context: Record<string, any>, next: NextMiddleware) => any>;



type MiddlewareTypeWithoutServices<T extends (...args: any[]) => any> = T extends (...args: [...infer J, infer K]) => any ? K extends NextMiddleware ? T : never : never;

type T7 = MiddlewareTypeWithoutServices<(context: Record<string, any>, services: Services, next: NextMiddleware) => any>;

type T8 = MiddlewareTypeWithoutServices<(context: Record<string, any>, next: NextMiddleware) => any>;



type MiddlewareType<T extends (...args: any[]) => any> = MiddlewareTypeWithServices<T> | MiddlewareTypeWithoutServices<T>;

type MiddlewareHandler<T extends (...args: any[]) => any> =
    T extends (...args: [...infer J, infer L, infer K]) => infer R
    ? K extends NextMiddleware
    ? (L extends Services
        ? (...args: J) => R : (T extends (...args: [...infer J, infer K]) => infer R ? (...args: J) => R : never)) : never : never;




function buildChainFunction<T extends (...args: any[]) => any>(middlewares: Array<MiddlewareType<T>>, services: Record<string, any> = {}): MiddlewareHandler<T> {

    const _chainFunction = middlewares.reduceRight((pv, cv, index) => {

        return ((...innerArgs: any[]) => {

            const _innerArgs = cv.length - innerArgs.length === 2 ? [...innerArgs, services] : [...innerArgs];

            return cv.apply(cv, [..._innerArgs, () => pv.apply(pv, _innerArgs)]);
        }) as MiddlewareType<T>;
    });

    return _chainFunction;
}

const middleware1 = (context: Record<string, any>, next: NextMiddleware) => { }
const middleware2 = (context: Record<string, any>, next: NextMiddleware) => { }
const middleware3 = (context: Record<string, any>, next: NextMiddleware) => { }

const chainFunc = buildChainFunction([middleware1, middleware2, middleware3]);

chainFunc({});



export { };
