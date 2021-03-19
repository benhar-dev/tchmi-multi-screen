declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiRadialGauge extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** Reference to the root dom element of the current control template as jquery object. */
                protected __elementTemplateRoot: JQuery;
                /** Reference to the underlying html svg element as jquery object. */
                protected __elementSvg: JQuery;
                /** Reference to the background circle. */
                protected __elementBackgroundCircle: JQuery;
                /** Refernece to the main tick container */
                protected __elementMainTickContainer: JQuery;
                /** Reference to the sub tick container */
                protected __elementSubTickContainer: JQuery;
                /** Reference to the label container */
                protected __elementLabelContainer: JQuery;
                /** Reference to the range container */
                protected __elementRangeContainer: JQuery;
                /** Referenve to the progress bar background */
                protected __elementProgressBackgroundCircle: JQuery;
                /** Reference to the progress bar foreground */
                protected __elementProgressForegroundCircle: JQuery;
                /** Reference to the value text element */
                protected __elementValueText: JQuery;
                /** Reference to the unit text element */
                protected __elementUnitText: JQuery;
                /** Reference to the edit knob group */
                protected __elementKnob: JQuery;
                /** Reference to the knob SVGGElement. */
                protected __elementKnobG: SVGGElement;
                protected __knobXhr: XMLHttpRequest | undefined;
                protected __knobXhrUrl: string | undefined;
                protected __knobSvgString: string | null;
                /** Reference to the setPoint group */
                protected __elementSetPointContainer: SVGElement | undefined;
                /** Reference to the setPoint group */
                protected __elementSetPoint: SVGElement | null | undefined;
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
                protected __range: TcHmiRadialGauge.Range[] | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-label' */
                protected __showLabels: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-start-from-zero' */
                protected __startFromZero: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-editable' */
                protected __editable: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-click-anywhere-to-edit' */
                protected __clickAnywhereToEdit: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-value-text' */
                protected __showValueText: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-ticks' */
                protected __showTicks: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-label-position' */
                protected __labelPosition: 'Inside' | 'Outside' | undefined;
                /** Internal reference to the attribute 'data-tchmi-tick-definition' */
                protected __tickDefinition: TcHmiRadialGauge.TickDefinition | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-label-range' */
                protected __labelRange: number | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-sub-tick-position' */
                protected __subTickPosition: 'Inside' | 'Outside' | undefined;
                /** Internal reference to the attribute 'data-tchmi-value' */
                protected __value: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-set-point' */
                protected __setPoint: number | undefined;
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
                * Internal reference to the attribute 'data-tchmi-progress-foreground-color'
                */
                protected __progressForegroundColor: TcHmi.SolidColor | null | undefined;
                /**
               * Internal reference to the attribute 'data-tchmi-progress-background-color'
               */
                protected __progressBackgroundColor: TcHmi.SolidColor | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-gauge-background-color'
                */
                protected __gaugeBackgroundColor: TcHmi.Color | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-knob-color' */
                protected __knobColor: TcHmi.Color | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-knob-arrows-color' */
                protected __knobArrowsColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-set-point-marker-color' */
                protected __setPointMarkerColor: TcHmi.SolidColor | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-base-animation-time'
                */
                protected __baseAnimationTime: number | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-gauge-alignment'
                */
                protected __gaugeAlignment: TcHmiRadialGauge.GaugeAlignment | null | undefined;
                /** Saved old value of value */
                protected __oldValue: number;
                /** Saved old value of setPoint */
                protected __oldSetPoint: number | undefined;
                /** Identifier of currently running requestAnimationFrame */
                protected __requestAnimatonFrameID: number;
                /** Stores information about drag operations */
                protected __draggingInfo: {
                    isDragging: boolean;
                    offset: number;
                    touchIdentifier: number | null;
                    originalValue: number | null;
                };
                protected __knobConfig: TcHmiRadialGauge.KnobConfig;
                /** Stores proportions for gauge layout
                Is only allowed to be updated by __updateLayout
                 */
                protected __proportions: {
                    mainTickLength: number;
                    subTickLength: number;
                    rangeThickness: number;
                    valueThickness: number;
                    labelRadius: number;
                    tickRadius: number;
                    valueRadius: number;
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
                protected __internalSetPoint: number | undefined;
                protected __asyncWorkData: TcHmiRadialGauge.IControlSpecificData;
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
                protected __fetchKnob: () => void;
                /**
                * Resolves a LinearGradientColor object to two string representations for use in a svg fill and defs property.
                * Has to be called with a valid LinearGradientColor. Use isLinearGradientColor to check
                * @param gradientColor The colorObject to resolve.
                */
                private __resolveLinearGradientColorAsSvgStrings;
                /**
                 * Compiles the knob SVG String and appends the svg to the DOM
                 */
                protected __updateKnobColors(): void;
                /**
                 * Returns an event handler for the mousedown event.
                 */
                protected __onMouseDownKnob: (event: MouseEvent) => void;
                /**
                 * Returns an event handler for the mousedown event.
                 */
                protected __onMouseDownControl: (event: MouseEvent) => void;
                /**
                * Check if the angle is between to angles.
                * @param angleToCheck Angle to check.
                * @param angle1 First angle.
                * @param angle2 Second angle.
                */
                private __checkAngleBetweenAngles;
                /**
                 * Returns an event handler for the mousemove event.
                 */
                protected __onMouseMove: (event: MouseEvent) => void;
                /**
                 * Returns an event hanlder for the mouseup event.
                 */
                protected __onMouseUp: (event: MouseEvent) => void;
                /**
                 * Returns an event hanlder for the touchstart event.
                 */
                protected __onTouchStartKnob: (event: TouchEvent) => void;
                /**
                 * Returns an event hanlder for the touchstart event.
                 */
                protected __onTouchStartControl: (event: TouchEvent) => void;
                /**
                 * Returns an event hanlder for the touchmove event.
                 */
                protected __onTouchMove: (event: TouchEvent) => void;
                /**
                 * Returns an event hanlder for the touchend event.
                 */
                protected __onTouchEnd: (event: TouchEvent) => void;
                /**
                 * Returns an event hanlder for the touchcancel event.
                 */
                protected __onTouchCancel: (event: TouchEvent) => void;
                /**
                 * Calculates the value relating to the screen coordinates of a mouse or touch event.
                 * @param x Client x coordinate.
                 * @param y Client y coordinate.
                 */
                protected __calcValueFromEventCoords(x: number, y: number): number;
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
                    valueThickness: number;
                    labelRadius: number;
                    tickRadius: number;
                    valueRadius: number;
                    rangeRadius: number;
                    outerRadius: number;
                    startAngle: number;
                    endAngle: number;
                } | undefined;
                /**
                 * Relayouts the gauge by calling all necessary processors and update __proportions cache.
                 */
                protected __updateLayout(): void;
                protected __doAsyncWork(): void;
                /**
                 * Draws the progress circles.
                 * @param layout Whether to call updateLayout after drawing progress circles.
                 */
                protected __drawProgressCircles(layout?: boolean): void;
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
                * Sets the value attribute, regardless of user interaction.
                * @param valueNew The new value for value.
                */
                protected __setValue(valueNew: number | null): void;
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
                * Sets the setPoint attribute.
                * @param valueNew The new value for setPoint.
                */
                setSetPoint(valueNew: number | null): void;
                /**
                * Sets the setPoint attribute, regardless of user interaction.
                * @param valueNew The new value for setPoint.
                */
                protected __setSetPoint(valueNew: number | null): void;
                /**
                * Returns the current value of setPoint.
                * @returns The current value of setPoint.
                */
                getSetPoint(): number | undefined;
                /**
                * Processes the current referenceValue of attribute set point.
                */
                protected __processSetPoint(): void;
                /**
                 * create the the element that displays the set point
                 */
                protected __createSetPointElement(): void;
                /**
                 * remove the element that displays the setPoint
                 */
                protected __removeSetPointElement(): void;
                /**
                 * Updates the setPoint.
                 * @param value The value to update to.
                 */
                private __updateSetPoint;
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
                * Sets the step attribute.
                * @param valueNew The new value for step.
                */
                setStep(valueNew: number | null): void;
                /**
                * Returns the current value of step.
                * @returns The current value of step.
                */
                getStep(): number | undefined;
                /**
                * Processes the current value of attribute step.
                */
                protected __processStep(): void;
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
                setRange(valueNew: TcHmiRadialGauge.Range[] | null): void;
                /**
                 * The watch callback for the range object resolver.
                 */
                protected __onResolverForRangeWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiRadialGauge.Range[]>) => void;
                /**
                * Returns the current value of range.
                * @returns The current value of range.
                */
                getRange(): TcHmiRadialGauge.Range[] | undefined;
                /**
                * Processes the current value of attribute range.
                */
                protected __processRange(layout?: boolean): void;
                /**
                * Sets the tickDefinition attribute.
                * @param valueNew The new value for tickDefinition.
                */
                setTickDefinition(valueNew: TcHmiRadialGauge.TickDefinition | null): void;
                /**
                 * The watch callback for the tickDefinition object resolver.
                 */
                protected __onResolverForTickDefinitionWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiRadialGauge.TickDefinition>) => void;
                /**
                * Returns the current value of tickDefinition.
                * @returns The current value of tickDefinition.
                */
                getTickDefinition(): TcHmiRadialGauge.TickDefinition | null | undefined;
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
                * Sets the start-from-zero attribute.
                * @param valueNew The new value for start-from-zero.
                */
                setStartFromZero(valueNew: boolean | null): void;
                /**
                * Returns the current value of start-from-zero.
                * @returns The current value of start-from-zero.
                */
                getStartFromZero(): boolean | undefined;
                /**
                * Processes the current value of attribute start-from-zero.
                */
                protected __processStartFromZero(): void;
                /**
                * Sets the editable attribute.
                * @param valueNew The new value for editable.
                */
                setEditable(valueNew: boolean | null): void;
                /**
                * Returns the current value of editable.
                * @returns The current value of editable.
                */
                getEditable(): boolean | undefined;
                /**
                * Processes the current value of attribute editable.
                */
                protected __processEditable(layout?: boolean): void;
                /**
                 * Updates the knob position.
                 * @param value The value to update to.
                 */
                private __updateEditKnob;
                /**
                * Sets the clickAnywhereToEdit attribute.
                * @param valueNew The new value for clickAnywhereToEdit.
                */
                setClickAnywhereToEdit(valueNew: boolean | null): void;
                /**
                * Returns the current value of clickAnywhereToEdit.
                * @returns The current value of clickAnywhereToEdit.
                */
                getClickAnywhereToEdit(): boolean | undefined;
                /**
                * Processes the current value of attribute clickAnywhereToEdit.
                */
                protected __processClickAnywhereToEdit(): void;
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
                * @param valueNew The new value for labelPosition. Possible values: Inside, Outside
                */
                setLabelPosition(valueNew: 'Inside' | 'Outside' | null): void;
                /**
                * Returns the current value of labelPosition.
                * @returns The current value of labelPosition. Possible values: Inside, Outside
                */
                getLabelPosition(): "Inside" | "Outside" | undefined;
                /**
                * Processes the current value of attribute labelposition.
                */
                protected __processLabelPosition(): void;
                /**
                * Sets the subTickPosition attribute.
                * @param valueNew The new value for labelPosition. Possible values: Inside, Outside
                */
                setSubTickPosition(valueNew: 'Inside' | 'Outside' | null): void;
                /**
                * Returns the current value of subTickPosition.
                * @returns The current value of subTickPosition. Possible values: Inside, Outside
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
                * Sets the gaugeValueColor attribute.
                * @param valueNew The new value for gaugeValueColor.
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
                * Sets the progressForegroundColor attribute.
                * @param valueNew The new value for progressForegroundColor.
                */
                setProgressForegroundColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the progressForegroundColor object resolver.
                 */
                protected __onResolverForProgressForegroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of progressForegroundColor.
                * @returns The current value of progressForegroundColor.
                */
                getProgressForegroundColor(): SolidColor | null | undefined;
                /**
                * Processes the current value of attribute progressForegroundColor.
                */
                protected __processProgressForegroundColor(): void;
                /**
                * Sets the progressBackColor attribute.
                * @param valueNew The new value for progressBackgroundColor.
                */
                setProgressBackgroundColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the progressBackgroundColor object resolver.
                 */
                protected __onResolverForProgressBackgroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of progressBackgroundColor.
                * @returns The current value of progressBackgroundColor.
                */
                getProgressBackgroundColor(): SolidColor | null | undefined;
                /**
                * Processes the current value of attribute progressBackgroundColor.
                */
                protected __processProgressBackgroundColor(): void;
                /**
                * Sets the knob color attribute.
                * @param valueNew The new value for KnobColor.
                */
                setKnobColor(valueNew: Color | null): void;
                /**
                 * The watch callback for the knobColor object resolver.
                 */
                protected __onResolverForKnobColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
                /**
                * Returns the current value of KnobColor.
                * @returns The current value of KnobColor.
                */
                getKnobColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
                * Processes the current value of attribute KnobColor.
                */
                protected __processKnobColor(): void;
                /**
                * Sets the knob color attribute.
                * @param valueNew The new value for KnobColor.
                */
                setKnobArrowsColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the knobArrowsColor object resolver.
                 */
                protected __onResolverForKnobArrowsColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of KnobColor.
                * @returns The current value of KnobColor.
                */
                getKnobArrowsColor(): SolidColor | null | undefined;
                /**
                * Processes the current value of attribute KnobColor.
                */
                protected __processKnobArrowsColor(): void;
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
                * Processes the current value of attribute baseAnimationTime.
                */
                protected __processBaseAnimationTime(): void;
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
                * @param valueNew The new value for labelFontSizeUnit. Possible Values: px, %
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
                * @param valueNew The new value for ValueFontSizeUnit. Possible Values: px, %
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
                * @param valueNew The new Unit for UnitFontSizeUnit. Possible Units: px, %
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
                * Sets the set point marker color attribute.
                * @param valueNew The new value for set point marker color.
                */
                setSetPointMarkerColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the set point marker color object resolver.
                 */
                protected __onResolverForSetPointMarkerColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of setPointMarkerColor.
                * @returns The current value of SetPointMarkerColor.
                */
                getSetPointMarkerColor(): SolidColor | null | undefined;
                /**
                * Processes the current value of attribute setPointMarkerColor.
                */
                protected __processSetPointMarkerColor(): void;
                /**
                 * Sets the gaugeAlignment attribute to a new value.
                 * @param valueNew The new value for the gaugeAlignment attribute.
                 */
                setGaugeAlignment(valueNew: TcHmiRadialGauge.GaugeAlignment | null): void;
                /**
                 * Returns the current  value of the gaugeAlignment attribute
                 */
                getGaugeAlignment(): "Start" | "Center" | "End" | null | undefined;
                /**
                 * Processes the current value of the gaugeAlignment attribute.
                 */
                protected __processGaugeAlignment(): void;
            }
            module TcHmiRadialGauge {
                interface IControlSpecificData extends System.TcHmiControl.IControlSpecificData {
                    'Beckhoff.TcHmiRadialGauge.triggerLayout': boolean;
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
                interface KnobConfig {
                    imagePath: string;
                    width: number;
                    height: number;
                    offsetX: number;
                    offsetY: number;
                }
                type GaugeAlignment = 'Start' | 'Center' | 'End';
            }
        }
    }
}
