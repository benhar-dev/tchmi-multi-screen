declare module TcHmi {
    module Controls {
        module System {
            class TcHmiContainerControl extends TcHmi.Controls.System.TcHmiControl {
                /** Constructor */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __widthMode: SizeModeWithContent | undefined;
                protected __heightMode: SizeModeWithContent | undefined;
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
                 * Sets __keepAlive
                 * @param value
                 */
                __setKeepAlive(value: boolean): void;
                /**
                 * Get all children controls
                 */
                getChildren(): TcHmi.Controls.System.baseTcHmiControl[];
                /**
                 * Adds a child to the __children Array and links the parent. No DOM insertion is done!
                 */
                addChild(control: TcHmi.Controls.System.baseTcHmiControl | undefined | null, pos?: number | null): void;
                __addChild(control: TcHmi.Controls.System.baseTcHmiControl, pos?: number | null): void;
                /**
                 * Remove a child control.
                 */
                removeChild(control: TcHmi.Controls.System.baseTcHmiControl | undefined | null): void;
                __removeChild(control: TcHmi.Controls.System.baseTcHmiControl): void;
                /**
                * Processes the current height and height unit.
                */
                __processHeight(callerControl?: TcHmiControl): void;
                /**
                * Processes the current width and width unit.
                */
                __processWidth(callerControl?: TcHmiControl): void;
                /**
                * Sets the value of the width mode attribute.
                * @param valueNew The new width mode value..
                */
                setWidthMode(valueNew: SizeModeWithContent | null): void;
                /**
                * Sets the value of the height mode attribute.
                * @param valueNew The new height mode value..
                */
                setHeightMode(valueNew: SizeModeWithContent | null): void;
                /**
                 * Returns the calculated width in pixel if self defined (not percent based) or based on the children.
                 */
                __getContentWidth(): number | null;
                /**
                 * Returns the calculated height in pixel if self defined (not percent based) or based on the children.
                 */
                __getContentHeight(): number | null;
            }
        }
    }
}
