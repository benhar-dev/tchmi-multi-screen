declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiTextblock extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** Reference to the root dom element of the current control template as jquery object. */
                protected __elementTemplateRoot: JQuery;
                protected __elementTextContainer: JQuery;
                /**
                * Internal reference to the attribute "data-tchmi-horizontal-text-alignment"
                * Possible Values: "Left", "Top", "Center"
                */
                protected __textHorizontalAlignment: TcHmi.HorizontalAlignment | null | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-vertical-text-alignment"
                */
                protected __textVerticalAlignment: TcHmi.VerticalAlignment | null | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-text-font-size"
                */
                protected __textFontSize: number | undefined;
                /**
               * Internal reference to the attribute "data-tchmi-text-font-size-unit"
               */
                protected __textFontSizeUnit: FontSizeUnit | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-text-font-family"
                */
                protected __textFontFamily: FontFamily | null | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-text-font-style"
                */
                protected __textFontStyle: FontStyle | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-text-font-style"
                */
                protected __textFontWeight: FontWeight | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-text-color"
                */
                protected __textColor: TcHmi.SolidColor | null | undefined;
                /**  Internal reference to the attribute "data-tchmi-text" */
                protected __text: string | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-word-wrap"
                */
                protected __wordWrap: boolean | undefined;
                protected __onResizedEventDestroyEvent: DestroyFunction | undefined;
                protected __onThemeChangedEventDestroyEvent: DestroyFunction | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-content-padding"
                */
                protected __contentPadding: TcHmi.FourSidedCss | null | undefined;
                protected __asyncWorkData: TcHmiTextblock.IControlSpecificData;
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit(): void;
                /**
                * If raised, all attributes have been set to it's default or dom values.
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
                * Processes the current width and width unit.
                */
                __processWidth(): void;
                /**
                * Sets the value of the height mode attribute.
                * @param valueNew The new height mode value..
                */
                setHeightMode(valueNew: SizeModeWithContent | null): void;
                /**
                * Processes the current height and height unit.
                */
                __processHeight(): void;
                protected __onResized(): (evt: EventProvider.Event, ctrl: Controls.System.TcHmiControl) => void;
                protected __doAsyncWork(): void;
                /**
                 * Catch changed CSS file changes (font-size etc)
                 */
                private __handleThemeChangeEvent;
                /**
                 * Returns the calculated height in pixel if self defined (not percent based) or based on the children.
                 */
                __getContentHeight(): number | null;
                /**
                * Sets the value of the member variable "text" if the new value is not equal to the current value
                * or the current control instance is locked and calls the associated process function (processText) after that.
                * @param valueNew The new value for text.
                */
                setText(valueNew: string | null): void;
                /**
                * Returns the current value of the member variable text.
                */
                getText(): string | undefined;
                /**
                * Processes the current value of text.
                * The current value of text is only forwarded if it is no binding expression.
                */
                protected __processText(): void;
                /**
                * Sets the textHorizontalAlignment value and calls the associated process function (processTextHorizontalAlignment).
                * @param valueNew The new value for textHorizontalAlignment.
                *                                       Possible Values: "Left", "Top", "Center"
                */
                setTextHorizontalAlignment(valueNew: TcHmi.HorizontalAlignment | null): void;
                /**
                * Returns the current value of horizontalTextAligment.
                * @returns The current value of horizontalTextAligment.
                *                           Possible Values: "Left", "Top", "Center"
                */
                getTextHorizontalAlignment(): "Left" | "Center" | "Right" | null | undefined;
                /**
                * Processes the current textHorizontalAlignment attribute value.
                */
                protected __processTextHorizontalAlignment(): void;
                /**
                * Sets the textVerticalAlignment value and calls the associated process function (processTextVerticalAlignment).
                * Possible Values: "Left", "Top", "Center"
                * @param valueNew The new value for textVerticalAlignment.
                *                                       Possible Values: "Top", "Bottom", "Center"
                */
                setTextVerticalAlignment(valueNew: TcHmi.VerticalAlignment | null): void;
                /**
                * Returns the current value of textVerticalAlignment.
                * @returns The current value of textVerticalAlignment.
                *                           Possible Values: "Top", "Bottom", "Center"
                */
                getTextVerticalAlignment(): "Center" | "Top" | "Bottom" | null | undefined;
                /**
                * Processes the current textVerticalAlignment attribute value.
                */
                protected __processTextVerticalAlignment(): void;
                /**
                * Sets the font size and calls the associated process function (processTextFontSize).
                * @param valueNew The new value for textFontSize.
                */
                setTextFontSize(valueNew: number | null): void;
                /**
                * Returns the current value of textFontSize.
                * @returns The current value of textFontSize.
                */
                getTextFontSize(): number | undefined;
                /**
                * Processes the current textFontSize attribute value.
                */
                protected __processTextFontSize(): void;
                /**
                * Sets the font size and calls the associated process function (processTextFontSizeUnit).
                * @param valueNew The new value for textFontSizeUnit.
                *                                       Possible values : px, %
                */
                setTextFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                * Returns the current value of textFontSizeUnit.
                * @returns The current value of textFontSizeUnit.
                */
                getTextFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                * Processes the current textFontSizeUnit attribute value.
                */
                protected __processTextFontSizeUnit(): void;
                /**
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
                /**
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
                /**
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
                /**
                * Sets the contentPadding value and calls the associated process function (processContentPadding) after it.
                * @param valueNew The new value for the contentPadding attribute as json string.
                */
                setContentPadding(valueNew: FourSidedCss | null): void;
                /**
                 * The watch callback for the contentPadding object resolver.
                 */
                protected __onResolverForContentPaddingWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<FourSidedCss>) => void;
                /**
                * Returns the current contentPadding value.
                * @returns The current value of the contentPadding member variable as json in string format.
                */
                getContentPadding(): FourSidedCss | null | undefined;
                /**
                * Processes the current contentPadding attribute.
                */
                protected __processContentPadding(): void;
                /**
                * Sets the text color and calls the associated process function (processTextColor).
                * @param valueNew The new value for textFColor.
                */
                setTextColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the textColor object resolver.
                 */
                protected __onResolverForTextColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of textColor.
                * @returns The current value of textColor.
                */
                getTextColor(): SolidColor | null | undefined;
                /**
                * Processes the current textColor attribute value.
                */
                protected __processTextColor(): void;
                /**
                * Sets the wordWrap value and calls the associated process function (processWordWrap).
                * @param valueNew The new value for wordWrap.
                */
                setWordWrap(valueNew: boolean | null): void;
                /**
                * Returns the current value of wordWrap.
                * @returns The current value of wordWrap.
                */
                getWordWrap(): boolean | undefined;
                /**
                * Processes the current wordWrap attribute value.
                */
                protected __processWordWrap(): void;
            }
            module TcHmiTextblock {
                interface IControlSpecificData extends System.TcHmiControl.IControlSpecificData {
                    'Beckhoff.TcHmiTextblock.triggerRebuildHeight': boolean;
                }
            }
        }
    }
}
