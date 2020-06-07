let eventName1: "click";

eventName1 = "click";
console.log(eventName1);




let color: "red" | "green" | "yellow";

color = "green";
console.log(color);

type EventType = "click" | "mouseover" | "drag";
type Color = "Red" | "Green" | "Blue";


function on(eventType: EventType, callback: () => any) {

    if (eventType === "click") {
        callback();
    }
    else if (eventType === "mouseover") {
        callback();
    }
}

on("click", () => console.log("Click!"));
on("mouseover", () => console.log("Mouseover!"));
on("drag", () => console.log("Drag!"));

console.log();

export { };