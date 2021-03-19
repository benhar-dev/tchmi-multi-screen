declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiSpinboxInput extends TcHmi.Controls.Beckhoff.TcHmiNumericInput {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** Reference to the root dom element of the current control template as  jquery object. */
                protected __elementButtonContainerLeft: HTMLElement;
                /** Reference to the element containing the text input element as jquery object. */
                protected __elementButtonContainerRight: HTMLElement;
                protected __buttonPlus: HTMLElement | undefined;
                protected __buttonMinus: HTMLElement | undefined;
                protected readonly __evtHandlerMouseClickPlus: ((this: void, e: MouseEvent) => void);
                protected readonly __evtHandlerMouseClickMinus: ((this: void, e: MouseEvent) => void);
                /**
                 * Is set to true if the control is locked and to false if the control is unlocked.
                 * When the control is locked, calls to setValue are ignored.
                 */
                protected __locked: boolean;
                /** Internal reference to the attribute 'data-tchmi-step' */
                protected __step: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-button-position' */
                protected __buttonPosition: 'BothLeft' | 'BothRight' | 'PlusLeftAndMinusRight' | 'MinusLeftAndPlusRight' | undefined;
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
                protected __createAndAppendButtons(): void;
                /**
                 * Eventhandler for the plus button
                 **/
                protected __onButtonPlus(): () => void;
                /**
                 * Eventhandler for the minus button
                 **/
                protected __onButtonMinus(): () => void;
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
                * Sets the buttonPosition attribute.
                * @param valueNew The new value for buttonPosition.
                *                                  Possible values: Horizontal, Vertical, Horizontal Inverted & Vertical Inverted
                */
                setButtonPosition(valueNew: 'BothLeft' | 'BothRight' | 'PlusLeftAndMinusRight' | 'MinusLeftAndPlusRight' | null): void;
                /**
                * Returns the current value of buttonPosition.
                * @returns The current value of buttonPosition.
                */
                getButtonPosition(): "BothLeft" | "BothRight" | "PlusLeftAndMinusRight" | "MinusLeftAndPlusRight" | undefined;
                /**
                * Processes the current value of attribute buttonPosition.
                */
                protected __processButtonPosition(): void;
            }
        }
    }
}
