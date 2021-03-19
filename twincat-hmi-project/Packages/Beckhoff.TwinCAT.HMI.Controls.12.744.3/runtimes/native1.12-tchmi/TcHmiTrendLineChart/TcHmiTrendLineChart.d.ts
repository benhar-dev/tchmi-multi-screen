declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiTrendLineChart extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** member variables */
                /** Reference to the root dom element of the current control template as  jquery object. */
                protected __elementTemplateRoot: JQuery;
                /** Reference to the div element used as chart container as jquery object. */
                protected __elementChart: JQuery;
                /** Reference to the div element used as menu-bar as jquery object. */
                protected __elementMenuBar: JQuery;
                /** Reference to the div element used as tooltip as jquery object. */
                protected __elementTooltip: JQuery;
                /** Reference to the div element used as tooltip as jquery object. */
                protected __elementTooltipText: JQuery;
                /** Reference to the div element used as tooltip arrow as jquery object. */
                protected __elementTooltipArrow: JQuery;
                /** Reference to the div element used as parent for buttons (top most layer) as jquery object. */
                protected __elementMenuBarDropdown: JQuery;
                /** Reference to the div element used loading element as jquery object. */
                protected __elementLoading: JQuery;
                /** Linechart element' */
                protected __lineChart: TcHmiCharting.LineAreaChart | null;
                /** Stores the menuButtons as System.baseTcHmiControl[] */
                protected __menuBarControls: System.baseTcHmiControl[];
                /** Internal reference to the attribute 'data-tchmi-start' */
                protected __start: string | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-end' */
                protected __end: string | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-sections-background-color' */
                protected __sectionsBackgroundColor: TcHmi.Color | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-axis-width' */
                protected __yAxisWidth: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-label-font-family' */
                protected __yLabelFontFamily: FontFamily | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-label-font-size' */
                protected __yLabelFontSize: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-label-font-size-unit' */
                protected __yLabelFontSizeUnit: FontSizeUnit | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-label-font-weight' */
                protected __yLabelFontWeight: FontWeight | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-main-tick-steps' */
                protected __yMainTickSteps: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-y-sub-ticks' */
                protected __showYSubTicks: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-sub-tick-steps' */
                protected __ySubTickSteps: number | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-x-axis' */
                protected __showXAxis: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-show-labels' */
                protected __xShowLabels: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-main-tick-steps' */
                protected __xMainTickSteps: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-x-sub-ticks' */
                protected __showXSubTicks: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-sub-tick-steps' */
                protected __xSubTickSteps: number | null | undefined;
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
                /** Internal reference to the attribute 'data-tchmi-value-format' */
                protected __xAxisFormat: TcHmi.IFunction | null | undefined;
                /**  Internal reference to the attribute 'data-tchmi-y-axis' */
                protected __yAxis: TcHmiTrendLineChart.YAxis[] | null | undefined;
                /**  Internal reference to the attribute 'data-tchmi-line-graph-descriptions' */
                protected __lineGraphDescriptions: TcHmiTrendLineChart.LineGraphDescription[] | null | undefined;
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
                /** Internal reference to the attribute 'data-tchmi-subgrid-show-vertical-lines' */
                protected __subgridShowVerticalLines: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-subgrid-line-width' */
                protected __subgridLineWidth: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-subgrid-line-style' */
                protected __subgridLineStyle: string | undefined;
                /** Internal reference to the attribute 'data-tchmi-subgrid-line-color' */
                protected __subgridLineColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-menu-bar' */
                protected __showMenuBar: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-menu-bar-position' */
                protected __menuBarPosition: string | undefined;
                /** Internal reference to the attribute 'data-tchmi-menu-bar-label-font-family' */
                protected __menuBarLabelFontFamily: FontFamily | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-menu-bar-label-font-size' */
                protected __menuBarLabelFontSize: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-menu-bar-label-font-size-unit' */
                protected __menuBarLabelFontSizeUnit: FontSizeUnit | undefined;
                /** Internal reference to the attribute 'data-tchmi-menu-bar-label-font-weight' */
                protected __menuBarLabelFontWeight: FontWeight | undefined;
                /** Internal reference to the attribute 'data-tchmi-menu-bar-label-font-style' */
                protected __menuBarLabelFontStyle: FontStyle | undefined;
                /** Internal reference to the attribute 'data-tchmi-menu-bar-label-font-color' */
                protected __menuBarLabelFontColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-tooltip' */
                protected __showTooltip: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-tooltip-format' */
                protected __tooltipFormat: TcHmi.IFunction | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-tooltip-font-family' */
                protected __tooltipFontFamily: FontFamily | undefined;
                /** Internal reference to the attribute 'data-tchmi-tooltip-font-size' */
                protected __tooltipFontSize: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-tooltip-font-size-unit' */
                protected __tooltipFontSizeUnit: FontSizeUnit | undefined;
                /** Internal reference to the attribute 'data-tchmi-tooltip-font-weight' */
                protected __tooltipFontWeight: FontWeight | undefined;
                /** Internal reference to the attribute 'data-tchmi-tooltip-font-color' */
                protected __tooltipFontColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-tooltip-background-color' */
                protected __tooltipBackgroundColor: TcHmi.Color | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-interval */
                protected __interval: number | undefined;
                protected __serverDomain: string | undefined;
                /** Internal line graph data from historize-extension (fill in getDataCallback) */
                protected __lineGraphData: TcHmiTrendLineChart.Point[][] | null;
                /** Internal line graph data from historize-extension (fill in getDataCallback) */
                protected __lineGraphRawData: TcHmiTrendLineChart.ServerPoint[][] | null;
                /** Saved the internal start value */
                protected __internalStart: string | null;
                /** Saved the internal end value */
                protected __internalEnd: string | null;
                /** Saved the internal start value */
                protected __internalStartServer: number | null;
                /** Saved the internal end value */
                protected __internalEndServer: number | null;
                /** The actual start time in milliseconds */
                protected __actualStartTime: number | null | undefined;
                /** The actual end time in milliseconds */
                protected __actualEndTime: number | null | undefined;
                /** Saved the start before the last manipulation */
                protected __startBeforeManipulation: string | null;
                /** Saved the end before the last manipulation */
                protected __endBeforeManipulation: string | null;
                /** Mouse mode for zooming or panning as TcHmiTrendLineChart.MouseMode */
                protected __mouseMode: TcHmiTrendLineChart.MouseMode;
                /** Internal variable to save the manipulation infos */
                protected __manipulationInfo: {
                    isManipulating: boolean;
                    start: {
                        x: number;
                        y: number;
                    };
                    end: {
                        x: number;
                        y: number;
                    };
                    offset: {
                        left: number;
                        top: number;
                    };
                    scale: {
                        x: number;
                        y: number;
                    };
                    transform: {
                        x: number;
                        y: number;
                    };
                    click: boolean;
                    mousePosition: {
                        x: number;
                        y: number;
                    };
                };
                /** Internal variable to save the manipulation infos */
                protected __multitouchInfo: {
                    multitouchMode: boolean;
                    first: {
                        identifier: number | null;
                    };
                    second: {
                        identifier: null | number;
                    };
                    distance: number;
                    newStart: number | null;
                    newTimespan: number | null;
                    newYAxis: TcHmiTrendLineChart.YAxis[] | null;
                };
                /** Internal variable to save the wheel infos */
                protected __wheelInfo: {
                    isWheeling: boolean;
                    wheelSteps: number;
                    mousePosition: {
                        x: number;
                        y: number;
                    };
                    timespan: number | null;
                    timeout: number;
                };
                /** The context from the TcHmi_Controls_Beckhoff_TcHmiTrendLineChart-canvas-zooming canvas */
                protected __zoomingCanvasContext: CanvasRenderingContext2D | null;
                /** Saved if the last update comes from an interaction (multitouch, touch, mouse or wheeling) */
                protected __lastInteraction: boolean;
                /** The start and end values before zooming */
                protected __startEndBeforeZoom: {
                    end: string | null;
                    start: string | null;
                };
                /** Event handlers */
                protected __clickHandler: (event: MouseEvent) => void;
                protected __mousedownHandler: (event: MouseEvent) => void;
                protected __mouseupHandler: (event: MouseEvent) => void;
                protected __mousemoveHandler: (event: MouseEvent) => void;
                protected __mousemoveTooltipHandler: (event: MouseEvent) => void;
                protected __touchstartHandler: (event: TouchEvent) => void;
                protected __touchmoveHandler: (event: TouchEvent) => void;
                protected __touchendHandler: (event: TouchEvent) => void;
                protected __mousewheelHandler: (event: MouseWheelEvent) => void;
                /**
                * Stores a reference to the function called when the resize event is raised
                */
                protected __resizeEventDestroyEvent: DestroyFunction | null;
                protected __themeDataLoadedEventDestroyEvent: DestroyFunction | null;
                /** Subscription ID for getData as number (null if no subscription is created) */
                protected __subscriptionId: number | null;
                /** Subscription ID for getData as number (null if no subscription is created) */
                protected __requestId: number | null;
                /** Internal counter of calling getTrendLineData */
                private __getDataCounter;
                /** Internal using of yAxis */
                protected __internalYAxis: TcHmiTrendLineChart.YAxis[] | null;
                /** Internal using of lineGraphDescription */
                protected __internalLineGraphDescription: TcHmiTrendLineChart.LineGraphDescription[] | null;
                /** Internal tooltip information */
                protected __tooltipInformation: {
                    show: boolean;
                    isActive: boolean;
                    time: number;
                    points: TcHmiTrendLineChart.TooltipInformationObject[];
                    errors: TcHmiTrendLineChart.TooltipErrorInformationObject[];
                };
                /** Internal start datatype */
                protected __startDatatype: TcHmiTrendLineChart.Datatype | null;
                /** Internal end datatype */
                protected __endDatatype: TcHmiTrendLineChart.Datatype | null;
                /** millisecond offset from the current (not browser) timeZone to utc */
                protected __utcOffset: number;
                private __onAttachedMenuButtonsEvent;
                private __onPressedStopDestroyEvent;
                private __onPressedTimespanStartDestroyEvent;
                private __onPressedDatetimeStartDestroyEvent;
                private __onPressedTimespanEndDestroyEvent;
                private __onPressedDatetimeEndDestroyEvent;
                private __onIsActiveChagedPanxDestroyEvent;
                private __onIsActiveChagedPanxyDestroyEvent;
                private __onIsActiveChagedZoomxDestroyEvent;
                private __onIsActiveChagedZoomxyDestroyEvent;
                private __onPressedResetZoomDestroyEvent;
                private __onPressedResetDestroyEvent;
                private __onPressedOptionsDestroyEvent;
                private __onUserInteractionFinishedStartDestroyEvent;
                private __onUserInteractionFinishedEndDestroyEvent;
                private __onValueChangedTimespanStartDestroyEvent;
                private __onValueChangedTimespanEndDestroyEvent;
                private __onValueChangedDatetimeStartDestroyEvent;
                private __onValueChangedDatetimeEndDestroyEvent;
                /** onValueChanged now */
                protected __nowIsValueChanged: boolean;
                /** LoadingSpinner */
                protected __loadingSpinner: Element;
                /** Touch and hold timer */
                protected __holdTimer: number;
                protected __holdTimerDuration: number;
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
                * Added all munuBar-Items to the menuBar.
                */
                private __addMenuBarControls;
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
                * Check if the string is a Datetime
                */
                isDatetime(date: string | null | undefined): date is string;
                /**
                * Check if the string is a keyWord (Latest, First)
                */
                isKeyword(keyword: string | null): keyword is string;
                /**
                * Check if the string is a timespan
                */
                isTimespan(timespan: string | null | undefined): timespan is string;
                /**
                * Is called if onPressed event of start or stop button has raised.
                */
                private __onPressed;
                /**
                * Is called if onUserInteractionFinished event of start or end combobox has raised.
                */
                private __onUserInteractionFinished;
                /**
                * Is called if activeChangedEvent of toggleButtons has raised.
                */
                private __onIsActiveChaged;
                /**
                * Is called if activeChangedEvent of toggleButtons has raised.
                */
                private __onValueChanged;
                /**
                * Is raised if the control should be redrawn.
                */
                protected __rebuild(): (evt: EventProvider.Event, ctrl?: System.TcHmiControl | undefined) => void;
                /**
                * Is called if timespan or startTime changed.
                */
                protected __openWebsocket(): void;
                /**
                * Convert milliseconds to iso 8601 string
                * @param milliSec - Milliseconds
                */
                protected __milliSecToIso(milliSec: number): string;
                /**
                * Convert iso 8601 string to milliseconds
                * @param t - Iso 8601 string
                */
                protected __isoToMilliSec(t: string): number;
                /**
                * Is called from __onWebSocketOpen and called getTrendLineData from Historize-Extension.
                */
                protected __getData(): void;
                /**
                * Is raised if the requestDisplay callback is raised.
                */
                protected __getDataCallback(): (this: void, result: Server.IResultObject) => void;
                /**
               * Reset the linechart before the last manipulation was made
               */
                protected __resetBeforeLastManipulation(): void;
                /**
                * Is called initial and and if size changed.
                */
                protected __drawLineChart(): void;
                /**
                * Calculated width and height of charting element.
                */
                protected __calcSizes(): {
                    width: number | null;
                    height: number | null;
                };
                /**
                * Reset the linechart
                */
                protected __reset(): void;
                /**
                * Create a tooltip if the offsetX and offsetY value is on a point.
                * @param offsetX The x coordinate of the mouse or touch.
                * @param offsetY The y coordinate of the mouse or touch.
                * @param activate The value if the tooltip should be activated.
                */
                protected __createTooltip(offsetX: number, offsetY: number, activate: boolean): void;
                /**
                * Create a tooltip if the offsetX and offsetY value is on a point.
                * @param offsetX The x coordinate of the mouse or touch.
                * @param offsetY The y coordinate of the mouse or touch.
                * @param activate The value if the tooltip should be activated.
                */
                protected __createTooltipFromTouch(offsetX: number, offsetY: number): void;
                /**
               * Is raised if mouseMove on canvasDrawing.
               * @param e - The event of mouseMove.
               */
                protected __onMouseMoveTooltip(): (e: MouseEvent) => void;
                /**
                * Is raised if click on canvasDrawing.
                * @param e - The event of click.
                */
                protected __onClick(): (e: MouseEvent) => void;
                /**
                * Is raised if mouseDown on canvasDrawing.
                * @param e - The event of mouseDown.
                */
                protected __onMouseDown(): (e: MouseEvent) => void;
                /**
                * Is raised if mouseMove on document.
                * @param e - The event of mouseMove.
                */
                protected __onMouseMove(): (e: MouseEvent) => void;
                /**
                * Is raised if mouseUp on document.
                * @param e - The event of mouseDown.
                */
                protected __onMouseUp(): (e: MouseEvent) => void;
                /**
                * Is raised if touchStart on canvasDrawing.
                * @param e - The event of touchStart.
                */
                protected __onTouchStart(): (e: TouchEvent) => void;
                /**
                * Is raised if touchMove on document.
                * @param e - The event of touchMove.
                */
                protected __onTouchMove(): (e: TouchEvent) => void;
                /**
                * Is raised if touchEnd on document.
                * @param e - The event of touchEnd.
                */
                protected __onTouchEnd(): (e: TouchEvent) => void;
                /**
                 * Transforms client coordinates of mouse and touch events into the coordinate system of the target element.
                 * Respects translation and sscaling.
                 * @param clientX The x coordinate.
                 * @param clientY The y coodinate.
                 * @param targetElement The target element.
                 */
                protected __transformEventCoords(clientX: number, clientY: number, targetElement?: Element): {
                    x: number;
                    y: number;
                };
                /**
                * Is called from onTouchStart and onMouseDown.
                * @param x The x coordinate of the mouse or touch.
                * @param y The y coordinate of the mouse or touch.
                */
                protected __userInteractionStart(x: number, y: number): void;
                /**
                * Is called from onTouchMove and onMouseMove.
                * @param x The x coordinate of the mouse or touch.
                * @param y The y coordinate of the mouse or touch.
                */
                protected __userInteractionMove(x: number, y: number): void;
                /**
                * Is called from onTouchEnd and onMouseUp.
                * Resets this.__drawing on canvas.
                * Zoom mode:    Clears the canvas.
                * Pan mode:     resets this.__drawing.
                */
                protected __userInteractionEnd(): void;
                /**
               * MultitouchStarting.
               * @param e The touch event if more than one finger is touched.
               */
                protected __userMultitouchStart(e: TouchEvent): void;
                /**
                * MultitouchMoving.
                * @param e The touch event if more than one finger is touched.
                */
                protected __userMultitouchMove(e: TouchEvent): void;
                /**
                * MultitouchEnd.
                * @param e The touch event if more than one finger is touched.
                */
                protected __userMultitouchEnd(e: TouchEvent): void;
                /**
                * Is raised if mouseDown on canvasDrawing.
                * @param e - The event of mouseDown.
                */
                protected __onMouseWheel(): (e: WheelEvent) => void;
                /**
                * Sets the xAxis of the xAxisFormat order attribute.
                * @param xAxis The new xAxisFormat method.
                */
                setXAxisFormat(valueNew: TcHmi.IFunction | null): void;
                /**
                 * The watch callback for the xAxisFormat object resolver.
                 */
                protected __onResolverForXAxisFormatWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<IFunction>) => void;
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
                * Is raised if the x axis label is drawing.
                */
                protected __xAxisCallbackFunction(): (result: number) => string | null;
                /**
                * Stop to become new data. Get only the actually data clipping. Sets new values for __internalStart and __internalEnd.
                */
                stop(): void;
                /**
                * Called stop function.
                */
                pause(): void;
                /**
                * Reset the timespan before zooming.
                */
                resetZoom(): void;
                /**
                * Reset all interactions, set internalStart and internalEnd to start and end.
                */
                reset(): void;
                /**
                * Called reset function.
                */
                play(): void;
                /**
                * Show options-div (with buttons which can not be shown)
                */
                showOptions(): void;
                /**
                * Calculated which menuButtons added to topMostLayer
                */
                __calcMenuButtons(): void;
                /**
                * Set the isEnable attribute to false at start, panx, panxy, zoomx, zoomxy and to true at stop menuButton.
                */
                private __setMenuButtonsFromStart;
                /**
                * Set the isEnable attribute to true at start, panx, panxy, zoomx, zoomxy and to false at stop menuButton.
                */
                private __setMenuButtonsFromStop;
                /**
               * Sets the background value and calls the associated process function (processSectionsBackground).
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
                * Sets the value of yAxisWidth
                * @param valueNew The new value for yAxisWidth
                */
                setYAxisWidth(valueNew: number | null): void;
                /**
                * Gets the value of yAxisWidth
                */
                getYAxisWidth(): number | undefined;
                /**
                * Processes yAxisWidth
                */
                protected __processYAxisWidth(): void;
                /**
                * Sets the value of yLabelFontFamily
                * @param valueNew The new value for yLabelFontFamily
                */
                setYLabelFontFamily(valueNew: FontFamily | null): void;
                /**
                * Gets the value of yLabelFontFamily
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
                */
                getYLabelFontWeight(): "Normal" | "Bold" | "Auto" | undefined;
                /**
                * Processes yLabelFontWeight
                */
                protected __processYLabelFontWeight(): void;
                /**
                * Sets the value of yMainTickSteps
                * @param valueNew The new value for yMainTickSteps
                */
                setYMainTickSteps(valueNew: number | null): void;
                /**
                * Gets the value of yMainTickSteps
                */
                getYMainTickSteps(): number | undefined;
                /**
                * Processes yMainTickSteps
                */
                protected __processYMainTickSteps(): void;
                /**
                * Sets the value of showYSubTicks
                * @param valueNew The new value for showYSubTicks
                */
                setShowYSubTicks(valueNew: boolean | null): void;
                /**
                * Gets the value of showYSubTicks
                */
                getShowYSubTicks(): boolean | undefined;
                /**
                * Processes showYSubTicks
                */
                protected __processShowYSubTicks(): void;
                /**
                * Sets the value of ySubTickSteps
                * @param valueNew The new value for ySubTickSteps
                */
                setYSubTickSteps(valueNew: number | null): void;
                /**
                * Gets the value of ySubTickSteps
                */
                getYSubTickSteps(): number | null | undefined;
                /**
                * Processes ySubTickSteps
                */
                protected __processYSubTickSteps(): void;
                /**
                * Sets the value of showXAxis
                * @param valueNew The new value for showXAxis
                */
                setShowXAxis(valueNew: boolean | null): void;
                /**
                * Gets the value of showXAxis
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
                */
                getXShowLabels(): boolean | undefined;
                /**
                 * Processes xShowLabels
                */
                protected __processXShowLabels(): void;
                /**
                * Sets the value of xMainTickSteps
                * @param valueNew The new value for xMainTickSteps
                */
                setXMainTickSteps(valueNew: number | null): void;
                /**
                * Gets the value of xMainTickSteps
                */
                getXMainTickSteps(): number | undefined;
                /**
                * Processes xMainTickSteps
                */
                protected __processXMainTickSteps(): void;
                /**
                * Sets the value of showXSubTicks
                * @param valueNew The new value for showXSubTicks
                */
                setShowXSubTicks(valueNew: boolean | null): void;
                /**
                * Gets the value of showXSubTicks
                */
                getShowXSubTicks(): boolean | undefined;
                /**
                * Processes showXSubTicks
                */
                protected __processShowXSubTicks(): void;
                /**
                * Sets the value of xSubTickSteps
                * @param valueNew The new value for xSubTickSteps
                */
                setXSubTickSteps(valueNew: number | null): void;
                /**
                * Gets the value of xSubTickSteps
                */
                getXSubTickSteps(): number | null | undefined;
                /**
                * Processes xSubTickSteps
                */
                protected __processXSubTickSteps(): void;
                /**
                * Sets the value of xLabelFontFamily
                * @param valueNew The new value for xLabelFontFamily
                */
                setXLabelFontFamily(valueNew: FontFamily | null): void;
                /**
                * Gets the value of xLabelFontFamily
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
                */
                getXAxisWidth(): number | undefined;
                /**
                * Processes xAxisWidth
                */
                protected __processXAxisWidth(): void;
                /**
                * Sets the xAxisColor value and calls the associated process function (processXAxisColor).
                * @param valueNew The new value for the xAxisColor attribute as json string.
                */
                setXAxisColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the xAxisColor object resolver.
                 */
                protected __onResolverForXAxisColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current xAxisColor value.
                */
                getXAxisColor(): SolidColor | null | undefined;
                /**
                * Processes the current xAxisColor attribute.
                */
                protected __processXAxisColor(): void;
                /**
                * Sets the value of showXAxisName
                * @param valueNew The new value for showXAxisName
                */
                setShowXAxisName(valueNew: boolean | null): void;
                /**
                * Gets the value of showXAxisName
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
                */
                getXAxisNameFontColor(): SolidColor | null | undefined;
                /**
                * Processes the current xAxisNameFontColor attribute.
                */
                protected __processXAxisNameFontColor(): void;
                /**
                * Sets the value of the member variable 'yAxis' if the new value is not equal to the current value
                * and calls the associated process function (processYAxis) after that.
                * @param valueNew The new value for yAxis.
                */
                setYAxis(valueNew: TcHmiTrendLineChart.YAxis[] | null): void;
                /**
                 * The watch callback for the yAxis object resolver.
                 */
                protected __onResolverForYAxisWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiTrendLineChart.YAxis[]>) => void;
                /**
                * Returns the current value of the member variable yAxis.
                */
                getYAxis(): TcHmiTrendLineChart.YAxis[] | null | undefined;
                /**
                * Processes the current value of yAxis.
                */
                protected __processYAxis(): void;
                /**
                * Sets the value of the member variable 'lineGraphDescriptions' if the new value is not equal to the current value
                * and calls the associated process function (processlineGraphDescriptions) after that.
                * @param valueNew The new value for lineGraphDescriptions.
                */
                setLineGraphDescriptions(valueNew: TcHmiTrendLineChart.LineGraphDescription[] | null): void;
                /**
                 * The watch callback for the lineGraphDescriptions object resolver.
                 */
                protected __onResolverForLineGraphDescriptionsWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiTrendLineChart.LineGraphDescription[]>) => void;
                /**
                * Returns the current value of the member variable lineGraphDescriptions.
                */
                getLineGraphDescriptions(): TcHmiTrendLineChart.LineGraphDescription[] | null | undefined;
                /**
                * Processes the current value of lineGraphDescriptions.
                */
                protected __processLineGraphDescriptions(): void;
                /**
                * Sets the value of showGrid
                * @param valueNew The new value for showGrid
                */
                setShowGrid(valueNew: boolean | null): void;
                /**
                * Gets the value of showGrid
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
                */
                getSubgridShowHorizontalLines(): boolean | undefined;
                /**
                * Processes subgridShowHorizontalLines
                */
                protected __processSubgridShowHorizontalLines(): void;
                /**
                * Sets the value of subgridShowVerticalLines
                * @param valueNew The new value for subgridShowVerticalLines
                */
                setSubgridShowVerticalLines(valueNew: boolean | null): void;
                /**
                * Gets the value of subgridShowVerticalLines
                */
                getSubgridShowVerticalLines(): boolean | undefined;
                /**
                * Processes subgridShowVerticalLines
                */
                protected __processSubgridShowVerticalLines(): void;
                /**
                * Sets the value of subgridLineWidth
                * @param valueNew The new value for subgridLineWidth
                */
                setSubgridLineWidth(valueNew: number | null): void;
                /**
                * Gets the value of subgridLineWidth
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
                setSubgridLineStyle(valueNew: TcHmiTrendLineChart.LineStyle | null): void;
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
                */
                getSubgridLineColor(): SolidColor | null | undefined;
                /**
                * Processes the current subgridLineColor attribute.
                */
                protected __processSubgridLineColor(): void;
                /**
                * Sets the value of showMenuBar
                * @param valueNew The new value for showMenuBar
                */
                setShowMenuBar(valueNew: boolean | null): void;
                /**
                * Gets the value of showMenuBar
                */
                getShowMenuBar(): boolean | undefined;
                /**
                * Processes showMenuBar
                */
                protected __processShowMenuBar(): void;
                /**
                * Sets the value of menuBarPosition
                * @param valueNew The new value for menuBarPosition
                */
                setMenuBarPosition(valueNew: string): void;
                /**
                * Gets the value of menuBarPosition
                */
                getMenuBarPosition(): string | undefined;
                /**
                * Processes menuBarPosition.
                */
                protected __processMenuBarPosition(): void;
                /**
                * Sets the font size and calls the associated process function (processMenuBarLabelFontSize).
                * @param valueNew The new value for menuBarLabelFontSize.
                */
                setMenuBarLabelFontSize(valueNew: number | null): void;
                /**
                * Returns the current value of menuBarLabelFontSize.
                * @returns The current value of menuBarLabelFontSize.
                */
                getMenuBarLabelFontSize(): number | undefined;
                /**
                * Processes the current menuBarLabelFontSize attribute value.
                */
                protected __processMenuBarLabelFontSize(calcButtons?: boolean): void;
                /**
                * Sets the font size unit and calls the associated process function (processMenuBarLabelFontSizeUnit).
                * @param valueNew The new value for menuBarLabelFontSizeUnit.
                */
                setMenuBarLabelFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                * Returns the current value of menuBarLabelFontSizeUnit.
                * @returns The current value of menuBarLabelFontSizeUnit.
                */
                getMenuBarLabelFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                * Processes the current menuBarLabelFontSizeUnit attribute value.
                */
                protected __processMenuBarLabelFontSizeUnit(calcButtons?: boolean): void;
                /**
                * Sets the font family and calls the associated process function (processMenuBarLabelFontFamily).
                * @param valueNew The new value for menuBarLabelFontFamily.
                */
                setMenuBarLabelFontFamily(valueNew: FontFamily | null): void;
                /**
                * Returns the current value of menuBarLabelFontFamily.
                * @returns The current value of menuBarLabelFontFamily.
                */
                getMenuBarLabelFontFamily(): string | null | undefined;
                /**
                * Processes the current menuBarLabelFontFamily attribute value.
                */
                protected __processMenuBarLabelFontFamily(calcButtons?: boolean): void;
                /**
                * Sets the font style and calls the associated process function (processMenuBarLabelFontStyle).
                * @param valueNew The new value for menuBarLabelFontStyle.
                */
                setMenuBarLabelFontStyle(valueNew: FontStyle | null): void;
                /**
                * Returns the current value of menuBarLabelFontStyle.
                * @returns The current value of menuBarLabelFontStyle.
                */
                getMenuBarLabelFontStyle(): "Normal" | "Auto" | "Italic" | "Oblique" | undefined;
                /**
                * Processes the current menuBarLabelFontStyle attribute value.
                */
                protected __processMenuBarLabelFontStyle(calcButtons?: boolean): void;
                /**
                * Sets the font weight and calls the associated process function (processMenuBarLabelFontWeight).
                * @param valueNew The new value for menuBarLabelFontWeight.
                */
                setMenuBarLabelFontWeight(valueNew: FontWeight | null): void;
                /**
                * Returns the current value of menuBarLabelFontWeight.
                * @returns The current value of menuBarLabelFontWeight.
                */
                getMenuBarLabelFontWeight(): "Normal" | "Bold" | "Auto" | undefined;
                /**
                * Processes the current menuBarLabelFontWeight attribute value.
                */
                protected __processMenuBarLabelFontWeight(calcButtons?: boolean): void;
                /**
                * Sets the menuBarLabelFont color and calls the associated process function (processMenuBarLabelFontColor).
                * @param valueNew The new value for menuBarLabelFontFColor.
                */
                setMenuBarLabelFontColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the menuBarLabelFontColor object resolver.
                 */
                protected __onResolverForMenuBarLabelFontColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of menuBarLabelFontColor.
                * @returns The current value of menuBarLabelFontColor.
                */
                getMenuBarLabelFontColor(): SolidColor | null | undefined;
                /**
                * Processes the current menuBarLabelFontColor attribute value.
                */
                protected __processMenuBarLabelFontColor(calcButtons?: boolean): void;
                /**
                * Sets the value of showTooltip
                * @param valueNew The new value for showTooltip
                */
                setShowTooltip(valueNew: boolean | null): void;
                /**
                * Gets the value of showTooltip
                */
                getShowTooltip(): boolean | undefined;
                /**
                * Processes showTooltip
                */
                protected __processShowTooltip(): void;
                /**
                * Sets the value of the tooltipFormat order attribute.
                * @param value The new tooltipFormat method.
                */
                setTooltipFormat(valueNew: TcHmi.IFunction | null): void;
                /**
                 * The watch callback for the tooltipFormat object resolver.
                 */
                protected __onResolverForTooltipFormatWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<IFunction>) => void;
                /**
                 * Gets the current tooltipFormat method.
                 * @returns the current tooltipFormat method.
                 */
                getTooltipFormat(): IFunction | null | undefined;
                /**
                 * Processes the current tooltipFormat method
                 */
                protected __processTooltipFormat(): void;
                /**
                * Executes the current tooltipErrorFormat function.
                * @param first The first message to compare.
                * @param second The second message to compare.
                */
                private __executeTooltipFormatFunction;
                /**
                * Sets the value of tooltipFontFamily
                * @param valueNew The new value for tooltipFontFamily
                */
                setTooltipFontFamily(valueNew: FontFamily | null): void;
                /**
                * Gets the value of tooltipFontFamily
                */
                getTooltipFontFamily(): string | undefined;
                /**
                * Processes tooltipFontFamily
                */
                protected __processTooltipFontFamily(): void;
                /**
                * Sets the value of tooltipFontSize
                * @param valueNew The new value for tooltipFontSize
                */
                setTooltipFontSize(valueNew: number | null): void;
                /**
                * Gets the value of tooltipFontSize
                */
                getTooltipFontSize(): number | undefined;
                /**
                * Processes tooltipFontSize
                */
                protected __processTooltipFontSize(): void;
                /**
                * Sets the value of tooltipFontSizeUnit
                * @param valueNew The new value for tooltipFontSizeUnit
                * Possible Values: px, %
                */
                setTooltipFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                * Gets the value of tooltipFontSizeUnit
                */
                getTooltipFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                * Processes tooltipFontSizeUnit
                */
                protected __processTooltipFontSizeUnit(): void;
                /**
                * Sets the value of tooltipFontWeight
                * @param valueNew The new value for tooltipFontWeight
                * Possible Values: normal, bold
                */
                setTooltipFontWeight(valueNew: FontWeight | null): void;
                /**
                * Gets the value of tooltipFontWeight
                */
                getTooltipFontWeight(): "Normal" | "Bold" | "Auto" | undefined;
                /**
                * Processes tooltipFontWeight
                */
                protected __processTooltipFontWeight(): void;
                /**
                * Sets the tooltipFontColor value and calls the associated process function (processTooltipFontColor).
                * @param valueNew The new value for the tooltipFontColor attribute as json string.
                */
                setTooltipFontColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the tooltipFontColor object resolver.
                 */
                protected __onResolverForTooltipFontColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current tooltipFontColor value.
                */
                getTooltipFontColor(): SolidColor | null | undefined;
                /**
                * Processes the current tooltipFontColor attribute.
                */
                protected __processTooltipFontColor(): void;
                /**
                * Sets the background value and calls the associated process function.
                * @param valueNew The new value for the background attribute as json string.
                */
                setTooltipBackgroundColor(valueNew: Color | null): void;
                /**
                 * The watch callback for the tooltipBackgroundColor object resolver.
                 */
                protected __onResolverForTooltipBackgroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
                /**
                * Returns the current background value.
                * @returns The current value of the background member variable as json in string format.
                */
                getTooltipBackgroundColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
              * Processes the current border-color attribute.
              */
                protected __processTooltipBackgroundColor(): void;
                /**
                * Sets the interval and calls the associated process function (processInterval).
                * @param valueNew The new value for interval.
                */
                setInterval(valueNew: number | null): void;
                /**
                * Returns the current value of interval.
                */
                getInterval(): number | undefined;
                /**
                * Processes the current interval attribute value.
                */
                protected __processInterval(): void;
                /**
                * Sets the value of start
                * @param valueNew The new value for start
                */
                setStart(valueNew: string | null | undefined): void;
                /**
                * Gets the value of start
                */
                getStart(): string | null | undefined;
                /**
                 * Returns the actual StatTime.
                 * @returns The actual startTime.
                 */
                getActualStartTime(): string | null;
                /**
                * Processes start
                */
                protected __processStart(): void;
                /**
                * Sets the value of end
                * @param valueNew The new value for end
                */
                setEnd(valueNew: string | null | undefined): void;
                /**
                * Gets the value of end
                */
                getEnd(): string | null | undefined;
                /**
                 * Returns the actual endTime.
                 * @returns The actual endTime.
                 */
                getActualEndTime(): string | null;
                protected __moveUtcToTimeZone(isoString: string): string;
                protected __moveTimeZoneToUtc(timeZoneIsoString: string): string | null;
                /**
                * Processes end
                */
                protected __processEnd(): void;
                /**
                * Sets the mouseMode to zooming or panning
                * @param valueNew The new value for mouseMode
                */
                setMouseMode(valueNew: TcHmiTrendLineChart.MouseMode): void;
                /**
                * Gets the value of mouseMode
                */
                getMouseMode(): TcHmiTrendLineChart.MouseMode;
                /**
                * Processes the current value of attribute symbolList.
                */
                protected __processMouseMode(): void;
                /**
                * Sets the mouseMode to zooming or panning
                * @param valueNew The new value for mouseMode
                */
                setServerDomain(valueNew: string): void;
                /**
                * Gets the value of mouseMode
                */
                getServerDomain(): string | undefined;
                /**
                * Processes the current value of attribute symbolList.
                */
                protected __processServerDomain(): void;
                /**
                 * Processes the current enabled state.
                 */
                __processIsEnabled(): void;
            }
            module TcHmiTrendLineChart {
                interface YAxis {
                    id: number;
                    position: TcHmiTrendLineChart.AxisPosition;
                    mainTickMinValue?: number;
                    mainTickMaxValue?: number;
                    showLabels?: boolean;
                    labelFontColor?: TcHmi.SolidColor;
                    axisColor?: TcHmi.SolidColor;
                    showAxisName?: boolean;
                    axisName?: string;
                    axisNameFontFamily?: FontFamily | null;
                    axisNameFontSize?: number;
                    axisNameFontSizeUnit?: TcHmi.FontSizeUnit;
                    axisNameFontWeight?: TcHmi.FontWeight;
                    axisNameFontColor?: TcHmi.SolidColor;
                    decimalPlaces?: number;
                    unit?: string;
                    autoScaling?: boolean;
                }
                interface LineGraphDescription {
                    symbol: string;
                    yAxisId?: number;
                    lineWidth?: number;
                    lineColor?: TcHmi.SolidColor;
                    pointDot?: boolean;
                    pointDotInStopMode?: boolean;
                    pointDotRadius?: number;
                    pointDotFillColor?: TcHmi.SolidColor;
                    pointDotStrokeWidth?: number;
                    pointDotStrokeColor?: TcHmi.SolidColor;
                }
                enum MouseMode {
                    ZoomX = 0,
                    ZoomXY = 1,
                    PanX = 2,
                    PanXY = 3
                }
                enum MenuBarPosition {
                    Bottom = 0,
                    Top = 1
                }
                enum Datatype {
                    Datetime = 0,
                    Timespan = 1,
                    Keyword = 2
                }
                interface Point {
                    x: number;
                    y?: number;
                    isArea: boolean;
                    bindPoints: boolean;
                }
                enum AxisPosition {
                    Left = 0,
                    Right = 1
                }
                interface ServerPoint {
                    x: number;
                    y?: number;
                    error?: number;
                }
                interface TooltipInformationObject {
                    point: {
                        x: number;
                        y: number;
                    };
                    symbolname: string;
                    yAxis: TcHmiTrendLineChart.YAxis;
                }
                interface TooltipErrorInformationObject {
                    yAxis: null | TcHmiTrendLineChart.YAxis;
                    beginTime: number;
                    endTime: number;
                    errorCode: number | undefined | null;
                    symbolname: string;
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
