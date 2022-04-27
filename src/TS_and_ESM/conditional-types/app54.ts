const formats = ['JSON', 'CSV', 'XML'] as const;

type Format = typeof formats[number];

function isFormat(x: string): x is Format {
    // widen formats to string[] so indexOf(x) works
    return (formats as readonly string[]).includes(x);
}

const format: Format = 'CSV';

if (isFormat(format)) {

}



{



}


export { };