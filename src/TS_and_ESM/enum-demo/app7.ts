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

headers["Accept"] = propSetFunc(headers, "Accept");
headers["Accept_Charset"] = propSetFunc(headers, "Accept_Charset");
headers["Accept_Datetime"] = propSetFunc(headers, "Accept_Datetime");
headers["Accept_Encoding"] = propSetFunc(headers, "Accept_Encoding");
headers["Accept_Language"] = propSetFunc(headers, "Accept_Language");


const value = headers.Accept("Application/json").Accept_Charset("XML").value;

console.log(value);

export { };