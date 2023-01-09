export abstract class IDigitalClock {
  abstract hour: number;
  abstract minute: number;
  abstract tick(): void;
}

export class DigitalClock extends IDigitalClock {
  hour: number;
  minute: number;

  constructor(h: number, m: number) {
    super();
    this.minute = m;
    this.hour = h;
  }

  tick(): void {
    console.log("beep beep");
  }
}
