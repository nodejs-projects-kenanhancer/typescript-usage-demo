enum HttpRequestField {
    'Accept',
    'Accept-Charset',
    'Accept-Datetime',
    'Accept-Encoding',
    'Accept-Language',
}

enum YesNo {
    Yes = 'YES',
    No = 'NO'
}

enum Perm {
    UserRead = 1 << 8, // bit 8
    UserWrite = 1 << 7,
    UserExecute = 1 << 6,
    GroupRead = 1 << 5,
    GroupWrite = 1 << 4,
    GroupExecute = 1 << 3,
    AllRead = 1 << 2,
    AllWrite = 1 << 1,
    AllExecute = 1 << 0,
}

const perm: Perm = Perm.GroupWrite;

const No: YesNo = YesNo["No"];

console.log(No);

function toGerman(value: YesNo): string {
    switch (value) {
        case YesNo.No:
            return 'Nein';
        case YesNo.Yes:
            return 'Ja';
    }
}

console.log(toGerman(YesNo.Yes));

console.log(toGerman(YesNo.No));

console.log(perm);

export { };