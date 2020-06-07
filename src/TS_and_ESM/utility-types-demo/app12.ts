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

// Type: "GET"
const httpRequestMethod = "GET";

// Type: string
let httpRequestMethod2 = "GET";

// Type: "GET"
let httpRequestMethod3 = HTTPRequestMethod.GET;

// function fetchJSON(url: string, method: "GET" | "POST") {

//     return fetch(url, { method }).then(response => response.json());
// }

// // OK, no type error
// fetchJSON("https://example.com/", "GET")
//     .then(data => {
//         // ...
//     });

// // OK
// fetchJSON("https://example.com/", HTTPRequestMethod.GET)
//     .then(data => {
//         // ...
//     });


export { };