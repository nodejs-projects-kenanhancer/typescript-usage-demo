enum DataType {
    String = 'string',
    Number = 'number',
    Boolean = 'boolean',
    DateTime = 'datetime'
}

enum ComponentType {
    Input = 'input',
    InputSearch = 'inputsearch',
    Select = 'select',
    DatePicker = 'datepicker',
    DateRangePicker = 'daterangepicker',
    TimePicker = 'timepicker',
    Radio = 'radio',
    Checkbox = 'checkbox',
    Switch = 'switch',
    Label = 'label',
    Tabbar = 'tabbar',
    TextArea = 'textarea'
}


type ComponentTypeNames = keyof typeof ComponentType;
type DataTypeNames = keyof typeof DataType;

type ComponentConfigType = {
    default: DataTypeNames;
    possible: DataTypeNames[];
};

type ComponentMap = {
    [index in ComponentTypeNames]: ComponentConfigType;
};




const COMPONENT_DATATYPE_MAP1: ComponentMap = {
    Input: { default: "String", possible: ["String", "Number"] },
    InputSearch: { default: "String", possible: ["String", "Number"] },
    Select: { default: "String", possible: ["String", "Number"] },
    DatePicker: { default: "DateTime", possible: ["DateTime", "Number"] },
    DateRangePicker: { default: "DateTime", possible: ["DateTime", "String"] },
    TimePicker: { default: "DateTime", possible: ["DateTime", "String"] },
    Radio: { default: "String", possible: ["String", "Number"] },
    Checkbox: { default: "Boolean", possible: ["Boolean", "String", "Number"] },
    Switch: { default: "Boolean", possible: ["Boolean", "String", "Number"] },
    Label: { default: "String", possible: ["String", "Number"] },
    TextArea: { default: "String", possible: ["String"] },
    Tabbar: { default: "String", possible: ["String"] }
};


const COMPONENT_DATATYPE_MAP2: Record<keyof typeof ComponentType, { default: keyof typeof DataType, possible: (keyof typeof DataType)[] }> = {
    Input: { default: "String", possible: ["String", "Number"] },
    InputSearch: { default: "String", possible: ["String", "Number"] },
    Select: { default: "String", possible: ["String", "Number"] },
    DatePicker: { default: "DateTime", possible: ["DateTime", "Number"] },
    DateRangePicker: { default: "DateTime", possible: ["DateTime", "String"] },
    TimePicker: { default: "DateTime", possible: ["DateTime", "String"] },
    Radio: { default: "String", possible: ["String", "Number"] },
    Checkbox: { default: "Boolean", possible: ["Boolean", "String", "Number"] },
    Switch: { default: "Boolean", possible: ["Boolean", "String", "Number"] },
    Label: { default: "String", possible: ["String", "Number"] },
    TextArea: { default: "String", possible: ["String"] },
    Tabbar: { default: "String", possible: ["String"] }
};


const COMPONENT_DATATYPE_MAP3: Record<ComponentType, { default: keyof typeof DataType, possible: (keyof typeof DataType)[] }> = {
    input: { default: "String", possible: ["String", "Number"] },
    inputsearch: { default: "String", possible: ["String", "Number"] },
    select: { default: "String", possible: ["String", "Number"] },
    datepicker: { default: "DateTime", possible: ["DateTime", "Number"] },
    daterangepicker: { default: "DateTime", possible: ["DateTime", "String"] },
    timepicker: { default: "DateTime", possible: ["DateTime", "String"] },
    radio: { default: "String", possible: ["String", "Number"] },
    checkbox: { default: "Boolean", possible: ["Boolean", "String", "Number"] },
    switch: { default: "Boolean", possible: ["Boolean", "String", "Number"] },
    label: { default: "String", possible: ["String", "Number"] },
    textarea: { default: "String", possible: ["String"] },
    tabbar: { default: "String", possible: ["String"] }
};


