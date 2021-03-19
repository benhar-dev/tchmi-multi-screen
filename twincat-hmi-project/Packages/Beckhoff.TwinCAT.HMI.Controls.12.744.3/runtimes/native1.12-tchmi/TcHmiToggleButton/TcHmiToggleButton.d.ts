declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiToggleButton extends TcHmiButton {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /**
                * Internal reference to the attribute 'data-tchmi-toggle-group'.
                */
                protected __toggleGroup: string | null | undefined;
                /**
               * Internal reference to the attribute 'data-tchmi-toggle-state'.
               */
                protected __toggleState: ToggleState | undefined;
                protected __toggleLock: boolean;
                protected __touchLockTimeoutId: number;
                protected __onToggleGroupToggledEventDestroyEvent: DestroyFunction | null;
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
                 * Processes the current state if state has changed.
                 * @param state The new state of the control.
                 * @param forwardStateSymbol Controls if a change should be reflected to an possible existing state symbol. This is required to prevent changes from the symbol to be written to the symbol again.
                 * @param source What caused the change of state. Either user interaction, the change of an attribute or the state symbol.
                 */
                protected __processState(state: boolean, forwardStateSymbol: boolean, source: string): void;
                /**
                 * Event handler for the onPropertyChanged<IsEnabled> Event. Overrides __onPropertyIsEnabledChanged of TcHmiButton.
                 */
                protected __onPropertyIsEnabledChanged(): (e: EventProvider.Event, data: {
                    propertyName: string;
                    dirtyPaths?: string[];
                }) => void;
                /**
                 * Returns an event handler for the mousedown event.
                 */
                protected __onMouseDown(): (event: MouseEvent) => void;
                /**
                 * Returns an event handler for the mouseup event.
                 */
                protected __onMouseUp(): (event: MouseEvent) => void;
                /**
                 * Returns an event handler for the mouseenter event.
                 */
                protected __onMouseEnter(): (event: MouseEvent) => void;
                /**
                 * Returns an event handler for the mouseleave event.
                 */
                protected __onMouseLeave(): (event: MouseEvent) => void;
                /**
                 * Returns an event handler for the touchstart event.
                 */
                protected __onTouchStart(): (event: TouchEvent) => void;
                /**
                 * Returns an event handler for the touchend and touchcancel events.
                 */
                protected __onTouchEndOrCancel(): (event: TouchEvent) => void;
                /**
                * Is raised if a member of 'toggleGroup' has raised the toggled event.
                */
                protected __onToggleGroupToggled(): (evt: EventProvider.Event, data: {
                    ActiveElementId: string;
                    source: string;
                }) => void;
                /**
                * Sets the toggleGroup attribute to a new value.
                * @param valueNew The new value for the toggleGroup attribute.
                */
                setToggleGroup(valueNew: string | null): void;
                /**
                * Returns the current  value of the toggleGroup attribute
                */
                getToggleGroup(): string | null | undefined;
                /**
                * Processes the current value of the toggleGroup attribute.
                */
                protected __processToggleGroup(): void;
                /**
                * Sets the toggleState attribute to a new value.
                * @param valueNew The new value for the toggleState attribute.
                *                                                   Possible values: Normal, Active
                * @param forwardStateSymbol Controls if a change should be reflected to an possible existing state symbol.
                *                                                   This is required to prevent changes from the symbol to be written to the symbol again.
                 * @param process Allows to disable underlying calls to processToggleState. Required if a StateSymbol change is reflected to the ToggleState.
                */
                protected __setToggleState(valueNew: ToggleState | null, forwardStateSymbol?: boolean, process?: boolean): void;
                /**
                * Sets the toggleState attribute to a new value.
                * @param valueNew The new value for the toggleState attribute.
                *                                      Possible values: Normal, Active
                */
                setToggleState(valueNew: ToggleState | null): void;
                /**
                * Returns the current  value of the toggleState attribute
                */
                getToggleState(): "Normal" | "Active" | undefined;
                /**
                * Processes the current value of the toggleState attribute.
                * @param forwardStateSymbol Controls if a change should be reflected to an possible existing state symbol.
                *                                                   This is required to prevent changes from the symbol to be written to the symbol again.
                */
                protected __processToggleState(forwardStateSymbol?: boolean): void;
            }
        }
    }
}
