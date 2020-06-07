import { Component } from "./component";

export class Button extends Component {

    private _text: string;

    constructor(width: number, height: number, text: string = "") {
        super(width, height);

        this._text = text;
    }

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }

    onClick(): void {

        console.log("button clicked");
    }
}