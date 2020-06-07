class Point {
    x: number = 0;
    y: number = 0;
}

interface Point3D extends Point {
    z: number;
}

let point3D: Point3D = { x: 1, y: 2, z: 3 };

console.log();

export { };