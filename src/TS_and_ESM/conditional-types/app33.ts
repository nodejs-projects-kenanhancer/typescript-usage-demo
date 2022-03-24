import { v4 as uuid } from 'uuid';

interface IEvent {
    id?: string;
    eventType: string;
    data: any;
}


const createEvent = (event: IEvent): IEvent => ({ id: uuid(), ...event });

interface IEventRepository {
    getEvent(id: string): IEvent | undefined;
    setEvent(event: IEvent): IEvent;
}

class EventRedisRepository implements IEventRepository {

    constructor(private events: Array<IEvent> = []) { }

    getEvent(id: string): IEvent | undefined {
        return this.events.find(item => item.id === id);
    }
    setEvent(event: IEvent): IEvent {

        const newEvent: IEvent = createEvent(event);

        this.events.push(newEvent);

        return newEvent;
    }
}

class EventCosmosDbRepository implements IEventRepository {

    constructor(private events: Array<IEvent> = []) { }

    getEvent(id: string): IEvent | undefined {
        return this.events.find(item => item.id === id);
    }
    setEvent(event: IEvent): IEvent {

        const newEvent: IEvent = createEvent(event);

        this.events.push(newEvent);

        return newEvent;
    }
}

// class EventRepository implements IEventRepository {

//     constructor(private repositories: Array<IEventRepository>) { }

//     getEvent(id: string): string {
//         return id;
//     }
//     setEvent(event: { eventType: string, data: any }): void {

//         // this.repositories.reduce((pv, cv, index) => {
//         //     cv.getEvent
//         // });

//         for (const repo of this.repositories) {
//             // this.repositories.reduce((pv, cv, index) => {
//             //     cv.getEvent
//             // });
//             repo.setEvent({ eventType: '', data: {} });
//         }

//         throw new Error("Method not implemented.");
//     }
// }


function callFunc<T, K extends keyof T, J = T[K]>(operation: (op: J) => J extends (...args: any[]) => any ? ReturnType<J> : never) {

    const repositories: Array<T> = [];

}

callFunc<IEventRepository, 'getEvent'>(func => func(''));

callFunc<IEventRepository, 'setEvent'>(func => func({ eventType: '', data: {} }));


class Persister<T extends Record<K, (...arg: any) => any>, K extends keyof T = keyof T>{

    constructor(private persisters: Array<T>) { }

    get<J extends K, M extends T[J]>(operationName: J, operation: (op: M) => ReturnType<M>, callback: (persister: T, result: ReturnType<M>) => void, initialValue: ReturnType<M>) {

        let index = 0;

        const result = this.persisters.reduce((prePersister, curPersister, i) => {

            const op = curPersister[operationName].bind(curPersister) as M;

            const result = prePersister || operation(op);

            if (!result) {
                index++;
            }

            return result;
        }, undefined) as ReturnType<M> || initialValue;

        if (index > 0) {
            for (let i = 0; i < index; i++) {
                const persister = this.persisters[i];

                callback(persister, result);
            }
        }

        return result;
    }

    getV2<J extends K, M extends T[J]>(operationName: J, operationParameters: Parameters<M>, callback: (persister: T, result: ReturnType<M>) => void, initialValue: ReturnType<M>) {

        let index = 0;

        const result = this.persisters.reduce((prePersister, curPersister, i) => {

            const op = curPersister[operationName].bind(curPersister) as M;

            const result = prePersister || op(operationParameters);

            if (!result) {
                index++;
            }

            return result;
        }, undefined) as ReturnType<M> || initialValue;

        if (index > 0) {
            for (let i = 0; i < index; i++) {
                const persister = this.persisters[i];

                callback(persister, result);
            }
        }

        return result;
    }

    set<J extends K, M extends T[J]>(operationName: J, operation: (op: M) => ReturnType<M>) {
        for (let i = 0; i < this.persisters.length; i++) {
            const persister = this.persisters[i];

            const op = persister[operationName].bind(persister) as M;

            operation(op);
        }
    }

    setV2<J extends K, M extends T[J]>(operationName: J, operationParameters: Parameters<M>) {
        for (let i = 0; i < this.persisters.length; i++) {
            const persister = this.persisters[i];

            const op = persister[operationName].bind(persister) as M;

            op(operationParameters);
        }
    }
}

const eventRedisRepository = new EventRedisRepository();

const eventCosmosdbRepository = new EventCosmosDbRepository();

const eventPersister = new Persister<IEventRepository>([eventRedisRepository, eventCosmosdbRepository]);

const eventId = '4e0c71bb-eedf-43dd-b9a1-911a7ed6d74f';
const newEvent: IEvent = { id: eventId, eventType: 'Submission', data: {} };

eventPersister.set('setEvent', op => op(newEvent));

// eventPersister.setV2('setEvent', [newEvent]);

const a1 = eventPersister.get('getEvent', op => op(eventId), (persister, result) => persister.setEvent(result!), newEvent);

console.log(a1);

const a2 = eventPersister.getV2('getEvent', [eventId], (persister, result) => persister.setEvent(result!), newEvent);

console.log(a2);




export { };