import { form } from "./form-builder";



import interfaces = form.builder.interfaces;
import implementations = form.builder.implementations;

import IElement = interfaces.base.elements.IElement;
import ILabelElement = interfaces.form.elements.ILabelElement;
import LabelElement = implementations.form.elements.LabelElement;



function createInstance<R, T extends { new(...constructorArgs: any[]): R }>(constructor: T, ...args: any[]): R {
    return new constructor(...args);
}

// interface ElementConstructorType {
//     new(...constructorArgs: any[]): IElement;
// }

type ElementConstructorType<T extends IElement> = { new(...constructorArgs: any[]): T; };

function createElementV1<T extends ElementConstructorType<IElement>>(type: T, ...args: any[]): any {

    return createInstance(type, ...args);
}

function createElementV2<K extends IElement, T extends ElementConstructorType<K>>(type: T, args: K): any {

    return createInstance(type, args);
}





const labelElementParameters: ILabelElement = { Id: "", appId: "444", fill: true, order: 440, pageId: "11", parentId: "222", title: "ddd", name: "ffff" };

const labelElement1: ILabelElement = createElementV1(LabelElement, labelElementParameters);

const labelElement2: ILabelElement = createElementV2(LabelElement, labelElementParameters);


const labelElementJson: string = JSON.stringify({ firstName: "", ...labelElement1 });

const labelElement3 = createElementV1(LabelElement, JSON.parse(labelElementJson));

const labelElement4: ILabelElement = JSON.parse(labelElementJson);




console.log(labelElement1, labelElement2, labelElement3, labelElement4);

export { };