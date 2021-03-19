declare module TcHmi {
    module Controls {
        module System {
            class TcHmiRegion extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** Html template loaded from templateCache. */
                protected __template: string | undefined;
                /**  Internal reference to the attribute "data-tchmi-target-content" */
                protected __targetContent: string | null | undefined;
                protected __targetContentMarkup: string | null | undefined;
                /** Current Content Markup */
                protected __targetMarkup: string | null;
                /** Current Content Object */
                protected __currentContent: TcHmi.Controls.System.baseTcHmiControl | null;
                protected __widthMode: SizeModeWithContent | undefined;
                protected __heightMode: SizeModeWithContent | undefined;
                /**  Internal reference to the attribute "data-tchmi-scale-mode" */
                protected __scaleMode: ScaleModeString | undefined;
                /**  Internal reference to the attribute "data-tchmi-size-mode" */
                protected __scrolling: 'No' | 'Yes' | 'Auto' | undefined;
                protected __elementTemplateRoot: JQuery;
                private __onResizedEventDestroyEvent;
                private __onContentChangedEventDestroyEvent;
                private __onContentCreatedEventDestroyEvent;
                private __onContentRemovedEventDestroyEvent;
                private __xhr;
                private __destroyRequestCurrentPartialContent;
                protected __processTargetMarkupTimeout1: number;
                protected __processTargetMarkupTimeout2: number;
                protected readonly __processTargetMarkupLoadingSpinnerDiv: Element;
                protected __processTargetMarkupOldContent: baseTcHmiControl | null;
                protected __processTargetMarkupOldContentOldOpacity: string;
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
                 * @param url
                 */
                private __tryContentRefresh;
                private __onContentChanged;
                private __onContentCreated;
                private __onContentRemoved;
                protected __onResized(): (e: EventProvider.Event, data: any) => void;
                /**
                 * Checks if partial does alredy exist in parent hierarchy of current region instance!
                 * @param partial
                 */
                protected __isRecursionSave(path: string): boolean;
                /**
                * Sets the value of the width mode attribute.
                * @param valueNew - The new width mode value..
                */
                setWidthMode(valueNew: SizeModeWithContent | null): void;
                /**
                * Processes the current width and width unit.
                */
                __processWidth(callerControl?: TcHmiControl): void;
                /**
                * Sets the value of the height mode attribute.
                * @param valueNew - The new height mode value..
                */
                setHeightMode(valueNew: SizeModeWithContent | null): void;
                /**
                * Processes the current height and height unit.
                */
                __processHeight(callerControl?: TcHmiControl): void;
                /**
                 * Returns the calculated width in pixel if self defined (not percent based) or based on the content control.
                 */
                __getContentWidth(): number | null;
                /**
                 * Returns the calculated height in pixel if self defined (not percent based) or based on the content control.
                 */
                __getContentHeight(): number | null;
                /**
                 * Sets the content value and calls the associated process function (processContent).
                 * @param valueNew - The new value for the content attribute as string. Relative path value.
                */
                setTargetContent(valueNew: string | null): void;
                /**
                * Returns the current content value.
                * @returns The current value of the content member variable as string. Relative path value.
                */
                getTargetContent(): string | null | undefined;
                /**
                 * Destroy and remove currently existing content...
                 */
                private __destroyTargetobjObject;
                /**
                * Processes the current content value.
                * @param override
                */
                protected __processTargetContent(override?: string | null): void;
                protected __processTargetMarkup(controlId?: string): void;
                /**
                * Processes the current isEnabled attribute value and of its target.
                */
                __processIsEnabled(): void;
                /**
                * Processes the current AccessConfig attribute value and of its target.
                */
                __processAccessConfig(): void;
                setScaleMode(valueNew: ScaleModeString | null): void;
                getScaleMode(): "None" | "ScaleToFill" | "ScaleToFit" | "ScaleToFitWidth" | "ScaleToFitHeight" | undefined;
                protected __processScaleMode(): void;
                setScrolling(valueNew: 'No' | 'Yes' | 'Auto' | null): void;
                getScrolling(): "No" | "Yes" | "Auto" | undefined;
                protected __processScrolling(): void;
                /**
                * Return the currently loaded TcHmiContent control object.
                */
                getCurrentContent(): TcHmiContent | null;
            }
        }
    }
}
