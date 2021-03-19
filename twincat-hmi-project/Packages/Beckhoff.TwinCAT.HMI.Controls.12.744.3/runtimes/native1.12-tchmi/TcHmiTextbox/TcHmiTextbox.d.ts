declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiTextbox extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** Reference to the root dom element of the current control template as  jquery object. */
                protected __elementTemplateRoot: JQuery;
                /** Reference to the dom element in current control template which handles the border style as jquery object. */
                protected __elementBorder: JQuery;
                /** Reference to the element containing the text input element as jquery object. */
                protected __elementContainer: JQuery;
                /** Reference to the underlying html text textarea or input element as jquery object. */
                protected __elementInput: JQuery<HTMLInputElement | HTMLTextAreaElement>;
                /** Reference to the dom element in current control template which handles the focus style as jquery object. */
                protected __elementFocusBorder: JQuery;
                /**
                 * Is set to true if the control is locked and to false if the control is unlocked.
                 * When the control is locked, calls to setText are ignored.
                 */
                protected __locked: boolean;
                /**  Internal reference to the attribute "data-tchmi-text" */
                protected __text: string | undefined;
                /** Text at focusin time */
                protected __oldText: string | undefined;
                /** Internal reference to the attribute "data-tchmi-text-horizontal-alignment */
                protected __textHorizontalAlignment: TcHmi.HorizontalAlignment | null | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-content-padding"
                 */
                protected __contentPadding: TcHmi.FourSidedCss | null | undefined;
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
                * Internal reference to the attribute "data-tchmi-multiline"
                */
                protected __multiline: boolean | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-word-wrap"
                */
                protected __wordWrap: boolean | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-placeholder"
                 */
                protected __placeholder: string | null | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-text-color"
                */
                protected __textColor: TcHmi.SolidColor | null | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-auto-focus-out"
                 */
                protected __autoFocusOut: boolean | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-auto-select-text"
                 */
                protected __autoSelectText: boolean | undefined;
                protected __triggerUIFinishedOnBlur: boolean;
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
                 * Handle submit on keydown
                 */
                protected __onKeydown: (event: KeyboardEvent) => void;
                /**
                 * Handle value change on "input" to support virtual keyboards on mobile devices
                 * which caches the value while editing (iOS for example)
                 * input is fired when the keys has changed text
                 */
                protected __onInput: (event: Event) => void;
                /**
                * Is raised if text is pasted into the underlying textarea element.
                */
                protected __onPaste: (event: Event) => void;
                /**
                * Is raised if text is cut from the underlying textarea element.
                */
                protected __onCut: (event: Event) => void;
                /**
                * Is raised if the underlying input element gets the focus.
                */
                protected __onFocusIn: (event: FocusEvent) => void;
                /**
                * Is raised if the underlying input element has lost its focus.
                */
                protected __onFocusOut: (event: FocusEvent) => void;
                /**
                * Sets the value of the member variable "text" if the new value is not equal to the current value
                * or the current control instance is locked and calls the associated process function (processText) after that.
                * @param valueNew The new value for text.
                */
                setText(valueNew: string | null): void;
                /**
                 * Sets the value of the member variable "text" regardless of lock.
                 * @param valueNew The new value for text
                 */
                protected __setText(valueNew: string | null | undefined, process?: boolean): void;
                /**
                * Returns the current value of the member variable text.
                */
                getText(): string | undefined;
                /**
                * Processes the current value of text and forwards it to the value attribute of the underlying input variable.
                * The current value of text is only forwarded if it is no binding expression.
                */
                protected __processText(): void;
                /**
                * Sets the text horizontal alignment and calls the associated process function (processTextHorizontalAlignment).
                * @param valueNew The new value for textHorizontalAlignment.
                */
                setTextHorizontalAlignment(valueNew: HorizontalAlignment | null): void;
                /**
                * Returns the current value of textHorizontalAlignment.
                * @returns The current value of textHorizontalAlignment.
                */
                getTextHorizontalAlignment(): "Left" | "Center" | "Right" | null | undefined;
                /**
                * Processes the current textHorizontalAlignment attribute value.
                */
                protected __processTextHorizontalAlignment(): void;
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
                * @param valueNew The new value for textFontSize.
                *                                                Possible values: px, %
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
                * Sets the multiline value and calls the associated process function (processMultiline).
                * @param valueNew The new value for multiline.
                */
                setMultiline(valueNew: boolean | null): void;
                /**
                * Returns the current value of multiline.
                * @returns The current value of multiline.
                */
                getMultiline(): boolean | undefined;
                /**
                * Processes the current multiline attribute value.
                */
                protected __processMultiline(): void;
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
                /**
                * Sets the placeholder value and calls the associated process function (processPlaceholder).
                * @param valueNew The new value for placeholder.
                */
                setPlaceholder(valueNew: string | null): void;
                /**
                * Returns the current value of placeholder.
                * @returns The current value of placeholder.
                */
                getPlaceholder(): string | null | undefined;
                /**
                * Processes the current placeholder attribute value.
                */
                protected __processPlaceholder(): void;
                /**
                * Sets the text color and calls the associated process function (processTextColor).
                * @param valueNew The new value for textColor.
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
                * Sets the auto focus out attribute and calls the associated process function (processAutoFocusOut).
                * @param valueNew The new value for autoFocusOut.
                */
                setAutoFocusOut(valueNew: boolean | null): void;
                /**
                * Returns the current value of autoFocusOut.
                * @returns The current value of autoFocusOut.
                */
                getAutoFocusOut(): boolean | undefined;
                /**
                * Processes the current autoFocusOut attribute value.
                */
                protected __processAutoFocusOut(): void;
                /**
               * Sets the auto select text attribute and calls the associated process function (processAutoSelectText).
               * @param valueNew The new value for autoSelectText.
               */
                setAutoSelectText(valueNew: boolean | null): void;
                /**
                * Returns the current value of autoSelectText.
                * @returns The current value of autoSelectText.
                */
                getAutoSelectText(): boolean | undefined;
                /** Lock handling */
                /**
                * Lock the control. Calls to setText will be ignored until control is unlocked.
                */
                __lock(): void;
                /**
                * Unlocks the control.
                */
                __unlock(): void;
                /**
                * Checks if the Control is deactivated and adjusts the visualization
                */
                protected __processControlActivation(): void;
                /**
                * Processes the current isEnabled attribute value.
                */
                __processIsEnabled(): void;
                /**
                * Processes the current AccessConfig attribute value.
                */
                __processAccessConfig(): void;
            }
        }
    }
}
