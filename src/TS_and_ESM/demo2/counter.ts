export class Counter {
    static count: number = 0;

    static updateCounter(): number {
        return ++Counter.count;
    }
}