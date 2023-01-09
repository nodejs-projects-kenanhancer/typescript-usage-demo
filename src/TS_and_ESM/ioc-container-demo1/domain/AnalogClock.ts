export abstract class IAnalogClock {
  abstract h: number;
  abstract m: number;
  abstract tick(): void;
}

export class AnalogClock extends IAnalogClock {
  constructor(public h: number, public m: number) {
    super();
  }

  tick(): void {
    console.log("tick tock");
  }
}
