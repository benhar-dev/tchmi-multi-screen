declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiLine extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** member variables */
                /** Reference to the root dom element of the current control template as jquery object. */
                protected __elementTemplateRoot: JQuery;
                /** Reference to the underlying html svg element as jquery object. */
                protected __elementSvg: JQuery;
                /** Reference to the underlying html svg line element as jquery object. */
                protected __elementSvgLine: JQuery;
                /**
                * Internal reference to the attribute 'data-tchmi-stroke-color'
                */
                protected __strokeColor: TcHmi.SolidColor | null | undefined;
                /**
                * Internal reference to the attribute 'data-tchmi-stroke-thickness'
                */
                protected __strokeThickness: number | null | undefined;
                /**
               * Internal reference to the attribute 'data-tchmi-stroke-style'
               * Example: "2,2"
               */
                protected __strokeStyle: string | undefined;
                /**
               * Internal reference to the attribute 'data-tchmi-x1'
               */
                protected __x1: number | undefined;
                /**
               * Internal reference to the attribute 'data-tchmi-y1'
               */
                protected __y1: number | undefined;
                /**
               * Internal reference to the attribute 'data-tchmi-x2'
               */
                protected __x2: number | undefined;
                /**
               * Internal reference to the attribute 'data-tchmi-y2'
               */
                protected __y2: number | undefined;
                /**
                 * Internal reference to the attribute 'data-tchmi-scaleMode'
                 */
                protected __scaleMode: ScaleModeString | undefined;
                /** Event destroyer... */
                protected __resizeEventDestroyEvent: DestroyFunction | null;
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
                getStrokeStyle(): string | undefined;
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
                * Sets the x1 and calls the associated process function (processX1).
                * @param valueNew The new value for x1.
                */
                setX1(valueNew: number | null): void;
                /**
                * Returns the current value of x1.
                * @returns The current value of x1.
                */
                getX1(): number | undefined;
                /**
                * Processes the current x2 attribute value.
                */
                protected __processX1(): void;
                /**
               * Returns the current value of the member variable X1Unit.
               */
                getX1Unit(): string;
                /**
                * Empty function for compatibility
                */
                protected __processX1Unit(): void;
                /**
                * Sets the y1 and calls the associated process function (processY1).
                * @param valueNew The new value for y1.
                */
                setY1(valueNew: number | null): void;
                /**
                * Returns the current value of y1.
                * @returns The current value of y1.
                */
                getY1(): number | undefined;
                /**
                * Processes the current y2 attribute value.
                */
                protected __processY1(): void;
                /**
               * Returns the current value of the member variable Y1Unit.
               */
                getY1Unit(): string;
                /**
                * Empty function for compatibility
                */
                protected __processY1Unit(): void;
                /**
                * Sets the x2 and calls the associated process function (processX2).
                * @param valueNew The new value for x2.
                */
                setX2(valueNew: number | null): void;
                /**
                * Returns the current value of x2.
                * @returns The current value of x2.
                */
                getX2(): number | undefined;
                /**
                * Processes the current x2 attribute value.
                */
                protected __processX2(): void;
                /**
               * Returns the current value of the member variable X2Unit.
               */
                getX2Unit(): string;
                /**
                * Empty function for compatibility
                */
                protected __processX2Unit(): void;
                /**
                * Sets the y2 and calls the associated process function (processY2).
                * @param valueNew The new value for y2.
                */
                setY2(valueNew: number | null): void;
                /**
                * Returns the current value of y2.
                * @returns The current value of y2.
                */
                getY2(): number | undefined;
                /**
                * Processes the current y2 attribute value.
                */
                protected __processY2(): void;
                /**
               * Returns the current value of the member variable Y2Unit.
               */
                getY2Unit(): string;
                /**
                * Empty function for compatibility
                */
                protected __processY2Unit(): void;
                /**
                 * Draws the line.
                 */
                private __drawLine;
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
