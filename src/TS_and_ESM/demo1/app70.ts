type DataType = "String" | "Number" | "Boolean" | "DateTime";

type ComponentType = "Input" |
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

type ComponentConfigType = {
    default: DataType;
    possible: DataType[];
};

type ComponentMap = {
    [index in ComponentType]: ComponentConfigType;
};

const Component_Datatype_Map1: ComponentMap = {
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


const Component_Datatype_Map2: Record<ComponentType, ComponentConfigType> = {
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


const inputConfig1: ComponentConfigType = Component_Datatype_Map1["Input"];
const datePickerConfig1: ComponentConfigType = Component_Datatype_Map1["DatePicker"];

const inputConfig2: ComponentConfigType = Component_Datatype_Map2["Input"];
const datePickerConfig2: ComponentConfigType = Component_Datatype_Map2["DatePicker"];

console.log(inputConfig1);
console.log(datePickerConfig1);

console.log(inputConfig2);
console.log(datePickerConfig2);

export { };