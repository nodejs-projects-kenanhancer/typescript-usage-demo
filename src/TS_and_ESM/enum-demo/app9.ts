enum HttpRequestHeaderEnum {
    'Accept' = "Accept",
    'Accept_Charset' = "Accept-Charset",
    'Accept_Datetime' = "Accept-Datetime",
    'Accept_Encoding' = "Accept-Encoding",
    'Accept_Language' = "Accept-Language",
}

function getBuilder<T, K extends keyof T>(enumm: T): any {

    type HttpRequestKey = keyof typeof enumm;

    type valueRecord = Partial<Record<HttpRequestKey, string>>;

    type setFunc = (value: string) => Partial<EnumRecord>;

    type EnumRecord = {
        [P in K | "value"]: P extends K ? setFunc : valueRecord;
    };

    let propSetFunc = (enumRecord: Partial<EnumRecord>, propName: HttpRequestKey) => (value: string) => {

        // enumRecord.value[enumm[propName]] = value;
        // enumRecord.value[enumm[propName]] = value;
        // enumRecord.value["Accept" as K] = "";

        const kk = enumm[propName];
        console.log(enumRecord.value, propName, enumm[propName]);

        return enumRecord;
    };

    const aa: Partial<Record<K, string>> = {} as Partial<Record<K, string>>;

    aa["Accept" as K] = "";

    console.log(aa);


    const bb: Partial<EnumRecord> = {} as Partial<EnumRecord>;

    // bb["Accept" as K] = propSetFunc(bb, "Accept" as K);

    // const enumValues: K = { value: aa} as EnumRecord;

    // for (const en in enumm) {
    //     const abc: HttpRequestKey = en as HttpRequestKey;

    //     console.log(en);


    //     const aa = propSetFunc(enumValues, en as HttpRequestKey)("XML");
    //     // enumValues[en as HttpRequestKey] = propSetFunc(enumValues, en as HttpRequestKey);
    // }

    console.log();

    // return enumValues;
}


getBuilder(HttpRequestHeaderEnum);

// type HttpHeaderValueRecord = Partial<Record<HttpRequestHeaderEnum, string>>;

// type HttpHeaderSetFunc = (value: string) => HttpHeaderRecord;

// type HttpHeaderRecord = {
//     [P in HttpRequestKey | "value"]: P extends HttpRequestKey ? HttpHeaderSetFunc : HttpHeaderValueRecord;
// };

// let fn = (headers: HttpHeaderRecord, headerName: HttpRequestKey) => (value: string) => {

//     headers.value[HttpRequestHeaderEnum[headerName]] = value;

//     return headers;
// };

// const headers: HttpHeaderRecord = { value: {} } as HttpHeaderRecord;

// for (const reqHeader in HttpRequestHeaderEnum) {
//     headers[reqHeader as HttpRequestKey] = fn(headers, reqHeader as HttpRequestKey);
// }

// const value: HttpHeaderValueRecord = headers.Accept("Application/json").Accept_Charset("XML").value;

// console.log(value);


console.log();

export { };