function getEvents_redis() {

}

function setEvent_redis() {

}

function getEvents_cosmosdb() {

}

function setEvent_cosmosdb() {

}

function getEventBuilder(getters: Array<Function>) {
    return function () {

    }
}

function setEventBuilder(setters: Array<Function>) {
    return function () {

    }
}

const getEvent = getEventBuilder([getEvents_redis, getEvents_cosmosdb]);

getEvent();

const setEvent = setEventBuilder([setEvent_redis, setEvent_cosmosdb]);

setEvent();

export { };