declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiStateImage extends TcHmi.Controls.System.TcHmiControl {
                /**
                 * Constructor of the control
                 * @param element Element from HTML (internal, do not use)
                 * @param pcElement precompiled Element (internal, do not use)
                 * @param attrs Attributes defined in HTML in a special format (internal, do not use)
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** HTML image element */
                protected __elementImage: HTMLImageElement;
                /** state var */
                protected __state: any | null | undefined;
                /** state list */
                protected __stateList: TcHmiStateImage.IStateStructure[] | null | undefined;
                /** fallback image*/
                protected __fallbackImage: string | null | undefined;
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit(): void;
                /**
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
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
                 * create and set the Image
                 * @param iconpath The path to the icon of the new image.
                 */
                __displayCurrentState(iconpath: string): void;
                /**
                 * Handle the given state.
                 */
                __handleState(): void;
                /**
                 * Sets the StateList value and calls the associated process function (processStateList).
                 * @param valueNew The new value for the StateList attribute.
                 *
                 */
                setStateList(valueNew: TcHmiStateImage.IStateStructure[] | null): void;
                /**
                * Returns the current StateList value.
                * @returns The current value of the StateList.
                */
                getStateList(): TcHmiStateImage.IStateStructure[] | null | undefined;
                __processStateList(): void;
                /**
                * Sets the value of the member variable "State" if the new value is not equal to the current value
                * and calls the associated process function (processState) after that.
                * @param valueNew The new value for text.
                */
                setState(valueNew: any): void;
                /**
                * Returns the current value of the member variable State.
                * @returns the current value of the member variable State.
                */
                getState(): any;
                /**
                * Processes the current value of State and forwards it to the target span element in template html.
                * The current value of State is only forwarded if it is no binding expression.
                */
                protected __processState(): void;
                /**
                * Sets the value of the member variable "FallbackImage" if the new value is not equal to the current value
                * and calls the associated process function (processFallbackImage) after that.
                * @param valueNew The new value for FallbackImage.
                */
                setFallbackImage(valueNew: string | null): void;
                /**
                * Returns the current value of the member variable FallbackImage.
                * @returns the current value of the member variable FallbackImage.
                */
                getFallbackImage(): string | null | undefined;
                protected __processFallbackImage(): void;
            }
            /**
            * Interface structure for the displayed state icons.
            * Used as an array to match the state with the actual statevar and set the appropriate stateIcon.
            */
            module TcHmiStateImage {
                interface IStateStructure {
                    state: any;
                    stateIcon: string;
                }
            }
        }
    }
}
