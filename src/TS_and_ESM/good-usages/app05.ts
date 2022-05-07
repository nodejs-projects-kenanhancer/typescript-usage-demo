import { Keys } from "./Keys";

{
    const HTTPRequestMethod = {
        CONNECT: "CONNECT",
        DELETE: "DELETE",
        GET: "GET",
        HEAD: "HEAD",
        OPTIONS: "OPTIONS",
        PATCH: "PATCH",
        POST: "POST",
        PUT: "PUT",
        TRACE: "TRACE"
    };

    const a1 = "GET";

    let a2 = "GET";

    const a4 = HTTPRequestMethod.GET;

    let a3 = HTTPRequestMethod.GET;
}

{
    const HTTPRequestMethod = {
        CONNECT: "CONNECT" as "CONNECT",
        DELETE: "DELETE" as "DELETE",
        GET: "GET" as "GET",
        HEAD: "HEAD" as "HEAD",
        OPTIONS: "OPTIONS" as "OPTIONS",
        PATCH: "PATCH" as "PATCH",
        POST: "POST" as "POST",
        PUT: "PUT" as "PUT",
        TRACE: "TRACE" as "TRACE"
    };

    const a1 = "GET";

    let a2 = "GET";

    const a3 = HTTPRequestMethod.GET;

    let a4 = HTTPRequestMethod.GET;
}

{
    const HTTPRequestMethod = {
        CONNECT: "CONNECT",
        DELETE: "DELETE",
        GET: "GET",
        HEAD: "HEAD",
        OPTIONS: "OPTIONS",
        PATCH: "PATCH",
        POST: "POST",
        PUT: "PUT",
        TRACE: "TRACE"
    } as const;

    const a1 = "GET";

    let a2 = "GET";

    const a3 = HTTPRequestMethod.GET;

    let a4 = HTTPRequestMethod.GET;
}

{
    const HTTPRequestMethod: {
        readonly CONNECT: "CONNECT";
        readonly DELETE: "DELETE";
        readonly GET: "GET";
        readonly HEAD: "HEAD";
        readonly OPTIONS: "OPTIONS";
        readonly PATCH: "PATCH";
        readonly POST: "POST";
        readonly PUT: "PUT";
        readonly TRACE: "TRACE";
    } = {
        CONNECT: "CONNECT",
        DELETE: "DELETE",
        GET: "GET",
        HEAD: "HEAD",
        OPTIONS: "OPTIONS",
        PATCH: "PATCH",
        POST: "POST",
        PUT: "PUT",
        TRACE: "TRACE"
    };

    const a1 = "GET";

    let a2 = "GET";

    const a3 = HTTPRequestMethod.GET;

    let a4 = HTTPRequestMethod.GET;
}

{
    type HTTPRequestMethodType = {
        readonly CONNECT: "CONNECT";
        readonly DELETE: "DELETE";
        readonly GET: "GET";
        readonly HEAD: "HEAD";
        readonly OPTIONS: "OPTIONS";
        readonly PATCH: "PATCH";
        readonly POST: "POST";
        readonly PUT: "PUT";
        readonly TRACE: "TRACE";
    };

    const HTTPRequestMethod: HTTPRequestMethodType = {
        CONNECT: "CONNECT",
        DELETE: "DELETE",
        GET: "GET",
        HEAD: "HEAD",
        OPTIONS: "OPTIONS",
        PATCH: "PATCH",
        POST: "POST",
        PUT: "PUT",
        TRACE: "TRACE"
    };

    const a1 = "GET";

    let a2 = "GET";

    const a3 = HTTPRequestMethod.GET;

    let a4 = HTTPRequestMethod.GET;
}

{
    enum HTTPRequestMethod {
        CONNECT = "CONNECT",
        DELETE = "DELETE",
        GET = "GET",
        HEAD = "HEAD",
        OPTIONS = "OPTIONS",
        PATCH = "PATCH",
        POST = "POST",
        PUT = "PUT",
        TRACE = "TRACE"
    }

    const a1 = HTTPRequestMethod.PATCH;

    let a2 = HTTPRequestMethod.PATCH;

    const a3 = a1;

    const a4 = a2;
}

{
    type HTTPRequestMethod = 'CONNECT' | 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT' | 'TRACE';

    const httpRequestMethod: HTTPRequestMethod = "PATCH";

    const a1 = httpRequestMethod;

    let a2 = httpRequestMethod;
}

{
    const HTTPRequestMethodTuple = ['CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT', 'TRACE'] as const;

    type HTTPRequestMethod = typeof HTTPRequestMethodTuple[number];

    const httpRequestMethod: HTTPRequestMethod = 'CONNECT';

    const a1 = httpRequestMethod;

    let a2 = httpRequestMethod;
}

{
    const HTTPRequestMethodArray = [
        'CONNECT' as const,
        'DELETE' as const,
        'GET' as const,
        'HEAD' as const,
        'OPTIONS' as const,
        'PATCH' as const,
        'POST' as const,
        'PUT' as const,
        'TRACE' as const
    ];

    type HTTPRequestMethod = typeof HTTPRequestMethodArray[number];

    const httpRequestMethod: HTTPRequestMethod = 'CONNECT';

    const a1 = httpRequestMethod;

    let a2 = httpRequestMethod;
}

{
    const HTTPRequestMethodArray = [
        'CONNECT' as 'CONNECT',
        'DELETE' as 'DELETE',
        'GET' as 'GET',
        'HEAD' as 'HEAD',
        'OPTIONS' as 'OPTIONS',
        'PATCH' as 'PATCH',
        'POST' as 'POST',
        'PUT' as 'PUT',
        'TRACE' as 'TRACE'
    ];

    type HTTPRequestMethod = typeof HTTPRequestMethodArray[number];

    const httpRequestMethod: HTTPRequestMethod = 'CONNECT';

    const a1 = httpRequestMethod;

    let a2 = httpRequestMethod;
}

export { };