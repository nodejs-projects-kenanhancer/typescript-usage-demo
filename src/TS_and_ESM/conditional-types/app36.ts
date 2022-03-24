import { NutPersister } from 'nut-persister';
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

const eventRedisRepository = new EventRedisRepository();

const eventCosmosdbRepository = new EventCosmosDbRepository();

const eventPersister = new NutPersister<IEventRepository>([eventRedisRepository, eventCosmosdbRepository]);

const eventId = '4e0c71bb-eedf-43dd-b9a1-911a7ed6d74f';
const newEvent: IEvent = { id: eventId, eventType: 'Submission', data: {} };

eventPersister.set('setEvent', op => op(newEvent));

// eventPersister.setV2('setEvent', [newEvent]);

const a1 = eventPersister.get('getEvent', op => op(eventId), (persister, result) => persister.setEvent(result!), newEvent);

console.log(a1);

const a2 = eventPersister.getV2('getEvent', [eventId], (persister, result) => persister.setEvent(result!), newEvent);

console.log(a2);



export { };