declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiBarChart extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** member variables */
                /** Reference to the root dom element of the current control template as  jquery object. */
                protected __elementTemplateRoot: JQuery;
                /** BarChart element */
                protected __barChart: TcHmiCharting.BarChart | null;
                /** Internal reference to the attribute 'data-tchmi-y-axis-width' */
                protected __sectionsBackgroundColor: TcHmi.Color | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-x-axis' */
                protected __showXAxis: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-show-labels' */
                protected __xShowLabels: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-main-tick-start-value' */
                protected __xMainTickMinValue: number | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-main-tick-max-width' */
                protected __xMainTickMaxValue: number | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-main-tick-steps' */
                protected __xMainTickSteps: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-label-font-family' */
                protected __xLabelFontFamily: FontFamily | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-label-font-size' */
                protected __xLabelFontSize: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-label-font-size-unit' */
                protected __xLabelFontSizeUnit: FontSizeUnit | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-label-font-weight' */
                protected __xLabelFontWeight: FontWeight | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-label-font-color' */
                protected __xLabelFontColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-width' */
                protected __xAxisWidth: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-color' */
                protected __xAxisColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-auto-scaling' */
                protected __xAxisAutoScaling: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-decimal-places' */
                protected __xAxisDecimalPlaces: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-value-format' */
                protected __xAxisFormat: TcHmi.IFunction | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-x-axis-name' */
                protected __showXAxisName: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-name' */
                protected __xAxisName: string | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-font-family' */
                protected __xAxisNameFontFamily: FontFamily | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-font-size' */
                protected __xAxisNameFontSize: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-font-size-unit' */
                protected __xAxisNameFontSizeUnit: FontSizeUnit | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-font-weight' */
                protected __xAxisNameFontWeight: FontWeight | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-font-color' */
                protected __xAxisNameFontColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-unit' */
                protected __xAxisUnit: string | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-y-axis' */
                protected __showYAxis: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-position' */
                protected __yPosition: string | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-main-tick-start-value' */
                protected __yMainTickMinValue: number | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-main-tick-max-width' */
                protected __yMainTickMaxValue: number | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-main-tick-steps' */
                protected __yMainTickSteps: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-y-sub-ticks' */
                protected __showYSubTicks: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-sub-tick-steps' */
                protected __ySubTickSteps: number | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-show-labels' */
                protected __yShowLabels: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-label-font-family' */
                protected __yLabelFontFamily: FontFamily | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-label-font-size' */
                protected __yLabelFontSize: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-label-font-size-unit' */
                protected __yLabelFontSizeUnit: FontSizeUnit | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-label-font-weight' */
                protected __yLabelFontWeight: FontWeight | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-label-font-color' */
                protected __yLabelFontColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-axis-width' */
                protected __yAxisWidth: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-axis-color' */
                protected __yAxisColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-y-axis-name' */
                protected __showYAxisName: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-axis-name' */
                protected __yAxisName: string | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-axis-font-family' */
                protected __yAxisNameFontFamily: FontFamily | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-axis-font-size' */
                protected __yAxisNameFontSize: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-axis-font-size-unit' */
                protected __yAxisNameFontSizeUnit: FontSizeUnit | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-axis-font-weight' */
                protected __yAxisNameFontWeight: FontWeight | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-axis-font-color' */
                protected __yAxisNameFontColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-axis-auto-scaling' */
                protected __yAxisAutoScaling: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-axis-decimal-places' */
                protected __yAxisDecimalPlaces: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-axis-unit' */
                protected __yAxisUnit: string | null | undefined;
                /**  Internal reference to the attribute 'data-tchmi-bar-graph-colors'
                */
                protected __barGraphColors: TcHmi.SolidColor[] | TcHmi.SolidColor | null | undefined;
                /** __barGraphColors as an array of TcHmi.SolidColor or null */
                protected __barGraphColorArray: TcHmi.SolidColor[] | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-bar-graph-width */
                protected __barGraphWidth: number | null | undefined;
                /**  Internal reference to the attribute 'data-tchmi-line-graph-data' */
                protected __barGraphData: number[][] | number[] | null | undefined;
                /** __barGraphData as an array of arrays with numbers or null */
                protected __barGraphDataArray: number[][] | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-grid' */
                protected __showGrid: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-grid-background-color' */
                protected __gridBackgroundColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-grid-show-horizontal-lines' */
                protected __gridShowHorizontalLines: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-grid-show-vertical-lines' */
                protected __gridShowVerticalLines: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-grid-line-width' */
                protected __gridLineWidth: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-grid-line-style' */
                protected __gridLineStyle: string | undefined;
                /** Internal reference to the attribute 'data-tchmi-grid-line-color' */
                protected __gridLineColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-subgrid-show-horizontal-lines' */
                protected __subgridShowHorizontalLines: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-subgrid-line-width' */
                protected __subgridLineWidth: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-subgrid-line-style' */
                protected __subgridLineStyle: string | undefined;
                /** Internal reference to the attribute 'data-tchmi-subgrid-line-color' */
                protected __subgridLineColor: TcHmi.SolidColor | null | undefined;
                /** Event destroyer... */
                private __resizedEventDestroyEvent;
                protected __themeDataLoadedEventDestroyEvent: DestroyFunction | null;
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
                protected __rebuild(): (evt: EventProvider.Event, ctrl: Controls.System.TcHmiControl) => void;
                /**
                * Is called initial and and if size changed.
                */
                __drawBarChart(): void;
                /**
                * Sets the background value and calls the associated process function.
                * @param valueNew The new value for the background attribute as json string.
                */
                setSectionsBackgroundColor(valueNew: Color | null): void;
                /**
                 * The watch callback for the sectionsBackgroundColor object resolver.
                 */
                protected __onResolverForSectionsBackgroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
                /**
                * Returns the current background value.
                * @returns The current value of the background member variable as json in string format.
                */
                getSectionsBackgroundColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
              * Processes the current border-color attribute.
              */
                protected __processSectionsBackgroundColor(): void;
                /**
               * Sets the value of BarGraphColors
               * @param valueNew The new value for BarGraphColors
               */
                setBarGraphColors(valueNew: SolidColor | SolidColor[] | null): void;
                /**
                 * The watch callback for the barGraphColors object resolver.
                 */
                protected __onResolverForBarGraphColorsWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor | SolidColor[]>) => void;
                /**
                 * Gets the value of BarGraphColors
                 * @returns The current value of BarGraphColors
                 */
                getBarGraphColors(): SolidColor | SolidColor[] | null | undefined;
                /**
                * Processes BarGraphColors
                */
                protected __processBarGraphColors(): void;
                /**
               * Sets the value of barGraphData
               * @param valueNew The new value for barGraphData
               */
                setBarGraphData(valueNew: number[] | number[][] | null): void;
                /**
                 * The watch callback for the barGraphData object resolver.
                 */
                protected __onResolverForBarGraphDataWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<number[] | number[][]>) => void;
                /**
                 * Gets the value of barGraphData
                 * @returns The current value of barGraphData
                 */
                getBarGraphData(): number[] | number[][] | null | undefined;
                /**
                * Processes barGraphData
                */
                protected __processBarGraphData(): void;
                /**
                 * Sets the value of bargraphwidth
                 * @param valueNew The new value for bargraphwidth
                 */
                setBarGraphWidth(valueNew: number | null): void;
                /**
                 * Gets the value of bargraphwidth
                 * @returns The current value of bargraphwidth
                 */
                getBarGraphWidth(): number | null | undefined;
                /**
                 * Processes bargraphwidth
                 */
                protected __processBarGraphWidth(): void;
                /**
               * Sets the value of showXAxis
               * @param valueNew The new value for showXAxis
               */
                setShowXAxis(valueNew: boolean | null): void;
                /**
                 * Gets the value of showXAxis
                 * @returns The current value of showXAxis
                 */
                getShowXAxis(): boolean | undefined;
                /**
                 * Processes showXAxis
                 */
                protected __processShowXAxis(): void;
                /**
                * Sets the value of xShowLabels
                * @param valueNew The new value for xShowLabels
                */
                setXShowLabels(valueNew: boolean | null): void;
                /**
                 * Gets the value of xShowLabels
                 * @returns The current value of xShowLabels
                 */
                getXShowLabels(): boolean | undefined;
                /**
                 * Processes xShowLabels
                 */
                protected __processXShowLabels(): void;
                /**
                 * Sets the value of xMainTickMinValue
                 * @param valueNew The new value for xMainTickMinValue
                 */
                setXMainTickMinValue(valueNew: number | null): void;
                /**
                 * Gets the value of xMainTickMinValue
                 * @returns The current value of xMainTickMinValue
                 */
                getXMainTickMinValue(): number | null | undefined;
                /**
                 * Processes xMainTickMinValue
                 */
                protected __processXMainTickMinValue(): void;
                /**
                 * Sets the value of xMainTickMaxValue
                 * @param valueNew The new value for xMainTickMaxValue
                 */
                setXMainTickMaxValue(valueNew: number | null): void;
                /**
                 * Gets the value of xMainTickMaxValue
                 * @returns The current value of xMainTickMaxValue
                 */
                getXMainTickMaxValue(): number | null | undefined;
                /**
                 * Processes xMainTickMaxValue
                 */
                protected __processXMainTickMaxValue(): void;
                /**
                 * Sets the value of xMainTickSteps
                 * @param valueNew The new value for xMainTickSteps
                 */
                setXMainTickSteps(valueNew: number | null): void;
                /**
                 * Gets the value of xMainTickSteps
                 * @returns The current value of xMainTickSteps
                 */
                getXMainTickSteps(): number | undefined;
                /**
                 * Processes xMainTickSteps
                 */
                protected __processXMainTickSteps(): void;
                /**
               * Sets the value of showXSubTicks
               * @deprecated
               * @param valueNew The new value for showXSubTicks
               */
                setShowXSubTicks(valueNew: boolean | null): void;
                /**
                 * Gets the value of showXSubTicks
                 * * @deprecated
                 * @returns The current value of showXSubTicks
                 */
                getShowXSubTicks(): boolean;
                /**
                 * Sets the value of xSubTickSteps
                 * @param valueNew The new value for xSubTickSteps
                 * @deprecated
                 */
                setXSubTickSteps(valueNew: number | null): void;
                /**
                 * Gets the value of xSubTickSteps
                 * @deprecated
                 * @returns The current value of xSubTickSteps
                 */
                getXSubTickSteps(): number;
                /**
                 * Sets the value of xLabelFontFamily
                 * @param valueNew The new value for xLabelFontFamily
                 */
                setXLabelFontFamily(valueNew: FontFamily | null): void;
                /**
                 * Gets the value of xLabelFontFamily
                 * @returns The current value of xLabelFontFamily
                 */
                getXLabelFontFamily(): string | undefined;
                /**
                 * Processes xLabelFontFamily
                 */
                protected __processXLabelFontFamily(): void;
                /**
                 * Sets the value of xLabelFontSize
                 * @param valueNew The new value for xLabelFontSize
                 */
                setXLabelFontSize(valueNew: number | null): void;
                /**
                 * Gets the value of xLabelFontSize
                 * @returns The current value of xLabelFontSize
                 */
                getXLabelFontSize(): number | undefined;
                /**
                 * Processes xLabelFontSize
                 */
                protected __processXLabelFontSize(): void;
                /**
                 * Sets the value of xLabelFontSizeUnit
                 * @param valueNew The new value for xLabelFontSizeUnit
                 * Possible Values: px, %
                 */
                setXLabelFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                 * Gets the value of xLabelFontSizeUnit
                 * @returns The current value of xLabelFontSizeUnit
                 */
                getXLabelFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                 * Processes xLabelFontSizeUnit
                 */
                protected __processXLabelFontSizeUnit(): void;
                /**
                 * Sets the value of xLabelFontWeight
                 * @param valueNew The new value for xLabelFontWeight
                 * Possible Values: normal, bold
                 */
                setXLabelFontWeight(valueNew: FontWeight | null): void;
                /**
                 * Gets the value of xLabelFontWeight
                 * @returns The current value of xLabelFontWeight
                 */
                getXLabelFontWeight(): "Normal" | "Bold" | "Auto" | undefined;
                /**
                 * Processes xLabelFontWeight
                 */
                protected __processXLabelFontWeight(): void;
                /**
                * Sets the xLabelFontColor value and calls the associated process function (processXLabelFontColor).
                * @param valueNew The new value for the xLabelFontColor attribute as json string.
                */
                setXLabelFontColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the xLabelFontColor object resolver.
                 */
                protected __onResolverForXLabelFontColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current xLabelFontColor value.
                * @returns The current value of the xLabelFontColor member variable as json in string format.
                */
                getXLabelFontColor(): SolidColor | null | undefined;
                /**
              * Processes the current xLabelFontColor attribute.
              */
                protected __processXLabelFontColor(): void;
                /**
                 * Sets the value of xAxisWidth
                 * @param valueNew The new value for xAxisWidth
                 */
                setXAxisWidth(valueNew: number | null): void;
                /**
                 * Gets the value of xAxisWidth
                 * @returns The current value of xAxisWidth
                 */
                getXAxisWidth(): number | undefined;
                /**
                 * Processes xAxisWidth
                 */
                protected __processXAxisWidth(): void;
                /**
                * Sets the xAxisColor value and calls the associated process function (processXAxisColor).
                * @para valueNew The new value for the xAxisColor attribute as json string.
                */
                setXAxisColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the xAxisColor object resolver.
                 */
                protected __onResolverForXAxisColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current xAxisColor value.
                * @returns The current value of the xAxisColor member variable as json in string format.
                */
                getXAxisColor(): SolidColor | null | undefined;
                /**
                * Processes the current xAxisColor attribute.
                */
                protected __processXAxisColor(): void;
                /**
                * Sets the value of xAxisAutoScaling
                * @param valueNew The new value for xAxisAutoScaling
                */
                setXAxisAutoScaling(valueNew: boolean | null): void;
                /**
                 * Gets the value of xAxisAutoScaling
                 * @returns The current value of xAxisAutoScaling
                 */
                getXAxisAutoScaling(): boolean | undefined;
                /**
                 * Processes xAxisAutoScaling
                 */
                protected __processXAxisAutoScaling(): void;
                /**
                 * Sets the value of xAxisDecimalPlaces
                 * @param valueNew The new value for xAxisDecimalPlaces
                 */
                setXAxisDecimalPlaces(valueNew: number | null): void;
                /**
                 * Gets the value of xAxisDecimalPlaces
                 * @returns The current value of xAxisDecimalPlaces
                 */
                getXAxisDecimalPlaces(): number | undefined;
                /**
                 * Processes xAxisDecimalPlaces
                 */
                protected __processXAxisDecimalPlaces(): void;
                /**
                * Sets the xAxis of the xAxisFormat order attribute.
                * @param xAxis The new xAxisFormat method.
                */
                setXAxisFormat(valueNew: TcHmi.IFunction | null): void;
                /**
                 * The watch callback for the xAxisFormat object resolver.
                 */
                protected __onResolverForXAxisFormatWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmi.IFunction>) => void;
                /**
                 * Gets the current xAxisFormat method.
                 * @returns the current xAxisFormat method.
                 */
                getXAxisFormat(): IFunction | null | undefined;
                /**
                 * Processes the current xAxisFormat method
                 */
                protected __processXAxisFormat(): void;
                /**
                 * Executes the current xAxisFormat function.
                 * @param first The first message to compare.
                 * @param second The second message to compare.
                 */
                private __executeXAxisFormatFunction;
                /**
                * Sets the value of showXAxisName
                * @param valueNew The new value for showXAxisName
                */
                setShowXAxisName(valueNew: boolean | null): void;
                /**
                 * Gets the value of showXAxisName
                 * @returns The current value of showXAxisName
                 */
                getShowXAxisName(): boolean | undefined;
                /**
                 * Processes showXAxisName
                 */
                protected __processShowXAxisName(): void;
                /**
                 * Sets the value of xAxisName
                 * @param valueNew The new value for xAxisName
                 */
                setXAxisName(valueNew: string | null): void;
                /**
                 * Gets the value of xAxisName
                 * @returns The current value of xAxisName
                 */
                getXAxisName(): string | null | undefined;
                /**
                 * Processes xAxisName
                 */
                protected __processXAxisName(): void;
                /**
                 * Sets the value of xAxisNameFontFamily
                 * @param valueNew The new value for xAxisNameFontFamily
                 */
                setXAxisNameFontFamily(valueNew: FontFamily | null): void;
                /**
                 * Gets the value of xAxisNameFontFamily
                 * @returns The current value of xAxisNameFontFamily
                 */
                getXAxisNameFontFamily(): string | undefined;
                /**
                 * Processes xAxisNameFontFamily
                 */
                protected __processXAxisNameFontFamily(): void;
                /**
                 * Sets the value of xAxisNameFontSize
                 * @param valueNew The new value for xAxisNameFontSize
                 */
                setXAxisNameFontSize(valueNew: number | null): void;
                /**
                 * Gets the value of xAxisNameFontSize
                 * @returns The current value of xAxisNameFontSize
                 */
                getXAxisNameFontSize(): number | undefined;
                /**
                 * Processes xAxisNameFontSize
                 */
                protected __processXAxisNameFontSize(): void;
                /**
                 * Sets the value of xAxisNameFontSizeUnit
                 * @param valueNew The new value for xAxisNameFontSizeUnit
                 * Possible Values: px, %
                 */
                setXAxisNameFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                 * Gets the value of xAxisNameFontSizeUnit
                 * @returns The current value of xAxisNameFontSizeUnit
                 */
                getXAxisNameFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                 * Processes xAxisNameFontSizeUnit
                 */
                protected __processXAxisNameFontSizeUnit(): void;
                /**
                 * Sets the value of xAxisNameFontWeight
                 * @param valueNew The new value for xAxisNameFontWeight
                 * Possible Values: normal, bold
                 */
                setXAxisNameFontWeight(valueNew: FontWeight | null): void;
                /**
                 * Gets the value of xAxisNameFontWeight
                 * @returns The current value of xAxisNameFontWeight
                 */
                getXAxisNameFontWeight(): "Normal" | "Bold" | "Auto" | undefined;
                /**
                 * Processes xAxisNameFontWeight
                 */
                protected __processXAxisNameFontWeight(): void;
                /**
                * Sets the xAxisNameFontColor value and calls the associated process function (processXAxisNameFontColor).
                * @param valueNew The new value for the xAxisNameFontColor attribute as json string.
                */
                setXAxisNameFontColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the xAxisNameFontColor object resolver.
                 */
                protected __onResolverForXAxisNameFontColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current xAxisNameFontColor value.
                * @returns The current value of the xAxisNameFontColor member variable as json in string format.
                */
                getXAxisNameFontColor(): SolidColor | null | undefined;
                /**
              * Processes the current xAxisNameFontColor attribute.
              */
                protected __processXAxisNameFontColor(): void;
                /**
                 * Sets the value of xAxisUnit
                 * @param valueNew The new value for xAxisUnit
                 */
                setXAxisUnit(valueNew: string | null): void;
                /**
                 * Gets the value of xAxisUnit
                 * @returns The current value of xAxisUnit
                 */
                getXAxisUnit(): string | null | undefined;
                /**
                 * Processes xAxisUnit
                 */
                protected __processXAxisUnit(): void;
                /**
               * Sets the value of showYAxis
               * @param valueNew The new value for showYAxis
               */
                setShowYAxis(valueNew: boolean | null): void;
                /**
                 * Gets the value of showYAxis
                 * @returns The current value of showYAxis
                 */
                getShowYAxis(): boolean | undefined;
                /**
                 * Processes showYAxis
                 */
                protected __processShowYAxis(): void;
                /**
                 * Sets the value of yPosition
                 * @param valueNew The new value for yPosition
                 * Possible Values: Left, Right
                 */
                setYPosition(valueNew: string | null): void;
                /**
                 * Gets the value of yPosition
                 * @returns The current value of yPosition
                 */
                getYPosition(): string | undefined;
                /**
                 * Processes yPosition
                 */
                protected __processYPosition(): void;
                /**
                 * Sets the value of yMainTickMinValue
                 * @param valueNew The new value for yMainTickMinValue
                 */
                setYMainTickMinValue(valueNew: number | null): void;
                /**
                 * Gets the value of yMainTickMinValue
                 * @returns The current value of yMainTickMinValue
                 */
                getYMainTickMinValue(): number | null | undefined;
                /**
                 * Processes yMainTickMinValue
                 */
                protected __processYMainTickMinValue(): void;
                /**
                 * Sets the value of yMainTickMaxValue
                 * @param valueNew The new value for yMainTickMaxValue
                 */
                setYMainTickMaxValue(valueNew: number | null): void;
                /**
                 * Gets the value of yMainTickMaxValue
                 * @returns The current value of yMainTickMaxValue
                 */
                getYMainTickMaxValue(): number | null | undefined;
                /**
                 * Processes yMainTickMaxValue
                 */
                protected __processYMainTickMaxValue(): void;
                /**
                 * Sets the value of yMainTickSteps
                 * @param valueNew The new value for yMainTickSteps
                 */
                setYMainTickSteps(valueNew: number | null): void;
                /**
                 * Gets the value of yMainTickSteps
                 * @returns The current value of yMainTickSteps
                 */
                getYMainTickSteps(): number | undefined;
                /**
                 * Processes yMainTickSteps
                 */
                protected __processYMainTickSteps(): void;
                /**
                * Sets the value of ShowYSubTicks
                * @param valueNew The new value for ShowYSubTicks
                */
                setShowYSubTicks(valueNew: boolean | null): void;
                /**
                 * Gets the value of ShowYSubTicks
                 * @returns The current value of ShowYSubTicks
                 */
                getShowYSubTicks(): boolean | undefined;
                /**
                 * Processes ShowYSubTicks
                 */
                protected __processShowYSubTicks(): void;
                /**
                 * Sets the value of ySubTickSteps
                 * @param valueNew The new value for ySubTickSteps
                 */
                setYSubTickSteps(valueNew: number | null): void;
                /**
                 * Gets the value of ySubTickSteps
                 * @returns The current value of ySubTickSteps
                 */
                getYSubTickSteps(): number | null | undefined;
                /**
                 * Processes ySubTickSteps
                 */
                protected __processYSubTickSteps(): void;
                /**
                * Sets the value of yShowLabels
                * @param valueNew The new value for yShowLabels
                */
                setYShowLabels(valueNew: boolean | null): void;
                /**
                 * Gets the value of yShowLabels
                 * @returns The current value of yShowLabels
                 */
                getYShowLabels(): boolean | undefined;
                /**
                 * Processes xShowLabels
                 */
                protected __processYShowLabels(): void;
                /**
                 * Sets the value of yLabelFontFamily
                 * @param valueNew The new value for yLabelFontFamily
                 */
                setYLabelFontFamily(valueNew: FontFamily | null): void;
                /**
                 * Gets the value of yLabelFontFamily
                 * @returns The current value of yLabelFontFamily
                 */
                getYLabelFontFamily(): string | undefined;
                /**
                 * Processes yLabelFontFamily
                 */
                protected __processYLabelFontFamily(): void;
                /**
                 * Sets the value of yLabelFontSize
                 * @param valueNew The new value for yLabelFontSize
                 */
                setYLabelFontSize(valueNew: number | null): void;
                /**
                 * Gets the value of yLabelFontSize
                 * @returns The current value of yLabelFontSize
                 */
                getYLabelFontSize(): number | undefined;
                /**
                 * Processes yLabelFontSize
                 */
                protected __processYLabelFontSize(): void;
                /**
                 * Sets the value of yLabelFontSizeUnit
                 * @param valueNew The new value for yLabelFontSizeUnit
                 * Possible Values: px, %
                 */
                setYLabelFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                 * Gets the value of yLabelFontSizeUnit
                 * @returns The current value of yLabelFontSizeUnit
                 */
                getYLabelFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                 * Processes yLabelFontSizeUnit
                 */
                protected __processYLabelFontSizeUnit(): void;
                /**
                 * Sets the value of yLabelFontWeight
                 * @param valueNew The new value for yLabelFontWeight
                 * Possible Values: normal, bold
                 */
                setYLabelFontWeight(valueNew: FontWeight | null): void;
                /**
                 * Gets the value of yLabelFontWeight
                 * @returns The current value of yLabelFontWeight
                 */
                getYLabelFontWeight(): "Normal" | "Bold" | "Auto" | undefined;
                /**
                 * Processes yLabelFontWeight
                 */
                protected __processYLabelFontWeight(): void;
                /**
                * Sets the yLabelFontColor value and calls the associated process function (processyLabelFontColor).
                * @param valueNew The new value for the yLabelFontColor attribute as json string.
                */
                setYLabelFontColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the yLabelFontColor object resolver.
                 */
                protected __onResolverForYLabelFontColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current yLabelFontColor value.
                * @returns The current value of the yLabelFontColor member variable as json in string format.
                */
                getYLabelFontColor(): SolidColor | null | undefined;
                /**
              * Processes the current yLabelFontColor attribute.
              */
                protected __processYLabelFontColor(): void;
                /**
                 * Sets the value of YAxisWidth
                 * @param valueNew The new value for YAxisWidth
                 */
                setYAxisWidth(valueNew: number | null): void;
                /**
                 * Gets the value of YAxisWidth
                 * @returns The current value of YAxisWidth
                 */
                getYAxisWidth(): number | undefined;
                /**
                 * Processes YAxisWidth
                 */
                protected __processYAxisWidth(): void;
                /**
                * Sets the YAxisColor value and calls the associated process function (processYAxisColor).
                * @param valueNew The new value for the YAxisColor attribute as json string.
                */
                setYAxisColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the yAxisColor object resolver.
                 */
                protected __onResolverForYAxisColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current YAxisColor value.
                * @returns The current value of the YAxisColor member variable as json in string format.
                */
                getYAxisColor(): SolidColor | null | undefined;
                /**
              * Processes the current YAxisColor attribute.
              */
                protected __processYAxisColor(): void;
                /**
                * Sets the value of showYAxisName
                * @param valueNew The new value for showYAxisName
                */
                setShowYAxisName(valueNew: boolean | null): void;
                /**
                 * Gets the value of showYAxisName
                 * @returns The current value of showYAxisName
                 */
                getShowYAxisName(): boolean | undefined;
                /**
                 * Processes showYAxisName
                 */
                protected __processShowYAxisName(): void;
                /**
                 * Sets the value of yAxisName
                 * @param valueNew The new value for yAxisName
                 */
                setYAxisName(valueNew: string | null): void;
                /**
                 * Gets the value of yAxisName
                 * @returns The current value of yAxisName
                 */
                getYAxisName(): string | null | undefined;
                /**
                 * Processes yAxisName
                 */
                protected __processYAxisName(): void;
                /**
                 * Sets the value of yAxisNameFontFamily
                 * @param valueNew The new value for yAxisNameFontFamily
                 */
                setYAxisNameFontFamily(valueNew: FontFamily | null): void;
                /**
                 * Gets the value of yAxisNameFontFamily
                 * @returns The current value of yAxisNameFontFamily
                 */
                getYAxisNameFontFamily(): string | undefined;
                /**
                 * Processes yAxisNameFontFamily
                 */
                protected __processYAxisNameFontFamily(): void;
                /**
                 * Sets the value of yAxisNameFontSize
                 * @param valueNew The new value for yAxisNameFontSize
                 */
                setYAxisNameFontSize(valueNew: number | null): void;
                /**
                 * Gets the value of yAxisNameFontSize
                 * @returns The current value of yAxisNameFontSize
                 */
                getYAxisNameFontSize(): number | undefined;
                /**
                 * Processes yAxisNameFontSize
                 */
                protected __processYAxisNameFontSize(): void;
                /**
                 * Sets the value of yAxisNameFontSizeUnit
                 * @param valueNew The new value for yAxisNameFontSizeUnit
                 * Possible Values: px, %
                 */
                setYAxisNameFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                 * Gets the value of yAxisNameFontSizeUnit
                 * @returns The current value of yAxisNameFontSizeUnit
                 */
                getYAxisNameFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                 * Processes yAxisNameFontSizeUnit
                 */
                protected __processYAxisNameFontSizeUnit(): void;
                /**
                 * Sets the value of yAxisNameFontWeight
                 * @param valueNew The new value for yAxisNameFontWeight
                 * Possible Values: normal, bold
                 */
                setYAxisNameFontWeight(valueNew: FontWeight | null): void;
                /**
                 * Gets the value of yAxisNameFontWeight
                 * @returns The current value of yAxisNameFontWeight
                 */
                getYAxisNameFontWeight(): "Normal" | "Bold" | "Auto" | undefined;
                /**
                 * Processes yAxisNameFontWeight
                 */
                protected __processYAxisNameFontWeight(): void;
                /**
                * Sets the yAxisNameFontColor value and calls the associated process function (processYAxisNameFontColor).
                * @param valueNew The new value for the yAxisNameFontColor attribute as json string.
                */
                setYAxisNameFontColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the yAxisNameFontColor object resolver.
                 */
                protected __onResolverForYAxisNameFontColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current yAxisNameFontColor value.
                * @returns The current value of the yAxisNameFontColor member variable as json in string format.
                */
                getYAxisNameFontColor(): SolidColor | null | undefined;
                /**
              * Processes the current yAxisNameFontColor attribute.
              */
                protected __processYAxisNameFontColor(): void;
                /**
                * Sets the value of YAxisAutoScaling
                * @param valueNew The new value for YAxisAutoScaling
                */
                setYAxisAutoScaling(valueNew: boolean | null): void;
                /**
                 * Gets the value of YAxisAutoScaling
                 * @returns The current value of YAxisAutoScaling
                 */
                getYAxisAutoScaling(): boolean | undefined;
                /**
                 * Processes YAxisAutoScaling
                 */
                protected __processYAxisAutoScaling(): void;
                /**
                 * Sets the value of YAxisDecimalPlaces
                 * @param valueNew The new value for YAxisDecimalPlaces
                 */
                setYAxisDecimalPlaces(valueNew: number | null): void;
                /**
                 * Gets the value of YAxisDecimalPlaces
                 * @returns The current value of YAxisDecimalPlaces
                 */
                getYAxisDecimalPlaces(): number | undefined;
                /**
                 * Processes YAxisDecimalPlaces
                 */
                protected __processYAxisDecimalPlaces(): void;
                /**
                 * Sets the value of yAxisUnit
                 * @param valueNew The new value for yAxisUnit
                 */
                setYAxisUnit(valueNew: string | null): void;
                /**
                 * Gets the value of yAxisUnit
                 * @returns The current value of yAxisUnit
                 */
                getYAxisUnit(): string | null | undefined;
                /**
                 * Processes yAxisUnit
                 */
                protected __processYAxisUnit(): void;
                /**
                * Sets the value of showGrid
                * @param valueNew The new value for showGrid
                */
                setShowGrid(valueNew: boolean | null): void;
                /**
                 * Gets the value of showGrid
                 * @returns The current value of showGrid
                 */
                getShowGrid(): boolean | undefined;
                /**
                 * Processes showGrid
                 */
                protected __processShowGrid(): void;
                /**
                * Sets the gridBackgroundColor value and calls the associated process function (processGridBackgroundColor).
                * @param valueNew The new value for the gridBackgroundColor attribute as json string.
                */
                setGridBackgroundColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the gridBackgroundColor object resolver.
                 */
                protected __onResolverForGridBackgroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current gridBackgroundColor value.
                * @returns The current value of the gridBackgroundColor member variable as json in string format.
                */
                getGridBackgroundColor(): SolidColor | null | undefined;
                /**
              * Processes the current gridBackgroundColor attribute.
              */
                protected __processGridBackgroundColor(): void;
                /**
                * Sets the value of gridShowHorizontalLines
                * @param valueNew The new value for gridShowHorizontalLines
                */
                setGridShowHorizontalLines(valueNew: boolean | null): void;
                /**
                 * Gets the value of gridShowHorizontalLines
                 * @returns The current value of gridShowHorizontalLines
                 */
                getGridShowHorizontalLines(): boolean | undefined;
                /**
                 * Processes gridShowHorizontalLines
                 */
                protected __processGridShowHorizontalLines(): void;
                /**
                * Sets the value of gridShowVerticalLines
                * @param valueNew The new value for gridShowVerticalLines
                */
                setGridShowVerticalLines(valueNew: boolean | null): void;
                /**
                 * Gets the value of gridShowVerticalLines
                 * @returns The current value of gridShowVerticalLines
                 */
                getGridShowVerticalLines(): boolean | undefined;
                /**
                 * Processes gridShowVerticalLines
                 */
                protected __processGridShowVerticalLines(): void;
                /**
                 * Sets the value of gridLineWidth
                 * @param valueNew The new value for gridLineWidth
                 */
                setGridLineWidth(valueNew: number | null): void;
                /**
                 * Gets the value of gridLineWidth
                 * @returns The current value of gridLineWidth
                 */
                getGridLineWidth(): number | undefined;
                /**
                 * Processes gridLineWidth
                 */
                protected __processGridLineWidth(): void;
                /**
                * Sets the value of gridLineStyle
                * @param valueNew The new value for gridLineStyle
                */
                setGridLineStyle(valueNew: string | null): void;
                /**
                * Gets the value of gridLineStyle
                */
                getGridLineStyle(): string | undefined;
                /**
                * Processes gridLineStyle
                */
                protected __processGridLineStyle(): void;
                /**
                * Sets the gridLineColor value and calls the associated process function (processGridLineColor).
                * @param valueNew The new value for the gridLineColor attribute as json string.
                */
                setGridLineColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the gridLineColor object resolver.
                 */
                protected __onResolverForGridLineColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current gridLineColor value.
                * @returns The current value of the gridLineColor member variable as json in string format.
                */
                getGridLineColor(): SolidColor | null | undefined;
                /**
              * Processes the current gridLineColor attribute.
              */
                protected __processGridLineColor(): void;
                /**
                * Sets the value of subgridShowHorizontalLines
                * @param valueNew The new value for subgridShowHorizontalLines
                */
                setSubgridShowHorizontalLines(valueNew: boolean | null): void;
                /**
                 * Gets the value of subgridShowHorizontalLines
                 * @returns The current value of subgridShowHorizontalLines
                 */
                getSubgridShowHorizontalLines(): boolean | undefined;
                /**
                 * Processes subgridShowHorizontalLines
                 */
                protected __processSubgridShowHorizontalLines(): void;
                /**
                * Sets the value of subgridShowVerticalLines
                * @deprecated
                * @param valueNew The new value for subgridShowVerticalLines
                */
                setSubgridShowVerticalLines(valueNew: boolean | null): void;
                /**
                 * Gets the value of subgridShowVerticalLines
                 * @deprecated
                 * @returns The current value of subgridShowVerticalLines
                 */
                getSubgridShowVerticalLines(): boolean;
                /**
                 * Sets the value of subgridLineWidth
                 * @param valueNew The new value for subgridLineWidth
                 */
                setSubgridLineWidth(valueNew: number | null): void;
                /**
                 * Gets the value of subgridLineWidth
                 * @returns The current value of subgridLineWidth
                 */
                getSubgridLineWidth(): number | undefined;
                /**
                 * Processes subgridLineWidth
                 */
                protected __processSubgridLineWidth(): void;
                /**
               * Sets the value of subgridLineStyle
               * @param valueNew The new value for subgridLineStyle
               */
                setSubgridLineStyle(valueNew: TcHmiBarChart.LineStyle | null): void;
                /**
                * Gets the value of subgridLineStyle
                */
                getSubgridLineStyle(): string | undefined;
                /**
                * Processes subgridLineStyle
                */
                protected __processSubgridLineStyle(): void;
                /**
                * Sets the subgridLineColor value and calls the associated process function (processSubgridLineColor).
                * @param valueNew The new value for the subgridLineColor attribute as json string.
                */
                setSubgridLineColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the subgridLineColor object resolver.
                 */
                protected __onResolverForSubgridLineColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current subgridLineColor value.
                * @returns The current value of the subgridLineColor member variable as json in string format.
                */
                getSubgridLineColor(): SolidColor | null | undefined;
                /**
              * Processes the current subgridLineColor attribute.
              */
                protected __processSubgridLineColor(): void;
            }
            module TcHmiBarChart {
                interface barGraphColors {
                    barColor: TcHmi.SolidColor;
                }
                enum Position {
                    Left = 0,
                    Right = 1
                }
                enum LineStyle {
                    Dotted = 0,
                    Dashed = 1,
                    Solid = 2
                }
            }
        }
    }
}
