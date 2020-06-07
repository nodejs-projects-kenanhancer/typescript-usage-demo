enum HttpRequestEnum {
    'Accept' = "Accept",
    'Accept_Charset' = "Accept-Charset",
    'Accept_Datetime' = "Accept-Datetime",
    'Accept_Encoding' = "Accept-Encoding",
    'Accept_Language' = "Accept-Language",
}



type HttpRequestKey = keyof typeof HttpRequestEnum;

type HeaderBuilderType = Partial<Record<HttpRequestEnum, string>>;

type HttpHeaderSetFunc = (value: string) => HeaderType;

type HeaderType = {
    [P in HttpRequestKey | "value"]: P extends HttpRequestKey ? HttpHeaderSetFunc : HeaderBuilderType;
};

const headerBuilder: HeaderBuilderType = {};

const headers: HeaderType = {
    "Accept": (value: string) => {
        headerBuilder[HttpRequestEnum.Accept] = value;

        return headers;
    },
    "Accept_Charset": (value: string) => {
        headerBuilder[HttpRequestEnum.Accept_Charset] = value;

        return headers;
    },
    "Accept_Datetime": (value: string) => {
        headerBuilder[HttpRequestEnum.Accept_Datetime] = value;

        return headers;
    },
    "Accept_Encoding": (value: string) => {
        headerBuilder[HttpRequestEnum.Accept_Encoding] = value;

        return headers;
    },
    "Accept_Language": (value: string) => {
        headerBuilder[HttpRequestEnum.Accept_Language] = value;

        return headers;
    },
    "value": headerBuilder
};

const value = headers.Accept("Application/json").Accept_Charset("XML").value;

console.log(value);


export { };