const COMPONENT_DATATYPE_MAP4: Record<ComponentTypeNames, ComponentConfigType> = {
    Input: { default: "String", possible: ["String", "Number"] },
    InputSearch: { default: "String", possible: ["String", "Number"] },
    Select: { default: "String", possible: ["String", "Number"] },
    DatePicker: { default: "DateTime", possible: ["DateTime", "Number"] },
    DateRangePicker: { default: "DateTime", possible: ["DateTime", "String"] },
    TimePicker: { default: "DateTime", possible: ["DateTime", "String"] },
    Radio: { default: "String", possible: ["String", "Number"] },
    Checkbox: { default: "Boolean", possible: ["Boolean", "String", "Number"] },
    Switch: { default: "Boolean", possible: ["Boolean", "String", "Number"] },
    Label: { default: "String", possible: ["String", "Number"] },
    TextArea: { default: "String", possible: ["String"] },
    Tabbar: { default: "String", possible: ["String"] }
};


type ComponentRecord = Record<ComponentTypeNames, ComponentConfigType>;
const COMPONENT_DATATYPE_MAP5: ComponentRecord = {
    Input: { default: "String", possible: ["String", "Number"] },
    InputSearch: { default: "String", possible: ["String", "Number"] },
    Select: { default: "String", possible: ["String", "Number"] },
    DatePicker: { default: "DateTime", possible: ["DateTime", "Number"] },
    DateRangePicker: { default: "DateTime", possible: ["DateTime", "String"] },
    TimePicker: { default: "DateTime", possible: ["DateTime", "String"] },
    Radio: { default: "String", possible: ["String", "Number"] },
    Checkbox: { default: "Boolean", possible: ["Boolean", "String", "Number"] },
    Switch: { default: "Boolean", possible: ["Boolean", "String", "Number"] },
    Label: { default: "String", possible: ["String", "Number"] },
    TextArea: { default: "String", possible: ["String"] },
    Tabbar: { default: "String", possible: ["String"] }
};


const COMPONENT_DATATYPE_MAP6 = {
    input: { default: DataType.String, possible: [DataType.String, DataType.Number] },
    inputsearch: { default: DataType.String, possible: [DataType.String, DataType.Number] },
    select: { default: DataType.String, possible: [DataType.String, DataType.Number] },
    datepicker: { default: DataType.DateTime, possible: [DataType.DateTime, DataType.String] },
    daterangepicker: { default: DataType.DateTime, possible: [DataType.DateTime, DataType.String] },
    timepicker: { default: DataType.DateTime, possible: [DataType.DateTime, DataType.String] },
    radio: { default: DataType.String, possible: [DataType.String, DataType.Number] },
    checkbox: { default: DataType.Boolean, possible: [DataType.Boolean, DataType.String, DataType.Number] },
    switch: { default: DataType.Boolean, possible: [DataType.Boolean, DataType.String, DataType.Number] },
    label: { default: DataType.String, possible: [DataType.String, DataType.Number] },
    textarea: { default: DataType.String, possible: [DataType.String] }
};


const inputConfig1: ComponentConfigType = COMPONENT_DATATYPE_MAP1["Input"];
const datePickerConfig1: ComponentConfigType = COMPONENT_DATATYPE_MAP1["DatePicker"];

const inputConfig2: ComponentConfigType = COMPONENT_DATATYPE_MAP2["Input"];
const datePickerConfig2: ComponentConfigType = COMPONENT_DATATYPE_MAP2["DatePicker"];

const inputConfig3: ComponentConfigType = COMPONENT_DATATYPE_MAP3["input"];
const datePickerConfig3: ComponentConfigType = COMPONENT_DATATYPE_MAP3["datepicker"];

const inputConfig4: ComponentConfigType = COMPONENT_DATATYPE_MAP4["Input"];
const datePickerConfig4: ComponentConfigType = COMPONENT_DATATYPE_MAP4["DatePicker"];

const inputConfig5: ComponentConfigType = COMPONENT_DATATYPE_MAP5["Input"];
const datePickerConfig5: ComponentConfigType = COMPONENT_DATATYPE_MAP5["DatePicker"];

const inputConfig6 = COMPONENT_DATATYPE_MAP6["input"];
const datePickerConfig6 = COMPONENT_DATATYPE_MAP6["datepicker"];


console.log(inputConfig1);
console.log(datePickerConfig1);

console.log(inputConfig2);
console.log(datePickerConfig2);

console.log(inputConfig3);
console.log(datePickerConfig3);

console.log(inputConfig4);
console.log(datePickerConfig4);

console.log(inputConfig5);
console.log(datePickerConfig5);

console.log(inputConfig6);
console.log(datePickerConfig6);

export { };