export abstract class ISandGlassClock {}

export class SandGlassClock extends ISandGlassClock {
  tick(): void {
    console.log("shhhh");
  }
}
