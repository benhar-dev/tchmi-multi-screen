declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiTachometer extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** Reference to the root dom element of the current control template as jquery object. */
                protected __elementTemplateRoot: HTMLElement;
                /** Reference to the underlying html svg element as jquery object. */
                protected __elementSvg: HTMLElement;
                /** Reference to the background circle. */
                protected __elementBackgroundCircle: SVGElement;
                /** Refernece to the main tick container */
                protected __elementMainTickContainer: HTMLElement;
                /** Reference to the sub tick container */
                protected __elementSubTickContainer: HTMLElement;
                /** Reference to the label container */
                protected __elementLabelContainer: HTMLElement;
                /** Reference to the range container */
                protected __elementRangeContainer: HTMLElement;
                /** Reference to the value text element */
                protected __elementValueText: SVGElement;
                /** Reference to the unit text element */
                protected __elementUnitText: SVGElement;
                /** Reference to the edit needle group */
                protected __elementNeedle: HTMLElement;
                protected __elementNeedlePointer: HTMLElement;
                protected __elementNeedleBase: HTMLElement;
                /** Internal reference to the attribute 'data-tchmi-start-position' */
                protected __startPosition: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-end-position' */
                protected __endPosition: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-min-value' */
                protected __minValue: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-max-value' */
                protected __maxValue: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-step' */
                protected __step: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-range' */
                protected __range: TcHmiTachometer.Range[] | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-label' */
                protected __showLabels: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-value-text' */
                protected __showValueText: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-ticks' */
                protected __showTicks: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-label-position' */
                protected __labelPosition: 'Inside' | 'Outside' | undefined;
                /** Internal reference to the attribute 'data-tchmi-tick-definition' */
                protected __tickDefinition: TcHmiTachometer.TickDefinition | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-label-range' */
                protected __labelRange: number | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-sub-tick-position' */
                protected __subTickPosition: 'Inside' | 'Outside' | undefined;
                /** Internal reference to the attribute 'data-tchmi-value' */
                protected __value: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-value-format' */
                protected __valueFormat: TcHmi.IFunction | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-unit' */
                protected __unit: string | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-label-font-size'
                */
                protected __labelFontSize: number | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-label-font-size-unit'
                */
                protected __labelFontSizeUnit: FontSizeUnit | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-label-font-family'
                */
                protected __labelFontFamily: FontFamily | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-label-font-style'
                */
                protected __labelFontStyle: FontStyle | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-label-font-style'
                */
                protected __labelFontWeight: FontWeight | undefined;
                /** Internal reference to the attribute 'data-tchmi-label-format' */
                protected __labelFormat: TcHmi.IFunction | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-value-font-size'
                */
                protected __valueFontSize: number | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-value-font-size-unit'
                */
                protected __valueFontSizeUnit: FontSizeUnit | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-value-font-family'
                */
                protected __valueFontFamily: FontFamily | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-value-font-style'
                */
                protected __valueFontStyle: FontStyle | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-value-font-style'
                */
                protected __valueFontWeight: FontWeight | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-unit-font-size'
                */
                protected __unitFontSize: number | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-unit-font-size-unit'
                */
                protected __unitFontSizeUnit: FontSizeUnit | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-unit-font-family'
                */
                protected __unitFontFamily: FontFamily | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-unit-font-style'
                */
                protected __unitFontStyle: FontStyle | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-unit-font-style'
                */
                protected __unitFontWeight: FontWeight | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-value-color'
                */
                protected __valueColor: TcHmi.SolidColor | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-label-color'
                */
                protected __labelColor: TcHmi.SolidColor | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-unit-color'
                */
                protected __unitColor: TcHmi.SolidColor | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-tick-color'
                */
                protected __tickColor: TcHmi.SolidColor | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-gauge-background-color'
                */
                protected __gaugeBackgroundColor: TcHmi.Color | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-needle-color' */
                protected __needleColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-start-position' */
                protected __needleLength: number | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-base-animation-time'
                */
                protected __baseAnimationTime: number | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-gauge-alignment'
                */
                protected __gaugeAlignment: TcHmiTachometer.GaugeAlignment | null | undefined;
                /** Identifier of currently running requestAnimationFrame */
                protected __requestAnimatonFrameID: number;
                /** Saved old value of value */
                protected __oldValue: number;
                /** Stores proportions for gauge layout
                Is only allowed to be updated by __updateLayout
                 */
                protected __needleConfig: string;
                /** Stores proportions for gauge layout
                Is only allowed to be updated by __updateLayout
                 */
                protected __proportions: {
                    mainTickLength: number;
                    subTickLength: number;
                    rangeThickness: number;
                    labelRadius: number;
                    tickRadius: number;
                    rangeRadius: number;
                    outerRadius: number;
                    startAngle: number;
                    endAngle: number;
                };
                protected __labels: {
                    element: SVGTextElement;
                    angle: number;
                }[];
                /**
                 * Stores a reference to the function called when the resize event is raised
                 */
                protected __resizedEventDestroyEvent: DestroyFunction | null;
                protected __themeDataLoadedEventDestroyEvent: DestroyFunction | null;
                /** Normalized internal value */
                protected __internalValue: number;
                protected __internalMinValue: number;
                protected __internalMaxValue: number;
                protected __asyncWorkData: TcHmiTachometer.IControlSpecificData;
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
                * Is raised if the control are resized.
                */
                protected __onResized(): (evt: EventProvider.Event, ctrl: Controls.System.TcHmiControl) => void;
                /**
                 * Updates the needle position.
                 * @param value The value to update to.
                 */
                private __updateNeedle;
                /**
                 * Calculates the angle in degrees correspending to a given value. Angle increases clockwise, is always positive and can be directly used in CSS transforms.
                 * @param value The number to calculate the angle from.
                 */
                protected __calcAngleFromValue(value: number): number;
                /**
                 * Returns an object with proportion values.
                 */
                protected __getProportions(): {
                    mainTickLength: number;
                    subTickLength: number;
                    rangeThickness: number;
                    labelRadius: number;
                    tickRadius: number;
                    rangeRadius: number;
                    outerRadius: number;
                    startAngle: number;
                    endAngle: number;
                    needleBase: number;
                    needleLength: number;
                } | undefined;
                /**
                 * Relayouts the tachometer by calling all necessary processors and update __proportions cache.
                 */
                protected __updateLayout(): void;
                protected __doAsyncWork(): void;
                /**
                * Sets __internalMinValue/__inernalMaxValue based on __minValue/__maxValue;
                */
                protected __setInternalMinMaxValue(): void;
                /**
                * Sets the internal minValue, maxValue and value attribute for internal using.
                */
                protected __setInternalValues(): void;
                /**
                * Sets the value attribute.
                * @param valueNew The new value for value.
                */
                setValue(valueNew: number | null): void;
                /**
                * Returns the current value of value.
                * @returns The current value of value.
                */
                getValue(): number | undefined;
                /**
                * Processes the current value of attribute value.
                */
                protected __processValue(): void;
                /**
                * Sets the minValue attribute.
                * @param valueNew The new value for minValue.
                */
                setMinValue(valueNew: number | null): void;
                /**
                * Returns the current value of minValue.
                * @returns The current value of minValue.
                */
                getMinValue(): number | undefined;
                /**
                * Processes the current value of attribute minvalue.
                */
                protected __processMinValue(): void;
                /**
                * Sets the maxValue attribute.
                * @param valueNew The new value for maxValue.
                */
                setMaxValue(valueNew: number | null): void;
                /**
                * Returns the current value of maxValue.
                * @returns The current value of maxValue.
                */
                getMaxValue(): number | undefined;
                /**
                * Processes the current value of attribute maxvalue.
                */
                protected __processMaxValue(): void;
                /**
                * Sets the value of the valueFormat order attribute.
                * @param value The new valueFormat method.
                */
                setValueFormat(valueNew: TcHmi.IFunction | null): void;
                /**
                 * The watch callback for the valueFormat object resolver.
                 */
                protected __onResolverForValueFormatWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<IFunction>) => void;
                /**
                 * Gets the current valueFormat method.
                 * @returns the current valueFormat method.
                 */
                getValueFormat(): IFunction | null | undefined;
                /**
                 * Processes the current valueFormat method
                 */
                protected __processValueFormat(): void;
                /**
                 * Executes the current valueFormat function.
                 * @param first The first message to compare.
                 * @param second The second message to compare.
                 */
                private __executeValueFormatFunction;
                /**
                * Sets the range attribute.
                * @param valueNew The new value for range.
                */
                setRange(valueNew: TcHmiTachometer.Range[] | null): void;
                /**
                 * The watch callback for the range object resolver.
                 */
                protected __onResolverForRangeWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiTachometer.Range[]>) => void;
                /**
                * Returns the current value of range.
                * @returns The current value of range.
                */
                getRange(): TcHmiTachometer.Range[] | undefined;
                /**
                * Processes the current value of attribute range.
                */
                protected __processRange(layout?: boolean): void;
                /**
                * Sets the tickDefinition attribute.
                * @param valueNew The new value for tickDefinition.
                */
                setTickDefinition(valueNew: TcHmiTachometer.TickDefinition | null): void;
                /**
                 * The watch callback for the tickDefinition object resolver.
                 */
                protected __onResolverForTickDefinitionWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiTachometer.TickDefinition>) => void;
                /**
                * Returns the current value of tickDefinition.
                * @returns The current value of tickDefinition.
                */
                getTickDefinition(): TcHmiTachometer.TickDefinition | null | undefined;
                /**
                * Processes the current value of attribute tickdefinition.
                */
                protected __processTickDefinition(layout?: boolean): void;
                /**
                * Sets the startPosition attribute.
                * @param valueNew The new value for startPosition.
                */
                setStartPosition(valueNew: number | null): void;
                /**
                * Returns the current value of startPosition.
                * @returns The current value of startPosition.
                */
                getStartPosition(): number | undefined;
                /**
                * Processes the current value of attribute startPosition.
                */
                protected __processStartPosition(): void;
                /**
                * Sets the endPosition attribute.
                * @param valueNew The new value for endPosition.
                */
                setEndPosition(valueNew: number | null): void;
                /**
                * Returns the current value of endPosition.
                * @returns The current value of endPosition.
                */
                getEndPosition(): number | undefined;
                /**
                * Processes the current value of attribute endposition.
                */
                protected __processEndPosition(): void;
                /**
                * Sets the showLabels attribute.
                * @param valueNew The new value for showLabels.
                */
                setShowLabels(valueNew: boolean | null): void;
                /**
                * Returns the current value of showLabels.
                * @returns The current value of showLabels.
                */
                getShowLabels(): boolean | undefined;
                /**
                * Processes the current value of attribute showlabels.
                */
                protected __processShowLabels(layout?: boolean): void;
                /**
                * Sets the value of the labelFormat order attribute.
                * @param value The new labelFormat method.
                */
                setLabelFormat(valueNew: TcHmi.IFunction | null): void;
                /**
                 * The watch callback for the labelFormat object resolver.
                 */
                protected __onResolverForLabelFormatWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<IFunction>) => void;
                /**
                 * Gets the current labelFormat method.
                 * @returns the current labelFormat method.
                 */
                getLabelFormat(): IFunction | null | undefined;
                /**
                 * Processes the current labelFormat method
                 */
                protected __processLabelFormat(): void;
                /**
                 * Executes the current labelFormat function.
                 * @param first The first message to compare.
                 * @param second The second message to compare.
                 */
                private __executeLabelFormatFunction;
                /**
                * Sets the showValueText attribute.
                * @param valueNew The new value for showValueText.
                */
                setShowValueText(valueNew: boolean | null): void;
                /**
                * Returns the current value of showValueText.
                * @returns The current value of showValueText.
                */
                getShowValueText(): boolean | undefined;
                /**
                * Processes the current value of attribute showValueText.
                */
                protected __processShowValueText(): void;
                /**
                * Sets the showTicks attribute.
                * @param valueNew The new value for showTicks.
                */
                setShowTicks(valueNew: boolean | null): void;
                /**
                * Returns the current value of showTicks.
                * @returns The current value of showTicks.
                */
                getShowTicks(): boolean | undefined;
                /**
                * Processes the current value of attribute showTicks.
                */
                protected __processShowTicks(layout?: boolean): void;
                /**
                * Sets the labelPosition attribute.
                * @param valueNew The new value for labelPosition.
                *                                  Possible values: Inside, Outside
                */
                setLabelPosition(valueNew: 'Inside' | 'Outside' | null): void;
                /**
                * Returns the current value of labelPosition.
                * @returns The current value of labelPosition.
                *                                  Possible values: Inside, Outside
                */
                getLabelPosition(): "Inside" | "Outside" | undefined;
                /**
                * Processes the current value of attribute labelposition.
                */
                protected __processLabelPosition(): void;
                /**
                * Sets the subTickPosition attribute.
                * @param valueNew The new value for labelPosition.
                *                                  Possible values: Inside, Outside
                */
                setSubTickPosition(valueNew: 'Inside' | 'Outside' | null): void;
                /**
                * Returns the current value of subTickPosition.
                * @returns The current value of subTickPosition.
                *                                  Possible values: Inside, Outside
                */
                getSubTickPosition(): "Inside" | "Outside" | undefined;
                /**
                * Processes the current value of attribute subtickposition.
                */
                protected __processSubTickPosition(): void;
                /**
                * Sets the labelRange attribute.
                * @param valueNew The new value for labelRange.
                */
                setLabelRange(valueNew: number | null): void;
                /**
                * Returns the current value of labelRange.
                * @returns The current value of labelRange.
                */
                getLabelRange(): number | null | undefined;
                /**
                * Processes the current value of attribute labelrange.
                */
                protected __processLabelRange(): void;
                /**
                * Sets the ValueColor attribute.
                * @param valueNew The new value for ValueColor.
                */
                setValueColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the valueColor object resolver.
                 */
                protected __onResolverForValueColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of valueColor.
                * @returns The current value of valueColor.
                */
                getValueColor(): SolidColor | null | undefined;
                /**
                * Processes the current value of attribute valueColor.
                */
                protected __processValueColor(): void;
                /**
                * Sets the labelColor attribute.
                * @function
                * @param valueNew The new value for labelColor.
                */
                setLabelColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the labelColor object resolver.
                 */
                protected __onResolverForLabelColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of labelColor.
                * @returns The current value of labelColor.
                */
                getLabelColor(): SolidColor | null | undefined;
                /**
                * Processes the current value of attribute labelColor.
                */
                protected __processLabelColor(): void;
                /**
                * Sets the unitColor attribute.
                * @param valueNew The new value for unitColor.
                */
                setUnitColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the unitColor object resolver.
                 */
                protected __onResolverForUnitColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of unitColor.
                * @returns The current value of unitColor.
                */
                getUnitColor(): SolidColor | null | undefined;
                /**
                * Processes the current value of attribute unitColor.
                */
                protected __processUnitColor(): void;
                /**
                * Sets the tickColor attribute.
                * @param valueNew The new value for tickColor.
                */
                setTickColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the tickColor object resolver.
                 */
                protected __onResolverForTickColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of tickColor.
                * @returns The current value of tickColor.
                */
                getTickColor(): SolidColor | null | undefined;
                /**
                * Processes the current value of attribute tickColor.
                */
                protected __processTickColor(): void;
                /**
                * Sets the gaugeBackgroundColor attribute.
                * @param valueNew The new value for gaugeBackgroundColor.
                */
                setGaugeBackgroundColor(valueNew: Color | null): void;
                /**
                 * The watch callback for the gaugeBackgroundColor object resolver.
                 */
                protected __onResolverForGaugeBackgroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
                /**
                * Returns the current value of gaugeBackgroundColor.
                * @returns The current value of gaugeBackgroundColor.
                */
                getGaugeBackgroundColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
                * Processes the current value of attribute gaugeBackgroundColor.
                */
                protected __processGaugeBackgroundColor(): void;
                /**
                * Sets the needle color attribute.
                * @param valueNew The new value for NeedleColor.
                */
                setNeedleColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the needleColor object resolver.
                 */
                protected __onResolverForNeedleColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of NeedleColor.
                * @returns The current value of NeedleColor.
                */
                getNeedleColor(): SolidColor | null | undefined;
                /**
                * Processes the current value of attribute NeedleColor.
                */
                protected __processNeedleColor(): void;
                /**
                * Sets the unit attribute.
                * @param valueNew The new value for Unit.
                */
                setUnit(valueNew: string | null): void;
                /**
                * Returns the current value of Unit.
                * @returns The current value of Unit.
                */
                getUnit(): string | undefined;
                /**
                * Processes the current value of attribute Unit.
                */
                protected __processUnit(): void;
                /**
                * Sets the font size attribute.
                * @param valueNew The new value for labelFontSize.
                */
                setLabelFontSize(valueNew: number | null): void;
                /**
                * Returns the current value of labelFontSize.
                * @returns The current value of labelFontSize.
                */
                getLabelFontSize(): number | undefined;
                /**
                * Processes the current value of attribute labelfontsize.
                */
                protected __processLabelFontSize(): void;
                /**
                * Sets the font size unit attribute.
                * @param valueNew The new value for labelFontSizeUnit.
                *                                                Possible Values: px, %
                */
                setLabelFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                * Returns the current value of labelFontSizeUnit.
                * @returns The current value of labelFontSizeUnit.
                */
                getLabelFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                * Processes the current value of attribute labelfontsizeunit.
                */
                protected __processLabelFontSizeUnit(): void;
                /**
                * Sets the font family attribute.
                * @param valueNew The new value for labelFontFamily.
                */
                setLabelFontFamily(valueNew: FontFamily | null): void;
                /**
                * Returns the current value of labelFontFamily.
                * @returns The current value of labelFontFamily.
                */
                getLabelFontFamily(): string | null | undefined;
                /**
                * Processes the current value of attribute labelfontfamily.
                */
                protected __processLabelFontFamily(): void;
                /**
                * Sets the font style attribute.
                * @param valueNew The new value for labelFontStyle.
                */
                setLabelFontStyle(valueNew: FontStyle | null): void;
                /**
                * Returns the current value of labelFontStyle.
                * @returns The current value of labelFontStyle.
                */
                getLabelFontStyle(): "Normal" | "Italic" | "Oblique" | "Auto" | undefined;
                /**
                * Processes the current value of attribute labelfontstyle.
                */
                protected __processLabelFontStyle(): void;
                /**
                * Sets the font weight attribute.
                * @param valueNew The new value for labelFontWeight.
                */
                setLabelFontWeight(valueNew: FontWeight | null): void;
                /**
                * Returns the current value of labelFontWeight.
                * @returns The current value of labelFontWeight.
                */
                getLabelFontWeight(): "Normal" | "Auto" | "Bold" | undefined;
                /**
                * Processes the current value of attribute labelfontweight.
                */
                protected __processLabelFontWeight(): void;
                /**
                * Sets the font size attribute.
                * @param valueNew The new value for ValueFontSize.
                */
                setValueFontSize(valueNew: number | null): void;
                /**
                * Returns the current value of ValueFontSize.
                * @returns The current value of ValueFontSize.
                */
                getValueFontSize(): number | undefined;
                /**
                * Processes the current value of attribute Valuefontsize.
                */
                protected __processValueFontSize(): void;
                /**
                * Sets the font size unit attribute.
                * @param valueNew The new value for ValueFontSizeUnit.
                *                                                Possible Values: px, %
                */
                setValueFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                * Returns the current value of ValueFontSizeUnit.
                * @returns The current value of ValueFontSizeUnit.
                */
                getValueFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                * Processes the current value of attribute Valuefontsizeunit.
                */
                protected __processValueFontSizeUnit(): void;
                /**
                * Sets the font family attribute.
                * @param valueNew The new value for ValueFontFamily.
                */
                setValueFontFamily(valueNew: FontFamily | null): void;
                /**
                * Returns the current value of ValueFontFamily.
                * @returns The current value of ValueFontFamily.
                */
                getValueFontFamily(): string | null | undefined;
                /**
                * Processes the current value of attribute Valuefontfamily.
                */
                protected __processValueFontFamily(): void;
                /**
                * Sets the font style attribute.
                * @param valueNew The new value for ValueFontStyle.
                */
                setValueFontStyle(valueNew: FontStyle | null): void;
                /**
                * Returns the current value of ValueFontStyle.
                * @returns The current value of ValueFontStyle.
                */
                getValueFontStyle(): "Normal" | "Italic" | "Oblique" | "Auto" | undefined;
                /**
                * Processes the current value of attribute Valuefontstyle.
                */
                protected __processValueFontStyle(): void;
                /**
                * Sets the font weight attribute.
                * @param valueNew The new value for ValueFontWeight.
                */
                setValueFontWeight(valueNew: FontWeight | null): void;
                /**
                * Returns the current value of ValueFontWeight.
                * @returns The current value of ValueFontWeight.
                */
                getValueFontWeight(): "Normal" | "Auto" | "Bold" | undefined;
                /**
                * Processes the current value of attribute Valuefontweight.
                */
                protected __processValueFontWeight(): void;
                /**
                * Sets the font size attribute.
                * @param valueNew The new Unit for UnitFontSize.
                */
                setUnitFontSize(valueNew: number | null): void;
                /**
                * Returns the current Unit of UnitFontSize.
                * @returns The current Unit of UnitFontSize.
                */
                getUnitFontSize(): number | undefined;
                /**
                * Processes the current Unit of attribute Unitfontsize.
                */
                protected __processUnitFontSize(): void;
                /**
                * Sets the font size unit attribute.
                * @param valueNew The new Unit for UnitFontSizeUnit.
                *                                                Possible Units: px, %
                */
                setUnitFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                * Returns the current Unit of UnitFontSizeUnit.
                * @returns The current Unit of UnitFontSizeUnit.
                */
                getUnitFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                * Processes the current Unit of attribute Unitfontsizeunit.
                */
                protected __processUnitFontSizeUnit(): void;
                /**
                * Sets the font family attribute.
                * @param valueNew The new Unit for UnitFontFamily.
                */
                setUnitFontFamily(valueNew: FontFamily | null): void;
                /**
                * Returns the current Unit of UnitFontFamily.
                * @returns The current Unit of UnitFontFamily.
                */
                getUnitFontFamily(): string | null | undefined;
                /**
                * Processes the current Unit of attribute Unitfontfamily.
                */
                protected __processUnitFontFamily(): void;
                /**
                * Sets the font style attribute.
                * @param valueNew The new Unit for UnitFontStyle.
                */
                setUnitFontStyle(valueNew: FontStyle | null): void;
                /**
                * Returns the current Unit of UnitFontStyle.
                * @returns The current Unit of UnitFontStyle.
                */
                getUnitFontStyle(): "Normal" | "Italic" | "Oblique" | "Auto" | undefined;
                /**
                * Processes the current Unit of attribute Unitfontstyle.
                */
                protected __processUnitFontStyle(): void;
                /**
                * Sets the font weight attribute.
                * @param valueNew The new Unit for UnitFontWeight.
                */
                setUnitFontWeight(valueNew: FontWeight | null): void;
                /**
                * Returns the current Unit of UnitFontWeight.
                * @returns The current Unit of UnitFontWeight.
                */
                getUnitFontWeight(): "Normal" | "Auto" | "Bold" | undefined;
                /**
                * Processes the current Unit of attribute Unitfontweight.
                */
                protected __processUnitFontWeight(): void;
                /**
                * Sets the baseAnimationTime attribute.
                * @param valueNew The new value for baseAnimationTime.
                */
                setBaseAnimationTime(valueNew: number | null): void;
                /**
                * Returns the current value of baseAnimationTime.
                * @returns The current value of baseAnimationTime.
                */
                getBaseAnimationTime(): number | undefined;
                /**
                * Sets the needle length attribute.
                * @param valueNew The new value for needleLength.
                */
                setNeedleLength(valueNew: number | null): void;
                /**
                * Returns the current value of needleLength.
                * @returns The current value of needleLength.
                */
                getNeedleLength(): number | undefined;
                /**
                * Processes the current value of attribute needleLength.
                */
                protected __processNeedleLength(): void;
                /**
                 * Sets the gaugeAlignment attribute to a new value.
                 * @param valueNew The new value for the gaugeAlignment attribute.
                 */
                setGaugeAlignment(valueNew: TcHmiTachometer.GaugeAlignment | null): void;
                /**
                 * Returns the current  value of the gaugeAlignment attribute
                 */
                getGaugeAlignment(): "Start" | "Center" | "End" | null | undefined;
                /**
                 * Processes the current value of the gaugeAlignment attribute.
                 */
                protected __processGaugeAlignment(): void;
            }
            module TcHmiTachometer {
                interface IControlSpecificData extends System.TcHmiControl.IControlSpecificData {
                    'Beckhoff.TcHmiTachometer.triggerLayout': boolean;
                }
                interface Range {
                    color: TcHmi.SolidColor;
                    start: number;
                    end: number;
                }
                interface TickDefinition {
                    mainTickRange: number;
                    subTickRange: number;
                }
                type GaugeAlignment = 'Start' | 'Center' | 'End';
            }
        }
    }
}
