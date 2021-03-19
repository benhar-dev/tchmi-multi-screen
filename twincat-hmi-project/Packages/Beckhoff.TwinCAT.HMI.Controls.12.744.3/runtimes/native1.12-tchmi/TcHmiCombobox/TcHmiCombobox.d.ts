declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiCombobox extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** member variables */
                /** Reference to the root dom element of the current control template as  jquery object. */
                protected __elementTemplateRoot: JQuery;
                protected __elementSelect: JQuery;
                /** Reference to the span element which is used to display the text value as jquery object. */
                protected __elementText: JQuery;
                /** Reference to the table div in the control template as jquery object. */
                protected __elementDropdown: JQuery;
                /** Reference to the toggle button as jquery object. */
                protected __elementDropdownToggleButton: JQuery;
                /** Reference to the dom element in current control template which handles the focus style as jquery object. */
                protected __elementFocusBorder: JQuery;
                /** SelectedIndex */
                protected __selectedIndex: number | null | undefined;
                /** SelectedIndex */
                protected __selectedId: number | null | undefined;
                /**
                 * Is set to true if the control is locked and to false if the control is unlocked.
                 * When the control is locked, calls to setText are ignored.
                 */
                protected __locked: boolean;
                protected readonly __evtHandlerFocusin: ((this: void, e: FocusEvent) => void);
                protected readonly __evtHandlerFocusout: ((this: void, e: FocusEvent) => void);
                protected readonly __evtHandlerKeydown: ((this: void, e: KeyboardEvent) => void);
                protected readonly __evtHandlerInput: ((this: void, e: any) => void);
                protected readonly __evtHandlerPaste: ((this: void, e: any) => void);
                protected readonly __evtHandlerCut: ((this: void, e: any) => void);
                protected readonly __evtHandlerMousedownCombobox: ((this: void, e: MouseEvent) => void);
                protected readonly __evtHandlerClick: ((this: void, e: MouseEvent) => void);
                protected readonly __evtHandlerMouseEnter: ((this: void, e: MouseEvent) => void);
                protected readonly __evtHandlerMouseLeave: ((this: void, e: MouseEvent) => void);
                /**  Internal reference to the attribute 'data-tchmi-src-data' */
                protected __srcData: TcHmiCombobox.ListItem[] | any[] | Dictionary<any> | null;
                /**  Internal reference to the attribute 'data-tchmi-enum-data-symbol' */
                protected __enumDataSymbol: Symbol<any[]> | undefined | null;
                protected __enumDataSymbolCurrentValue: number | undefined | null;
                protected __enumDataSymbolSchema: JsonSchema | undefined | null;
                protected __enumDataSymbolWriteLock: boolean;
                /** Sanitised data for internal use */
                protected __data: TcHmiCombobox.ListItem[];
                protected __dropDownboxOpen: boolean;
                /**
                * Internal reference to the attribute "data-tchmi-combobox-text"
                */
                protected __comboboxText: string | undefined;
                /**
                 * Internal reference to the attribute 'data-tchmi-horizontal-text-alignment'
                 */
                protected __textHorizontalAlignment: HorizontalAlignment | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-drop-down-horizontal-alignment'
                */
                protected __dropDownHorizontalAlignment: HorizontalAlignment | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-drop-down-vertical-alignment"
                */
                protected __dropDownVerticalAlignment: VerticalAlignment | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-text-color"
                */
                protected __textColor: SolidColor | null | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-drop-down-color"
                */
                protected __dropDownTextColor: SolidColor | null | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-drop-down-background-color"
                */
                protected __dropDownBackgroundColor: Color | null | undefined;
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
                protected __dropDownFontSize: number | undefined;
                /**
               * Internal reference to the attribute "data-tchmi-drop-down-font-size-unit"
               */
                protected __dropDownFontSizeUnit: FontSizeUnit | undefined;
                /**
               * Internal reference to the attribute "data-tchmi-drop-down-font-family"
               */
                protected __dropDownFontFamily: FontFamily | null | undefined;
                /**
               * Internal reference to the attribute "data-tchmi-drop-down-font-style"
               */
                protected __dropDownFontStyle: FontStyle | undefined;
                /**
               * Internal reference to the attribute "data-tchmi-drop-down-font-style"
               */
                protected __dropDownFontWeight: FontWeight | undefined;
                /**  Internal reference to the attribute "data-tchmi-data-height"
                */
                protected __dataHeight: number | undefined;
                /**  Internal reference to the attribute "data-tchmi-max-list-height"  */
                protected __maxListHeight: number | undefined;
                protected __dropDownStyle: TcHmiCombobox.DropDownStyle | undefined;
                /** Internal reference to the attribute "data-tchmi-allow-text-input" */
                protected __allowTextInput: boolean | undefined;
                /** Internal reference to the attribute "data-tchmi-text" */
                protected __text: string | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-drop-down-highlight-color"
                */
                protected __dropDownHighlightColor: TcHmi.SolidColor | null | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-drop-down-highlight-text-color"
                */
                protected __dropDownHighlightTextColor: TcHmi.SolidColor | null | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-drop-down-toggle-button-background-color"
                */
                protected __dropDownToggleButtonBackgroundColor: TcHmi.Color | null | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-drop-down-toggle-button-arrow-color"
                */
                protected __dropDownToggleButtonArrowColor: TcHmi.SolidColor | null | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-drop-down-category-background-color"
                */
                protected __dropDownCategoryBackgroundColor: TcHmi.Color | null | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-drop-down-category-text-color"
                */
                protected __dropDownCategoryTextColor: TcHmi.SolidColor | null | undefined;
                protected __dropDownCategoryFontSize: number | undefined;
                /**
               * Internal reference to the attribute "data-tchmi-drop-down-category-font-size-unit"
               */
                protected __dropDownCategoryFontSizeUnit: FontSizeUnit | undefined;
                /**
               * Internal reference to the attribute "data-tchmi-drop-down-category-font-family"
               */
                protected __dropDownCategoryFontFamily: FontFamily | null | undefined;
                /**
               * Internal reference to the attribute "data-tchmi-drop-down-category-font-style"
               */
                protected __dropDownCategoryFontStyle: FontStyle | undefined;
                /**
               * Internal reference to the attribute "data-tchmi-drop-down-category-font-style"
               */
                protected __dropDownCategoryFontWeight: FontWeight | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-drop-down-category-horizontal-alignment'
                */
                protected __dropDownCategoryHorizontalAlignment: HorizontalAlignment | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-drop-down-category-vertical-alignment"
                */
                protected __dropDownCategoryVerticalAlignment: VerticalAlignment | undefined;
                /**  Internal reference to the attribute "data-tchmi-data-height"
                */
                /**
                 * Internal reference to the attribute "data-tchmi-content-padding"
                 */
                protected __contentPadding: TcHmi.FourSidedCss | null | undefined;
                protected __resizedEventDestroyEvent: DestroyFunction | null;
                protected __movedEventDestroyEvent: DestroyFunction | null;
                protected __triggerUIFinishedOnBlur: boolean;
                protected __touches: {
                    id: number;
                    originalX: number;
                    originalY: number;
                    element: HTMLElement;
                }[];
                /** Text at focusin time */
                protected __oldText: string | undefined;
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
                protected __onMousedown(): (event: MouseEvent) => void;
                /**
                 * Returns an event handler for the click event of the dropdown elements.
                 */
                protected __onItemClick(): (event: MouseEvent) => void;
                /**
                * Is raised if mouse enter to the combobox element.
                */
                protected __onMouseEnter(): (event: MouseEvent) => void;
                /**
                * Is raised if mouse leave the combobox element.
                */
                protected __onMouseLeave(): (event: MouseEvent) => void;
                /**
                 * Returns an event handler for the touchstart event.
                 */
                protected __onTouchstart(): (event: TouchEvent) => void;
                /**
                 * Adds or removes the hover class to the given combobox item.
                 * @param element   The element representing the combobox item.
                 * @param hover     Whether to add or remove the hover class.
                 */
                protected __hoverComboboxItem(element: HTMLElement, hover: boolean): void;
                /**
                 * Handle submit on keydown
                 */
                protected __onKeydownTextbox(): (this: void, e: KeyboardEvent) => void;
                /**
                 * Handle value change on "input" to support virtual keyboards on mobile devices
                 * which caches the value while editing (iOS for example)
                 * input is fired when the keys has changed text
                 */
                protected __onInputTextbox(): (this: void, e: any) => void;
                /**
                * Is raised if text is pasted into the underlying input element.
                */
                protected __onPasteTextbox(): (this: void, e: any) => void;
                /**
                * Is raised if text is cut from the underlying input element.
                */
                protected __onCutTextbox(): (this: void, e: any) => void;
                /**
                * Is raised if the underlying input element gets the focus.
                */
                protected __onFocusInTextbox(): (this: void, evt: FocusEvent) => void;
                /**
                * Is raised if the underlying input element has lost its focus.
                */
                protected __onFocusOutTextbox(): (this: void, evt: FocusEvent) => void;
                /**
               * Sets the value of the member variable "comboboxtext" if the new value is not equal to the current value
               * and calls the associated __process function (__processComboboxText) after that.
               * @param valueNew The new value for comboboxtext.
               */
                setComboboxText(valueNew: string | null): void;
                /**
                * Returns the current value of the member variable comboboxtext.
                */
                getComboboxText(): string | undefined;
                /**
                * __processes the current value of comboboxtext and forwards it to the target span element in template html.
                */
                protected __processComboboxText(): void;
                /**
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
                /**
                * Sets the contentPadding value and calls the associated process function (processContentPadding) after it.
                * @param valueNew The new value for the contentPadding attribute as json string.
                */
                setContentPadding(valueNew: TcHmi.FourSidedCss | null): void;
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
                __processContentPadding(): void;
                /**
                * Processes the current background attribute.
                */
                protected __processBackgroundColor(): void;
                /**
                * Sets the text color and calls the associated process function (processDropDownHighlightColor).
                * @param valueNew The new value for dropDownHighlightColor.
                */
                setDropDownHighlightColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the dropDownHighlightColor object resolver.
                 */
                protected __onResolverForDropDownHighlightColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of dropDownHighlightColor.
                * @returns The current value of dropDownHighlightColor.
                */
                getDropDownHighlightColor(): SolidColor | null | undefined;
                /**
                * Processes the current dropDownHighlightColor attribute value.
                */
                protected __processDropDownHighlightColor(): void;
                /**
                * Sets the text color and calls the associated process function (processDropDownHighlightTextColor).
                * @param valueNew The new value for dropDownHighlightTextColor.
                */
                setDropDownHighlightTextColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the dropDownHightlightTextColor object resolver.
                 */
                protected __onResolverForDropDownHightlightTextColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of dropDownHighlightTextColor.
                * @returns The current value of dropDownHighlightTextColor.
                */
                getDropDownHighlightTextColor(): SolidColor | null | undefined;
                /**
                * Processes the current dropDownHighlightTextColor attribute value.
                */
                protected __processDropDownHighlightTextColor(): void;
                /**
                * Sets the toggle button background color and calls the associated process function (processDropDownToggleButtonBackgroundColor).
                * @param valueNew The new value for dropDownToggleButtonBackgroundColor.
                */
                setDropDownToggleButtonBackgroundColor(valueNew: Color | null): void;
                /**
                 * The watch callback for the dropDownToggleButtonBackgroundColor object resolver.
                 */
                protected __onResolverForDropDownToggleButtonBackgroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
                /**
                * Returns the current value of dropDownToggleButtonBackgroundColor.
                * @returns The current value of dropDownToggleButtonBackgroundColor.
                */
                getDropDownToggleButtonBackgroundColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
                * Processes the current dropDownToggleButtonBackgroundColor attribute value.
                */
                protected __processDropDownToggleButtonBackgroundColor(): void;
                /**
                * Sets the toggle button arrow color and calls the associated process function (processDropDownToggleButtonArrowColor).
                * @param valueNew The new value for dropDownToggleButtonArrowColor.
                */
                setDropDownToggleButtonArrowColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the dropDownToggleButtonArrowColor object resolver.
                 */
                protected __onResolverForDropDownToggleButtonArrowColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of dropDownToggleButtonArrowColor.
                * @returns The current value of dropDownToggleButtonArrowColor.
                */
                getDropDownToggleButtonArrowColor(): SolidColor | null | undefined;
                /**
                * Processes the current dropDownToggleButtonArrowColor attribute value.
                */
                protected __processDropDownToggleButtonArrowColor(): void;
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
                * Sets the font size unit and calls the associated process function (processTextFontSizeUnit).
                * @param valueNew The new value for textFontSizeUnit.
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
                 * Sets the value of the member variable "srcData" if the new value is not equal to the current value
                 * and calls the associated __process function (__processSrcData) after that.
                 * @param valueNew The new value for srcData.
                 */
                setSrcData(valueNew: TcHmiCombobox.ListItem[] | any[] | Dictionary<any> | null): void;
                /**
                 * The watch callback for the srcData object resolver.
                 */
                protected __onResolverForSrcDataWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiCombobox.ListItem[] | any[] | Dictionary<any>>) => void;
                /**
               * Returns the current value of the member variable text.
               */
                getSrcData(): any[] | Dictionary<any> | TcHmiCombobox.ListItem[] | null;
                /**
                 * Processes the current srcData attribute value.
                 * @param forwardToEnumDataSymbol Whether the currently selected value should be written to the enum data symbol.
                 */
                protected __processSrcData(forwardToEnumDataSymbol: boolean): void;
                /**
                 * @param valueNew
                 */
                setEnumDataSymbol(valueNew: TcHmi.Symbol<any[]> | null): void;
                /**
                 */
                getEnumDataSymbol(): Symbol<any[]> | null | undefined;
                protected __processEnumDataSymbol(): void;
                protected __processEnumDataSymbolSchema(): void;
                protected __processEnumDataSymbolCurrentValue(): void;
                protected __destroyEnumDataSymbolWatch: DestroyFunction | null;
                protected __onEnumDataSymbolWatch(): (data: TcHmi.Symbol.IReadResultObject<number>) => void;
                protected __documentFocusout: (evt: MouseEvent) => void;
                protected __resizeDropDownboxCb: () => void;
                /**
                 * Set or toggle the drop down visibility
                 * @param valueNew
                 */
                protected __setDropDownboxOpen(valueNew?: boolean): void;
                /**
                 * Populates the dropdown list with elements specified in __data
                 */
                protected __fillDropdown(): void;
                /**
               * Sets the value of the member variable "dataHeight" if the new value is not equal to the current value
               * and calls the associated __process function (__processDataHeight) after that.
               * @param valueNew The new value for dataHeight.
                */
                setDataHeight(valueNew: number | null): void;
                /**
               * Returns the current value of the member variable dataHeight.
               */
                getDataHeight(): number | undefined;
                /**
                * __processes the current value of dataHeight.
                */
                protected __processDataHeight(): void;
                /**
               DEPRECATED! BorderWidthUnit is always 'px'. This function exists purely to avoid errors in existing projects.
               @deprecated BorderWidthUnit is always 'px'.
                */
                setDataHeightUnit(valueNew: DimensionUnit | null): void;
                /**
               * Returns the current value of the member variable dataHeight.
               */
                getDataHeightUnit(): string;
                /**
                * __processes the current value of dataHeight.
                */
                protected __processDataHeightUnit(): void;
                /**
               * Sets the value of the member variable "maxListHeight" if the new value is not equal to the current value
               * and calls the associated process function (processmaxListHeight) after that.
               * @param valueNew The new value for maxListHeight.
                */
                setMaxListHeight(valueNew: number | null): void;
                /**
               * Returns the current value of the member variable maxListHeight.
               */
                getMaxListHeight(): number | undefined;
                /**
                * Processes the current value of maxListHeight.
                */
                protected __processMaxListHeight(): void;
                /**
               DEPRECATED! BorderWidthUnit is always 'px'. This function exists purely to avoid errors in existing projects.
               @deprecated BorderWidthUnit is always 'px'.
                */
                setMaxListHeightUnit(valueNew: DimensionUnit | null): void;
                /**
               * Returns the current value of the member variable dataHeight.
               */
                getMaxListHeightUnit(): string;
                /**
                * __processes the current value of dataHeight.
                */
                protected __processMaxListHeightUnit(): void;
                /**
                * Sets the value of the member variable "DropDownStyle" if the new value is not equal to the current value
                * and calls the associated __process function (__processmaxListHeightUnit) after that.
                * @param valueNew The new value for dataHeight.
                */
                setDropDownStyle(valueNew: TcHmiCombobox.DropDownStyle | null): void;
                /**
               * Returns the current value of the member variable DropDownStyle.
               */
                getDropDownStyle(): string | null;
                /**
                * __processes the current value of DropDownStyle.
                */
                protected __processDropDownStyle(): void;
                /**
                 * Gets the selected value
                 */
                getSelectedValue(): any;
                /**
                 * Gets the selected Text
                 * @deprecated
                 */
                getSelectedText(): string | number | boolean | null;
                /**
                 * Gets the entered Text
                 */
                getText(): string | number | boolean | null | undefined;
                /**
                 * Sets the selected index and calls the __processSelectedIndex function
                 * @param valueNew The new value
                 */
                setSelectedIndex(valueNew: number | null): void;
                /**
                 * Gets the selected index
                 */
                getSelectedIndex(): number | null | undefined;
                /**
                 * Sets the selected index and calls the __processSelectedIndex function
                 * @param valueNew The new value
                 * @param forwardToEnumDataSymbol Whether the currently selected value should be written to the enum data symbol.
                 * @param forwardToSelectedId Whether the corresponding selected id should be set.
                 */
                protected __setSelectedIndex(valueNew: number | null, forwardToEnumDataSymbol?: boolean, forwardToSelectedId?: boolean): void;
                /**
                 * Processes the selected index
                 */
                protected __processSelectedIndex(forwardToEnumDataSymbol: boolean, forwardToSelectedId: boolean): void;
                /**
                 * Sets the selected id and calls the __processSelectedId function
                 * @param valueNew The new value
                 */
                setSelectedId(valueNew: number | null): void;
                /**
                 * Sets the selected id and calls the __processSelectedId function
                 * @param valueNew The new value
                 * @param forwardToSelectedIndex Whether the corresponding selected index should be set.
                 */
                protected __setSelectedId(valueNew: number | null, forwardToSelectedIndex?: boolean): void;
                /**
                 * Gets the selected id
                 */
                getSelectedId(): number | null | undefined;
                /**
                 * Processes the selected Id
                 */
                protected __processSelectedId(forwardToSelectedIndex: boolean): void;
                /**
                 * Sets the font size and calls the associated process function (processDropDownFontSize).
                 * @param valueNew The new value for DropDownFontSize.
                 */
                setDropDownFontSize(valueNew: number | null): void;
                /**
                * Returns the current value of DropDownFontSize.
                * @returns The current value of DropDownFontSize.
                */
                getDropDownFontSize(): number | undefined;
                /**
                * Processes the current DropDownFontSize attribute value.
                */
                protected __processDropDownFontSize(): void;
                /**
                * Sets the font size unit and calls the associated process function (processDropDownFontSizeUnit).
                * @param valueNew The new value for DropDownFontSizeUnit.
                */
                setDropDownFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                * Returns the current value of DropDownFontSizeUnit.
                * @returns The current value of DropDownFontSizeUnit.
                */
                getDropDownFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                * Processes the current DropDownFontSizeUnit attribute value.
                */
                protected __processDropDownFontSizeUnit(): void;
                /**
                * Sets the font family and calls the associated process function (processDropDownFontFamily).
                * @param valueNew The new value for DropDownFontFamily.
                */
                setDropDownFontFamily(valueNew: FontFamily | null): void;
                /**
                * Returns the current value of DropDownFontFamily.
                * @returns The current value of DropDownFontFamily.
                */
                getDropDownFontFamily(): string | null | undefined;
                /**
                * Processes the current DropDownFontFamily attribute value.
                */
                protected __processDropDownFontFamily(): void;
                /**
                * Sets the font style and calls the associated process function (processDropDownFontStyle).
                * @param valueNew The new value for DropDownFontStyle.
                */
                setDropDownFontStyle(valueNew: FontStyle | null): void;
                /**
                * Returns the current value of DropDownFontStyle.
                * @returns The current value of DropDownFontStyle.
                */
                getDropDownFontStyle(): "Normal" | "Italic" | "Oblique" | "Auto" | undefined;
                /**
                * Processes the current DropDownFontStyle attribute value.
                */
                protected __processDropDownFontStyle(): void;
                /**
                * Sets the font weight and calls the associated process function (processDropDownFontWeight).
                * @param valueNew The new value for DropDownFontWeight.
                */
                setDropDownFontWeight(valueNew: FontWeight | null): void;
                /**
                * Returns the current value of DropDownFontWeight.
                * @returns The current value of DropDownFontWeight.
                */
                getDropDownFontWeight(): "Normal" | "Auto" | "Bold" | undefined;
                /**
                * Processes the current DropDownFontWeight attribute value.
                */
                protected __processDropDownFontWeight(): void;
                /**
                * Sets the DropDownHorizontalAlignment value and calls the associated process function (processDropDownHorizontalAlignment).
                * @param valueNew The new value for DropDownHorizontalAlignment.
                */
                setDropDownHorizontalAlignment(valueNew: HorizontalAlignment | null): void;
                /**
                * Returns the current value of horizontalDropDownAligment.
                * @returns The current value of horizontalDropDownAligment.
                */
                getDropDownHorizontalAlignment(): "Left" | "Center" | "Right" | undefined;
                /**
                * Processes the current DropDownHorizontalAlignment attribute value.
                */
                protected __processDropDownHorizontalAlignment(): void;
                /**
                * Sets the DropDownVerticalAlignment value and calls the associated process function (processDropDownVerticalAlignment).
                * @param valueNew The new value for DropDownVerticalAlignment.
                */
                setDropDownVerticalAlignment(valueNew: VerticalAlignment | null): void;
                /**
                * Returns the current value of DropDownVerticalAlignment.
                * @returns The current value of DropDownVerticalAlignment.
                */
                getDropDownVerticalAlignment(): "Center" | "Top" | "Bottom" | undefined;
                /**
                * Processes the current DropDownVerticalAlignment attribute value.
                */
                protected __processDropDownVerticalAlignment(): void;
                /**
                * Sets the DropDown color and calls the associated process function (processDropDownTextColor).
                * @param valueNew The new value for DropDownTextColor.
                */
                setDropDownTextColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the dropDownTextColor object resolver.
                 */
                protected __onResolverForDropDownTextColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of DropDownTextColor.
                * @returns The current value of DropDownTextColor.
                */
                getDropDownTextColor(): SolidColor | null | undefined;
                /**
                * Processes the current DropDownTextColor attribute value.
                */
                protected __processDropDownTextColor(): void;
                /**
                * Sets the toggle button background color and calls the associated process function (processDropDownBackgroundColor).
                * @param valueNew The new value for dropDownBackgroundColor.
                */
                setDropDownBackgroundColor(valueNew: Color | null): void;
                /**
                 * The watch callback for the dropDownBackgroundColor object resolver.
                 */
                protected __onResolverForDropDownBackgroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
                /**
                * Returns the current value of dropDownBackgroundColor.
                * @returns The current value of dropDownBackgroundColor.
                */
                getDropDownBackgroundColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
                * Processes the current dropDownBackgroundColor attribute value.
                */
                protected __processDropDownBackgroundColor(): void;
                /**
                * Sets the allowTextInput attribute.
                * @param valueNew The new value for allowTextInput.
                */
                setAllowTextInput(valueNew: boolean | null): void;
                /**
                * Returns the current value of allowTextInput.
                * @returns The current value of allowTextInput.
                */
                getAllowTextInput(): boolean | undefined;
                /**
                * Processes the current value of attribute allowTextInput.
                */
                protected __processAllowTextInput(): void;
                /**
                * Sets the value of the member variable "text" if the new value is not equal to the current value
                * or the current control instance is locked and calls the associated process function (processText) after that.
                * @param valueNew The new value for text.
                */
                setText(valueNew: string | null | undefined): void;
                /**
                 * Sets the value of the member variable "text" regardless of lock.
                 * @param valueNew The new value for text
                 */
                protected __setText(valueNew: string | null | undefined): void;
                /**
                * Processes the current value of text and forwards it to the value attribute of the underlying input variable.
                * The current value of text is only forwarded if it is no binding expression.
                */
                protected __processText(): void;
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
                /**
                * Sets the text color of the drop down category and calls the associated process function (processDropDownCategoryTextColor).
                * @param valueNew The new value for dropDownCategoryTextColor.
                */
                setDropDownCategoryTextColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the dropDownCategoryTextColor object resolver.
                 */
                protected __onResolverForDropDownCategoryTextColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of dropDownCategoryTextColor.
                * @returns The current value of dropDownCategoryTextColor.
                */
                getDropDownCategoryTextColor(): SolidColor | null | undefined;
                /**
                * Processes the current dropDownCategoryTextColor attribute value.
                */
                protected __processDropDownCategoryTextColor(): void;
                /**
                * Sets the toggle button background color and calls the associated process function (processDropDownCategoryBackgroundColor).
                * @param valueNew The new value for dropDownBackgroundColor.
                */
                setDropDownCategoryBackgroundColor(valueNew: Color | null): void;
                /**
                 * The watch callback for the dropDownCategoryBackgroundColor object resolver.
                 */
                protected __onResolverForDropDownCategoryBackgroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
                /**
                * Returns the current value of dropDownCategoryBackgroundColor.
                * @returns The current value of dropDownCategoryBackgroundColor.
                */
                getDropDownCategoryBackgroundColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
                * Processes the current dropDownCategoryBackgroundColor attribute value.
                */
                protected __processDropDownCategoryBackgroundColor(): void;
                /**
                 * Sets the font size and calls the associated process function (processDropDownCategoryFontSize).
                 * @param valueNew The new value for dropDownCategoryFontSize.
                 */
                setDropDownCategoryFontSize(valueNew: number | null): void;
                /**
                * Returns the current value of DropDownCategoryFontSize.
                * @returns The current value of DropDownCategoryFontSize.
                */
                getDropDownCategoryFontSize(): number | undefined;
                /**
                * Processes the current DropDownCategoryFontSize attribute value.
                */
                protected __processDropDownCategoryFontSize(): void;
                /**
                * Sets the font size unit and calls the associated process function (processDropDownCategoryFontSizeUnit).
                * @param valueNew The new value for DropDownCategoryFontSizeUnit.
                */
                setDropDownCategoryFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                * Returns the current value of DropDownCategoryFontSizeUnit.
                * @returns The current value of DropDownCategoryFontSizeUnit.
                */
                getDropDownCategoryFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                * Processes the current DropDownCategoryFontSizeUnit attribute value.
                */
                protected __processDropDownCategoryFontSizeUnit(): void;
                /**
                * Sets the font family and calls the associated process function (processDropDownCategoryFontFamily).
                * @param valueNew The new value for DropDownCategoryFontFamily.
                */
                setDropDownCategoryFontFamily(valueNew: FontFamily | null): void;
                /**
                * Returns the current value of DropDownCategoryFontFamily.
                * @returns The current value of DropDownCategoryFontFamily.
                */
                getDropDownCategoryFontFamily(): string | null | undefined;
                /**
                * Processes the current DropDownCategoryFontFamily attribute value.
                */
                protected __processDropDownCategoryFontFamily(): void;
                /**
                * Sets the font style and calls the associated process function (processDropDownCategoryFontStyle).
                * @param valueNew The new value for DropDownCategoryFontStyle.
                */
                setDropDownCategoryFontStyle(valueNew: FontStyle | null): void;
                /**
                * Returns the current value of DropDownCategoryFontStyle.
                * @returns The current value of DropDownCategoryFontStyle.
                */
                getDropDownCategoryFontStyle(): "Normal" | "Italic" | "Oblique" | "Auto" | undefined;
                /**
                * Processes the current DropDownCategoryFontStyle attribute value.
                */
                protected __processDropDownCategoryFontStyle(): void;
                /**
                * Sets the font weight and calls the associated process function (processDropDownCategoryFontWeight).
                * @param valueNew The new value for DropDownCategoryFontWeight.
                */
                setDropDownCategoryFontWeight(valueNew: FontWeight | null): void;
                /**
                * Returns the current value of DropDownCategoryFontWeight.
                * @returns The current value of DropDownCategoryFontWeight.
                */
                getDropDownCategoryFontWeight(): "Normal" | "Auto" | "Bold" | undefined;
                /**
                * Processes the current DropDownCategoryFontWeight attribute value.
                */
                protected __processDropDownCategoryFontWeight(): void;
                /**
                * Sets the DropDownCategoryHorizontalAlignment value and calls the associated process function (processDropDownCategoryHorizontalAlignment).
                * @param valueNew The new value for DropDownCategoryHorizontalAlignment.
                */
                setDropDownCategoryHorizontalAlignment(valueNew: HorizontalAlignment | null): void;
                /**
                * Returns the current value of horizontalDropDownCategoryAligment.
                * @returns The current value of horizontalDropDownCategoryAligment.
                */
                getDropDownCategoryHorizontalAlignment(): "Left" | "Center" | "Right" | undefined;
                /**
                * Processes the current DropDownCategoryHorizontalAlignment attribute value.
                */
                protected __processDropDownCategoryHorizontalAlignment(): void;
                /**
                * Sets the DropDownCategoryVerticalAlignment value and calls the associated process function (processDropDownCategoryVerticalAlignment).
                * @param valueNew The new value for DropDownCategoryVerticalAlignment.
                */
                setDropDownCategoryVerticalAlignment(valueNew: VerticalAlignment | null): void;
                /**
                * Returns the current value of DropDownCategoryVerticalAlignment.
                * @returns The current value of DropDownCategoryVerticalAlignment.
                */
                getDropDownCategoryVerticalAlignment(): "Center" | "Top" | "Bottom" | undefined;
                /**
                * Processes the current DropDownCategoryVerticalAlignment attribute value.
                */
                protected __processDropDownCategoryVerticalAlignment(): void;
            }
            module TcHmiCombobox {
                interface ListItem {
                    id?: number | null;
                    text: string | number | boolean | null;
                    value?: any | null;
                    category?: string;
                }
                /**
                'Classic' | 'Mobile'
                 */
                enum DropDownStyle {
                    Classic = 0,
                    Mobile = 1
                }
            }
        }
    }
}
