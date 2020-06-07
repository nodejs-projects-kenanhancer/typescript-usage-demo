let foo1: 'Hello';
foo1 = 'Hello';

let foo2: "World" = "World";

let requiredEventType: "Click";
requiredEventType = "Click";

const color1: "Red" | "Green" | "Blue" = "Blue";

const eventType1: "click" | "mouseover" | "drag" = "click";

const direction1: "North" | "East" | "South" | "West" = "South";




// Type Alias Version

type Color = "Red" | "Green" | "Blue"; // string
type EventType = "Click" | "MouseOver" | "Drag"; // string
type CardinalDirection = "North" | "East" | "South" | "West"; // string
type num = 1 | 3 | 5 | 7 | 9; // number
type bool = true | false; // boolean
type State = [string, boolean];
type obj = { success: true } | { success: false }; // object
type Result<T> = { success: true, value: T } | { success: false, error: string | number };
type Name = string; // 
type NameResolver = () => string; // function
type NameOrResolver = Name | NameResolver;
type Container<T> = { value: T };
type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
};
type LinkedList<T> = T & { next: LinkedList<T> };
type PersonCommonFields = { firstName: string, lastName: string };
type Person = PersonCommonFields & { isDeleted: true | false };
type SquareConfig = {
    color?: string;
    width?: number;
    [propName: string]: any;
};

const squareConfig: SquareConfig = { color: "red", width: 100 };

const person1: Person = { firstName: "kenan", lastName: "hancer", isDeleted: false };

let direction2: CardinalDirection = "South";






export { };