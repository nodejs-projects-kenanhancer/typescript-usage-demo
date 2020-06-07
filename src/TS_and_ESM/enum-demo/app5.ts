enum HttpRequestEnum {
    'Accept' = "Accept",
    'Accept_Charset' = "Accept-Charset",
    'Accept_Datetime' = "Accept-Datetime",
    'Accept_Encoding' = "Accept-Encoding",
    'Accept_Language' = "Accept-Language",
}



type HttpRequestKey = keyof typeof HttpRequestEnum;

type HttpHeaderValueRecord = Partial<Record<HttpRequestEnum, string>>;

type HttpHeaderSetFunc = (value: string) => HttpHeaderRecord;

type HttpHeaderRecord = {
    [P in HttpRequestKey | "value"]: P extends HttpRequestKey ? HttpHeaderSetFunc : HttpHeaderValueRecord;
};

const headers: HttpHeaderRecord = {
    "Accept": (value: string) => {
        headers.value[HttpRequestEnum.Accept] = value;

        return headers;
    },
    "Accept_Charset": (value: string) => {
        headers.value[HttpRequestEnum.Accept_Charset] = value;

        return headers;
    },
    "Accept_Datetime": (value: string) => {
        headers.value[HttpRequestEnum.Accept_Datetime] = value;

        return headers;
    },
    "Accept_Encoding": (value: string) => {
        headers.value[HttpRequestEnum.Accept_Encoding] = value;

        return headers;
    },
    "Accept_Language": (value: string) => {
        headers.value[HttpRequestEnum.Accept_Language] = value;

        return headers;
    },
    "value": {}
};

const value = headers.Accept("Application/json").Accept_Charset("XML").value;

console.log(value);


export { };