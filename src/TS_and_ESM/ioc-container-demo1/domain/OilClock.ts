export abstract class IOilClock {}

export class OilClock extends IOilClock {
  tick(): void {
    console.log("gluk gluk");
  }
}