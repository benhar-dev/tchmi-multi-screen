declare module TcHmi {
    module Controls {
        module System {
            interface TcHmiUserControlParameter {
                descr: TcHmi.System.ControlAttributeDescription | null;
                value: any;
            }
            class TcHmiUserControlHost extends TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __markup: string | null | undefined;
                protected __config: TcHmi.System.UserControlConfig | null | undefined;
                protected readonly __targetUserControlUrl: string;
                protected readonly __targetUserControlUrlClean: string;
                protected readonly __targetUserControlConfigUrl: string;
                protected readonly __targetUserControlConfigUrlClean: string;
                protected __targetUserControlControlObject: TcHmi.Controls.System.TcHmiUserControl | null;
                protected __params: Map<string, TcHmiUserControlParameter>;
                protected __partialDefaultVirtualRights: Map<string, TcHmi.System.ControlAccessDescription>;
                protected __widthMode: SizeModeWithContent | undefined;
                protected __heightMode: SizeModeWithContent | undefined;
                protected __onUserControlChangedEventDestroyEvent: DestroyFunction | null;
                protected __onUserControlConfigChangedEventDestroyEvent: DestroyFunction | null;
                protected __onUserControlCreatedEventDestroyEvent: DestroyFunction | null;
                protected __onUserControlRemovedEventDestroyEvent: DestroyFunction | null;
                protected __elementTemplateRoot: JQuery;
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
                 * @param e
                 * @param data
                 */
                protected __onUserControlChanged(): (evt: EventProvider.Event, data: {
                    url: string;
                    content: string;
                }) => void;
                /**
                * @param e
                * @param data
                */
                protected __onUserControlConfigChanged(): (evt: EventProvider.Event, data: {
                    url: string;
                }) => void;
                /**
                 * @param e
                 * @param data
                 */
                protected __onUserControlCreated(): (evt: EventProvider.Event, data: {
                    url: string;
                }) => void;
                /**
                * @param e
                * @param data
                */
                protected __onUserControlRemoved(): (evt: EventProvider.Event, data: {
                    url: string;
                }) => void;
                /**
                * Returns the current value of attribute member "targetPartial".
                */
                getTargetUserControl(): string;
                /**
                * Sets the value of the width mode attribute.
                * @param valueNew The new width mode value..
                */
                setWidthMode(valueNew: SizeModeWithContent | null): void;
                /**
                * Processes the current width and width unit.
                */
                __processWidth(callerControl?: TcHmiControl): void;
                /**
                * Sets the value of the height mode attribute.
                * @param valueNew The new height mode value..
                */
                setHeightMode(valueNew: SizeModeWithContent | null): void;
                /**
                * Processes the current height and height unit.
                */
                __processHeight(callerControl?: TcHmiControl): void;
                /**
                 * Returns the calculated width in pixel if self defined (not percent based) or based on the usercontrol.
                 */
                __getContentWidth(): number | null;
                /**
                 * Returns the calculated height in pixel if self defined (not percent based) or based on the usercontrol.
                 */
                __getContentHeight(): number | null;
                /**
                 * Gets virtual access of a user control
                 * @param name name of the control right to fetch
                 */
                getDescriptionAccessByName(name: string | null): TcHmi.System.ControlAccessDescription | null;
            }
        }
    }
}
