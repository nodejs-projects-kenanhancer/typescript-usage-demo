import { Button } from "./Button";

export class DropBox extends Button {
    public items: Array<string>;

    constructor(width: number, height: number, text: string) {
        super(width, height, text);

        this.items = [];
    }

    onClick(): void {
        super.onClick();
    }
}