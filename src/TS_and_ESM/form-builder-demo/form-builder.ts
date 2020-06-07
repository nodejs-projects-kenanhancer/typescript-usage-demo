export namespace form.builder {

    export namespace interfaces {

        export namespace types {

            export type DataType = "String" | "Number" | "Boolean" | "DateTime";

            export type ElementType = "Component" | "Container";

            export type ContainerType = "Row" | "Column" | "Form" | "Tabs" | "Tab";

            export type ComponentType =
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

        }


        export namespace css {

            export interface IBorderCSS {
                borderColor: string;
                borderWidth: number;
                borderStyle: "dotted" | "dashed" | "solid" | "double";
            }

            export interface IBackgroundColorCSS {
                bgColor: string;
                opacity: number
            }

            export interface ITextCSS {
                color: string;
                textAlign: "center" | "left" | "left";
                textDecoration: "overline" | "line-through" | "underline";
            }

            export interface IFontCSS {
                fontFamily: "Impact" | "Charcoal" | "sans-serif";
                fontStyle: "normal" | "italic" | "oblique";
                fontWeight: "normal" | "bold";
                fontVariant: "normal" | "small-caps";
                fontSize: number;
            }

            export interface IPaddingCSS {
                paddingTop: string;
                paddingRight: string;
                paddingBottom: string;
                paddingLeft: string;
            }

            export interface IMarginCSS {
                marginTop: string;
                marginRight: string;
                marginBottom: string;
                marginLeft: string;
            }

        }


        export namespace features {

            export interface ITitleFeature {
                title: string;
            }

            export interface IValidateFeature {
                enabled: boolean;
                required: boolean;
                dataType: types.DataType;
                max: number;
                min: number;
                pattern: string;
            }

        }


        export namespace base.elements {

            export interface IElement {
                appId: string;
                Id: string;
                name: string;
                pageId: string;
                parentId: string;
                order: number;
            }

            export interface IContainerElement extends IElement {

            }

            export interface IFormElement extends IElement, features.ITitleFeature {
                fill: boolean;
            }

        }


        export namespace form.elements {

            export interface ILabelElement extends base.elements.IFormElement {

            }

            export interface IValidatableFormElement extends base.elements.IFormElement, features.IValidateFeature {

            }

            export interface IInputElement extends IValidatableFormElement {

            }

            export interface IInputSearchElement extends IValidatableFormElement {

            }

            export interface IDatePickerElement extends IValidatableFormElement {

            }

            export interface IDateRangePickerElement extends IValidatableFormElement {

            }

            export interface ITimePickerElement extends IValidatableFormElement {

            }

            export interface ICheckboxElement extends IValidatableFormElement {

            }

            export interface IRadioElement extends IValidatableFormElement {

            }

            export interface ISelectElement extends IValidatableFormElement {

            }

            export interface ITextAreaElement extends IValidatableFormElement {

            }

            export interface ISwitchElement extends IValidatableFormElement {

            }

        }


        export namespace container.elements {

            export interface IRowElement extends base.elements.IContainerElement {

            }

            export interface IColumnElement extends base.elements.IContainerElement {

            }

            export interface ITabbarElement extends base.elements.IContainerElement {
                headerAlignment: "top" | "bottom" | "right" | "left";
            }

            export interface ITabElement extends base.elements.IContainerElement, features.ITitleFeature {

            }

            export interface IFormContainerElement extends base.elements.IContainerElement, features.ITitleFeature {

            }

        }

    }


    export namespace implementations {

        export namespace base.elements {

            export abstract class BaseComponent implements interfaces.base.elements.IElement {
                appId: string;
                Id: string;
                name: string;
                pageId: string;
                parentId: string;
                order: number;

                constructor(args: interfaces.base.elements.IElement) {
                    this.appId = args.appId;
                    this.Id = args.Id;
                    this.name = args.name;
                    this.pageId = args.pageId;
                    this.parentId = args.parentId;
                    this.order = args.order;
                }
            }

            export abstract class BaseFormElement extends BaseComponent implements interfaces.base.elements.IFormElement {
                fill: boolean;
                title: string;

                constructor(args: interfaces.base.elements.IFormElement) {
                    super(args);

                    this.fill = args.fill;
                    this.title = args.title;
                }
            }

            export abstract class BaseValidatableFormElement extends BaseFormElement implements interfaces.form.elements.IValidatableFormElement {
                enabled: boolean;
                required: boolean;
                dataType: interfaces.types.DataType;
                max: number;
                min: number;
                pattern: string;

                constructor(args: interfaces.form.elements.IValidatableFormElement) {
                    super(args);

                    this.enabled = args.enabled;
                    this.required = args.required;
                    this.dataType = args.dataType;
                    this.max = args.max;
                    this.min = args.min;
                    this.pattern = args.pattern;
                }
            }

        }


        export namespace form.elements {

            export class LabelElement extends base.elements.BaseFormElement implements interfaces.form.elements.ILabelElement {
                constructor(args: interfaces.form.elements.ILabelElement) {
                    super(args);
                }
            }

            export class InputElement extends base.elements.BaseValidatableFormElement implements interfaces.form.elements.IInputElement {
                constructor(args: interfaces.form.elements.IInputElement) {
                    super(args);
                }
            }


            export class InputSearchElement extends base.elements.BaseValidatableFormElement implements interfaces.form.elements.IInputSearchElement {
                constructor(args: interfaces.form.elements.IInputSearchElement) {
                    super(args);
                }
            }


            export class DatePickerElement extends base.elements.BaseValidatableFormElement implements interfaces.form.elements.IDatePickerElement {
                constructor(args: interfaces.form.elements.IDatePickerElement) {
                    super(args);
                }
            }


            export class DateRangePickerElement extends base.elements.BaseValidatableFormElement implements interfaces.form.elements.IDateRangePickerElement {
                constructor(args: interfaces.form.elements.IDateRangePickerElement) {
                    super(args);
                }
            }


            export class TimePickerElement extends base.elements.BaseValidatableFormElement implements interfaces.form.elements.ITimePickerElement {
                constructor(args: interfaces.form.elements.ITimePickerElement) {
                    super(args);
                }
            }


            export class CheckboxElement extends base.elements.BaseValidatableFormElement implements interfaces.form.elements.ICheckboxElement {
                constructor(args: interfaces.form.elements.ICheckboxElement) {
                    super(args);
                }
            }


            export class RadioElement extends base.elements.BaseValidatableFormElement implements interfaces.form.elements.IRadioElement {
                constructor(args: interfaces.form.elements.IRadioElement) {
                    super(args);
                }
            }


            export class SelectElement extends base.elements.BaseValidatableFormElement implements interfaces.form.elements.ISelectElement {
                constructor(args: interfaces.form.elements.ISelectElement) {
                    super(args);
                }
            }


            export class TextAreaElement extends base.elements.BaseValidatableFormElement implements interfaces.form.elements.ITextAreaElement {
                constructor(args: interfaces.form.elements.ITextAreaElement) {
                    super(args);
                }
            }


            export class SwitchElement extends base.elements.BaseValidatableFormElement implements interfaces.form.elements.ISwitchElement {
                constructor(args: interfaces.form.elements.ISwitchElement) {
                    super(args);
                }
            }

        }


        export namespace container.elements {

            export class RowElement extends base.elements.BaseComponent implements interfaces.container.elements.IRowElement {
                constructor(args: interfaces.container.elements.IRowElement) {
                    super(args);
                }
            }


            export class ColumnElement extends base.elements.BaseComponent implements interfaces.container.elements.IColumnElement {
                constructor(args: interfaces.container.elements.IColumnElement) {
                    super(args);
                }
            }


            export class TabbarElement extends base.elements.BaseComponent implements interfaces.container.elements.ITabbarElement {
                headerAlignment: "top" | "bottom" | "right" | "left";

                constructor(args: interfaces.container.elements.ITabbarElement) {
                    super(args);

                    this.headerAlignment = args.headerAlignment;
                }
            }


            export class TabElement extends base.elements.BaseComponent implements interfaces.container.elements.ITabElement {
                title: string;

                constructor(args: interfaces.container.elements.ITabElement) {
                    super(args);

                    this.title = args.title;
                }
            }


            export class FormContainerElement extends base.elements.BaseComponent implements interfaces.container.elements.IFormContainerElement {
                title: string;

                constructor(args: interfaces.container.elements.IFormContainerElement) {
                    super(args);

                    this.title = args.title;
                }
            }

        }

    }

}