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