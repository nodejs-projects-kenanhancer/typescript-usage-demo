type Color = "Red" | "Green" | "Yellow" | "Blue" | "Brown";

type Numbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

enum ColorEnum { red, green, yellow, blue, black };

interface MapConfig {
    lng: number;
    lat: number;
    tileSize: 8 | 16 | 32;
}

function getColor(): Color {
    return "Blue";
}

function getColorV2(): "Red" | "Green" | "Yellow" | "Blue" | "Brown" {
    return "Blue";
}

function setupMap(mapConfig: MapConfig): void {

}

setupMap({ lat: 3, lng: 4, tileSize: 8 });

setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 });

let obj1: Color = "Blue";
let obj2: Numbers = 8;
let obj3: ColorEnum = ColorEnum.black;
let obj4: Color = getColor();
let obj5: Color = getColorV2();

export { };