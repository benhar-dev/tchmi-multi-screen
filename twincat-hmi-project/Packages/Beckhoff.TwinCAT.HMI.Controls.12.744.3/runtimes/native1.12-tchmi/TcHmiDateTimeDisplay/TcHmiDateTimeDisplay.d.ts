declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiDateTimeDisplay extends TcHmi.Controls.System.TcHmiControl {
                /**
                 * Constructor of the control
                 * @param element Element from HTML (internal, do not use)
                 * @param pcElement precompiled Element (internal, do not use)
                 * @param attrs Attributes defined in HTML in a special format (internal, do not use)
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** HTML-Template-element */
                protected __elementTemplateRoot: HTMLElement;
                /** the time which will be displayed by this control (time, date or both) */
                protected __timeDisplayLayout: string | null | undefined;
                /** date and time text color */
                protected __textColor: SolidColor | null | undefined;
                /** time font size */
                protected __textFontSize: number | undefined;
                /**text time font size unit of the breadcrumb buttons */
                protected __textFontSizeUnit: FontSizeUnit | undefined;
                /** font family of the text */
                protected __textFontFamily: FontFamily | null | undefined;
                /** font style of the text" */
                protected __textFontStyle: FontStyle | undefined;
                /** font weight of the text */
                protected __textFontWeight: FontWeight | undefined;
                /** horizontal alignment of the text */
                protected __textHorizontalAlignment: HorizontalAlignment | null | undefined;
                /** vertical alignment of the text */
                protected __textVerticalAlignment: VerticalAlignment | null | undefined;
                protected __readLoopID: number;
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit(): void;
                /**
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 */
                __init(): void;
                /**
                * Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach(): void;
                /**
                * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach(): void;
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy(): void;
                /**
                 * function to update time
                 */
                protected __updateTime(): void;
                /******************************** time to display ***********************************************
                * Sets the time to display and calls the associated process function (processTimeDisplayLayout).
                * @param valueNew The new value for TimeDisplayLayout.
                */
                setTimeDisplayLayout(valueNew: TcHmiDateTimeDisplay.TimeDisplayLayout | null): void;
                /**
                * Returns the current value of TimeDisplayLayout.
                * @returns The current value of TimeDisplayLayout.
                */
                getTimeDisplayLayout(): string | null | undefined;
                /**
                * Processor function for 'data-tchmi-time-display-layout' attribute.
                */
                protected __processTimeDisplayLayout(): void;
                /********************************************************************** text color ******
                 * Setter function for 'data-tchmi-text-color' attribute.
                 */
                setTextColor(valueNew: TcHmi.SolidColor | null): void;
                /**
                 * The watch callback for the textColor object resolver.
                 */
                protected __onResolverForTextColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Getter function for 'data-tchmi-text-color' attribute.
                */
                getTextColor(): SolidColor | null | undefined;
                /**
                * Processor function for 'data-tchmi-text-color' attribute.
                */
                protected __processTextColor(): void;
                /****************************************************** text font size ******************************
                * Sets the font size and calls the associated process function (processTextFontSize).
                * @param valueNew The new value for TextFontSize.
                */
                setTextFontSize(valueNew: number | null): void;
                /**
                * Returns the current value of TextFontSize.
                * @returns The current value of TextFontSize.
                */
                getTextFontSize(): number | undefined;
                /**
                * Processes the current textFontSize attribute value.
                */
                protected __processTextFontSize(): void;
                /******************************** Text Font Size Unit ***********************************************
                * Sets the font size unit and calls the associated process function (processTextFontSizeUnit).
                * @param valueNew The new value for textFontSizeUnit.
                */
                setTextFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                * Returns the current value of TextFontSizeUnit.
                * @returns The current value of TextFontSizeUnit.
                */
                getTextFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                * Processes the current TextFontSizeUnit attribute value.
                */
                protected __processTextFontSizeUnit(): void;
                /******************************************** text horizontal alignment ********************************************
                * Sets the textHorizontalAlignment value and calls the associated process function (processTextHorizontalAlignment).
                * @param valueNew The new value for textHorizontalAlignment.
                */
                setTextHorizontalAlignment(valueNew: HorizontalAlignment | null): void;
                /**
                * Returns the current value of horizontalTextAligment.
                * @returns The current value of horizontalTextAligment.
                */
                getTextHorizontalAlignment(): "Left" | "Center" | "Right" | null | undefined;
                /**
                * Processes the current textHorizontalAlignment attribute value.
                */
                protected __processTextHorizontalAlignment(): void;
                /**************************************************** text vertical alignment **************************************
                * Sets the textVerticalAlignment value and calls the associated process function (processTextVerticalAlignment).
                * @param valueNew The new value for textVerticalAlignment.
                */
                setTextVerticalAlignment(valueNew: VerticalAlignment | null): void;
                /**
                * Returns the current value of horizontalTextAligment.
                * @returns The current value of horizontalTextAligment.
                */
                getTextVerticalAlignment(): "Center" | "Top" | "Bottom" | null | undefined;
                /**
                * Processes the current textVerticalAlignment attribute value.
                */
                protected __processTextVerticalAlignment(): void;
                /******************************************* text font family ***************************************
                * Sets the font family and calls the associated process function (processTextFontFamily).
                * @param valueNew The new value for textFontFamily.
                */
                setTextFontFamily(valueNew: FontFamily | null): void;
                /**
                * Returns the current value of textFontFamily.
                * @returns The current value of textFontFamily.
                */
                getTextFontFamily(): string | null | undefined;
                /**
                * Processes the current textFontFamily attribute value.
                */
                protected __processTextFontFamily(): void;
                /********************************************************** text font style ******************
                * Sets the font style and calls the associated process function (processTextFontStyle).
                * @param valueNew The new value for textFontStyle.
                */
                setTextFontStyle(valueNew: FontStyle | null): void;
                /**
                * Returns the current value of textFontStyle.
                * @returns The current value of textFontStyle.
                */
                getTextFontStyle(): "Normal" | "Italic" | "Oblique" | "Auto" | undefined;
                /**
                * Processes the current textFontStyle attribute value.
                */
                protected __processTextFontStyle(): void;
                /*********************************************** text font weight *******************************************
                * Sets the font weight and calls the associated process function (processTextFontWeight).
                * @param valueNew The new value for textFontWeight.
                */
                setTextFontWeight(valueNew: FontWeight | null): void;
                /**
                * Returns the current value of textFontWeight.
                * @returns The current value of textFontWeight.
                */
                getTextFontWeight(): "Normal" | "Auto" | "Bold" | undefined;
                /**
                * Processes the current textFontWeight attribute value.
                */
                protected __processTextFontWeight(): void;
            }
            module TcHmiDateTimeDisplay {
                type TimeDisplayLayout = 'Time' | 'Date' | 'TimeDateSingleLine' | 'TimeDateMultiLine' | 'DateTimeSingleLine' | 'DateTimeMultiLine';
            }
        }
    }
}
