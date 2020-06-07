import { items } from "./in-memory-items";
import { MappedItemType } from "./mapped-item-type";
import { Item } from "./item";

export const findAll = async (): Promise<MappedItemType> => items;

export const find = async (id: number): Promise<Item> => {

    const record: Item = items[id];

    if (record) {
        return record;
    }

    throw new Error("No record found");
}

export const create = async (newItem: Item): Promise<void> => {

    const id: number = new Date().valueOf();

    items[id] = { ...newItem, id };
}

export const update = async (updatedItem: Item): Promise<void> => {

    const { id } = updatedItem;

    if (items[id]) {
        items[id] = updatedItem;
        return;
    }

    throw new Error("No record found to update");
}

export const remove = async (id: number): Promise<void> => {

    const record: Item = items[id];

    if (record) {
        delete items[id];
        return;
    }

    throw new Error("No record found to remove");
}