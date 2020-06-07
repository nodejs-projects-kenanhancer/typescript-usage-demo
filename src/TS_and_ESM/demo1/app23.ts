interface ClockConstructor {
    new(hour: number, minute: number): any;
}

// This is because when a class implements an interface, only the instance side of the class is checked. 
// Since the constructor sits in the static side, it is not included in this check

// class Clock implements ClockConstructor {

//     constructor(public hour: number, public minute: number) { }
// }

export { };