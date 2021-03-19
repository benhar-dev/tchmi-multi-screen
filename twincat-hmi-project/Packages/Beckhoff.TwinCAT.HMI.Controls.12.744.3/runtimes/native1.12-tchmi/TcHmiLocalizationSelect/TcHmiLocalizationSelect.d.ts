declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiLocalizationSelect extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** Reference to the root dom element of the current control template */
                protected __elementTemplateRoot: HTMLElement;
                /** The combobox instance used in this control.*/
                protected __combobox: TcHmiCombobox;
                /** Internal reference to the attribute "data-tchmi-localization-mapping" */
                protected __localizationMapping: TcHmiLocalizationSelect.ListItem[] | null | undefined;
                /** Localization change event destroy function */
                protected __localizationChangeEventDestroyFunction: DestroyFunction | null;
                /** Config changed event destroy function */
                protected __onLocalizationDefinitionChangedDestroyFunction: DestroyFunction | null;
                /** User interaction finished event destroy function */
                protected __userInteractionFinishedEventDestroyFunction: DestroyFunction | null;
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
                 * Fill SrcData with the registered localizations.
                 */
                protected __displayLocalizations(): void;
                /**
                 * Set the selected ListItem to the active localization.
                 */
                protected __selectActiveLocalization(): void;
                /**
                 * Returns an event handler for the onLocaleChanged event.
                 */
                protected __onLocalizationChanged(): (event: EventProvider.Event) => void;
                /**
                 * Returns an event handler for the onUserInteractionFinished event.
                 */
                protected __onUserInteractionFinished(): (event: EventProvider.Event) => void;
                /**************** GETTER & SETTER *********************/
                /**
                 * Sets the localizationMappting value and calls the associated process function (__processLocalizationMapping).
                 * @param valueNew
                 */
                setLocalizationMapping(valueNew: TcHmiLocalizationSelect.ListItem[] | null): void;
                /**
                 * The watch callback for the localizationMapping object resolver.
                 */
                protected __onResolverForLocalizationMappingWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiLocalizationSelect.ListItem[]>) => void;
                /**
                * Returns the current value of the member variable localizationMapping.
                */
                getLocalizationMapping(): TcHmiLocalizationSelect.ListItem[] | null | undefined;
                protected __processLocalizationMapping(): void;
                /************** GETTER & SETTER COMBOBOX *****************/
                /** Just pass the attributes through to the combobox */
                /**
                 * Sets the background value and calls the associated process function (processBackground).
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                setBackgroundColor(valueNew: Color | null): void;
                /**
                * Returns the current background value.
                * @preserve (Part of the public API)
                */
                getBackgroundColor(): SolidColor | LinearGradientColor | null | undefined;
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
                * Sets the contentPadding value and calls the associated process function (processContentPadding) after it.
                * @param valueNew The new value for the contentPadding attribute as json string.
                */
                setContentPadding(valueNew: TcHmi.FourSidedCss | null): void;
                /**
                * Returns the current contentPadding value.
                * @returns The current value of the contentPadding member variable as json in string format.
                */
                getContentPadding(): FourSidedCss | null | undefined;
                /**
                * Sets the text color and calls the associated process function (processDropDownHighlightColor).
                * @param The new value for dropDownHighlightColor.
                */
                setDropDownHighlightColor(valueNew: SolidColor | null): void;
                /**
                * Returns the current value of dropDownHighlightColor.
                * @returns The current value of dropDownHighlightColor.
                */
                getDropDownHighlightColor(): SolidColor | null | undefined;
                /**
                * Sets the text color and calls the associated process function (processDropDownHighlightTextColor).
                * @param valueNew The new value for dropDownHighlightTextColor.
                */
                setDropDownHighlightTextColor(valueNew: SolidColor | null): void;
                /**
                * Returns the current value of dropDownHighlightTextColor.
                * @returns The current value of dropDownHighlightTextColor.
                */
                getDropDownHighlightTextColor(): SolidColor | null | undefined;
                /**
                * Sets the toggle button background color and calls the associated process function (processDropDownToggleButtonBackgroundColor).
                * @param valueNew The new value for dropDownToggleButtonBackgroundColor.
                */
                setDropDownToggleButtonBackgroundColor(valueNew: Color | null): void;
                /**
                * Returns the current value of dropDownToggleButtonBackgroundColor.
                * @returns The current value of dropDownToggleButtonBackgroundColor.
                */
                getDropDownToggleButtonBackgroundColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
                * Sets the toggle button arrow color and calls the associated process function (processDropDownToggleButtonArrowColor).
                * @param valueNew The new value for dropDownToggleButtonArrowColor.
                */
                setDropDownToggleButtonArrowColor(valueNew: SolidColor | null): void;
                /**
                * Returns the current value of dropDownToggleButtonArrowColor.
                * @returns The current value of dropDownToggleButtonArrowColor.
                */
                getDropDownToggleButtonArrowColor(): SolidColor | null | undefined;
                /**
                * Sets the text color and calls the associated process function (processTextColor).
                * @param valueNew The new value for textColor.
                */
                setTextColor(valueNew: SolidColor | null): void;
                /**
                * Returns the current value of textColor.
                * @returns The current value of textColor.
                */
                getTextColor(): SolidColor | null | undefined;
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
                * Sets the DropDown color and calls the associated process function (processDropDownTextColor).
                * @param valueNew The new value for DropDownTextColor.
                */
                setDropDownTextColor(valueNew: SolidColor | null): void;
                /**
                * Returns the current value of DropDownTextColor.
                * @returns The current value of DropDownTextColor.
                */
                getDropDownTextColor(): SolidColor | null | undefined;
                /**
                * Sets the toggle button background color and calls the associated process function (processDropDownBackgroundColor).
                * @param valueNew The new value for dropDownBackgroundColor.
                */
                setDropDownBackgroundColor(valueNew: Color | null): void;
                /**
                * Returns the current value of dropDownBackgroundColor.
                * @returns The current value of dropDownBackgroundColor.
                */
                getDropDownBackgroundColor(): SolidColor | LinearGradientColor | null | undefined;
            }
            module TcHmiLocalizationSelect {
                interface ListItem {
                    /** A Localization code like 'de-DE' */
                    code: string;
                    /** Text to show for the defined localization code */
                    text: string;
                }
            }
        }
    }
}
