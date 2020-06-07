type DataType = "String" | "Number" | "Boolean" | "DateTime";

type ElementType = "Component" | "Container";

type ContainerType = "Row" | "Column" | "Form" | "Tabs" | "Tab";

type ComponentType =
    "Input" |
    "InputSearch" |
    "Select" |
    "DatePicker" |
    "DateRangePicker" |
    "TimePicker" |
    "Radio" |
    "Checkbox" |
    "Switch" |
    "Label" |
    "Tabbar" |
    "TextArea";




interface IBorderCSS {
    borderColor: string;
    borderWidth: number;
    borderStyle: "dotted" | "dashed" | "solid" | "double";
}

interface IBackgroundColorCSS {
    bgColor: string;
    opacity: number
}

interface ITextCSS {
    color: string;
    textAlign: "center" | "left" | "left";
    textDecoration: "overline" | "line-through" | "underline";
}

interface IFontCSS {
    fontFamily: "Impact" | "Charcoal" | "sans-serif";
    fontStyle: "normal" | "italic" | "oblique";
    fontWeight: "normal" | "bold";
    fontVariant: "normal" | "small-caps";
    fontSize: number;
}

interface IPaddingCSS {
    paddingTop: string;
    paddingRight: string;
    paddingBottom: string;
    paddingLeft: string;
}

interface IMarginCSS {
    marginTop: string;
    marginRight: string;
    marginBottom: string;
    marginLeft: string;
}




interface ITitleFeature {
    title: string;
}

interface IValidateFeature {
    enabled: boolean;
    required: boolean;
    dataType: DataType;
    max: number;
    min: number;
    pattern: string;
}




interface IElement {
    appId: string;
    Id: string;
    name: string;
    pageId: string;
    parentId: string;
    order: number;
}

interface IContainerElement extends IElement {

}

interface IFormElement extends IElement, ITitleFeature {
    fill: boolean;
}




interface ILabelElement extends IFormElement {

}

interface IValidatableFormElement extends IFormElement, IValidateFeature {

}

interface IInputElement extends IValidatableFormElement {

}

interface IInputSearchElement extends IValidatableFormElement {

}

interface IDatePickerElement extends IValidatableFormElement {

}

interface IDateRangePickerElement extends IValidatableFormElement {

}

interface ITimePickerElement extends IValidatableFormElement {

}

interface ICheckboxElement extends IValidatableFormElement {

}

interface IRadioElement extends IValidatableFormElement {

}

interface ISelectElement extends IValidatableFormElement {

}

interface ITextAreaElement extends IValidatableFormElement {

}

interface ISwitchElement extends IValidatableFormElement {

}




interface IRowElement extends IContainerElement {

}

interface IColumnElement extends IContainerElement {

}

interface ITabbarElement extends IContainerElement {
    headerAlignment: "top" | "bottom" | "right" | "left";
}

interface ITabElement extends IContainerElement, ITitleFeature {

}

interface IFormContainerElement extends IContainerElement, ITitleFeature {

}




abstract class BaseComponent implements IElement {
    appId: string;
    Id: string;
    name: string;
    pageId: string;
    parentId: string;
    order: number;

    constructor(args: IElement) {
        this.appId = args.appId;
        this.Id = args.Id;
        this.name = args.name;
        this.pageId = args.pageId;
        this.parentId = args.parentId;
        this.order = args.order;
    }
}

abstract class BaseFormElement extends BaseComponent implements IFormElement {
    fill: boolean;
    title: string;

    constructor(args: IFormElement) {
        super(args);

        this.fill = args.fill;
        this.title = args.title;
    }
}

abstract class BaseValidatableFormElement extends BaseFormElement implements IValidatableFormElement {
    enabled: boolean;
    required: boolean;
    dataType: DataType;
    max: number;
    min: number;
    pattern: string;

    constructor(args: IValidatableFormElement) {
        super(args);

        this.enabled = args.enabled;
        this.required = args.required;
        this.dataType = args.dataType;
        this.max = args.max;
        this.min = args.min;
        this.pattern = args.pattern;
    }
}




class LabelElement extends BaseFormElement implements ILabelElement {
    constructor(args: ILabelElement) {
        super(args);
    }
}

class InputElement extends BaseValidatableFormElement implements IInputElement {
    constructor(args: IInputElement) {
        super(args);
    }
}


class InputSearchElement extends BaseValidatableFormElement implements IInputSearchElement {
    constructor(args: IInputSearchElement) {
        super(args);
    }
}


class DatePickerElement extends BaseValidatableFormElement implements IDatePickerElement {
    constructor(args: IDatePickerElement) {
        super(args);
    }
}


class DateRangePickerElement extends BaseValidatableFormElement implements IDateRangePickerElement {
    constructor(args: IDateRangePickerElement) {
        super(args);
    }
}


class TimePickerElement extends BaseValidatableFormElement implements ITimePickerElement {
    constructor(args: ITimePickerElement) {
        super(args);
    }
}


class CheckboxElement extends BaseValidatableFormElement implements ICheckboxElement {
    constructor(args: ICheckboxElement) {
        super(args);
    }
}


class RadioElement extends BaseValidatableFormElement implements IRadioElement {
    constructor(args: IRadioElement) {
        super(args);
    }
}


class SelectElement extends BaseValidatableFormElement implements ISelectElement {
    constructor(args: ISelectElement) {
        super(args);
    }
}


class TextAreaElement extends BaseValidatableFormElement implements ITextAreaElement {
    constructor(args: ITextAreaElement) {
        super(args);
    }
}


class SwitchElement extends BaseValidatableFormElement implements ISwitchElement {
    constructor(args: ISwitchElement) {
        super(args);
    }
}




class RowElement extends BaseComponent implements IRowElement {
    constructor(args: IRowElement) {
        super(args);
    }
}


class ColumnElement extends BaseComponent implements IColumnElement {
    constructor(args: IColumnElement) {
        super(args);
    }
}


class TabbarElement extends BaseComponent implements ITabbarElement {
    headerAlignment: "top" | "bottom" | "right" | "left";

    constructor(args: ITabbarElement) {
        super(args);

        this.headerAlignment = args.headerAlignment;
    }
}


class TabElement extends BaseComponent implements ITabElement {
    title: string;

    constructor(args: ITabElement) {
        super(args);

        this.title = args.title;
    }
}


class FormContainerElement extends BaseComponent implements IFormContainerElement {
    title: string;

    constructor(args: IFormContainerElement) {
        super(args);

        this.title = args.title;
    }
}














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