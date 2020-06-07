type Easing = "ease-in" | "ease-out" | "ease-in-out";

enum Color { Red, Green, Yellow, Blue, Brown }

class UIElement {
    animate(dx: number, dy: number, easing: Easing, color: Color) {

        if (easing === "ease-in") {

        }
        else if (easing === 'ease-in-out') {

        }
        else if (easing === 'ease-out') {

        }


        if (color === Color.Red) {

        }
        else if (color === Color.Green) {

        }
        else if (color === Color.Yellow) {

        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-out", Color.Red);
button.animate(0, 0, "ease-out", Color.Yellow);

export { };