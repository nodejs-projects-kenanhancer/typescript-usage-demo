// Intersection Type
interface Knife {
    cut(): void;
}

interface BottleOpener {
    openBottle(): void;
}

interface ScrewDriver {
    turnScrew(): void;
}

type SwissArmyKnife = Knife & BottleOpener & ScrewDriver;




function use(tool: SwissArmyKnife): void {

    console.log("I can do anything!");

    tool.cut();
    tool.openBottle();
    tool.turnScrew();
}


export { };