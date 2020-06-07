enum HttpRequestHeaderEnum {
    'Accept' = "Accept",
    'Accept_Charset' = "Accept-Charset",
    'Accept_Datetime' = "Accept-Datetime",
    'Accept_Encoding' = "Accept-Encoding",
    'Accept_Language' = "Accept-Language",
}

type HttpRequestKey = keyof typeof HttpRequestHeaderEnum;

type HttpHeaderValueRecord = Partial<Record<HttpRequestHeaderEnum, string>>;

type HttpHeaderSetFunc = (value: string) => HttpHeaderRecord;

type HttpHeaderRecord = {
    [P in HttpRequestKey | "value"]: P extends HttpRequestKey ? HttpHeaderSetFunc : HttpHeaderValueRecord;
};

const propSetFunc = (headers: HttpHeaderRecord, headerName: HttpRequestKey) => (value: string) => {

    headers.value[HttpRequestHeaderEnum[headerName]] = value;

    return headers;
};

const headers: HttpHeaderRecord = { value: {} } as HttpHeaderRecord;

for (const reqHeader in HttpRequestHeaderEnum) {
    headers[reqHeader as HttpRequestKey] = propSetFunc(headers, reqHeader as HttpRequestKey);
}

const value: HttpHeaderValueRecord = headers.Accept("Application/json").Accept_Charset("XML").value;

console.log(value);

export { };