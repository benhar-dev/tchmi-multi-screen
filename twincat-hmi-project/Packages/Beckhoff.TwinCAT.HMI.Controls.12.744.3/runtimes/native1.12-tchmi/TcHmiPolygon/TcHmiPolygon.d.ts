declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiPolygon extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** Reference to the root dom element of the current control template as jquery object. */
                protected __elementTemplateRoot: JQuery;
                /** Reference to the underlying html svg element as jquery object. */
                protected __elementSvg: JQuery;
                /** Reference to the underlying html svg polygon element as jquery object. */
                protected __elementSvgPolygon: JQuery;
                /**
                * Internal reference to the attribute 'data-tchmi-fill-color'.
                */
                protected __fillColor: TcHmi.Color | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-stroke-color'
                */
                protected __strokeColor: TcHmi.SolidColor | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-fill-mode'
                */
                protected __fillMode: 'NonZero' | 'EvenOdd' | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-stroke-thickness'
                */
                protected __strokeThickness: number | null | undefined;
                /**
               * Internal reference to the attribute 'data-tchmi-stroke-style'
               * Example: '2,2'
               */
                protected __strokeStyle: string | null | undefined;
                /**
               * Internal reference to the attribute 'data-tchmi-points'
               * Example: '10,10 20,20''
               */
                protected __points: string | null | undefined;
                /**
                 * Internal reference to the attribute 'data-tchmi-scaleMode'
                 */
                protected __scaleMode: ScaleModeString | undefined;
                protected __resizedEventDestroyEvent: DestroyFunction | null;
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
                 * Returns an event handler function for the onResized event.
                 */
                protected __onResized(): (evt: EventProvider.Event, ctrl: Controls.System.TcHmiControl) => void;
                /**
                * Sets the fillColor attribute to a new value.
                * @param valueNew The new value for the fillColor attribute;
                */
                setFillColor(valueNew: Color | null): void;
                /**
                 * The watch callback for the fillColor object resolver.
                 */
                protected __onResolverForFillColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
                /**
               * @returns The current value of the fillColor attribute.
                */
                getFillColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
                * Processes the current value of attribute fillColor.
                */
                protected __processFillColor(): void;
                /**
                * Sets the fillMode value and calls the associated process function (processFillMode).
                * @param valueNew The new value for fillMode.
                *                                       Possible Values: 'Filled', 'None'
                */
                setFillMode(valueNew: 'NonZero' | 'EvenOdd' | null): void;
                /**
                * Returns the current value of fillMode.
                * @returns The current value of fillMode.
                *                              Possible Values: 'Filled', 'None'
                */
                getFillMode(): "NonZero" | "EvenOdd" | undefined;
                /**
                * Processes the current fillMode attribute value.
                */
                protected __processFillMode(): void;
                /**
                * Sets the stroke color attribute to a new value.
                * @param valueNew The new value for the stroke color attribute;
                */
                setStrokeColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the strokeColor object resolver.
                 */
                protected __onResolverForStrokeColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * @returns The current value of the strokeColor attribute.
                */
                getStrokeColor(): SolidColor | null | undefined;
                /**
                * Processes the current value of attribute strokeColor.
                */
                protected __processStrokeColor(): void;
                /**
                * Sets the stroke style and calls the associated process function (processStrokeStyle).
                * @param valueNew The new value for strokeStyle.
                */
                setStrokeStyle(valueNew: string | null): void;
                /**
                * Returns the current value of strokeStyle.
                * @returns The current value of strokeStyle.
                */
                getStrokeStyle(): string | null | undefined;
                /**
                * Processes the current strokeStyle attribute value.
                */
                protected __processStrokeStyle(): void;
                /**
                * Sets the stroke thickness and calls the associated process function (processStrokeThickness).
                * @param valueNew The new value for strokeThickness.
                */
                setStrokeThickness(valueNew: number | null): void;
                /**
                * Returns the current value of strokeThickness.
                * @returns The current value of strokeThickness.
                */
                getStrokeThickness(): number | null | undefined;
                /**
                * Processes the current strokeThickness attribute value.
                */
                protected __processStrokeThickness(): void;
                /**
               * Returns the current value of the member variable rowHeightUnit.
               */
                getStrokeThicknessUnit(): string;
                /**
                * Empty function for compatibility
                */
                protected __processStrokeThicknessUnit(): void;
                /**
                * Sets the points and calls the associated process function (processPoints).
                * @param valueNew The new value for points.
                */
                setPoints(valueNew: string | null): void;
                /**
                * Returns the current value of points.
                * @returns The current value of points.
                */
                getPoints(): string | null | undefined;
                /**
                * Processes the current points attribute value.
                */
                protected __processPoints(): void;
                /**
                * Sets the scaleMode and calls the associated process function (processScaleMode).
                * @param valueNew The new value for scaleMode.
                */
                setScaleMode(valueNew: ScaleModeString | null): void;
                /**
                * Returns the current value of scaleMode.
                * @returns The current value of scaleMode.
                */
                getScaleMode(): "None" | "ScaleToFill" | "ScaleToFit" | "ScaleToFitWidth" | "ScaleToFitHeight" | undefined;
                /**
                * Processes the current scaleMode attribute value.
                */
                protected __processScaleMode(): void;
            }
        }
    }
}
