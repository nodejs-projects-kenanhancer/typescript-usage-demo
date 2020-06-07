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
    Accept(value: string) {
        this.value[HttpRequestEnum.Accept] = value;

        return this;
    },
    Accept_Charset(value: string) {
        this.value[HttpRequestEnum.Accept_Charset] = value;

        return this;
    },
    Accept_Datetime(value: string) {
        this.value[HttpRequestEnum.Accept_Datetime] = value;

        return this;
    },
    Accept_Encoding(value: string) {
        this.value[HttpRequestEnum.Accept_Encoding] = value;

        return this;
    },
    Accept_Language(value: string) {
        this.value[HttpRequestEnum.Accept_Language] = value;

        return this;
    },
    value: {}
};

const value = headers.Accept("Application/json").Accept_Charset("XML").value;

console.log(value);


export { };