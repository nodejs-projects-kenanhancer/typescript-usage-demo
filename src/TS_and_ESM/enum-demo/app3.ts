enum HttpRequestKeyEnum {
    'Accept' = "Accept",
    'Accept_Charset' = "Accept-Charset",
    'Accept_Datetime' = "Accept-Datetime",
    'Accept_Encoding' = "Accept-Encoding",
    'Accept_Language' = "Accept-Language",
}



type HttpRequestKey = keyof typeof HttpRequestKeyEnum;

type HttpHeaderSetFunc = (value: string) => HeaderBuilderType;

type HeaderBuilderType = Record<HttpRequestKey, HttpHeaderSetFunc>;

class HeaderBuilder<T> {
    private _value: any = {};

    setValue(key: T, value: any) {
        this._value[key] = value;
    }

    getValue(key: T): any {
        return this._value[key];
    }

    get value(): any {
        return this._value;
    }
}

const headerBuilder: HeaderBuilder<HttpRequestKey> = new HeaderBuilder();

const headers: HeaderBuilderType = {
    "Accept": (value: string) => {
        headerBuilder.setValue("Accept", value);

        return headers;
    },
    "Accept_Charset": (value: string) => {
        headerBuilder.setValue("Accept_Charset", value);

        return headers;
    },
    "Accept_Datetime": (value: string) => {
        headerBuilder.setValue("Accept_Datetime", value);

        return headers;
    },
    "Accept_Encoding": (value: string) => {
        headerBuilder.setValue("Accept_Encoding", value);

        return headers;
    },
    "Accept_Language": (value: string) => {
        headerBuilder.setValue("Accept_Language", value);

        return headers;
    }
};

headers.Accept("Application/json").Accept_Charset("ISO-8859-1,utf-8;q=0.7,*;q=0.7");

console.log(headerBuilder.value);

export { };