declare module TcHmi {
}
declare module TcHmi {
    class Config {
        /**
         *  Returns a copy of the current object which is constructed from tchmiconfig.json
         *  @preserve (Part of the public API)
         * */
        static get(): TcHmi.IConfig;
    }
}
declare module TcHmi {
    /**
    * Provides functions for checking rights
    * @preserve (Part of the public API)
    */
    class Access {
        /**
         * Checks if an right is allowed for the current user on this control or its parents
         * Rules for granting access:
         *      - Designer Mode Master => true
         *      - Server Auth is not restricted (IsAuthRequired == false in Server) => TRUE
         *      - Server Auth is not known right now => null
         *      - Server Auth loading error => false
         *      - On this control: 1 Group  has  ALLOW => TRUE
         *      - On this control: 0 Groups have ALLOW, but 1 Group has DENY => FALSE
         *      - On this control: 0 Groups have ALLOW, 0 Groups have DENY => Ask Parent
         *      - use control default of the bottom most control with this right. TcHmi.Controls.System.TcHmiView has operate/observe set to TRUE
         *      - control has no parent (detached control) => null
         * @param control Control to check
         * @param accessright name of the access right
         * @returns Returns true/false or null if the state is not known right now
         * @preserve (Part of the public API)
         */
        static checkAccess(control: Readonly<TcHmi.Controls.System.baseTcHmiControl>, requestedAccessright: string): boolean | null;
    }
}
declare module TcHmi {
    /**
     * @deprecated
     */
    class AnimationProvider {
        /**
         * Deprecated. Please use new TcHmi.Animation()
         * Creates a new animation
         * @param controlName The name of the control for which the animation is intendend.
         * @param selector A CSS selector to identify the element inside the control to animate.
         * @preserve (Part of the public API)
         * @deprecated Please use new TcHmi.Animation()
         */
        static create(controlName: string, selector?: string): Animation;
    }
    class Animation {
        /**
         * Creates a new animation
         * @param controlName The name of the control for which the animation is intendend.
         * @param selector A CSS selector to identify the element inside the control to animate.
         * @preserve (Part of the public API)
        */
        constructor(controlName: string, selector?: string);
        /**
         * Returns the name of the control the animation is intended for.
         * @returns The name of the control.
         * @preserve (Part of the public API)
         */
        controlName(): string;
        /**
         * Returns the selector of the element to animate.
         * @returns The selector.
         * @preserve (Part of the public API)
         */
        selector(): string;
        /**
         * Returns the name of the animation.
         * @returns The name of the animation.
         * @preserve (Part of the public API)
         */
        animationName(): string;
        /**
         * Returns the state of the animation.
         * @returns The state.
         * @preserve (Part of the public API)
         */
        state(): Animation.Status;
        /**
         * Adds a keyframe.
         * @param keyframe The keyframe to add.
         * @preserve (Part of the public API)
         */
        addKeyframe(keyframe: TcHmi.Animation.Keyframe): this;
        /**
         * Adds a keyframe.
         * @param styles The styles for this keyframe.
         * @param progressPoint A number between 0 and 1 inclusive to determine when this keyframe should be reached.
         * @preserve (Part of the public API)
         */
        addKeyframe(styles: Dictionary<string | string[]>, progressPoint: number): this;
        /**
         * Adds a keyframe.
         * @param property The CSS property for this keyframe.
         * @param value The value for the CSS property at this keyframe.
         * @param progressPoint A number between 0 and 1 inclusive to determine when this keyframe should be reached.
         * @preserve (Part of the public API)
         */
        addKeyframe(property: string, value: string, progressPoint: number): this;
        /**
         * Adds a keyframe.
         * @param property The CSS property for this keyframe.
         * @param value An array of values for the CSS property at this keyframe. This is useful to pass vendor-prefixed CSS values to ensure compatibility.
         * @param progressPoint A number between 0 and 1 inclusive to determine when this keyframe should be reached.
         * @preserve (Part of the public API)
         */
        addKeyframe(property: string, value: string[], progressPoint: number): this;
        /**
         * Removes all keyframes.
         * @preserve (Part of the public API)
         */
        clearKeyframes(): this;
        /**
         * Reverses the keyframes by subtracting the progressPoint from 1 and setting that as the new progressPoint.
         * @preserve (Part of the public API)
         */
        reverseKeyframes(): this;
        /**
         * Gets the keyframes of this animation.
         * @returns The keyframes.
         * @preserve (Part of the public API)
         */
        keyframes(): Animation.Keyframe[];
        /**
         * Gets the configured duration for this animation. Default is 0.
         * @returns The duration.
         * @preserve (Part of the public API)
         */
        duration(): number;
        /**
         * Sets the duration for this animation. Default is 0.
         * @param valueNew The new duration.
         * @preserve (Part of the public API)
         */
        duration(valueNew: number | null): this;
        /**
         * Gets the delay before this animation starts. Default is 0.
         * @returns The delay.
         * @preserve (Part of the public API)
         */
        delay(): number;
        /**
         * Sets the delay before this animation starts. Default is 0.
         * @param valueNew {number} The new delay.
         * @preserve (Part of the public API)
         */
        delay(valueNew: number | null): this;
        /**
         * Gets the iteration count for this animation. Default is 1.
         * @returns The iteration count.
         * @preserve (Part of the public API)
         */
        iterationCount(): number | 'infinite';
        /**
         * Sets the iteration count for this animation. Default is 1.
         * @param valueNew The new iteration count.
         * @preserve (Part of the public API)
         */
        iterationCount(valueNew: number | 'infinite' | null): this;
        /**
         * Gets the order in which the keyframes are used. Default is 'normal'.
         * @returns The direction.
         * @preserve (Part of the public API)
         */
        direction(): Animation.Direction;
        /**
         * Sets the order in which the keyframes are used. Default is 'normal'.
         * @param valueNew {string} The new direction.
         * @preserve (Part of the public API)
         */
        direction(valueNew: Animation.Direction | null): this;
        /**
         * Gets the timing function for this animation. Default is 'ease'.
         * @returns The timing function.
         * @preserve (Part of the public API)
         */
        timingFunction(): string | ((t: number) => number);
        /**
         * Sets the timing function for this animation. Default is 'ease'.
         * @param valueNew The new timing function. Possible values: "linear", "ease(-in/-out/-in-out)", "step-start/-end", "cubic-bezier(<number>, <number>, <number>, <number)", "steps(<number>, start/end)".
         * @preserve (Part of the public API)
         */
        timingFunction(valueNew: string | ((t: number) => number) | null): this;
        /**
         * Gets the fill mode. The fill mode determines whether the state of the first keyframe is applied to the element before the animation starts ('backwards'),
         * the state of the last keyframe is applied to the element after the animation ends ('forwards'), both or none. Default is 'none'.
         * @returns The fill mode.
         * @preserve (Part of the public API)
         */
        fillMode(): Animation.FillMode;
        /**
         * Sets the fill mode. The fill mode determines whether the state of the first keyframe is applied to the element before the animation starts ('backwards'),
         * the state of the last keyframe is applied to the element after the animation ends ('forwards'), both or none. Default is 'none'.
         * @param valueNew {string} The new fill mode.
         * @preserve (Part of the public API)
         */
        fillMode(valueNew: Animation.FillMode | null): this;
        /**
         * Gets whether a cleanup is scheduled after the animation ends. Default is false.
         * @returns The cleanup value.
         * @preserve (Part of the public API)
         */
        cleanup(): boolean;
        /**
         * Set whether to schedule a cleanup after the animation has finished. A cleanup removes all animation specific CSS and, depending on fillMode, persists the properties of the last keyframe to the element CSS. Default is false.
         * @param valueNew {boolean} The cleanup value.
         * @preserve (Part of the public API)
         */
        cleanup(valueNew: boolean | null): this;
        /**
         * Gets whether the animation will be rendered via CSS or JavaScript. Will return false if the user has set useCss to false or configured features not supported by CSS. Default is true.
         * @returns Whether CSS will be used.
         * @preserve (Part of the public API)
         */
        useCss(): boolean;
        /**
         * Sets whether to render the animation via CSS or JavaScript. JavaScript may offer better performance if the animation is often changed and restarted.
         * If the animation has been configured with features unsupported by CSS, JavaScript will be used regardless of the value of useCss. Default is true.
         * @param valueNew {boolean} Whether to use CSS, when available.
         * @preserve (Part of the public API)
         */
        useCss(valueNew: boolean | null): this;
        /**
         * Registers an event handler for one of the events animationstart, animationend or animationiteration.
         * @param name The name of the event.
         * @param callback          The callback function.
         * @preserve (Part of the public API)
         */
        registerEventHandler(name: 'animationstart' | 'animationend' | 'animationiteration', callback: (event: TcHmi.Animation.AnimationEvent) => void): this;
        /**
         * Unregisters a previously registered event handler.
         * @param name The name of the event.
         * @param callback          The callback function to unregister.
         * @preserve (Part of the public API)
         */
        unregisterEventHandler(name: 'animationstart' | 'animationend' | 'animationiteration', callback?: (event: TcHmi.Animation.AnimationEvent) => void): this;
        /**
         * Gets all event handlers
         * @returns The event handlers.
         * @preserve (Part of the public API)
         */
        eventHandlers(): {
            name: 'animationstart' | 'animationend' | 'animationiteration';
            callback: (event: Animation.AnimationEvent) => void;
        }[];
        /**
         * Run the animation.
         * @preserve (Part of the public API)
         */
        run(): this;
        /**
         * Pause the animation.
         * @preserve (Part of the public API)
         */
        pause(): this;
        /**
         * Cancels the animation and writes the last keyframe styles into the element CSS.
         * @preserve (Part of the public API)
         */
        skip(): this;
        /**
         * Resets the animation. This is an asynchronous operation.
         * @param callback The function to call when the animation has been reset.
         * @preserve (Part of the public API)
         */
        reset(callback?: () => void): this;
    }
    module Animation {
        interface Keyframe {
            styles: Dictionary<string[]>;
            progressPoint: number;
        }
        interface AnimationEvent extends TcHmi.IResultObject {
            animationName: string;
            elapsedTime: number;
            JQueryEvent?: JQuery.TriggeredEvent;
        }
        enum Status {
            CONFIGURE = 0,
            INITIALIZED = 1,
            RUNNING = 2,
            PAUSED = 3,
            ENDED = 4
        }
        type Direction = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
        type FillMode = 'none' | 'forwards' | 'backwards' | 'both';
    }
}
declare module TcHmi {
    /**
     * Provides methods to read base64 encoded data.
     * @preserve (Part of the public API)
     */
    class Base64BinaryReader {
        /**
         * Creates a new Base64BinaryReader.
         * @param data The base64 encoded string to read from.
         * @param endianness    Whether the encoded data uses little endian (default) or big endian to store numbers.
         * @preserve (Part of the public API)
         */
        constructor(data: string, endianness?: Endianness);
        /**
         * Reads a boolean value.
         * @preserve (Part of the public API)
         */
        readBoolean(): boolean;
        /**
         * Reads a single byte of data.
         * @preserve (Part of the public API)
         */
        readByte(): number;
        /**
         * Reads a signed byte.
         * @preserve (Part of the public API)
         */
        readSByte(): number;
        /**
         * Reads a signed 16-bit integer.
         * @preserve (Part of the public API)
         */
        readInt16(): number;
        /**
         * Reads an unsigned 16-bit integer.
         * @preserve (Part of the public API)
         */
        readUInt16(): number;
        /**
         * Reads a signed 32-bit integer.
         * @preserve (Part of the public API)
         */
        readInt32(): number;
        /**
         * Reads an unsigned 32-bit integer.
         * @preserve (Part of the public API)
         */
        readUInt32(): number;
        /**
         * Reads a single precision floating point number.
         * @preserve (Part of the public API)
         */
        readFloat(): number;
        /**
         * Reads a double precision floating point number.
         * @preserve (Part of the public API)
         */
        readDouble(): number;
        /**
         * Reads a string. Will read until a zero byte is encountered, or until the specified length has been reached, or, if no length has been specified, until the end of the data.
         * @param length The length of the string to read in bytes.
         * @preserve (Part of the public API)
         */
        readString(length?: number): string;
        /**
        * @preserve (Part of the public API)
         */
        getLength(): number;
        /**
        * @preserve (Part of the public API)
         */
        getOffset(): number;
        /**
        * @preserve (Part of the public API)
         */
        setOffset(offset: number): void;
    }
}
declare module TcHmi {
    /**
     * Provides methods to write base64 encoded data.
     * @preserve (Part of the public API)
     */
    class Base64BinaryWriter {
        /**
         * Creates a new Base64BinaryWriter.
         * @param endianness    Whether to use little endian (default) or big endian when encoding numbers.
         * @param length The desired length of the data. If this parameter is omitted the data will be expanded dynamically.
         * @preserve (Part of the public API)
         */
        constructor(endianness?: Endianness, length?: number);
        /**
         * Writes a boolean value.
         * @param value The boolean value to write.
         * @preserve (Part of the public API)
         */
        writeBoolean(value: boolean): this;
        /**
         * Writes a single byte of data.
         * @param value The byte to write.
         * @preserve (Part of the public API)
         */
        writeByte(value: number): this;
        /**
         * Writes a signed byte.
         * @param value The byte to write.
         * @preserve (Part of the public API)
         */
        writeSByte(value: number): this;
        /**
         * Writes a signed 16-bit integer.
         * @param value The number to write.
         * @preserve (Part of the public API)
         */
        writeInt16(value: number): this;
        /**
         * Writes an unsigned 16-bit integer.
         * @param value The number to write.
         * @preserve (Part of the public API)
         */
        writeUInt16(value: number): this;
        /**
         * Writes a signed 32-bit integer.
         * @param value The number to write.
         * @preserve (Part of the public API)
         */
        writeInt32(value: number): this;
        /**
         * Writes an unsigned 32-bit integer.
         * @param value The number to write.
         * @preserve (Part of the public API)
         */
        writeUInt32(value: number): this;
        /**
         * Writes a single precision floating point number.
         * @param value The number to write.
         * @preserve (Part of the public API)
         */
        writeFloat(value: number): this;
        /**
         * Writes a double precision floating point number.
         * @param value The number to write.
         * @preserve (Part of the public API)
         */
        writeDouble(value: number): this;
        /**
         * Writes a string.
         * @param value The string to write.
         * @param length (Optional) The length of the string to write. If the string is shorter, the remaining space is filled with 0.
         * @preserve (Part of the public API)
         */
        writeString(value: string, length?: number): this;
        /**
         * Returns the base64 encoded string. If not enough data was written to fill the length the data should have, the rest is filled up with zeros.
         * @preserve (Part of the public API)
         */
        getEncodedString(): string;
        /**
         * Returns the length of the data that has been written.
         * @preserve (Part of the public API)
         */
        getLength(): number;
    }
}
declare module TcHmi {
    /**
    * Reserved
    * @preserve (Part of the public API)
    */
    class Binding {
        /**
         * Creates a binding between a symbol and a control attribute setter function.
         * @param expression The target symbol expression.
         * @param fn The target function as prototype reference.
         * @param control The target control instance.
         * @preserve (Part of the public API)
         */
        static create(expression: string, fn: (value: any) => void, control: TcHmi.Controls.System.baseTcHmiControl): void;
        /**
         * Creates a binding between a symbol and a control attribute setter function by name.
         * @param expression The target symbol expression.
         * @param fn The name of the control setter function.
         * @param control The target control instance.
         * @preserve (Part of the public API)
         */
        static createEx(expression: string, fn: string, control: TcHmi.Controls.System.baseTcHmiControl): void;
        /**
        * Creates a binding between a symbol and a control attribute setter function by name of property.
        * @param expression The target symbol expression.
        * @param propertyName The name of the control property.
        * @param control
        * @preserve (Part of the public API)
        */
        static createEx2(expression: string, propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl): void;
        /**
         * Removes a binding between a symbol and a control attribute setter function.
         * @param expression [OBSOLETE] The target symbol expression.
         * @param fn
         * @param control The target control instance.
         * @param bReset [Optional] If set to false the setter will not resetted with null.
         * @preserve (Part of the public API)
         */
        static remove(expression: string | null, fn: (value: any) => void, control: TcHmi.Controls.System.baseTcHmiControl, bReset?: boolean): void;
        /**
         * Removes a binding between a symbol and a control attribute setter function.
         * @param expression [OBSOLETE] The target symbol expression.
         * @param fn The name of the control setter function.
         * @param control The target control instance.
         * @param bReset [Optional] If set to false the setter will not resetted with null.
         * @preserve (Part of the public API)
         */
        static removeEx(expression: string | null, fn: string, control: TcHmi.Controls.System.baseTcHmiControl, bReset?: boolean): void;
        /**
        * Removes a binding between a symbol and a control attribute setter function by name of property.
        * @param unused [OBSOLETE] The target symbol expression.
        * @param propertyName The name of the control attribute property.
        * @param control The target control instance.
        * @param bReset [Optional] If set to false the setter will not resetted with null.
        * @preserve (Part of the public API)
        */
        static removeEx2(unused: string | null, propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl, bReset?: boolean): void;
        /**
         * Returns true if a symbol is bound to the target control property.
         * @param propertyName The name of the control attribute property.
         * @param control The target control instance.
         * @preserve (Part of the public API)
         */
        static exists(propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl): boolean;
        /**
         * Returns the symbol expression of a binding as string or null if no symbol is bound to the target control property.
         * @param propertyName The name of the control attribute property.
         * @param control The target control instance.
         * @preserve (Part of the public API)
         */
        static resolve(propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl): string | null;
        /**
         * Returns the symbol expression of a binding as SymbolExpression object or null if no symbol is bound to the target control property.
         * @param propertyName The name of the control attribute property.
         * @param control The target control instance.
         * @preserve (Part of the public API)
         */
        static resolveEx(propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl): SymbolExpression | null;
    }
    type BindingMode = 'OneWay' | 'TwoWay';
}
declare module TcHmi {
    class Callback {
        /**
         * Calls a callback and catches exceptions to return them as value of type {Error} for further processing.
         * @param callback function to call
         * @param thisArg the this pointer in the function call
         * @param args parameters for the function call
         * @returns undefined or the Error in case of an exception
         * @template T this for the call
         * @template A Array of types for all parameter for the function
         * @preserve (Part of the public API)
         */
        static callSafe<T extends object, A extends any[]>(callback: Callback.ICallback<T, A> | null | undefined, thisArg: T | null | undefined, ...args: A): Error | undefined;
        /**
         * Calls a callback and catches exceptions to return them as value of type {Error} for further processing and prints it to console for proper call stack.
         * @param callback function to call
         * @param thisArg the this pointer in the function call
         * @param args parameters for the function call
         * @returns undefined or the Error in case of an exception
         * @template T this for the call
         * @template A Array of types for all parameter for the function
         * @preserve (Part of the public API)
         */
        static callSafeEx<T extends object, A extends any[]>(callback: Callback.ICallback<T, A> | null | undefined, thisArg: T | null | undefined, ...args: A): Error | undefined;
    }
    module Callback {
        /**
         * @template T this for the call
         * @template A Array of types for all parameter for the function
         */
        interface ICallback<T extends object, A extends any[]> {
            (this: T, ...args: A): void;
        }
    }
}
declare module TcHmi {
    /**
     * Deprecated. Please use TcHmi.Controls.get()
     * @deprecated Please use TcHmi.Controls.get()
     */
    var control: Dictionary<Controls.System.baseTcHmiControl>;
    /**
    * Reserved
    */
    class Control {
    }
}
declare module TcHmi {
    class ControlFactory {
        /**
        * Creates a new control.
        * @param type The type of the control.
        * @param name The name of the control.
        * @param attributes The attributes.
        * @param parent Optional. The logical parent control.
        * @template C defines the type for the new control
        * @preserve (Part of the public API)
         */
        static createEx<C extends TcHmi.Controls.System.baseTcHmiControl>(type: string, name: string, attributes: null | Dictionary<any>, parent?: TcHmi.Controls.System.baseTcHmiControl | null): C | undefined;
        /** DEPRECATED API PARTS*/
        /**
        * DEPRECATED
        * Creates a new control.
        * @param html The base html for the control.
        * @param unused Optional. Has to be set to null if parameter parent is used.
        * @param parent Optional. The logical parent control.
        * @template C defines the type for the new control
        * @deprecated Please use createEx()
        */
        static create<C extends TcHmi.Controls.System.baseTcHmiControl>(html: string, unused?: null, parent?: TcHmi.Controls.System.baseTcHmiControl): C | undefined;
        /**
        * DEPRECATED
        * Creates a new control.
        * The new control HTMLElement, available via getElement(), can be attached to the DOM afterwards.
        * @param element The base element for the control.
        * @param unused Optional. Has to be set to null if parameter parent is used.
        * @param parent Optional. The logical parent control.
        * @template C defines the type for the new control
        * @deprecated Please use createEx()
        */
        static create<C extends TcHmi.Controls.System.baseTcHmiControl>(element: JQuery, unused?: null, parent?: TcHmi.Controls.System.baseTcHmiControl): C | undefined;
        /**
        * DEPRECATED
        * Creates a new control.
        * @param type The type of the control.
        * @param name The name of the control.
        * @param parent Optional. The logical parent control.
        * @template C defines the type for the new control
        * @deprecated Please use createEx()
        */
        static create<C extends TcHmi.Controls.System.baseTcHmiControl>(type: string, name: string, parent?: TcHmi.Controls.System.baseTcHmiControl): C | undefined;
    }
}
declare module TcHmi {
    module Controls {
        interface ControlAttributeList extends Dictionary<TcHmi.System.ControlAttribute> {
            'data-tchmi-type': TcHmi.System.ControlAttribute;
            'id': TcHmi.System.ControlAttribute;
        }
        /** Constructor which generates a TcHmi Control.
         * @template C defines the type for the control
         */
        interface baseTcHmiControlConstructor<C extends TcHmi.Controls.System.baseTcHmiControl = TcHmi.Controls.System.baseTcHmiControl> {
            new (element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList): C;
            readonly prototype: C;
        }
        /**
         * DEPRECATED
         * Register a control.
         * The Framework will fetch and interprete the Description.json in the Control Directory and optionally load a HTML Template file
         * @param name Name of the Control.
         * @param constructor Constructor which generates the TcHmi Control.
         * @param directory Directory of the Control (base path is the Controls directory).
         * @param template Template file of the Control (base path is the Controls directory).
         * @template C defines the type for the control to register
         * @preserve (Part of the public API)
         * @deprecated Please use registerEx()
         */
        function register<C extends TcHmi.Controls.System.baseTcHmiControl>(name: string, constructor: TcHmi.Controls.baseTcHmiControlConstructor<C>, directory: string, template?: string | null): void;
        /**
         * Register a control.
         * The Framework will fetch and interprete the Description.json in the Control Directory and optionally load a HTML Template file
         * @param name Name of the Control.
         * @param constructor Constructor which generates the TcHmi Control.
         * @template C defines the type for the control to register
         * @preserve (Part of the public API)
         */
        function registerEx<C extends TcHmi.Controls.System.baseTcHmiControl>(name: string, namespace: string, constructor: TcHmi.Controls.baseTcHmiControlConstructor<C>): void;
        /**
         * Get control by name. Returns the Control or undefined
         * @param name Name of the Control.
         * @template T Type of the Control
         * @preserve (Part of the public API)
         */
        function get<T extends TcHmi.Controls.System.baseTcHmiControl>(name: string | null | undefined): T | undefined;
        /**
         * Gets version information of control by type.
         * @param type Type of the Control.
         * @preserve (Part of the public API)
         */
        function getVersion(type: string): Version | null;
        /**
        * Returns the dynamic base path of a control.
        * @preserve (Part of the public API)
        * @param type Control type name
        */
        function getBasePath(type: string): string | null;
        /**
        * Returns the dynamic base path of a control.
        * @preserve (Part of the public API)
        * @param TcHmi Control reference
        */
        function getBasePathEx(control: TcHmi.Controls.System.baseTcHmiControl): string | null;
        /**
         * Get an ES5 Map of all controls. Key of the map is the control identifier
         * @preserve (Part of the public API)
         */
        function getMap(): Map<string, TcHmi.Controls.System.baseTcHmiControl>;
        /**
         * DEPRECATED
         * Does no longer do anything
         * @deprecated  Does no longer do anything
         * @param callback
         * @preserve (Part of the public API)
         */
        function tachControls(callback?: null | ((this: void) => void)): void;
        /**
         * DEPRECATED
         * Does no longer do anything
         * @deprecated  Does no longer do anything
         */
        function tachControlsAsync(callback?: null | ((this: void) => void)): void;
    }
}
declare module TcHmi {
    /**
    * Provides multiple types of dialogs to the user.
   * @preserve (Part of the public API)
    */
    class DialogManager {
        /**
        * Change visibility of dialog and set its DialogType when showing.
        * @param dialogOwner Caller Id to prevent overwriting forreign dialogs
        * @param bVisibility Toggling visiblity of dialog
        * @param dialogType Type of dialog
        * @param options Options
        * @returns returns false if the dialog could not be opened
        * @preserve (Part of the public API)
        */
        static showDialog(dialogOwner: string, bVisibility: boolean, dialogType?: TcHmi.DialogManager.DialogType, options?: TcHmi.DialogManager.DialogOptions): boolean;
        /**
         * Changes the output content of the Dialog to a new value.
         * The default Severity is Info.
         * @param dialogOwner Caller Id to prevent overwriting forreign dialogs
         * @param html
         * @param [severity = DialogManager.DialogSeverity.Info]
         * @returns Success of the text update
         * @preserve (Part of the public API)
         */
        static updateText(dialogOwner: string, html: string, severity?: DialogManager.DialogSeverity): boolean;
        /**
        * Returns the current dialog owner or null.
        * @preserve (Part of the public API)
        */
        static getDialogOwner(): string | null;
        /**
         * Builds a formatted message of hierarchical error objects for use in dialog.
         * @param error
         * @preserve (Part of the public API)
         */
        static buildMessage(error: TcHmi.IErrorDetails | undefined): string;
    }
    namespace DialogManager {
        /**
        We support different severities for the dialog:
            Info
            Error
        */
        enum DialogSeverity {
            Info = 0,
            Error = 1
        }
        /**
        We support an overlay dialog
            Overlay
        */
        enum DialogType {
            /** An overlay dialog */
            Overlay = 1
        }
        /**
        Options for the system dialogs
        */
        interface DialogOptions {
            /** The dialog should have an button to close the dialog. */
            cancelable?: boolean;
            /** The dialog should replace existing dialogs of different owner without respect. */
            force?: boolean;
        }
    }
}
declare module TcHmi {
    module Engineering {
        class ErrorPane {
            static add(name: string, content: string, type: TcHmi.Engineering.ErrorPane.MessageType): void;
            static remove(name: string): void;
        }
        module ErrorPane {
            interface Message {
                identifier: string;
                type: ErrorPane.MessageType;
                content: string;
            }
            enum MessageType {
                Message = 0,
                Error = 1,
                Warning = 2,
                Information = 3
            }
        }
    }
}
declare module TcHmi {
    /**
    * Reserved
    * @preserve (Part of the public API)
    */
    class Environment {
        /**
         * Returns the dynamic framework base path.
         * @preserve (Part of the public API)
         */
        static getBasePath(): string;
        /**
         * Returns the dynamic base path of a control.
         * @preserve (Part of the public API)
         * @param type Control type name
         */
        static getControlBasePath(type: string): string | null;
        /**
        * Returns the dynamic base path of a control.
        * @preserve (Part of the public API)
        * @param TcHmi Control reference
        */
        static getControlBasePathEx(control: TcHmi.Controls.System.baseTcHmiControl): string | null;
    }
}
declare module TcHmi {
    enum Errors {
        NONE = 0,
        ERROR = 1,
        E_PARAMETER_INVALID = 2,
        E_TIMEOUT = 3,
        E_EXCEPTION = 4,
        E_INVALID = 5,
        E_NOT_UNIQUE = 6,
        E_NOT_SUPPORTED = 100,
        E_NOT_ALLOWED = 110,
        E_UNKNOWN = 115,
        E_UNKNOWN_TYPE = 120,
        E_KEY_NOT_FOUND = 130,
        E_TYPE_INVALID = 150,
        E_VALUE_INVALID = 160,
        E_REGISTRATION_MISSING = 180,
        E_REGISTRATION_ERROR = 190,
        E_MODULE_MISSING = 200,
        E_MODULE_ERROR = 210,
        E_WEBSOCKET_NOT_READY = 1000,
        E_WEBSOCKET_CLOSED = 1001,
        E_WEBSOCKET_NOT_SUPPORTED = 1404,
        E_WEBSOCKET_OPEN_SERVER_LICENSE_CHECK_FAILED = 1500,
        E_WEBSOCKET_OPEN_SERVER_LICENSE_MISSING = 1501,
        E_WEBSOCKET_OPEN_SERVER_NO_ACCESS = 1502,
        E_SYMBOL_STATE_INVALID = 2000,
        E_SYMBOL_VALUE_INVALID = 2001,
        E_SYMBOL_RESOLVE_SCHEMA = 2002,
        E_SYMBOL_READONLY = 2003,
        E_SYMBOL_UNKNOWN = 2010,
        E_SYMBOL_INVALID_DATA_PROVIDER_ENTRY = 2020,
        E_SYMBOL_INVALID_PATH = 2030,
        E_SYMBOL_SUBSYMBOL_ERROR = 2040,
        E_SYMBOL_OBJECT_RESOLVE = 2050,
        E_SYMBOL_UNKNOWN_ATTRIBUTE = 2100,
        E_SERVER_RESPONSE_ERROR = 3000,
        E_SERVER_COMMAND_ERROR = 3005,
        E_SERVER_INVALID_RESPONSE = 3010,
        E_SERVER_COMMANDS_MISSING = 3015,
        E_SERVER_COMMAND_MISSING = 3016,
        E_SERVER_READVALUE_MISSING = 3020,
        E_SERVER_WRITEVALUE_MISSING = 3025,
        E_SERVER_RESPONSE_MISSING = 3030,
        E_SERVER_DOMAIN_UNKNOWN = 3100,
        E_FUNCTION_MISSING_FUNCTION_REFERENCE = 4000,
        E_FUNCTION_MISSING_FUNCTION_DESCRIPTION = 4005,
        E_FUNCTION_INVALID_CONFIGURATION = 4010,
        E_FUNCTION_EXCEPTION = 4020,
        E_FUNCTION_UNKNOWN = 4030,
        E_FUNCTION_RESTPARAMETER_DEFINITION_MISSING = 4040,
        E_FUNCTION_RESOLVING_PARAMETER_FAILED = 4050,
        E_FUNCTION_EXPRESSION_PARSER_ERROR = 4100,
        E_FUNCTION_EXPRESSION_EXCEPTION = 4120,
        E_FUNCTION_CALL_ABORTED = 4130,
        E_FUNCTION_DESTROYED = 4140,
        E_TRIGGER_ACTION_EXCEPTION = 5050,
        E_TRIGGER_JAVASCRIPT_EVAL_EXCEPTION = 5055,
        E_TRIGGER_FUNCTION_EXPRESSION_EXCEPTION = 5060,
        E_TRIGGER_RESOLVE_CONDITION_EXPRESSION_EXCEPTION = 5065,
        E_TRIGGER_CONDITION_INVALID = 5200,
        E_CONTROL_INSTANCE_NOT_FOUND = 6000,
        E_CONTROL_INVALID_CONFIGURATION = 6001,
        E_CONTROL_ATTRIBUTE_NOT_FOUND = 6005,
        E_CONTROL_ATTRIBUTE_INVALID_CONFIGURATION = 6010,
        E_CONTROL_INSTANCE_NO_LONGER_AVAILABLE = 6020,
        E_SCHEMA_INVALID = 7000,
        E_SCHEMA_INVALID_PATH = 7010,
        E_SCHEMA_INVALID_REF_ID = 7020,
        E_SCHEMA_UNKNOWN_FILE = 7030,
        E_SCHEMA_UNKNOWN_DEFINITION = 7040,
        E_SCHEMA_NOT_RESOLVED = 7050,
        E_PACKAGE = 8000
    }
}
declare module TcHmi {
    /**
   * @preserve (Part of the public API)
    */
    class EventProvider {
        /**
         * Register a callback to an event name.
         * If the name is a binding expression the callback will be initially called if there is a binding with this name
         * @param name Name of the event.
         * @param callback Callback which will be called
         * @param options Data an event can be given while registration.
         * @returns Destroy function which cleans up/unregisters
         * @preserve (Part of the public API)
         */
        static register(name: string, callback: (e: EventProvider.Event, ...data: any[]) => void, options?: any): DestroyFunction;
        /**
         * Calls all registered callbacks related to an event name.
         * @param name Name of the event.
         * @param ...args optional parameter(s) which will be transfered to the callbacks
         * @preserve (Part of the public API)
         */
        static raise(name: string, ...args: any[]): void;
        /**
         * Calls the callback of an specific event registration.
         * @param event
         * @param args optional parameter(s) which will be transfered to the callbacks
         * @preserve (Part of the public API)
         */
        static raiseEx(event: EventProvider.IEventEntry, ...args: any[]): void;
        /**
         * Watch for event registrations.
         * @param name
         * @param callback
         */
        static watchEventRegistration(name: string, callback: (data: EventProvider.IEventRegResultObject) => void): DestroyFunction;
        /**
         * Check if event is registered.
         * @param name
         */
        static has(name: string): boolean;
        /**
         * Event registration count
         * @param name
         */
        static count(name: string): number;
    }
    namespace EventProvider {
        enum EventRegWatchType {
            REGISTER = 100,
            DESTROY = 200
        }
        interface Event extends EventContext {
            /** Function to unregister from an event. */
            destroy: DestroyFunction;
        }
        interface IEventEntry {
            /** Id for internal event management. */
            id: number;
            /** Name of the event. */
            name: string;
            callback: (e: EventProvider.Event, ...data: any[]) => void;
            /** Data an event can be given while registration. */
            options?: any;
            /** Function to unregister from an event. */
            destroy: DestroyFunction | null;
        }
        interface IEventRegResultObject extends TcHmi.IResultObject {
            type: EventRegWatchType;
            event: IEventEntry;
        }
    }
}
declare module TcHmi {
    class Function {
        /**
         * @param functionCallDescription
         */
        constructor(functionCallDescription: IFunction);
        /**
         * Will raise the function defined in constructor argument f: IFunction.
         * @param requiredArgs Optional required arguments. Will be injected before arguments defined in IFunction and after context object dummy if context object is required.
         * @preserve (Part of the public API)
         */
        execute(requiredArgs?: any[]): any;
        /**
         * Will raise the function defined in constructor argument f: IFunction and raises a callback afterwards.
         * @param requiredArgs Optional required arguments. Will be injected before arguments defined in IFunction and after context object dummy if context object is required.
         * @param callback
         * @preserve (Part of the public API)
         */
        executeEx(requiredArgs: any[], callback: (this: TcHmi.Function, data: Function.IExecuteResultObject) => void): DestroyFunction;
        /**
         * Resolved the processed wait mode of the function call description.
         * Even if a called function provides a synchronous wait mode it may be processed asynchronous if asynchronous working symbols
         * are added as additional parameter because parameters are resolved before the underlying function is called.
         */
        private __resolveProcessedWaitMode;
        /**
         * Returns true if the function call description will be processed asynchronous and false if not.
         * Even if a called function provides a synchronous wait mode it may be processed asynchronous if asynchronous working symbols
         * are added as additional parameter because parameters are resolved before the underlying function is called.
         */
        isProcessedAsync(): boolean;
        /**
         * Releases all resources of the function
         * @preserve (Part of the public API)
         */
        destroy(): void;
    }
    module Function {
        interface IExecuteResultObject extends TcHmi.IResultObject {
            result?: any;
        }
    }
}
declare module TcHmi {
    /**
     * @preserve (Part of the public API)
     */
    module Functions {
        /**
         * Deprecated! Please use registerFunctionEx.
         * @deprecated Please use registerFunctionEx.
         * @param name
         * @param functionImplementation
         * @param descriptionUrl
         * @preserve (Part of the public API)
         */
        function registerFrameworkFunction(name: string, functionImplementation: (...args: any[]) => any, descriptionUrl?: string): void;
        /**
         * @param name
         * @param functionImplementation
         * @preserve (Part of the public API)
         */
        function registerFunction(name: string, functionImplementation: (...args: any[]) => any): void;
        /**
         * @param name
         * @param namespace
         * @param functionImplementation
         * @preserve (Part of the public API)
         */
        function registerFunctionEx(name: string, namespace: string, functionImplementation: (...args: any[]) => any): void;
        /**
         * Returns a registered HMI function
         * @param name
         * @preserve (Part of the public API)
         */
        function getFunction(name: string): ((...args: any[]) => any) | undefined;
        /**
         * Gets version information of function by name.
         * @param name
         * @preserve (Part of the public API)
         */
        function getFunctionVersion(name: string): Version | null;
    }
}
declare module TcHmi {
    class List<T> extends Array<T> {
        constructor();
        first(predicate: ($: T) => boolean): T;
        firstOrDefault(predicate: ($: T) => boolean, defaultValue?: T): T;
        remove(item: T): boolean;
        addRange(items: T[]): void;
        clearAll(): void;
        findIndex(predicate: ($: T, index: number, obj: T[]) => boolean): number;
    }
}
declare module TcHmi {
    /**
    */
    class Locale {
        /**
         */
        constructor();
        /**
         * Loads a language file and refreshes localization symbols.
         * @param locale
         * @param callback
         * @preserve (Part of the public API)
         */
        static load(locale: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): void;
        /**
         * Returns the current locale string for texts or undefined if no localized Symbol is available.
         * @returns The current locale identifier.
         * @preserve (Part of the public API)
         */
        static get(): string | undefined;
        /**
         * Returns the list of locales for localizedSymbols.
         * @preserve (Part of the public API)
         */
        static getRegisteredLocales(): string[];
    }
}
declare module TcHmi {
    /**
    * Allows handling date and time formatting
    * @preserve (Part of the public API)
    */
    class Localization {
        /**
        */
        constructor();
        /**
        * Returns a cached Intl.DateTimeFormat
        * When no parameter is given the current setting of the user is used
        */
        static getDateTimeFormatter(locale: string | undefined, timeZone: string | undefined, hour12: boolean | undefined, type?: Localization.FormatType): Intl.DateTimeFormat;
        /**
         *  Skip non numberic chars and parseInt the rest.
         *  MS Browsers add Left-To-Right-Mark to output
         *  https://github.com/tc39/ecma402/issues/28
         * @param input
         * @preserve (Part of the public API)
         */
        static parseInt(input: string): number;
        /**
         * Parses a Date object
         * formats it to a time zone and split its components into an object
         * On error all entries will be NaN
         * @param date
         * @preserve (Part of the public API)
         */
        static parseDate(date: Date, options?: Localization.ParseOptions): Localization.DateParts;
        /**
         * Formats a Date object down to milliseconds in the correct locale and time zone (config from server user or browser default)
         * On error this will be null
         * @param date
         * @preserve (Part of the public API)
         */
        static formatDate(date: Date, options?: TcHmi.Localization.FormatOptions): string | null;
    }
    module Localization {
        /** Holds a date splitted in the number parts */
        interface DateParts {
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            second: number;
            millisecond: number;
        }
        interface ParseOptions {
            timeZone?: string | undefined;
        }
        interface FormatOptions extends ParseOptions {
            /** Type of the format output. Can be 'full', 'date', 'time', 'time-no-millisec' or 'date-no-millisec' */
            type?: FormatType;
            /** Locale to format the string. Can be empty to use the locale of the current user  */
            locale?: string | undefined | null;
        }
        type FormatType = 'full' | 'date' | 'time' | 'time-no-millisec' | 'full-no-millisec';
    }
}
declare module TcHmi {
    class Log {
        static Prefix: boolean;
    }
    /**
    * @preserve (Part of the public API)
     */
    module Log {
        /**
        * Prints out an error message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 1 or higher.
        * If the message is an object it will be inspectable in most debug tools. See errorEx if you want to show multiple objects.
        * Can log into a browser database, too. See "client" page in config page of the server.
        * @param message The text which will be printed out in the browsers console.
        * @preserve (Part of the public API)
        */
        function error(message: string | object | null | undefined, forceNoPrefix?: boolean): void;
        /**
        * Prints out an error message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 1 or higher.
        * Can log into a browser database, too. See "client" page in config page of the server.
        * @param message The text which will be printed out in the browsers console.
        * @param optionalParameters Optional parameters
        * @preserve (Part of the public API)
        */
        function errorEx(message: string, ...optionalParameters: any[]): void;
        /**
        * Prints out a warning message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 2 or higher.
        * If the message is an object it will be inspectable in most debug tools. See warnEx if you want to show multiple objects.
        * Can log into a browser database, too. See "client" page in config page of the server.
        * @param message The text which will be printed out in the browsers console
        * @preserve (Part of the public API)
        */
        function warn(message: string | object | null | undefined, forceNoPrefix?: boolean): void;
        /**
        * Prints out a warning message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 2 or higher.
        * Can log into a browser database, too. See "client" page in config page of the server.
        * @param message The text which will be printed out in the browsers console.
        * @param optionalParameters Optional parameters
        * @preserve (Part of the public API)
        */
        function warnEx(message: string, ...optionalParameters: any[]): void;
        /**
        * Prints out an info message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 3 or higher.
        * If the message is an object it will be inspectable in most debug tools. See infoEx if you want to show multiple objects.
        * Can log into a browser database, too. See "client" page in config page of the server.
        * @param message The text which will be printed out in the browsers console
        * @preserve (Part of the public API)
        */
        function info(message: string | object | null | undefined, forceNoPrefix?: boolean): void;
        /**
        * Prints out an info message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 3 or higher.
        * Can log into a browser database, too. See "client" page in config page of the server.
        * @param message The text which will be printed out in the browsers console.
        * @param optionalParameters Optional parameters
        * @preserve (Part of the public API)
        */
        function infoEx(message: string, ...optionalParameters: any[]): void;
        /**
        * Prints out a debug message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 4 or higher.
        * If the message is an object it will be inspectable in most debug tools. See debugEx if you want to show multiple objects.
        * Can log into a browser database, too. See "client" page in config page of the server.
        * @param message The text which will be printed out in the browsers console.
        * @preserve (Part of the public API)
        */
        function debug(message: string | object | null | undefined, forceNoPrefix?: boolean): void;
        /**
        * Prints out a debug message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 4 or higher.
        * Can log into a browser database, too. See "client" page in config page of the server.
        * @param message The text which will be printed out in the browsers console.
        * @param optionalParameters Optional parameters
        * @preserve (Part of the public API)
        */
        function debugEx(message: string, ...optionalParameters: any[]): void;
        /**
         * Starts a new timer for performance analysis and stops the current timer
         * Is also responsible for console grouping
         * @param timerName Human readable name of the starting Timer
         */
        function performanceLog(timerName: string | '[Source=Framework, Module=TcHmi] End'): void;
        /**
        * Starts a new timer for performance analysis
        * @param timerName Human readable name of the starting Timer
        */
        function performanceLogStart(timerName: string): void;
        /**
        * Stops an existing timer for performance analysis
        * @param timerName Human readable name of the starting Timer
        */
        function performanceLogEnd(timerName: string): void;
        /**
         * Builds a formatted message of hierarchical error objects
         * @param error
         * @preserve (Part of the public API)
         */
        function buildMessage(error: TcHmi.IErrorDetails | undefined): string;
    }
}
declare module TcHmi {
    /**
    * Provides functions for interaction with the TwinCAT HMI Server.
    * @preserve (Part of the public API)
    */
    class Server {
        /**
         * Returns the current readyState value of the underlying websocket which is connected to the TwinCAT HMI Server.
         * Use constants like WebSocket.CLOSED or WebSocket.OPEN for comparison.
         * @returns The current readyState value of the underlying websocket which is connected to the TwinCAT HMI Server or null.
         * @preserve (Part of the public API)
         */
        static getWebsocketReadyState(): number | null;
        /**
         * Returns true if the websocket is ready and false if its not.
         * @returns If true the websocket is ready for connectivity.
         * @preserve (Part of the public API)
         */
        static isWebsocketReady(): boolean;
        /**
         * Write one or more values to a TwinCAT HMI Server symbol.
         * @param symbolName The target TwinCAT HMI Server symbolname.
         * @param value The value which should be written to the target symbol.
         * @param callback Asynchronous response callback which will be raised if the operation has finished.
         * @returns Request id
         * @template W Type of the write value. Use any (or omit) if this contains multiple different types.
         * @template R Type of the read value. Use any (or omit) if this contains multiple different types.
         * @preserve (Part of the public API)
         */
        static writeSymbol<W = any, R = W>(symbolName: string | string[], value: W | W[], callback?: null | ((this: void, data: TcHmi.Server.IResultObject<W, R>) => void)): number | null;
        /**
        * Write one or more values to a TwinCAT HMI Server symbol.
         * @param symbolName The target TwinCAT HMI Server symbolname.
         * @param value The value which should be written to the target symbol.
         * @param requestOptions Options for the request itself
         * @param callback Asynchronous response callback which will be raised if the operation has finished.
         * @returns Request id
         * @template W Type of the write value. Use any (or omit) if this contains multiple different types.
         * @template R Type of the read value. Use any (or omit) if this contains multiple different types.
         * @preserve (Part of the public API)
         */
        static writeSymbolEx<W = any, R = W>(symbolName: string | string[], value: W | W[], requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.IResultObject<W, R>) => void)): number | null;
        /**
         * Reads the value of a TwinCAT HMI Server symbol.
         * @param symbolName The target TwinCAT HMI Server symbolname.
         * @param callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets 'error' (TcHmi.Errors.E_WEBSOCKET_NOT_READY or TcHmi.Errors.NONE) and the response
         * @returns Request id
         * @template W Type of the write value.
         * @template R Type of the read value.
         * @preserve (Part of the public API)
         */
        static readSymbol<W = any, R = W>(symbolName: string | string[], callback?: null | ((this: void, data: TcHmi.Server.IResultObject<W, R>) => void)): number | null;
        /**
        * Reads the value of a TwinCAT HMI Server symbol.
        * @param symbolName The target TwinCAT HMI Server symbolname.
        * @param requestOptions Options for the request itself
        * @param callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets 'error' (TcHmi.Errors.E_WEBSOCKET_NOT_READY or TcHmi.Errors.NONE) and the response
        * @returns Request id
        * @template W Type of the write value.
        * @template R Type of the read value.
        * @preserve (Part of the public API)
        */
        static readSymbolEx<W = any, R = W>(symbolName: string | string[], requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.IResultObject<W, R>) => void)): number | null;
        /**
         * Requests a message to the hmi server with default connection parameter
         * @param request Request object
         * @param callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets 'error' (TcHmi.Errors.E_WEBSOCKET_NOT_READY or TcHmi.Errors.NONE) and the response
         * @returns Request id
         * @template W Type of the write value. Use any (or omit) if this contains multiple different types.
         * @template R Type of the read value. Use any (or omit) if this contains multiple different types.
         * @preserve (Part of the public API)
         */
        static request<W = any, R = W>(request: TcHmi.Server.IMessage<W, R>, callback?: null | ((this: void, data: TcHmi.Server.IResultObject<W, R>) => void)): number | null;
        /**
         * Requests a message to the hmi server with given connection parameter
         * @param request Request object
         * @param requestOptions Options for the request itself
         * @param callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets 'error' (TcHmi.Errors.E_WEBSOCKET_NOT_READY or TcHmi.Errors.NONE) and the response
         * @returns Request id
         * @template W Type of the write value. Use any (or omit) if this contains multiple different types.
         * @template R Type of the read value. Use any (or omit) if this contains multiple different types.
         * @preserve (Part of the public API)
         */
        static requestEx<W = any, R = W>(request: TcHmi.Server.IMessage<W, R>, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.IResultObject<W, R>) => void)): number | null;
        /**
         * Subscribe to a to a list of commands.
         * Subscription have to be unsubscribed by use of the TcHmi.Server.unsubscribe function.
         * @param commands
         * @param interval Subscription refresh interval.
         * @param callback Asynchronous response callback which will be raised if the operation has finished.
         * @returns Request id
         * @template R Type of the read value. Use any (or omit) if this contains multiple different types.
         * @preserve (Part of the public API)
         */
        static subscribe<R = any>(commands: TcHmi.Server.ICommand<unknown, R>[], interval: number, callback?: null | ((this: void, data: TcHmi.Server.IResultObject<undefined, R>) => void)): number | null;
        /**
         * Subscribe to a to a list of commands.
         * Subscription have to be unsubscribed by use of the TcHmi.Server.unsubscribe function.
         * @param commands
         * @param interval Subscription refresh interval.
         * @param requestOptions Options for the request itself
         * @param callback Asynchronous response callback which will be raised if the operation has finished.
         * @returns Request id
         * @template R Type of the read value. Use any (or omit) if this contains multiple different types.
         * @preserve (Part of the public API)
         */
        static subscribeEx<R = any>(commands: TcHmi.Server.ICommand<unknown, R>[], interval: number, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.IResultObject<unknown, R>) => void)): number | null;
        /**
         * Unsubscribe a list of commands.
         * @param requestId The id of the subscription request which shall be unsubscribed.
         * @param callback Asynchronous response callback which will be raised if the operation has finished.
         * @returns Request id
         * @preserve (Part of the public API)
         */
        static unsubscribe(requestId: number, callback?: null | ((this: void, data: TcHmi.Server.IResultObject) => void)): number | null;
        /**
         * Unsubscribe a list of commands.
         * @param requestId The id of the subscription request which shall be unsubscribed.
         * @param requestOptions Options for the request itself
         * @param callback Asynchronous response callback which will be raised if the operation has finished.
         * @returns Request id
         * @preserve (Part of the public API)
         */
        static unsubscribeEx(requestId: number, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.IResultObject) => void)): number | null;
        /**
        * Releases a request and associated resources like callbacks.
        * @param id Id of the request to release.
        * @preserve (Part of the public API)
        */
        static releaseRequest(id: number | null): void;
        /**
         * Get current username as string or null.
         * @preserve (Part of the public API)
         */
        static getCurrentUser(this: void): string | null;
        /**
         * Get groups membership of current user as array (can be empty).
         * @preserve (Part of the public API)
         */
        static getGroupsOfCurrentUser(this: void): string[];
        /**
         * Get current user config.
         * @preserve (Part of the public API)
         */
        static getCurrentUserConfig(this: void): TcHmi.Server.userConfigOnServer;
        /**
         * Login into a TcHmiServer, reloads the page on success, call of a callback on failure.
         * @param userName String with the username
         * @param password String with the password
         * @param persistent Should the session be valid even after browser restart
         * @param callback This callback is called if the login was not successful
         * @returns returns a boolean if the login was called
         * @preserve (Part of the public API)
         */
        static login(userName: string | null | undefined, password: string | null | undefined, persistent?: boolean, callback?: (this: void, resultObject: TcHmi.IResultObject) => void): boolean;
        /**
         * Login into a TcHmiServer, reloads the page on success, call of a callback on failure.
         * @param userName String with the username
         * @param password String with the password
         * @param persistent Should the session be valid even after browser restart
         * @param requestOptions Options for the request itself
         * @param callback This callback is called if the login was not successful
         * @returns returns a boolean if the login was called
         * @preserve (Part of the public API)
         */
        static loginEx(userName: string | null | undefined, password: string | null | undefined, persistent: boolean, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: (this: void, data: TcHmi.IResultObject) => void): boolean;
        /**
         * Login into a TcHmiServer, reloads the page on success if not deactivated, call of a callback on failure.
         * @param userName String with the username
         * @param password String with the password
         * @param persistent Should the session be valid even after browser restart
         * @param reload Reload hmi after session login.
         * @param requestOptions Options for the request itself
         * @param callback This callback is called if the login was not successful
         * @returns returns a boolean if the login was called
         * @preserve (Part of the public API)
         */
        static loginEx2(userName: string | null | undefined, password: string | null | undefined, persistent: boolean, reload: boolean, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: (this: void, data: TcHmi.IResultObject) => void): boolean;
        /**
         * Logout from a TcHmiServer, reloads the page on success
         * @param callback This callback is called after the logout was sent
         * @returns returns a boolean if the logout was called
         * @preserve (Part of the public API)
         */
        static logout(callback?: null | ((this: void, resultObject: TcHmi.IResultObject) => void)): boolean;
        /**
         * Logout from a TcHmiServer, reloads the page on success
         * @param requestOptions Options for the request itself
         * @param callback This callback is called after the logout was sent
         * @returns returns a boolean if the logout was called
         * @preserve (Part of the public API)
         */
        static logoutEx(requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): boolean;
        /**
        * Logout from a TcHmiServer, optional reloads the page on success
        * @param reload Reload hmi after session logout
        * @param requestOptions Options for the request itself
        * @param callback This callback is called after the logout was sent
        * @returns returns a boolean if the logout was called
        * @preserve (Part of the public API)
        */
        static logoutEx2(reload: boolean, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): boolean;
        /**
         * Logout all users with a specific username or all users from a TcHmiServer
         * @param username username to logout.
         * If empty string or null is provided, all users are logged out.
         * The authentification domain can be specified by using 'Domain::UserName'. If no domain is specified all users with the given name will be logged out.
         * 'Domain::' will logout every user from this domain
         * @param callback This callback is called after the request was sent
         * @returns returns a boolean if the logout was called
         * @preserve (Part of the public API)
         */
        static forceLogout(username: string | Server.IForceLogoutTarget | null | undefined, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): boolean;
        /**
         * Logout all users with a specific username or all users from a TcHmiServer
         * @param userName username to logout.
         * If empty string or null is provided, all users are logged out.
         * The authentification domain can be specified by using 'Domain::UserName'. If no domain is specified all users with the given name will be logged out.
         * 'Domain::' will logout every user from this domain
         * @param requestOptions Options for the request itself
         * @param callback This callback is called after the request was sent
         * @returns returns a boolean if the logout was called
         * @preserve (Part of the public API)
         */
        static forceLogoutEx(userName: string | TcHmi.Server.IForceLogoutTarget | null | undefined, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): boolean;
    }
    module Server {
        /**
         * Result object which could have no response object.
         * @template W Type of the write value. Use any (or omit) if this interface contains multiple different types.
         * @template R Type of the read value.Use any (or omit) if this interface contains multiple different types.
         */
        interface IResultObject<W = any, R = W> extends TcHmi.IResultObject {
            /** The response of the server. */
            response?: IMessage<W, R>;
            /** Read values per command */
            results?: IValueResultObject<R>[];
        }
        /**
         * Result object with value of a command.
         */
        interface IValueResultObject<T = any> extends TcHmi.IResultObject {
            symbol?: string;
            value?: T;
        }
        /**
         * A message to the server.
         * @template W Type of the write value. Use any (or omit) if this interface contains multiple different types.
         * @template R Type of the read value.Use any (or omit) if this interface contains multiple different types.
         */
        type IMessage<W = any, R = W> = IReadWriteMessage<W, R> | ISubscriptionMessage<W, R> | IEventMessage<W, R>;
        /**
         * Message common interface.
         * @template W Type of the write value. Use any (or omit) if this interface contains multiple different types.
         * @template R Type of the read value.Use any (or omit) if this interface contains multiple different types.
         */
        interface IMessageBase<W = any, R = W> {
            apiVersion?: string;
            id?: number;
            sessionId?: string;
            /** Id of the server instance (cookies are shared with all servers on the same host) */
            serverId?: string;
            error?: IErrorDetails;
            /** custom string which will be in the answer again */
            customerData?: string;
            commands?: ICommand<W, R>[];
        }
        /**
         * A message to read or write to the server.
         * @template W Type of the write value. Use any (or omit) if this interface contains multiple different types.
         * @template R Type of the read value.Use any (or omit) if this interface contains multiple different types.
         */
        interface IReadWriteMessage<W = any, R = W> extends IMessageBase<W, R> {
            requestType: 'ReadWrite';
        }
        /**
         * A message to request a subscription in the server.
         * @template W Type of the write value. Use any (or omit) if this interface contains multiple different types.
         * @template R Type of the read value.Use any (or omit) if this interface contains multiple different types.
         */
        interface ISubscriptionMessage<W = any, R = W> extends IMessageBase<W, R> {
            requestType: 'Subscription';
            /** Minimal time the subscription ticks will be fired on symbol changes. If not set the default of the project will be used */
            intervalTime?: number | null;
        }
        /**
         * A message to request an event in the server.
         * @template W Type of the write value. Use any (or omit) if this interface contains multiple different types.
         * @template R Type of the read value.Use any (or omit) if this interface contains multiple different types.
         */
        interface IEventMessage<W = any, R = W> extends IMessageBase<W, R> {
            requestType: 'Event';
        }
        enum Error {
            HMI_SUCCESS = 0,
            HMI_E_FAIL = 257,
            HMI_E_SYMBOL_IN_USE = 274,
            HMI_E_SYMBOL_NOT_MAPPED = 513,
            HMI_E_LICENSE_TARGET = 778,
            HMI_E_MISSING_LICENSE_HANDSHAKE = 781,
            HMI_E_LICENSE_VERIFY = 782,
            HMI_E_INSUFFICIENT_ACCESS = 4101
        }
        /**
         * tchmi:server#/definitions/accessEnum
         *
         * NONE = 0,
         * READ = 1,
         * WRITE = 2,
         * READWRITE = 3
         */
        enum ACCESS {
            NONE = 0,
            READ = 1,
            WRITE = 2,
            READWRITE = 3
        }
        /**
         * One command for the server.
         * @template W Type of the write value. Use any (or omit) if this interface contains multiple different types.
         * @template R Type of the read value.Use any (or omit) if this interface contains multiple different types.
         */
        interface ICommand<W = any, R = W> {
            /** Name of the symbol */
            symbol: string;
            /** Custom string which will be forwared to the response */
            customerData?: string;
            /** Write value */
            writeValue?: W;
            /** Read value */
            readValue?: R;
            /** Error of the command */
            error?: IErrorDetails;
            /** Command options */
            commandOptions?: ICommandOptions[];
            /** Filter for arrays and maps. */
            filter?: Filter | string;
            /** Maps the filtered, sorted, and paged values to their original positions */
            filterMap?: number[];
            /** Order by settings. This is processed before limit and offset are used. */
            orderBy?: string;
            /** Should/is the request restricted in amount of array entries? 0 disables the limit. */
            limit?: number;
            /** Array entries should/do not start at the beginning (Zero-based numbering) */
            offset?: number;
            /** The answer has this amount of entries */
            maxEntries?: number;
            /** The time the command processing has started as iso 8601 string. */
            processedStart?: string;
            /** The time the command processing has ended as iso 8601 string. */
            processedEnd?: string;
        }
        /** Supported types of requests of the server. */
        type IRequestType = 'ReadWrite' | 'Subscription' | 'Event';
        /** Supported commands options of requests of the server. */
        type ICommandOptions = 'Add' | 
        /** Do not get read value, just check access rights for this command. */
        'Check' | 'Config' | 'Delete' | 
        /** This needs to be set for all commands writing the symbol to work. */
        'ForceSingleWrite' | 'Import' | 'Offline' | 'PagingHandled' | 
        /** Send response with every tick, even if nothing changed. */
        'Poll' | 'Replace' | 'SendErrorMessage' | 'SendWriteValue' | 'Transaction' | 
        /** Validate outgoing values too. */
        'ValidateRead' | 
        /** Subscriptions will not be merged if this is set. */
        'UniqueHash' | 'Extension1' | 'Extension2' | 'Extension3' | 'Extension4';
        /** Internal state of the user config */
        const enum userConfigState {
            /** Userconfig is still loaded. */
            loading = 0,
            /** Userconfig loading failed. */
            loadingerror = 1,
            /** No auth is required. */
            noAuthRequired = 2,
            /** Engineering server is active. */
            communicationDisabled = 3,
            /** Access set by group membership. */
            usergroup = 4
        }
        interface userConfigOnServer {
            /** State of the request for the config from server */
            state: TcHmi.Server.userConfigState;
            /** List of the groups the current user is member of */
            userIsInGroups: string[];
            /** Current Username */
            name: string | null;
            /** Current domain */
            domain: string | null;
            /** Current locale of this user for texts. Could be undefined if client locale should be used for this user! */
            locale: string | undefined;
            /** Configured locale of this user for texts. 'client' is the browser setting. 'project' refer to the default of the project which could be 'client' and a locale name. */
            configLocale: string | 'client' | 'project';
            /** Current locale of this user for date formating. Could be undefined if client locale should be used for this user! */
            timeFormatLocale: string | undefined;
            /** Configured locale of this user for time formats. 'client' is the browser setting. 'project' refer to the default of the project which could be 'client' and a locale name. */
            configTimeFormatLocale: string | undefined;
            /** Current time zone of this user to use in .toLocaleString() option. Could be undefined if client locale should be used for this user! */
            timeZone: string | undefined;
            /** Configured time zone of this user. 'client' is the browser setting. 'project' refer to the default of the project which could be 'client' and a time zone name. */
            configTimeZone: string | undefined;
            /** Current ip as seen from the server */
            clientIp: string;
            /** Current Session ID */
            session: string | null;
            /** Thumbprint/fingerprint of the client certificate */
            clientCertificate: string | null;
            /** Timespan (in ms) for a auto logoff. null disables auto logoff */
            autoLogOffMilliSeconds: number | null;
            /** Clear text error message */
            errorMessage: string;
            /** Mame of the extension which handles default authentification */
            defaultAuthExtension: string;
        }
        /**
         * Options for all reuests to the server.
         */
        interface IRequestOptions {
            timeout?: number;
            parallel?: boolean;
            refresh?: boolean;
        }
        interface IForceLogoutTarget {
            /** IP adress of the client */
            clientIp?: string;
            /** Thumbprint of the used client certificate */
            clientCertificate?: string;
            /** User group */
            group?: string;
            /** session id of the user */
            sessionId?: string;
        }
        class UserManagement {
            /**
             * Add a new user with a given password
             * @param userName Username to add.
             * @param password Password for the new user. Could be null if the extension does not support passwords.
             * @param callback
             * @preserve (Part of the public API)
             */
            static addUser(userName: string, password: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Add a new user with a given password
             * @param userName Username to add.
             * @param password Password for the new user. Could be null if the extension does not support passwords.
             * @param options Optional details for this new user.
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static addUserEx(userName: string, password: string | null, options?: Partial<TcHmi.Server.UserManagement.IUserDetails> | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all usernames as a string array
             * @param callback
             * @preserve (Part of the public API)
             */
            static listUsernames(callback?: null | ((this: void, data: TcHmi.Server.UserManagement.IUsernameListResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all usernames as a string array
             * @param options Options
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static listUsernamesEx(options?: TcHmi.Server.UserManagement.IUserManagementOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.UserManagement.IUsernameListResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all username as a dictionary with all meta data
             * @param callback
             * @preserve (Part of the public API)
             */
            static listUsers(callback?: null | ((this: void, data: TcHmi.Server.UserManagement.IUserResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all username as a dictionary with all meta data
             * @param options Options
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static listUsersEx(options?: TcHmi.Server.UserManagement.IUserManagementOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.UserManagement.IUserResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all user groups as a dictionary with all meta data
             * @param callback
             * @preserve (Part of the public API)
             */
            static listUserGroups(callback?: null | ((this: void, data: TcHmi.Server.UserManagement.IGroupResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all user groups as a dictionary with all meta data
             * @param options (not used till now)
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static listUserGroupsEx(options?: {} | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.UserManagement.IGroupResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all users of a group as a string array
             * @param callback
             * @preserve (Part of the public API)
             */
            static listUsersInGroup(groupName: string, callback?: null | ((this: void, data: TcHmi.Server.UserManagement.IUsernameListResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all users of a group as a string array
             * @param options Options
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static listUsersInGroupEx(groupName: string, options?: TcHmi.Server.UserManagement.IUserManagementOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.UserManagement.IUsernameListResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Removes a user
             * @param userName
             * @param callback
             * @preserve (Part of the public API)
             */
            static removeUser(userName: string, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
              * Removes a user
              * @param userName Username
              * @param options Options
              * @param requestOptions Options for the request itself
              * @param callback
              * @preserve (Part of the public API)
              */
            static removeUserEx(userName: string, options?: TcHmi.Server.UserManagement.IUserManagementOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Update user config
             * @param userName Username to update.
             * @param options Details for this user.
             * @param callback
             * @preserve (Part of the public API)
             */
            static updateUser(userName: string | null, options: UserManagement.IUpdateUserDetails | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Update user config
             * @param userName Username to update.
             * @param options Details for this user.
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static updateUserEx(userName: string | null, options: TcHmi.Server.UserManagement.IUpdateUserDetails | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Check access rights for usermanagement functions
             * @param options Option for setting usermanagement domain
             * @param callback
             * @preserve (Part of the public API)
             */
            static getApiAccess(options: TcHmi.Server.UserManagement.IUserManagementOptions | null, callback?: null | ((this: void, data: TcHmi.Server.UserManagement.IApiAccessResultObject) => void)): TcHmi.IErrorDetails;
        }
        namespace UserManagement {
            interface IUserManagementOptions {
                /** Domain of the user management. defaults to TcHmiUserManagement */
                domain?: string;
            }
            interface IBaseUserDetails extends IUserManagementOptions {
                /** a new user can be disabled */
                enabled: boolean;
                /** ISO8601 TimeSpan for logout after user interaction */
                autoLogout: string;
                /** locale of this user. 'client' and 'project' are special values for project global or browser */
                locale?: string;
                /** locale of this user for date formating. 'client' and 'project' are special values for project global or browser */
                timeFormatLocale?: string;
                /** time zone of this user. 'client' and 'project' are special values for project global or browser */
                timeZone?: string;
            }
            interface IUserDetails extends IBaseUserDetails {
                /** list of groups the user is part of */
                groups: string[];
            }
            interface IUpdateUserDetails extends Partial<IBaseUserDetails> {
                /** New username for this user */
                newName?: string;
                /** Password for the user */
                password?: string;
                /** Current password for the user (needed if the user wants to change the password of itself) */
                currentPassword?: string;
                /** List of new groups the user will be part of */
                addGroups?: string[];
                /** List of groups the user will be removed */
                removeGroups?: string[];
            }
            /** userList: string[]; */
            interface IUsernameListResultObject extends TcHmi.IResultObject {
                userList?: string[];
            }
            /** userDetails: Dictionary<IUserDetails>; */
            interface IUserResultObject extends TcHmi.IResultObject {
                userDetails?: Dictionary<TcHmi.Server.UserManagement.IUserDetails>;
            }
            interface IGroupDetails {
                /** a group can be disabled */
                enabled: boolean;
                fileAccess: TcHmi.Server.ACCESS;
                files: Dictionary<TcHmi.Server.ACCESS>;
                symbolAccess: TcHmi.Server.ACCESS;
                symbols: Dictionary<TcHmi.Server.ACCESS>;
            }
            interface IGroupResultObject extends TcHmi.IResultObject {
                groupDetailsList?: Dictionary<TcHmi.Server.UserManagement.IGroupDetails>;
            }
            interface IApiAccessResultObject extends TcHmi.IResultObject {
                result?: {
                    addUser: {
                        general: boolean;
                        enable: boolean;
                        locale: boolean;
                        timeFormatLocale: boolean;
                        timeZone: boolean;
                        autoLogoff: boolean;
                        groups: boolean;
                    };
                    listUserNames: {
                        general: boolean;
                    };
                    listUsers: {
                        general: boolean;
                        enabled: boolean;
                        locale: boolean;
                        timeFormatLocale: boolean;
                        timeZone: boolean;
                        autoLogoff: boolean;
                        groups: boolean;
                    };
                    listUserGroups: {
                        general: boolean;
                        enabled: boolean;
                        fileAccess: boolean;
                        files: boolean;
                        symbolAccess: boolean;
                        symbols: boolean;
                    };
                    listUsersInGroup: {
                        general: boolean;
                    };
                    removeUser: {
                        general: boolean;
                    };
                    updateUser: {
                        general: boolean;
                        newName: boolean;
                        addGroups: boolean;
                        removeGroups: boolean;
                        enabled: boolean;
                        autoLogout: boolean;
                        locale: boolean;
                        timeFormatLocale: boolean;
                        timeZone: boolean;
                        changeOwnPassword: boolean;
                        changePassword: boolean;
                    };
                };
            }
        }
        class RecipeManagement {
            /**
             * Lists all available recipe types
             * @param callback
             * @preserve (Part of the public API)
             */
            static listRecipeTypes(callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IRecipeTypeListResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all available recipe types
             * This function provides more options to manipulate the request
             * @param options Options
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static listRecipeTypesEx(
            /** Options for the recipeManagement */
            options?: RecipeManagement.IRecipeListOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IRecipeTypeListResultObject) => void)): TcHmi.IErrorDetails;
            /**
            * Watches a list of all available recipe types
            * @param options Options for the watch
            * @param callback Callback which is called once and on every change
            * @preserve (Part of the public API)
            */
            static watchRecipeTypesList(options?: RecipeManagement.IRecipeWatchOptions | null, callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IWatchResultObject<TcHmi.Server.RecipeManagement.FolderRecipeType>) => void)): DestroyFunction;
            /**
            * Returns a recipe types adressed by name and optional path
            * @param callback
            * @preserve (Part of the public API)
            */
            static getRecipeType(recipeTypeName: string, path: string | null, callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IRecipeTypeGetResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Returns a recipe types adressed by name and optional path
             * This function provides more options to manipulate the request
             * @param options Options
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static getRecipeTypeEx(recipeTypeName: string, path: string | null, 
            /** Options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IRecipeTypeGetResultObject) => void)): TcHmi.IErrorDetails;
            /**
            * Watches a recipe type
            * @param options Options for the watch
            * @param callback Callback which is called once and on every change
            * @preserve (Part of the public API)
            */
            static watchRecipeType(recipeTypeName: string, path: string | null, options?: RecipeManagement.IRecipeWatchOptions | null, callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IWatchResultObject<TcHmi.Server.RecipeManagement.RecipeType>) => void)): DestroyFunction;
            /**
             * Creates a recipe type folder
             * @param path name of the new folder
             * @param callback
             * @preserve (Part of the public API)
             */
            static createRecipeTypeFolder(path: string, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Creates a recipe type folder
             * This function provides more options to manipulate the request
             * @param path Name of the new folder
             * @param options Options
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static createRecipeTypeFolderEx(path: string, 
            /** Options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Deletes a recipe type folder
             * @param path name of the folder
             * @param callback
             * @preserve (Part of the public API)
             */
            static deleteRecipeTypeFolder(path: string, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Deletes a recipe type folder
             * This function provides more options to manipulate the request
             * @param path Name of the folder
             * @param options Options
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static deleteRecipeTypeFolderEx(path: string, 
            /** Options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Creates a new recipe type
             * @param recipeTypeName name of the recipe type
             * @param recipeType recipe type definition
             * @param path Path of the recipe type (root folder if set to null)
             * @param callback
             * @preserve (Part of the public API)
             */
            static createRecipeType(recipeTypeName: string, recipeType: TcHmi.Server.RecipeManagement.RecipeType, path: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Creates a new recipe type
             * This function provides more options to manipulate the request
             * @param recipeTypeName Name of the recipe type
             * @param recipeType Recipe type definition
             * @param path Path of the recipe type (root folder if set to null)
             * @param options Options
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static createRecipeTypeEx(recipeTypeName: string, recipeType: TcHmi.Server.RecipeManagement.RecipeType, path: string | null, 
            /** Options for the recipeManagement */
            options?: TcHmi.Server.RecipeManagement.IRecipeOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Updates a recipe type
             * @param recipeTypeName name of the recipe type
             * @param recipeType recipe type definition
             * @param path Path of the recipe type (root folder if set to null)
             * @param callback
             * @preserve (Part of the public API)
             */
            static updateRecipeType(recipeTypeName: string, recipeType: TcHmi.Server.RecipeManagement.RecipeType, path: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Updates a recipe type
             * This function provides more options to manipulate the request
             * @param recipeTypeName Name of the recipe type
             * @param recipeType Recipe type definition
             * @param path Path of the recipe type (root folder if set to null)
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static updateRecipeTypeEx(recipeTypeName: string, recipeType: TcHmi.Server.RecipeManagement.RecipeType, path: string | null, 
            /** Options for the recipeManagement */
            options?: TcHmi.Server.RecipeManagement.IRecipeOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Renames or moves a recipe type
             * @param recipeTypeName Old name of the recipe type
             * @param path Old path of the recipe type (root folder if set to null)
             * @param newName New name of the recipe type
             * @param newPath New path of the recipe type (root folder if set to null)
             * @param callback
             * @preserve (Part of the public API)
             */
            static renameRecipeType(recipeTypeName: string, path: string | null, newName: string, newPath: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Renames or moves a recipe type
             * This function provides more options to manipulate the request
             * @param recipeTypeName Old name of the recipe type
             * @param path Old path of the recipe type (root folder if set to null)
             * @param newName New name of the recipe type
             * @param newPath New path of the recipe type (root folder if set to null)
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static renameRecipeTypeEx(recipeTypeName: string, path: string | null, newName: string, newPath: string | null, options?: RecipeManagement.IRecipeOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Renames or moves a recipe type folder
             * @param recipeTypeFolderName Old name of the recipe type
             * @param path Old path of the recipe type (root folder if set to null)
             * @param newName New name of the recipe type
             * @param newPath New path of the recipe type (root folder if set to null)
             * @param callback
             * @preserve (Part of the public API)
             */
            static renameRecipeTypeFolder(recipeTypeFolderName: string, path: string | null, newName: string, newPath: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Renames or moves a recipe type folder
             * This function provides more options to manipulate the request
             * @param recipeTypeFolderName Old name of the recipe type
             * @param path Old path of the recipe type (root folder if set to null)
             * @param newName New name of the recipe type
             * @param newPath New path of the recipe type (root folder if set to null)
             * @param options Options
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static renameRecipeTypeFolderEx(recipeTypeFolderName: string, path: string | null, newName: string, newPath: string | null, 
            /** Options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Deletes a recipe type
             * @param recipeTypeName name of the recipe type
             * @param path Path of the recipe type (root folder if set to null)
             * @param callback
             * @preserve (Part of the public API)
             */
            static deleteRecipeType(recipeTypeName: string, path: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Deletes a recipe type
             * This function provides more options to manipulate the request
             * @param recipeTypeName Name of the recipe type
             * @param path Path of the recipe type (root folder if set to null)
             * @param options Options
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static deleteRecipeTypeEx(recipeTypeName: string, path: string | null, 
            /** Options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all available recipes
             * @param callback
             * @preserve (Part of the public API)
             */
            static listRecipes(callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IRecipeListResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all available recipes
             * This function provides more options to manipulate the request
             * @param options Options
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static listRecipesEx(
            /** Options for the recipeManagement */
            options?: RecipeManagement.IRecipeListOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IRecipeListResultObject) => void)): TcHmi.IErrorDetails;
            /**
            * Watches a list of all available recipes
            * @param options Options for the watch
            * @param callback Callback which is called once and on every change
            * @preserve (Part of the public API)
            */
            static watchRecipeList(options?: RecipeManagement.IRecipeWatchOptions | null, callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IWatchResultObject<TcHmi.Server.RecipeManagement.FolderRecipe>) => void)): DestroyFunction;
            /**
             * Creates a recipe folder
             * @param path name of the new folder
             * @param callback
             * @preserve (Part of the public API)
             */
            static createRecipeFolder(path: string, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Creates a recipe folder
             * This function provides more options to manipulate the request
             * @param path name of the new folder
             * @param options Options
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static createRecipeFolderEx(path: string, 
            /** Options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Deletes a recipe folder
             * @param path name of the folder
             * @param callback
             * @preserve (Part of the public API)
             */
            static deleteRecipeFolder(path: string, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Deletes a recipe folder
             * This function provides more options to manipulate the request
             * @param path Name of the folder
             * @param options Options
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static deleteRecipeFolderEx(path: string, 
            /** Options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Creates a new recipe
             * @param recipeName Name of the recipe (could be prefixed with a path if seperated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param recipe recipe definition
             * @param callback
             * @preserve (Part of the public API)
             */
            static createRecipe(recipeName: string, path: string | null, recipe: RecipeManagement.Recipe, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Creates a new recipe
             * This function provides more options to manipulate the request
             * @param recipeName Name of the recipe (could be prefixed with a path if seperated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param recipe Recipe definition
             * @param options Options
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static createRecipeEx(recipeName: string, path: string | null, recipe: RecipeManagement.Recipe, 
            /** Options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists one recipe
             * @param recipeName Name of the recipe (could be prefixed with a path if seperated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param callback
             * @preserve (Part of the public API)
             */
            static getRecipe(recipeName: string, path: string | null, callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IGetRecipeResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists one recipe
             * This function provides more options to manipulate the request
             * @param recipeName Name of the recipe (could be prefixed with a path if seperated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param options Options
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static getRecipeEx(recipeName: string, path: string | null, 
            /** Options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IGetRecipeResultObject) => void)): TcHmi.IErrorDetails;
            /**
            * Watches a recipe
            * @param options Options for the watch
            * @param callback Callback which is called once and on every change
            * @preserve (Part of the public API)
            */
            static watchRecipe(recipeName: string, path: string | null, options?: RecipeManagement.IRecipeWatchOptions | null, callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IWatchResultObject<TcHmi.Server.RecipeManagement.Recipe>) => void)): DestroyFunction;
            /**
             * Updates a recipe
             * @param recipeName Name of the recipe (could be prefixed with a path if seperated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param newValues dictionary of the new values
             * @param callback
             * @preserve (Part of the public API)
             */
            static updateRecipe(recipeName: string, path: string | null, newValues: Dictionary<any>, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Updates a recipe
             * This function provides more options to manipulate the request
             * @param recipeName Name of the recipe (could be prefixed with a path if seperated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param newValues Dictionary of the new values
             * @param options Options
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static updateRecipeEx(recipeName: string, path: string | null, newValues: Dictionary<any>, 
            /** Options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Reads all values which is referenced by a recipe
             * @param recipeName Name of the recipe (could be prefixed with a path if seperated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param callback
             * @preserve (Part of the public API)
             */
            static readFromTarget(recipeName: string, path: string | null, callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IReadFromTargetResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Reads all values which is referenced by a recipe
             * This function provides more options to manipulate the request
             * @param recipeName Name of the recipe (could be prefixed with a path if seperated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static readFromTargetEx(recipeName: string, path: string | null, options?: RecipeManagement.IRecipeOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IReadFromTargetResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Reads the current values which are referenced from a base recipe and write it back
             * @param recipeName Name of the recipe (could be prefixed with a path if seperated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param callback
             * @preserve (Part of the public API)
             */
            static teach(recipeName: string, path: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Reads the current values which are referenced from a base recipe and write it back
             * This function provides more options to manipulate the request
             * @param recipeName Name of the recipe (could be prefixed with a path if seperated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static teachEx(recipeName: string, path: string | null, options?: RecipeManagement.IRecipeOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Reads the current values which are referenced from a base recipe and write it into a new recipe
             * @param recipeName Name of the base recipe (could be prefixed with a path if seperated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param newrecipeName Name of the new recipe. (could be prefixed with a path if seperated with ::)
             * @param newRecipePath Path of the new recipe. (root folder if set to null)
             * @param callback
             * @preserve (Part of the public API)
             */
            static teachAsNewRecipe(recipeName: string, path: string | null, newRecipeName: string, newRecipePath: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Reads the current values which are referenced from a base recipe and write it into a new recipe
             * This function provides more options to manipulate the request
             * @param recipeName Name of the base recipe (could be prefixed with a path if seperated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param newrecipeName Name of the new recipe. (could be prefixed with a path if seperated with ::)
             * @param newRecipePath Path of the new recipe. (root folder if set to null)
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static teachAsNewRecipeEx(recipeName: string, path: string | null, newRecipeName: string, newRecipePath: string | null, options?: RecipeManagement.IRecipeOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Activates a recipe (writes all values)
             * @param recipeName Name of the recipe (could be prefixed with a path if seperated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param callback
             * @preserve (Part of the public API)
             */
            static activate(recipeName: string, path: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Activates a recipe (writes all values)
             * This function provides more options to manipulate the request
             * @param recipeName Name of the recipe (could be prefixed with a path if seperated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static activateEx(recipeName: string, path: string | null, options?: RecipeManagement.IRecipeOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all active recipes
             * @param callback
             * @preserve (Part of the public API)
             */
            static getActiveRecipes(callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IGetActiveRecipesResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all active recipes
             * This function provides more options to manipulate the request
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static getActiveRecipesEx(options?: RecipeManagement.IRecipeOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IGetActiveRecipesResultObject) => void)): TcHmi.IErrorDetails;
            /**
            * Watches a list of all active recipes
            * @param options Options for the watch
            * @param callback Callback which is called once and on every change
            * @preserve (Part of the public API)
            */
            static watchActiveRecipes(options?: RecipeManagement.IRecipeWatchOptions | null, callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IWatchResultObject<string[]>) => void)): DestroyFunction;
            /**
             * Renames or moves a recipe
             * @param recipeName Old name of the recipe (could be prefixed with a path if seperated with ::)
             * @param path Old path of the recipe (root folder if set to null)
             * @param newName New name of the recipe
             * @param newPath New path of the recipe (root folder if set to null)
             * @param callback
             * @preserve (Part of the public API)
             */
            static renameRecipe(recipeName: string, path: string | null, newName: string, newPath: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Renames or moves a recipe
             * This function provides more options to manipulate the request
             * @param recipeName Old name of the recipe (could be prefixed with a path if seperated with ::)
             * @param path Old path of the recipe (root folder if set to null)
             * @param newName New name of the recipe
             * @param newPath New path of the recipe (root folder if set to null)
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static renameRecipeEx(recipeName: string, path: string | null, newName: string, newPath: string | null, 
            /** Options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Renames or moves a recipe folder
             * @param recipeFolderName Old name of the recipe (could be prefixed with a path if seperated with ::)
             * @param path Old path of the recipe (root folder if set to null)
             * @param newName New name of the recipe
             * @param newPath New path of the recipe (root folder if set to null)
             * @param callback
             * @preserve (Part of the public API)
             */
            static renameRecipeFolder(recipeFolderName: string, path: string | null, newName: string, newPath: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Renames or moves a recipe folder
             * This function provides more options to manipulate the request
             * @param recipeFolderName Old name of the recipe (could be prefixed with a path if seperated with ::)
             * @param path Old path of the recipe (root folder if set to null)
             * @param newName Mew name of the recipe
             * @param newPath New path of the recipe (root folder if set to null)
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static renameRecipeFolderEx(recipeFolderName: string, path: string | null, newName: string, newPath: string | null, 
            /** Options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Deletes a recipe
             * @param recipeName Name of the recipe (could be prefixed with a path if seperated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param callback
             * @preserve (Part of the public API)
             */
            static deleteRecipe(recipeName: string, path: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Deletes a recipe
             * This function provides more options to manipulate the request
             * @param recipeName Name of the recipe (could be prefixed with a path if seperated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static deleteRecipeEx(recipeName: string, path: string | null, 
            /** Options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
        }
        namespace RecipeManagement {
            interface RecipeType {
                /** List of RecipeTypes this RecipeType inherits  */
                recipeTypeNames?: string[];
                /** List of symbol definitions for this RecipeType */
                members: Dictionary<{
                    /** Name of the symbol of this entry */
                    symbol: string;
                    /** defaultValue for this symbol */
                    defaultValue: any;
                    /** Schema the value inside a Recipe should validate */
                    schema?: TcHmi.JsonSchema;
                    /** Engineering unit for this symbol */
                    unit?: string;
                    comment?: string;
                    enabled?: boolean;
                    group?: string;
                    order?: number;
                } | {
                    recipeType: string;
                }>;
                options?: {
                    /** None: no restriction from recipeType
                    Disabled: All member of the recipe are disabled */
                    enabled?: 'None' | 'Disabled';
                    comment?: string;
                };
            }
            /** Dictionary of folders or RecipeTypes */
            interface FolderRecipeType {
                [index: string]: FolderRecipeType | RecipeType;
            }
            interface IRecipeListResultObject extends TcHmi.IResultObject {
                value?: FolderRecipe;
            }
            interface Recipe {
                /** Name of the RecipeTypes this Recipe implements */
                recipeTypeName: string;
                /** Values for the Symbols */
                values: Dictionary<any>;
            }
            /** Dictionary of folders or Recipes */
            interface FolderRecipe {
                [index: string]: FolderRecipe | Recipe;
            }
            interface IRecipeTypeListResultObject extends TcHmi.IResultObject {
                value?: TcHmi.Server.RecipeManagement.FolderRecipeType;
            }
            interface IRecipeTypeGetResultObject extends TcHmi.IResultObject {
                value?: TcHmi.Server.RecipeManagement.RecipeType;
            }
            interface IGetRecipeResultObject extends TcHmi.IResultObject {
                value?: TcHmi.Server.RecipeManagement.Recipe;
            }
            interface IReadFromTargetResultObject extends TcHmi.IResultObject {
                /** This is an example key "subFolder::myRecipe" */
                value?: Dictionary<TcHmi.Server.RecipeManagement.Recipe>;
            }
            interface IGetActiveRecipesResultObject extends TcHmi.IResultObject {
                recipeList?: string[];
            }
            interface IRecipeOptions {
                /** domain of the RecipeManagement. defaults to TcHmiRecipeManagement */
                domain?: string;
            }
            interface IRecipeListOptions extends IRecipeOptions {
                /** Subpath to list a subfolder */
                path?: string;
            }
            interface IRecipeWatchOptions extends IRecipeOptions {
            }
            interface IWatchResultObject<T = any> extends TcHmi.IResultObject {
                value?: T;
                destroy?: TcHmi.DestroyFunction;
                response?: TcHmi.Server.IMessage<T>;
            }
        }
        class Historize {
            /**
             * Adding a Symbol to the Historize Configuration of the server
             * @param symbolName Name of the Symbol to manipulate
             * @param settings
             * @param callback
             * @preserve (Part of the public API)
             */
            static add(symbolName: string, settings: TcHmi.Server.Historize.IEntrySettings, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Adding a Symbol to the Historize Configuration of the server
             * @param symbolName Name of the Symbol to manipulate
             * @param settings
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static addEx(symbolName: string, settings: TcHmi.Server.Historize.IEntrySettings, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Adding a Symbol to the Historize Configuration of the server
             * @param symbolName Name of the Symbol to manipulate
             * @param settings
             * @param options global settings
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static addEx2(symbolName: string, settings: TcHmi.Server.Historize.IEntrySettings, options: TcHmi.Server.Historize.IOptions | null, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Removing a Symbol from the Historize Configuration of the server
             * @param symbolName Name of the Symbol to manipulate
             * @param callback
             * @preserve (Part of the public API)
             */
            static remove(symbolName: string, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
            * Removing a Symbol from the Historize Configuration of the server
            * @param symbolName Name of the Symbol to manipulate
            * @param requestOptions Options for the request itself
            * @param callback
            * @preserve (Part of the public API)
            */
            static removeEx(symbolName: string, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Removing a Symbol from the Historize Configuration of the server
             * @param symbolName Name of the Symbol to manipulate
             * @param options global settings
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static removeEx2(symbolName: string, options: TcHmi.Server.Historize.IOptions | null, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Update a config of a Symbol in the Historize Configuration of the server
             * @param symbolName Name of the Symbol to manipulate
             * @param settings
             * @param callback
             * @preserve (Part of the public API)
             */
            static update(symbolName: string, settings: TcHmi.Server.Historize.IEntrySettings, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Update a config of a Symbol in the Historize Configuration of the server
             * @param symbolName Name of the Symbol to manipulate
             * @param settings
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static updateEx(symbolName: string, settings: TcHmi.Server.Historize.IEntrySettings, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Update a config of a Symbol in the Historize Configuration of the server
             * @param symbolName Name of the Symbol to manipulate
             * @param settings
             * @param options global settings
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static updateEx2(symbolName: string, settings: TcHmi.Server.Historize.IEntrySettings, options: TcHmi.Server.Historize.IOptions | null, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Gets the current config of a Symbol in the Historize Configuration of the server
             * @param symbolName Name of the Symbol to manipulate
             * @param callback
             * @preserve (Part of the public API)
             */
            static get(symbolName: string, callback?: null | ((this: void, data: TcHmi.Server.Historize.IEntryResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Gets the current config of a Symbol in the Historize Configuration of the server
             * @param symbolName Name of the Symbol to manipulate
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static getEx(symbolName: string, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.Historize.IEntryResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Gets the current config of a Symbol in the Historize Configuration of the server
             * @param symbolName Name of the Symbol to manipulate
             * @param options global settings
             * @param requestOptions Options for the request itself
             * @param callback
             * @preserve (Part of the public API)
             */
            static getEx2(symbolName: string, options: Historize.IOptions | null, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.Historize.IEntryResultObject) => void)): TcHmi.IErrorDetails;
        }
        module Historize {
            interface IEntrySettings {
                /** ISO8601 Time Span */
                INTERVAL?: string;
                MAXENTRIES?: number;
                ROWLIMIT?: number;
                RECORDINGENABLED?: boolean;
            }
            interface IEntrySettingsEx {
                /** ISO8601 Time Span */
                interval?: string;
                maxEntries?: number;
                rowLimit?: number;
                recordingEnabled?: boolean;
            }
            /** Global options for the historization */
            interface IOptions {
                /** Domain of the historize handling. defaults to TcHmiSqliteHistorize */
                domain?: string;
            }
            interface IEntryResultObject extends TcHmi.IResultObject {
                key?: string;
                settings?: IEntrySettings;
            }
        }
        class Events {
            /**
             * Confirm an alarm.
             * @param alarm The alarm to confirm.
             */
            static confirmAlarm(alarm: Events.Alarm, callback?: (this: void, data: TcHmi.IResultObject) => void): void;
            /**
             * Register a consumer for events.
             * @param filter    The filter of this consumer. Only events matching the filter will be passed on to the consumer.
             * @param callbacks The callbacks to pass events back to the consumer. Consumers can specify one callback for listing events and one for the event subscription.
             */
            static registerConsumer(filter: Filter | null, callbacks: {
                list?: (this: void, data: Events.ListResult) => void;
                subscription?: (this: void, data: Events.SubscriptionResult) => void;
            }): DestroyFunction | null;
            /**
             * Parses a raw server event and returns an object for consumption by controls etc.
             * @param rawEvent The raw event to parse.
             */
            static parseServerEvent(rawEvent: System.ServerEventManager.RawServerEvent): TcHmi.Server.Events.Message | TcHmi.Server.Events.Alarm | TcHmi.Server.Events.PayloadEvent;
        }
        module Events {
            export interface Consumer {
                filter: System.Filter;
                rawFilter: TcHmi.Filter;
                activeAlarmIds: (number | string)[];
                listCallback?: (data: ListResult) => void;
                subscriptionCallback?: (data: SubscriptionResult) => void;
            }
            export interface ListResult<TPayload = any, TParams extends Dictionary<any> = Dictionary<any>> extends TcHmi.IResultObject {
                events?: Event<TPayload, TParams>[];
            }
            export interface SubscriptionResult<TPayload = any, TParams extends Dictionary<any> = Dictionary<any>> extends TcHmi.IResultObject {
                event?: Event<TPayload, TParams>;
                changeType?: ChangeType;
                removedByFilter?: boolean;
            }
            export enum Type {
                Message = 0,
                Alarm = 1,
                Payload = 2
            }
            export enum Severity {
                Verbose = 0,
                Info = 1,
                Warning = 2,
                Error = 3,
                Critical = 4
            }
            export enum AlarmState {
                Raised = 0,
                Confirmed = 1,
                Cleared = 2,
                ClearedAndConfirmed = 3,
                Invalid = 4
            }
            export enum ConfirmationState {
                NotSupported = 0,
                NotRequired = 1,
                WaitForConfirmation = 2,
                Confirmed = 3,
                Reset = 4
            }
            interface EventBase {
                /** The type of event */
                type: Type;
                /** The domain of the event */
                domain: string;
                /** The name of the event */
                name: string;
                timeReceived: Date;
                sessionId?: string;
            }
            interface MessageOrAlarm<T extends Dictionary<any> = Dictionary<any>> extends EventBase {
                /** The type of event */
                type: Type.Message | Type.Alarm;
                /** The severity of the event */
                severity: Severity;
                sourceDomain: string;
                /** The localized text of the event */
                text: string;
                /** The time at which the event was triggered */
                timeRaised: Date;
                /** Parameters set by the trigger of the event */
                params: T;
            }
            export interface Message<T extends Dictionary<any> = Dictionary<any>> extends MessageOrAlarm<T> {
                /** The type of event */
                type: Type.Message;
            }
            export interface Alarm<T extends Dictionary<any> = Dictionary<any>> extends MessageOrAlarm<T> {
                /** The type of event */
                type: Type.Alarm;
                /** A unique value with which this alarm can be identified */
                id: number;
                /** The time at which the alarm was confirmed by the trigger as no longer acute */
                timeCleared: Date | null;
                /** The time at which the alarm was acknowledged by the user */
                timeConfirmed: Date | null;
                alarmState: AlarmState;
                /** The current confirmation status */
                confirmationState: ConfirmationState;
            }
            export interface PayloadEvent<T = any> extends EventBase {
                /** The type of event */
                type: Type.Payload;
                payload?: T;
            }
            export enum ChangeType {
                AlarmRaised = 0,
                AlarmChanged = 1,
                AlarmDisposed = 2,
                MessageSent = 3
            }
            export type Event<TPayload = any, TParams extends Dictionary<any> = Dictionary<any>> = Message<TParams> | Alarm<TParams> | PayloadEvent<TPayload>;
            export function isAlarm(value: Event): value is Alarm;
            export function isMessage(value: Event): value is Message;
            export function isPayload(value: Event): value is PayloadEvent;
            export {};
        }
        class ADS {
            /**
             * CheckLicense
             * @param licenseId
             * @param callback
             */
            static checkLicense(licenseId: string, callback?: null | ((this: void, data: TcHmi.Server.ADS.ICheckLicenseResult) => void)): TcHmi.IErrorDetails;
            /**
             * CheckLicenseEx
             * @param licenseId
             * @param requestOptions Options for the request itself
             * @param callback
             */
            static checkLicenseEx(licenseId: string, requestOptions: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.ADS.ICheckLicenseResult) => void)): TcHmi.IErrorDetails;
        }
        module ADS {
            interface ICheckLicenseResult extends TcHmi.IResultObject {
                /** License instance count */
                count?: number;
                /** Expiration time as ISO-8601 time string ('1804-03-05T00:25:27.70955161Z'). */
                expireTimeUTC?: string;
                /** License result (Valid if >= 0, Invalid if < 0) */
                result?: number | CheckLicenseResult;
            }
            enum CheckLicenseResult {
                /** Valid license */
                S_VALID = 0,
                /** License generated by System Manager (e.g. 7 day trial license) */
                S_PENDING = 515,
                /** No license found (unknown license id) */
                E_LICENSENOTFOUND = -403769124,
                /** License expired */
                E_LICENSEEXPIRED = -403769125,
                /** License exceeded */
                E_LICENSEEXCEEDED = -403769126,
                /** License invalid */
                E_LICENSEINVALID = -403769127,
                /** License invalid system id */
                E_LICENSESYSTEMID = -403769128,
                /** License not time limited */
                E_LICENSENOTIMELIMIT = -403769129,
                /** License issue time in the future */
                E_LICENSEFUTUREISSUE = -403769130,
                /** License time period to long */
                E_LICENSETIMETOLONG = -403769131
            }
        }
        class Domains {
            /**
            * @param name Name of the domain to watch
             * @param callback
             */
            static watch(name: string, callback?: (data: TcHmi.Symbol.IServerWatchResultObject<Domains.IDomainInfo>) => void): DestroyFunction;
        }
        module Domains {
            /** IDomainInfo */
            interface IDomainInfo {
                error?: IErrorDetails;
                /** Shows if extension can be used for user management. */
                authExtension: boolean;
                configVersion: string;
                /** Name of the extension. */
                extension: string;
                guid?: string;
                /** Indicate the extension is license status. */
                licensed?: boolean;
                remote?: boolean;
                required?: boolean;
                /** Shows the current state of the extension. */
                state?: 'NotLoaded' | 'Loaded' | 'Initialized' | 'Invalid' | 'Disabled' | 'Unloading' | 'NotRunning';
                /** Shows last update time of the config. */
                updated?: string;
                version: string;
            }
        }
    }
}
declare module TcHmi {
    /**
    * Reserved
    * @preserve (Part of the public API)
    */
    class StyleProvider {
        /**
         * Returns all computed styles that are active on the first given element. Does return values set by CSS files, the other Style APIs and AnimationProvider
         * Unset or unknown CSS values will not be set in the result object.
         * @param element The jQuery collection or single HTML/SVG element.
         */
        static getComputedElementStyle(element: JQuery<Element> | readonly Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined): Dictionary<string>;
        /**
         * Returns the given computed CSS property on the first given element. Does return values set by CSS files, the other Style APIs and AnimationProvider
         * Unset or unknown CSS values will not be set in the result object.
         * @param element The jQuery collection or single HTML/SVG element.
         * @param propertyName The CSS property to get.
         * @template T Name of the property to fetch
         */
        static getComputedElementStyle<T extends string>(element: JQuery<Element> | readonly Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, propertyName: T): Record<T, string>;
        /**
         * Returns the given computed CSS property on the first given element. Does return values set by CSS files, the other Style APIs and AnimationProvider
         * Unset or unknown CSS values will not be set in the result object.
         * @param element The jQuery collection or single HTML/SVG element.
         * @param propertyNames The CSS properties to get.
         * @template T Names of the properties to fetch
         */
        static getComputedElementStyle<T extends string>(element: JQuery<Element> | readonly Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, propertyNames: readonly T[]): Record<T, string>;
        /**
         * Returns all styles that are set on the first given element. Does not return values set by CSS files, the other Style APIs and AnimationProvider
        * @param element The jQuery element.
         */
        static getSimpleElementStyle(element: JQuery<Element> | readonly Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined): Dictionary<string>;
        /**
         * Returns the given CSS property on the first given element. Does not return values set by CSS files, the other Style APIs and AnimationProvider
         * @param element The jQuery element.
         * @param propertyName The CSS property to get.
         * @template T Name of the property to fetch
         */
        static getSimpleElementStyle<T extends string>(element: JQuery<Element> | readonly Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, propertyName: T): Record<T, string>;
        /**
         * Returns the given CSS property on the first given element. Does not return values set by CSS files, the other Style APIs and AnimationProvider
         * @param element The jQuery element.
         * @param propertyNames The CSS properties to get.
         * @template T Names of the properties to fetch
         */
        static getSimpleElementStyle<T extends string>(element: JQuery<Element> | readonly Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, propertyNames: readonly T[]): Record<T, string>;
        /**
         * Style setter for simple styles in a collection of JQuery elements or single HTML or SVG Elements.
         * @param element The jQuery element.
         * @param propertyName The CSS property to process.
         * @param value The value for the CSS property.
         */
        static setSimpleElementStyle(element: JQuery<Element> | readonly Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, propertyName: string, value: string | null | undefined): void;
        /**
         * Style setter forsimple styles in a collection of JQuery elements or single HTML or SVG Elements.
         * @param element The jQuery element.
         * @param propertyName The CSS property to process.
         * @param value An array of values for the CSS property. This is useful for providing vendor-prefixed values to ensure compatibility.
         */
        static setSimpleElementStyle(element: JQuery<Element> | readonly Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, propertyName: string, values: readonly string[] | null): void;
        /**
         * Style setter for simple styles in a collection of JQuery elements or single HTML or SVG Elements.
         * @param element The jQuery element.
         * @param styles A dictionary of property-value pairs. Can be used to set multiple styles simultaneously. The values can be strings or null to remove values.
         */
        static setSimpleElementStyle(element: JQuery<Element> | readonly Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, styles: Readonly<Dictionary<string | readonly string[] | null>> | null): void;
        /**
         * Style processor for generic styles.
         * @param controlName The name of the target control.
         * @param selector The target CSS selector. %id% is automatically replaced by the control name. Pass an empty string to target the control root.
         * @param property      The CSS property to process.
         * @param value         The value for the CSS property.
         */
        static processGenericStyle(controlName: string, selector: string, property: string, value: string | null): void;
        /**
         * Style processor for generic styles.
         * @param controlName The name of the target control.
         * @param selector The target CSS selector. %id% is automatically replaced by the control name. Pass an empty string to target the control root.
         * @param propertyName      The CSS property to process.
         * @param value         An array of values for the CSS property. This is useful for providing vendor-prefixed values to ensure compatibility.
         */
        static processGenericStyle(controlName: string, selector: string, propertyName: string, value: string[] | null): void;
        /**
         * Style processor for generic styles.
         * @param controlName The name of the target control.
         * @param selector The target CSS selector. %id% is automatically replaced by the control name. Pass an empty string to target the control root.
         * @param styles        A dictionary of property-value pairs. Can be used to set multiple styles simultaneously. The values can be strings or arrays of strings to provide vendor-prefixed values.
         */
        static processGenericStyle(controlName: string, selector: string, styles: Dictionary<string | string[] | null>): void;
        /**
         * Resolves a SolidColor object to a string representation for use as css color property.
         * Has to be called with a valid SolidColor. Use isSolidColor to check
         * @param colorObject The SolidColor to resolve.
         * @preserve (Part of the public API)
        */
        static resolveSolidColorAsCssValue(colorObject: TcHmi.SolidColor): string;
        /**
        * Resolve a SolidColor object to a RGBAColor object.
        * Has to be called with a valid SolidColor. Use isSolidColor to check
        * @param colorObject The SolidColor to resolve.
        * @preserve (Part of the public API)
        */
        static resolveSolidColorAsRGBA(colorObject: TcHmi.SolidColor): RGBAColor;
        /**
         * Resolves a LinearGradientColor object to a string representation for use in css background-image property.
         * Has to be called with a valid LinearGradientColor. Use isLinearGradientColor to check
         * @param colorObject The LinearGradientColor to resolve.
         * @preserve (Part of the public API)
        */
        static resolveLinearGradientColorAsCssValue(colorObject: TcHmi.LinearGradientColor): string;
        /**
         * Style Processor for background.
         * @param element The jQuery element.
         * @param valueNew  The new value for the background.
         * @preserve (Part of the public API)
         */
        static processBackground(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: Partial<TcHmi.Background> | null | undefined): void;
        /**
         * Style Processor for background colors and gradients.
         * @param element The jQuery element.
         * @param valueNew  The new value for the background.
         * @preserve (Part of the public API)
         */
        static processBackgroundColor(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.Color | null | undefined): void;
        /**
         * Style Processor for background images.
         * @param element The jQuery element.
         * @param valueNew  The URL of the image.
         * @preserve (Part of the public API)
         */
        static processBackgroundImage(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: string | null | undefined): void;
        /**
         * Style processor for SVG fill color.
         * @param element The jQuery element.
         * @param valueNew The new fill color.
         * @preserve (Part of the public API)
         * HTMLElement allowed because default jQuery type is HTMLElement
         */
        static processFillColor(element: JQuery<SVGElement | HTMLElement> | readonly SVGElement[] | NodeListOf<SVGElement> | HTMLCollectionOf<SVGElement> | SVGElement | undefined, valueNew: TcHmi.Color | null | undefined): void;
        /**
         * Style processor for SVG stroke color.
         * @param element The jQuery element.
         * @param valueNew      The new stroke color.
         * @preserve (Part of the public API)
         * HTMLElement allowed because default jQuery type is HTMLElement
         */
        static processStrokeColor(element: JQuery<SVGElement | HTMLElement> | readonly SVGElement[] | NodeListOf<SVGElement> | HTMLCollectionOf<SVGElement> | SVGElement | undefined, valueNew: TcHmi.SolidColor | null | undefined): void;
        /**
         * Style processor for text color.
         * @param element The jQuery element.
         * @param valueNew      The new text color.
         * @preserve (Part of the public API)
         */
        static processTextColor(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.SolidColor | null | undefined): void;
        /**
         * Style processor for border color.
         * @param element The jQuery element.
         * @param valueNew The new border color.
         * @preserve (Part of the public API)
         */
        static processBorderColor(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.Color | null | undefined): void;
        /**
         * Style processor for border width.
         * @param element The jQuery element.
         * @param valueNew The new border widths.
         * @preserve (Part of the public API)
         */
        static processBorderWidth(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: Partial<TcHmi.BorderWidth> | null | undefined): void;
        /**
         * Style processor for border radius.
         * @param element The jQuery element.
         * @param valueNew The new border radii.
         * @preserve (Part of the public API)
         */
        static processBorderRadius(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.BorderRadius | null | undefined): void;
        /**
         * Style processor for border style.
         * @param element The jQuery element.
         * @param valueNew The new border styles.
         * @preserve (Part of the public API)
         */
        static processBorderStyle(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.BorderStyle | null | undefined): void;
        /**
         * Style processor for box shadow.
         * @param element The jQuery element.
         * @param valueNew      The new border styles.
         * @preserve (Part of the public API)
         */
        static processBoxShadow(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: readonly TcHmi.BoxShadow[] | null | undefined): void;
        /**
         * Style processor for font family.
         * @param element The jQuery element.
         * @param valueNew      The new font family.
         * @preserve (Part of the public API)
         */
        static processFontFamily(element: JQuery | readonly Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: TcHmi.FontFamily | null | undefined): void;
        /**
         * Style processor for font size.
         * @param element The jQuery element.
         * @param valueNew      The new font size.
         * @param unitNew       The new font size unit. Defaults to "px".
         * @preserve (Part of the public API)
         */
        static processFontSize(element: JQuery | readonly Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: number | null | undefined, unitNew?: FontSizeUnit): void;
        /**
         * Style processor for font style.
         * @param element The jQuery element.
         * @param valueNew      The new font style. Allowed values are "Normal", "Italic" and "Oblique".
         * @preserve (Part of the public API)
         */
        static processFontStyle(element: JQuery | readonly Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: TcHmi.FontStyle | null | undefined): void;
        /**
         * Style processor for font weight.
         * @param element The jQuery element.
         * @param valueNew      The new font weight. Allowed values are "Normal" and "Bold".
         * @preserve (Part of the public API)
         */
        static processFontWeight(element: JQuery | readonly Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: TcHmi.FontWeight | null | undefined): void;
        /**
         * Style processor for visibility.
         * Visibility also effects pointer events, i.e. a hidden element will not receive mouse click events.
         * Hidden still uses space in fluid calculations, collapsed is ignored there.
         * @param element The jQuery element.
         * @param valueNew      The new visibility. Allowed values are "Visible", "Collapsed" and "Hidden". Hidden still uses space in fluid calculations, collapsed is ignored there.
         * @preserve (Part of the public API)
         */
        static processVisibility(element: JQuery | readonly Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: TcHmi.Visibility | null | undefined): void;
        /**
         * Style processor for horizontal alignment. This aligns the content of the target element, not the target element itself.
         * @param element The jQuery element.
         * @param valueNew      The new horizontal alignment. Allowed values are "Left", "Center" and "Right".
         * @preserve (Part of the public API)
         */
        static processContentHorizontalAlignment(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.HorizontalAlignment | null | undefined): void;
        /**
         * Style processor for vertical alignment. This aligns the content of the target element, not the target element itself.
         * @param element The jQuery element.
         * @param valueNew      The new vertical alignment. Allowed values are "Top", "Center" and "Bottom".
         * @preserve (Part of the public API)
         */
        static processContentVerticalAlignment(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.VerticalAlignment | null | undefined): void;
        /**
         * Style processor for content padding.
         * @param element The jQuery element.
         * @param valueNew      The new content padding.
         * @preserve (Part of the public API)
         */
        static processContentPadding(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: Partial<TcHmi.FourSidedCss> | null | undefined): void;
        /**
         * Theme processor for transforms.
         * @param element The jQuery element.
         * @param valueNew      The new transform value or an array of transform values.
         * @param order         If this parameter is passed, the transforms in valueNew will replace the transform at the specified place, instead of replacing all transforms.
         * @preserve (Part of the public API)
         */
        static processTransform(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.Transform | TcHmi.Transform[] | null | undefined, order?: number): void;
    }
}
declare module TcHmi {
    /**
     * Provides methods to read and write symbol values and schemas.
     * @template ST Type of the value in the symbol.
     * @preserve (Part of the public API)
     */
    class Symbol<ST = any> {
        /**
         * Constructor
         * @param expression
         */
        constructor(expression: string);
        /**
        * Reads the value of the current symbol.
        * return undefined if the symbol is not available
        * @returns A copy of the value
        * @template T Type of the read value. Falls back to type of the symbol.
        * @preserve (Part of the public API)
        */
        read<T = ST>(): T | undefined;
        /**
        * Reads the value of the current symbol and raises a callback with a copy of the result.
        * @param expression
        * @param callback with gets a copy of the value
        * @template T Type of the read value. Falls back to type of the symbol.
        * @preserve (Part of the public API)
        */
        readEx<T = ST>(callback?: (this: TcHmi.Symbol<ST>, data: TcHmi.Symbol.IReadResultObject<T> | TcHmi.Symbol.IServerReadResultObject<T>) => void): DestroyFunction;
        /**
         * Writes the value of the current symbol.
         * @param value
         * @param callback
         * @template T Type of the write value. Falls back to type of the symbol.
         * @preserve (Part of the public API)
         */
        write<T = ST>(value: T, callback?: ((this: TcHmi.Symbol<ST>, data: Symbol.IWriteResultObject<T> | TcHmi.Symbol.IServerWriteResultObject<T>) => void)): DestroyFunction;
        /**
         * Watches for changes of the current symbol and raises the callback in case of a change.
         * @param callback
         * @template T Type of the value to watch. Falls back to type of the symbol.
         * @preserve (Part of the public API)
         */
        watch<T = ST>(callback?: (this: Symbol<ST>, data: TcHmi.Symbol.IWatchResultObject<T> | TcHmi.Symbol.IServerWatchResultObject<T>) => void): DestroyFunction;
        /**
         * Returns the underlying TcHmi.SymbolExpression object.
         * @preserve (Part of the public API)
         */
        getExpression(): TcHmi.SymbolExpression;
        /**
         * Resolves the schema of the current symbol.
         * @param callback
         * @preserve (Part of the public API)
         */
        resolveSchema(callback?: (this: Symbol, data: TcHmi.Symbol.ISchemaResultObject) => void): void;
        /**
        * Resolves a dictionary of attributes from the underlying schema.
        * @param callback
        * @preserve (Part of the public API)
        */
        resolveAttributes(callback?: ((this: void, data: TcHmi.Symbol.IAttributesResultObject) => void)): void;
        /**
         * Resolves an attribute by name from the underlying schema.
         * @param name
         * @param callback
         * @preserve (Part of the public API)
         */
        resolveAttribute(name: string, callback?: ((this: void, data: TcHmi.Symbol.IAttributeResultObject) => void)): void;
        /**
        * @param callback
         * @preserve (Part of the public API)
         */
        exists(callback?: (this: Symbol, data: TcHmi.Symbol.IExistsResultObject) => void): void;
        /**
         * Destroys the current symbol object.
         * @preserve (Part of the public API)
         */
        destroy(): void;
        /**
         * Reads the value of a symbol by name and type.
         * @param name
         * @param type
         * @throws Throws an exception if the symbol type is not supported
         * @template T Type of the read value.
         * @preserve (Part of the public API)
         */
        static read<T = any>(name: string, type: TcHmi.SymbolType): T | undefined;
        /**
         * Reads the value of a symbol by expression.
         * @param expression
         * @template T Type of the read value.
         * @preserve (Part of the public API)
         */
        static readEx<T = any>(expression: string): T;
        /**
         * Reads the value of a symbol by expression and raises a callback with the result.
         * @param expression
         * @param callback
         * @template T Type of the read value.
         * @preserve (Part of the public API)
         */
        static readEx2<T = any>(expression: string, callback?: (this: void, data: TcHmi.Symbol.IReadResultObject<T> | Symbol.IServerReadResultObject<T>) => void): DestroyFunction;
        /**
         * Writes the value of a symbol by name and type.
         * @param name
         * @param type
         * @param value
         * @param callback
         * @throws Throws an exception if the symbol type is not supported
         * @template T Type of the write value.
         * @preserve (Part of the public API)
         */
        static write<T = any>(name: string, type: TcHmi.SymbolType, value: T, callback?: null | ((this: void, data: Symbol.IWriteResultObject<T> | TcHmi.Symbol.IServerWriteResultObject<T>) => void)): DestroyFunction;
        /**
         * Writes the value of a symbol by expression.
         * @param expression
         * @param value
         * @param callback
         * @template T Type of the write value.
         * @preserve (Part of the public API)
         */
        static writeEx<T = any>(expression: string, value: T, callback?: null | ((this: void, data: Symbol.IWriteResultObject<T> | TcHmi.Symbol.IServerWriteResultObject<T>) => void)): DestroyFunction;
        /**
         * Resolves the schema of the current symbol.
         * @param expression
         * @param callback
         * @preserve (Part of the public API)
         */
        static resolveSchema(expression: string, callback?: (this: void, data: TcHmi.Symbol.ISchemaResultObject) => void): void;
        /**
        * Resolves a dictionary of attributes from the underlying schema.
        * @param expression
        * @param callback
        * @preserve (Part of the public API)
        */
        static resolveAttributes(expression: string, callback?: ((this: void, data: TcHmi.Symbol.IAttributesResultObject) => void)): void;
        /**
         * Resolves an attribute by name from the underlying schema.
         * @param name
         * @param callback
         * @preserve (Part of the public API)
         */
        static resolveAttribute(expression: string, name: string, callback?: ((this: void, data: TcHmi.Symbol.IAttributeResultObject) => void)): void;
        /**
       * @param callback
        * @preserve (Part of the public API)
        */
        static exists(expression: string, callback?: (this: Symbol, data: TcHmi.Symbol.IExistsResultObject) => void): void;
        /**
         * @param expression
         * @preserve (Part of the public API)
         */
        static isSymbolExpression(expression: string): boolean;
        static isIServerReadResultObject<T = any>(data: TcHmi.Symbol.IReadResultObject<T> | TcHmi.Symbol.IServerReadResultObject<T>): data is TcHmi.Symbol.IServerReadResultObject<T>;
    }
    module Symbol {
        interface IWatchResultObject<T = any> extends TcHmi.IResultObject {
            value?: T;
            processedStart?: string;
            processedEnd?: string;
            dirtyPaths?: string[];
            destroy?: TcHmi.DestroyFunction;
        }
        interface IServerWatchResultObject<T = any> extends IWatchResultObject<T> {
            response?: TcHmi.Server.IMessage<T>;
        }
        interface IReadResultObject<T = any> extends TcHmi.IResultObject {
            value?: T;
            processedStart?: string;
            processedEnd?: string;
            dirtyPaths?: string[];
        }
        interface IServerReadResultObject<T = any> extends IReadResultObject<T> {
            response?: TcHmi.Server.IMessage<T>;
        }
        interface IWriteResultObject<T = any> extends TcHmi.IResultObject {
            value?: T;
            processedStart?: string;
            processedEnd?: string;
        }
        interface IServerWriteResultObject<T = any> extends TcHmi.Symbol.IWriteResultObject<T> {
            response?: TcHmi.Server.IMessage<T>;
        }
        interface ISchemaResultObject extends TcHmi.IResultObject {
            schema?: TcHmi.JsonSchema;
        }
        interface IExistsResultObject extends TcHmi.IResultObject {
            result?: boolean;
        }
        interface IAttributesResultObject extends TcHmi.IResultObject {
            attributes?: Dictionary<any>;
        }
        interface IAttributeResultObject<T = any> extends TcHmi.IResultObject {
            name?: string;
            value?: T;
        }
        /**
        * @preserve (Part of the public API)
        */
        class ObjectResolver<T extends (object | null)> {
            /**
            * @param expression
             */
            constructor(obj: T);
            /**
            * Resolves all symbol expression refs in the current object.
            * @param callback
            * @preserve (Part of the public API)
            */
            resolve(callback?: (this: ObjectResolver<T>, data: TcHmi.Symbol.ObjectResolver.IResultObject<T>) => void): DestroyFunction;
            /**
             * Watches for changes of symbol expressions in the current object und returns the object with updated values.
             * @param callback
             * @preserve (Part of the public API)
             */
            watch(callback?: (this: ObjectResolver<T>, data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<T>) => void): DestroyFunction;
            /**
             * Destroys the current object.
             * @preserve (Part of the public API)
             */
            destroy(): void;
        }
        module ObjectResolver {
            interface IWatchResultObject<T extends (object | null)> extends TcHmi.IResultObject {
                value?: T;
                destroy?: TcHmi.DestroyFunction;
            }
            interface IResultObject<T extends (object | null)> extends TcHmi.IResultObject {
                value?: T;
            }
        }
    }
    type SymbolTag = 's' | 'i' | 'l' | 'pp' | 'tp' | 'f' | 'ctrl';
    enum SymbolType {
        Invalid = 0,
        Server = 10,
        Internal = 20,
        LocalizedText = 30,
        PartialParam = 40,
        TemplateParam = 50,
        Function = 60,
        Control = 70
    }
}
declare module TcHmi {
    /**
    */
    class SymbolExpression {
        /**
        */
        static RegExpExpressionGroupByPipe: RegExp;
        /**
        */
        static RegExpExpression: RegExp;
        /**
         * @param expression
         */
        constructor(expression: string | null);
        /**
        * Returns the expression as string.
        * @preserve (Part of the public API)
        */
        toString(): string;
        /**
         * @preserve (Part of the public API)
         */
        getContent(): string;
        /**
        * @preserve (Part of the public API)
         */
        getTag(): SymbolTag;
        /**
         * Returns the uniqe name basename of the expression
         */
        getName(): string;
        /**
         * @preserve (Part of the public API)
         */
        getPath(): string;
        /**
         * @preserve (Part of the public API)
         */
        getPathTokens(): string[];
        /**
         * @preserve (Part of the public API)
         */
        getType(): SymbolType;
        /**
         * @preserve (Part of the public API)
         */
        getOptions(): SymbolExpression.IOptions;
    }
    module SymbolExpression {
        interface IOptions {
            BindingMode?: TcHmi.BindingMode;
            /** Deprecated - Kept for compatibility. Will hold first defined BindingEvent. Complete list is stored in BindingEvents array.*/
            BindingEvent?: string;
            BindingEvents?: string[];
            Timeout?: number;
            Interval?: number;
            Parallel?: boolean;
            SubscriptionMode?: 'Change' | 'Poll';
        }
    }
}
declare module TcHmi {
    class TcSpeech {
        /**
         * (Re-)Starts the rtc connection to TwinCAT speech engine.
         * @param options This option can override all setting from tchmiconfig.json and more
         * @param callback Gets notification when opening connection failed.
         * @preserve (Part of the public API)
         */
        static openConnection(options?: TcHmi.TcSpeech.ConnectionOptions & Partial<TcHmi.TcSpeech.BaseConfig>, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): void;
        /**
         * Closes an active connection to TwinCAT speech engine.
         * @param options Can target a specific remote TwinCAT speech engine
         * @param callback A callback to get feedback
         * @preserve (Part of the public API)
         */
        static closeConnection(options?: {
            remoteSocketId?: number;
        }, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): void;
        /**
         * Sets the volume (between 0 and 1) of speech output on this device.
         * @param valueNew new volume. Will be capped between 0 and 1.
         * @preserve (Part of the public API)
         */
        static setVolume(valueNew: number): void;
    }
    namespace TcSpeech {
        class SpeechSynthesis {
            /** Text to be synthesized */
            readonly text: string;
            readonly options?: {
                priority?: TcHmi.TcSpeech.AudioEntityPriority;
            };
            constructor(
            /** Text to be synthesized */
            text: string, options?: {
                priority?: TcHmi.TcSpeech.AudioEntityPriority;
            });
            private __guid;
            /**
             * Starting output of text. The connection must be open at this point and we have to have enableSpeaker.
             * The callback will get a guid which can be used to stop or request status of the speech synthesis.
             * @param callback The callback will get a guid which can be used to stop or request status of the speech synthesis.
             * @preserve (Part of the public API)
             */
            start(callback?: null | ((this: void, data: TcHmi.TcSpeech.SpeechSynthesisResult) => void)): void;
            /**
             * Request the state (queued, playing, stopped) of a given speech synthesis call.
             * @param guid guid for the request. Can be fetched from the callback of speechSynthesisStart
             * @param callback The callback will get the state of the speech synthesis
             * @preserve (Part of the public API)
            */
            getStatus(callback?: null | ((this: void, data: TcHmi.TcSpeech.SpeechSynthesisResult) => void)): void;
            /**
             * Stops a given speech synthesis call.
             * @param callback The callback will get the state of the speech synthesis
             * @preserve (Part of the public API)
             */
            stop(callback?: null | ((this: void, data: TcHmi.TcSpeech.SpeechSynthesisResult) => void)): void;
        }
        /** Configuration for TcSpeech Integration in tchmiconfig.json */
        interface BaseConfig {
            /** Name of the TcSpeech extension on the server. */
            domain: string;
            /** Our speaker should be used. */
            enableSpeaker: boolean;
            /** Our microphone should be used. */
            enableMicrophone: boolean;
            /** Default audio volume */
            defaultVolume: number;
            /**
             *  Ignore detected speech commands with a lower relative measure of the certainty of correct recognition of a phrase.
             *  The value is from 0.0 to 1.0, for low to high confidence, respectively. */
            confidenceThreshold: number;
        }
        interface ConnectionOptions {
            /** Target a specific remote TwinCAT speech engine to connect */
            remoteSocketId?: number;
            /** Constraint for Microphone */
            sourceConstraints?: MediaStreamConstraints['audio'];
            /** Constraint for Speaker */
            sinkConstraints?: {
                /** Device id of audiooutput */
                deviceId?: string;
            };
        }
        enum AudioEntityPriority {
            Low = 5,
            Normal = 10,
            High = 15
        }
        interface SpeechSynthesisResult extends TcHmi.IResultObject {
            /** GUID for this request. */
            guid?: string;
            state?: 'Queued' | 'Playing' | 'Stopped';
        }
        interface IEventCallbackParameter {
            /** Recognition Tag of the active SRGS file which was detected. */
            Command: string;
            /**
             * A relative measure of the certainty of correct recognition of a phrase.
             * The value is from 0.0 to 1.0, for low to high confidence, respectively. */
            Confidence: number;
            /** Parameter which was detected by speech recognition. Type depends on SRGS file. */
            Parameter: unknown;
        }
    }
}
declare module TcHmi {
    /**
    * @preserve (Part of the public API)
    */
    class Theme {
        /**
         * Returns the active theme.
        * @preserve (Part of the public API)
         */
        static get(): string;
        /**
         * Sets the active theme.
        * @preserve (Part of the public API)
         */
        static set(valueNew: string): TcHmi.Errors;
        /**
         * Returns all registered themes of the project.
        * @preserve (Part of the public API)
         */
        static getRegisteredThemes(): string[];
    }
    module Theme {
        /**
         * Control property related API
         * @preserve (Part of the public API)
         */
        class Properties {
            /**
            * Parses every source of implicit properties and returns this or null
            * Can have different value after the event onThemeDataChanged.
            * The order of resources are
            * 1) control class
            * 2) theme definition of the control type in project
            * 3) theme definition in control
            * 4) defaultValueInternal in Description.json of the control
            * @param control Control which needs the resource
            * @param propertyName name of the property
            * @template T Type of the default value
            * @preserve (Part of the public API)
            */
            static getDefaultValue<T = any>(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string): Theme.Resource<T>;
            /**
             * Sets the default value of a property and change it (if needed) on theme change.
             * @param control
             * @param propertyName
             * @returns returns an Error code
             * @preserve (Part of the public API)
             */
            static setThemeValue(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string): TcHmi.Errors;
        }
        /**
         * Control resource related API
         * @preserve (Part of the public API)
         */
        class Resources {
            /**
            * Gets a themed resource.
            * Parses every source of properties and returns this or null
            * Can have different value after the event onThemeDataChanged.
            * The order of resources are
            * 1) control class
            * 2) theme definition of the control type in project
            * 3) theme definition in control

            * @param control Control which needs the resource
            * @param resourceName name of the resource
            * @returns returns the resource or null
            * @template T Type of the value
            * @preserve (Part of the public API)
            */
            static get<T = any>(control: TcHmi.Controls.System.baseTcHmiControl, resourceName: string): Theme.Resource<T>;
            /**
             * Resolves the basepath for a path value inside a theme resource
             * @param control Control which asks for that
             * @param resource resource to resolve the basepath
             * @template T Type of the value
             */
            static resolveBasePath<T = any>(control: TcHmi.Controls.System.baseTcHmiControl, resource: Theme.Resource<T>): string;
        }
        interface Resource<T extends any> extends TcHmi.IResultObject {
            value: T | null;
            /** The value is generated from the control, the project or in error case from the system. */
            origin: 'control' | 'project' | 'system';
            /** Resources of a control will get "Base" if they do not implement the current theme */
            originThemeName: string;
        }
    }
}
declare module TcHmi {
    /**
    * Provides a layer to show elements above the normal visualization
    * @preserve (Part of the public API)
    */
    class TopMostLayer {
        /**
        * Appends the elements to the top layer above the normal visualization
        * A reference to the element should be kept to be able to call remove() function
        * The parent element will be a div with style="width:<browserwindowwidth>;height:<browserwindowheight>;"
        * Your element could have style="min-width:50%;min-height:50%;"
        * @param control control which requests this
        * @param element jQuery Collection with exactly one element which should be moved to TopMostLayer
        * @param options Optional options
        * @returns success of the add
        * @preserve (Part of the public API)
        */
        static add(control: TcHmi.Controls.System.baseTcHmiControl, element: JQuery | undefined | null, options?: TopMostLayer.IOptions): boolean;
        /**
         * Removes the element from the top layer and returns it for later use by the caller
         * If the element is not inside the TopMostLayer it will be returned without change.
         * @param control control which requests this
         * @param element jQuery Collection with the element which should be removed from TopMostLayer
         * @returns jQuery Collection
         * @preserve (Part of the public API)
         */
        static remove(control: TcHmi.Controls.System.baseTcHmiControl, element: JQuery): JQuery;
        /**
        * Appends the elements to the top layer above the normal visualization (not control namespaced)
        * A reference to the element should be kept to be able to call remove() function
        * The parent element will be a div with style="width:<browserwindowwidth>;height:<browserwindowheight>;"
        * Your element could have style="min-width:50%;min-height:50%;"
        * @param element jQuery Collection with exactly one element which should be moved to TopMostLayer
        * @param options Optional options
        * @returns success of the add
        * @preserve (Part of the public API)
        */
        static addEx(element: JQuery | undefined | null, options?: TopMostLayer.IOptionsEx): boolean;
        /**
         * Removes the element from the top layer and returns it for later use by the caller (not control namespaced)
         * If the element is not inside the TopMostLayer it will be returned without change.
         * @param element jQuery Collection with the element which should be removed from TopMostLayer
         * @returns jQuery Collection
         * @preserve (Part of the public API)
         */
        static removeEx(element: JQuery): JQuery;
    }
    namespace TopMostLayer {
        interface IOptionsBase {
            /** Center the element on the screen. Default is false */
            centerHorizontal?: boolean;
            /** Center the element on the screen. Default is false */
            centerVertical?: boolean;
            /** Should the overlay be darken over the background. Default is true. */
            dimBackground?: boolean;
            /** Should pointer events go through the overlay and allow interaction with elements behind the overlay? Default is true. */
            modal?: boolean;
            /** Should a click on the overlay close the TopMostLayer? Default is true. */
            closeOnBackground?: boolean;
        }
        interface IOptions extends IOptionsBase {
            /** Callback which will be called when the element has been potentially beeing resized.
             * Its parameter gets information about the parents dimension. */
            resizeCb?: (this: TcHmi.Controls.System.baseTcHmiControl, data: TopMostLayer.IResizeResultObject) => void;
            /** Callback which will be called when the element has been removed.
             * Its parameter has information if the elment was not removed by a remove API call but for example with a click beside the element. */
            removeCb?: (this: TcHmi.Controls.System.baseTcHmiControl, data: TopMostLayer.IElemRemoveResultObject) => void;
        }
        interface IOptionsEx extends IOptionsBase {
            /** Callback which will be called when the element has been potentially beeing resized */
            resizeCb?: (this: Window, data: TopMostLayer.IResizeResultObject) => void;
            /** Callback which will be called when the element has been removed*/
            removeCb?: (this: Window, data: TopMostLayer.IElemRemoveResultObject) => void;
        }
        interface IResizeResultObject extends TcHmi.IResultObject {
            /** The given element in the TopMostLayer */
            element: JQuery;
            parentPixelSize: {
                width: number;
                height: number;
            };
        }
        interface IElemRemoveResultObject extends TcHmi.IResultObject {
            /** The detached element which was in the TopMostLayer */
            element: JQuery;
            /** The removal was NOT triggered by an API call but for example by user click beside the element. */
            canceled: boolean;
        }
    }
}
declare module TcHmi {
    module Type {
        function getSchema(typeName: string): JsonSchema | null;
        module Schema {
            function resolveDefault(schema: TcHmi.JsonSchema): any;
        }
    }
}
declare module TcHmi {
    /**
    * Allows converting of values from any type to any type if types are compatible.
    * @preserve (Part of the public API)
    */
    class ValueConverter {
        /**
        */
        constructor();
        static AngleUnitList: {
            readonly deg: "deg";
            readonly rad: "rad";
            readonly turn: "turn";
            readonly grad: "grad";
        };
        static BorderStyleValueList: {
            readonly Solid: "Solid";
            readonly Dashed: "Dashed";
            readonly Dotted: "Dotted";
            readonly None: "None";
        };
        static DimensionUnitList: {
            readonly px: "px";
            readonly '%': "%";
        };
        static FontSizeUnitList: {
            readonly px: "px";
            readonly '%': "%";
            readonly em: "em";
            readonly rem: "rem";
        };
        static FontStyleList: {
            readonly Normal: "Normal";
            readonly Italic: "Italic";
            readonly Oblique: "Oblique";
            readonly Auto: "Auto";
        };
        static FontWeightList: {
            readonly Normal: "Normal";
            readonly Bold: "Bold";
            readonly Auto: "Auto";
        };
        static HorizontalAlignmentList: {
            readonly Left: "Left";
            readonly Center: "Center";
            readonly Right: "Right";
        };
        static ScaleModeStringList: {
            readonly None: "None";
            readonly ScaleToFill: "ScaleToFill";
            readonly ScaleToFit: "ScaleToFit";
            readonly ScaleToFitWidth: "ScaleToFitWidth";
            readonly ScaleToFitHeight: "ScaleToFitHeight";
        };
        static SizeModeList: {
            readonly Value: "Value";
            readonly Parent: "Parent";
        };
        static SizeModeWithContentList: {
            readonly Value: "Value";
            readonly Parent: "Parent";
            readonly Content: "Content";
        };
        static ToggleStateList: {
            readonly Normal: "Normal";
            readonly Active: "Active";
        };
        static VerticalAlignmentList: {
            readonly Top: "Top";
            readonly Center: "Center";
            readonly Bottom: "Bottom";
        };
        static VisibilityList: {
            readonly Visible: "Visible";
            readonly Hidden: "Hidden";
            readonly Collapsed: "Collapsed";
        };
        /**
         * Converts a value to {Object/Array} and returns the {Object/Array} or null if the type of value is not compatible to {Object/Array}.
         * No content check will be done!
         * @param value The value to convert.
         * @template T Type of the resulting object.
         * @preserve (Part of the public API)
         */
        static toObject<T extends object | undefined | null>(value: any): T | null;
        /**
         * Converts a value to {Object/Array} and returns the {Object/Array} or null if the type of value is not compatible to {Object/Array}.
         * No content check will be done!
         * @param value The value to convert.
         * @param defaultValue The fallback value
         * @template T Type of the resulting object.
         * @preserve (Part of the public API)
         */
        static toObject<T extends object | undefined | null>(value: any, defaultValue: T): T;
        /**
         * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}.
         * @param value The value to convert.
         * @returns Returns a string or defaultValue if the type of value is not compatible.
         * @preserve (Part of the public API)
         */
        static toString<T extends string = string>(value: T): T | null;
        /**
         * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}.
         * @param value The value to convert.
         * @returns Returns a string or defaultValue if the type of value is not compatible.
         * @preserve (Part of the public API)
         */
        static toString<T extends string | null | undefined = string>(value: any | null | undefined): NonNullable<T> | null;
        /**
         * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}.
         * @param value The value to convert.
         * @returns Returns a string or defaultValue if the type of value is not compatible.
         * @preserve (Part of the public API)
         */
        static toString(value: any): string | null;
        /**
         * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible to string (null if not given)
         * @returns Returns a string or defaultValue if the type of value is not compatible.
         * @preserve (Part of the public API)
         */
        static toString<T extends string = string>(value: T, defaultValue: string | null): T | null;
        /**
         * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible to string (null if not given)
         * @returns Returns a string or defaultValue if the type of value is not compatible.
         * @preserve (Part of the public API)
         */
        static toString<T extends string | null | undefined = string>(value: any | null | undefined, defaultValue: string | null): NonNullable<T> | null;
        /**
         * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible to string (null if not given)
         * @returns Returns a string or defaultValue if the type of value is not compatible.
         * @preserve (Part of the public API)
         */
        static toString(value: any, defaultValue: string | null): string | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toDimensionUnit(value: DimensionUnit | null): DimensionUnit | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toDimensionUnit(value: DimensionUnit | null, defaultValue: DimensionUnit): DimensionUnit;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toAngleUnit(value: AngleUnit | null): AngleUnit | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toAngleUnit(value: AngleUnit | null, defaultValue: AngleUnit): AngleUnit;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toBorderStyleValue(value: BorderStyleValue | null): BorderStyleValue | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toBorderStyleValue(value: BorderStyleValue | null, defaultValue: BorderStyleValue): BorderStyleValue;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toFontStyle(value: FontStyle | null): FontStyle | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toFontStyle(value: FontStyle | null, defaultValue: FontStyle): FontStyle;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toFontSizeUnit(value: FontSizeUnit | null): FontSizeUnit | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toFontSizeUnit(value: FontSizeUnit | null, defaultValue: FontSizeUnit): FontSizeUnit;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toFontWeight(value: FontWeight | null): FontWeight | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toFontWeight(value: FontWeight | null, defaultValue: FontWeight): FontWeight;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toHorizontalAlignment(value: HorizontalAlignment | null): HorizontalAlignment | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toHorizontalAlignment(value: HorizontalAlignment | null, defaultValue: HorizontalAlignment): HorizontalAlignment;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toScaleModeString(value: ScaleModeString | null): ScaleModeString | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toScaleModeString(value: ScaleModeString | null, defaultValue: ScaleModeString): ScaleModeString;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toSizeMode(value: SizeMode | null): SizeMode | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toSizeMode(value: SizeMode | null, defaultValue: SizeMode): SizeMode;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toSizeModeWithContent(value: SizeModeWithContent | null): SizeModeWithContent | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toSizeModeWithContent(value: SizeModeWithContent | null, defaultValue: SizeModeWithContent): SizeModeWithContent;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toVerticalAlignment(value: VerticalAlignment | null): VerticalAlignment | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toVerticalAlignment(value: VerticalAlignment | null, defaultValue: VerticalAlignment): VerticalAlignment;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toVisibility(value: Visibility | null): Visibility | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toVisibility(value: Visibility | null, defaultValue: Visibility): Visibility;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toToggleState(value: ToggleState | null): ToggleState | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns Returns the string or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toToggleState(value: ToggleState | null, defaultValue: ToggleState): ToggleState;
        /**
         * Converts a value to fontFamily value and returns the string or null if the type of value is not compatible to {string}.
         * @param value The value to convert.
         * @returns or null if the type of value is not compatible to string.
         * @preserve (Part of the public API)
         */
        static toFontFamily(value: FontFamily | null | undefined): FontFamily | null;
        /**
         * Converts a value to fontFamily value and returns the string or null if the type of value is not compatible to {string}.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns or null if the type of value is not compatible to string.
         * @preserve (Part of the public API)
         */
        static toFontFamily(value: FontFamily | null | undefined, defaultValue: FontFamily): FontFamily;
        /**
         * Converts a value to {number}
         * @param value The value to convert.
         * @returns Returns a string or defaultValue if the type of value is not compatible.
         * @preserve (Part of the public API)
         */
        static toNumber(value: any): number | null;
        /**
         * Converts a value to {number}
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible to number (null if not given)
         * @returns Returns a string or defaultValue if the type of value is not compatible.
         * @preserve (Part of the public API)
         */
        static toNumber(value: any, defaultValue: number): number;
        /**
         * Converts a value to {boolean} and returns the {boolean} or null if the type of value is not compatible to {boolean}.
         * @param value The value to convert.
         * @preserve (Part of the public API)
         */
        static toBoolean(value: any): boolean | null;
        /**
         * Converts a value to {boolean} and returns the {boolean} or null if the type of value is not compatible to {boolean}.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible to boolean (null if not given)
         * @preserve (Part of the public API)
         */
        static toBoolean(value: any, defaultValue: boolean): boolean;
        /**
         * Converts a value to enum {Object} and returns the enum {Object} or null if the type of value is not compatible to enum {Object}.
         * @param value The value to convert.
         * @param .
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns number
         * @preserve (Part of the public API)
         */
        static toEnum<T>(value: any, enumType: T): number | null;
        /**
         * Converts a value to enum {Object} and returns the enum {Object} or null if the type of value is not compatible to enum {Object}.
         * @param value The value to convert.
         * @param .
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns number
         * @template D Type of the default value.
         * @preserve (Part of the public API)
         */
        static toEnum<T, D>(value: any, enumType: T, defaultValue: D): number | D;
        /**
         * Converts a value to enum {Object} and returns the enum {Object} or null if the type of value is not compatible to enum {Object}.
         * @param value The value to convert.
         * @param .
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns number
         * @template D Type of the default value.
         * @preserve (Part of the public API)
         */
        static toEnum<T>(value: any, enumType: T, defaultValue: null): null;
        /**
         * Converts a value to the best effort value related to schema adressed by its by name or null if no schema related type is matching or schema is unknown.
         * @param value
         * @param typeName
         * @preserve (Part of the public API)
         */
        static toType(value: any, typeName: string, options?: {
            readonly convertDirection?: ValueConverter.ConvertDirection;
        }): any | null;
        /**
         * Converts a value to the best effort value related to schema adressed by its by name or null if no schema related type is matching or schema is unknown. Returns an result object for error detection.
         * @param value
         * @param typeName
         * @preserve (Part of the public API)
         */
        static toTypeEx<T>(value: any, typeName: string, options?: {
            readonly convertDirection?: ValueConverter.ConvertDirection;
        }): ValueConverter.IResultObject<T>;
        /**
         * Converts a value to the best effort value related to schema or null if no schema related type is matching.
         * @param value
         * @param schema
         * @preserve (Part of the public API)
         */
        static toSchemaType(value: any, schema: TcHmi.JsonSchema | null, options?: {
            /** Direction of conversion. */
            readonly convertDirection?: ValueConverter.ConvertDirection;
            /** A schema which describes a function on the server will describe the type of return value on root level. Set this option to true to resolve the writeValue schema instead. */
            readonly resolveFunctionWriteValue?: boolean;
        }): any | null;
    }
    module ValueConverter {
        interface IResultObject<T extends any = any> extends TcHmi.IResultObject {
            value: T | null;
        }
        enum ConvertDirection {
            Forward = 0,
            Backward = 1
        }
    }
}
declare module TcHmi {
    /**
    * Provides functions to set partials as view.
    * @preserve (Part of the public API)
    */
    class View {
        /**
         * Loads a view partial into the dom.
         * @param url
         * @param callback
         * @preserve (Part of the public API)
         */
        static load(url: string, callback?: null | ((data: TcHmi.IResultObject) => void)): void;
        /**
         * Returns the current view object.
         * @preserve (Part of the public API)
         */
        static get(): TcHmi.Controls.System.baseTcHmiControl | null;
    }
}
/** Unique ID of this HMI Instance */
declare var TCHMI_DYNAMIC_INSTANCE_ID: string;
/** The timestamp in milliseconds based on JavaScript Date object when TcHmiFramework.js file was initialy handled by the JavaScript interpreter. */
declare var TCHMI_DEBUG_TIME_LOAD_LIBRARY: number;
/**
 * Engineering instance. Designer instance or LiveView instance.
 **/
declare var TCHMI_ENGINEERING: boolean;
/**
 * Engineering instance. Designer instance.
 **/
declare var TCHMI_DESIGNER: boolean;
/**
 * Engineering instance. LiveView instance.
 **/
declare var TCHMI_LIVEVIEW: boolean;
/**
 * Runtime
 **/
declare var TCHMI_RUNTIME: boolean;
/**
 * Websocket used for communication with engineering.
 **/
declare var TCHMI_ENGINEERING_WEBSOCKET: string;
/**
 * Defines which partial is opened in a designer instance.
 **/
declare var TCHMI_TARGET_PARTIAL: string;
/**
* Config override used in engineering instances.
* */
declare var TCHMI_CONFIG_OVERRIDE: TcHmi.System.IConfigOverride | null;
/**
 * DEPRECATED
 * Replaced by: TCHMI_ENGINEERING_WEBSOCKET
 * @deprecated Please use TCHMI_ENGINEERING_WEBSOCKET
 **/
declare var TCHMI_ENABLE_DESIGNER_MODE_WEBSOCKET_URL: string;
/**
 * DEPRECATED
 * Replaced by: TCHMI_ENGINEERING
 * @deprecated Please use TCHMI_ENGINEERING
 **/
declare var TCHMI_ENABLE_DESIGNER_MODE: boolean;
/**
 * DEPRECATED
 * Replaced by: TCHMI_DESIGNER
 * @deprecated Please use TCHMI_DESIGNER
 **/
declare var TCHMI_ENABLE_DESIGNER_MODE_MASTER: boolean;
/**
 * DEPRECATED
 * Replaced by: TCHMI_LIVEVIEW
 * @deprecated Please use TCHMI_LIVEVIEW
 **/
declare var TCHMI_ENABLE_DESIGNER_MODE_SLAVE: boolean;
/**
 * DEPRECATED
 * Replaced by: TCHMI_CONFIG_OVERRIDE
 * @deprecated Please use TCHMI_CONFIG_OVERRIDE
 **/
declare var TCHMI_ENABLE_DESIGNER_MODE_FALLBACK_CONFIG_JSON: TcHmi.System.IConfigOverride | null;
/**
 * DEPRECATED
 * Replaced by: TCHMI_TARGET_PARTIAL
 * @deprecated Please use TCHMI_TARGET_PARTIAL
 **/
declare var TCHMI_ENABLE_DESIGNER_MODE_TARGET_PARTIAL: string;
/**
 * True to enabled benchmark events.
 */
declare var TCHMI_BENCHMARK_MODE: boolean;
/**
 * 0: None
 * 1: Error
 * 2: Warning
 * 3: Info
 * 4: Debug
 */
declare var TCHMI_CONSOLE_LOG_LEVEL: TcHmi.System.LOG_LEVEL;
/** Activate persistent logging. Log message are written to IndexedDB and can be viewed later. */
declare var TCHMI_CONSOLE_LOG_PERSISTENT: boolean;
/** Max entries created in IndexedDB. */
declare var TCHMI_CONSOLE_LOG_PERSISTENT_MAX_ENTRIES: number;
/** Activate Trace Log of Communication Messages between Framework and Server */
declare var TCHMI_CONSOLE_LOG_TCHMISERVER_MESSAGES: boolean;
/** Activate Trace Log of Communication Messages between Framework and Creator */
declare var TCHMI_CONSOLE_LOG_ENGINEERING_COM_MESSAGES: boolean;
/**
 * DEPRECATED
 * Replaced by: TCHMI_CONSOLE_LOG_ENGINEERING_COM_MESSAGES
 * @deprecated Please use TCHMI_CONSOLE_LOG_ENGINEERING_COM_MESSAGES
 **/
declare var TCHMI_CONSOLE_LOG_DESIGNER_MODE_COM_MESSAGES: boolean;
/** Does we run inside a unit test? */
declare var TCHMI_UNITTEST_MODE: boolean;
declare var TCHMI_EVENT_OPTION_OBJECT_SUPPORTED: boolean;
declare var TCHMI_SERVER_STATE_WATCH_INTERVAL: number;
/**
 * Make all properties in T with optional null
 */
declare type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};
/**
* Converts string "\n" (symbol world) to newline (HTML world).
* This supports escaping with "\\n"
* @param text The text to escape
* @returns The encoded representation of parameter text.
* @preserve (Part of the public API)
*/
declare function tchmi_decode_control_characters(text: string | null | undefined): string;
/**
* Encodes HTML
* @param html The html to encode
* @returns The encoded representation of parameter html.
* @preserve (Part of the public API)
*/
declare function tchmi_encode_html(html: string): string;
/**
* Decodes HTML
* @param text The text to decode
* @returns The decoded representation of parameter text.
"&#176;!\"&#167;$%&/()=?~#|&#233;&#232;€…™&#174;&#169;"
"°     !\"§     $%&/()=?~#|é     è     €…™®     ©"
 @preserve (Part of the public API)
*/
declare function tchmi_decode_html(text: string): string;
/**
* Converts formatted text to formatted html.
* @param text The text which contains the formatting placeholders which shall be encoded.
* @returns The encoded representation of parameter text.
* @preserve (Part of the public API)
*/
declare function tchmi_text_to_html(text: string): string;
/**
* Decode base64 strings
* Attention: JS strings are UTF16!
* @param input
* @returns Returns the String or null
* @preserve (Part of the public API)
*/
declare function tchmi_base64decode(input: string): string | null;
/**
* Encode base64 strings
* Attention: JS strings are UTF16!
* @param input String to encode
* @returns Returns the String or null
* @preserve (Part of the public API)
*/
declare function tchmi_base64encode(input: string): string | null;
/**
* Creates a Guid string.
* @returns Guid
* @preserve (Part of the public API)
*/
declare function tchmi_create_guid(): string;
/**
 * Compares 2 values for equality.
 * @param a Value 1
 * @param b Value 2
 * @param typeSafe If set to "true" the comparison will return "false" if a string "1" is compared with number 1. If it is set to "false" the same comparison will return "true" because the value is rough equal.
 * @preserve (Part of the public API)
 */
declare function tchmi_equal(a: any, b: any, typeSafe?: boolean): boolean;
/**
 * Clones the data {Object} in param obj and returns a clone of it.
 * Do not use this function to create clones of objects which contain functions or are based on a prototype definition!
 * String, null, undefined are returned directly as they are immutable / handled by value.
 * @param obj The object to clone.
 * @returns Clone of param obj.
 * @template T defines the type of the target object
 * @preserve (Part of the public API)
 */
declare function tchmi_clone_object<T>(obj: T): T;
/**
 * Unify a path string.
 * Replace all backslashes with slashes, replace multiple slashes with single slashes, remove leading slash
 * @param path The path.
 * @returns Unified path.
 */
declare function tchmi_path(path: string): string;
declare function tchmi_path<T>(path: T): T;
/**
* Converts a String to a valid CSS id pattern by escaping all reserved characters.
* @param id The target id.
* @returns Converted id.
* @preserve (Part of the public API)
*/
declare function tchmi_css_escape_selector(id: string): string;
/**
 * tchmi_escape_regex
 * @param text
 * @preserve (Part of the public API)
 */
declare function tchmi_escape_regex(text: string): string;
/**
 * @preserve (Part of the public API)
 */
declare module TcHmi {
    var version: Version;
    interface Context<T = any> {
        /** Should be called when there is no error with an optional result. */
        success?: ((result?: T) => void);
        /**
         * Should be called when there is an error.
         * Must provide an error code and optional more details.
         */
        error?: ((error: TcHmi.Errors, details?: IErrorDetails) => void);
    }
    interface EventContext extends Context {
        /** Name of the event which is beeing handled. */
        name: string;
    }
    /**
     * IErrorDetails extends the server error object to allow framework specific error details and server specific error details in one object.
     * May be extended with framework specific properties. Keep in contact with server devs to avoid conflicts while changing this.
     * Based on Protocol.Schema.json#/definitions/errorDetails of Server;
     */
    interface IErrorDetails {
        /** The error code. */
        code: TcHmi.Errors | number;
        /** The enum name of error code and not a plain-text message. Use reason for a plaintext description of the error. */
        message?: string;
        /** Plaintext description of the error. */
        reason?: string;
        /** The name of the server or framework domain where the error occured. */
        domain?: string;
        /** A list of errors which lead to the current error. */
        errors?: IErrorDetails[] | undefined;
    }
    /** () => void */
    interface DestroyFunction {
        (): void;
    }
    type FontFamily = string;
    type AngleUnit = (typeof ValueConverter.AngleUnitList)[keyof typeof ValueConverter.AngleUnitList];
    type BorderStyleValue = (typeof ValueConverter.BorderStyleValueList)[keyof typeof ValueConverter.BorderStyleValueList];
    type DimensionUnit = (typeof ValueConverter.DimensionUnitList)[keyof typeof ValueConverter.DimensionUnitList];
    type FontSizeUnit = (typeof ValueConverter.FontSizeUnitList)[keyof typeof ValueConverter.FontSizeUnitList];
    type FontStyle = (typeof ValueConverter.FontStyleList)[keyof typeof ValueConverter.FontStyleList];
    type FontWeight = (typeof ValueConverter.FontWeightList)[keyof typeof ValueConverter.FontWeightList];
    type HorizontalAlignment = (typeof ValueConverter.HorizontalAlignmentList)[keyof typeof ValueConverter.HorizontalAlignmentList];
    type ScaleModeString = (typeof ValueConverter.ScaleModeStringList)[keyof typeof ValueConverter.ScaleModeStringList];
    type SizeMode = (typeof ValueConverter.SizeModeList)[keyof typeof ValueConverter.SizeModeList];
    type SizeModeWithContent = (typeof ValueConverter.SizeModeWithContentList)[keyof typeof ValueConverter.SizeModeWithContentList];
    type ToggleState = (typeof ValueConverter.ToggleStateList)[keyof typeof ValueConverter.ToggleStateList];
    type VerticalAlignment = (typeof ValueConverter.VerticalAlignmentList)[keyof typeof ValueConverter.VerticalAlignmentList];
    /** Hidden still uses space in fluid calculations, collapsed is ignored there.*/
    type Visibility = (typeof ValueConverter.VisibilityList)[keyof typeof ValueConverter.VisibilityList];
    interface Version {
        full: string;
        major: number;
        minor: number;
        build: number;
        revision: number;
    }
    interface IResultObject {
        error: Errors;
        details?: IErrorDetails | undefined;
    }
    interface baseColor {
    }
    type Color = SolidColor | LinearGradientColor;
    interface SolidColor extends baseColor {
        color: string;
    }
    /**
     * Checks if the parameter is a TcHmi.SolidColor
     * @param colorObject
     */
    function isSolidColor(colorObject: Color | null | undefined): colorObject is SolidColor;
    interface LinearGradientColor extends baseColor {
        angle: number | string;
        stopPoints: StopPoint[];
    }
    /**
     * Checks if the parameter is a TcHmi.LinearGradientColor
     * @param colorObject
     */
    function isLinearGradientColor(colorObject: Color | null | undefined): colorObject is LinearGradientColor;
    interface StopPoint {
        color: string;
        stop?: string;
    }
    interface RGBAColor {
        r: number;
        g: number;
        b: number;
        a: number;
    }
    interface baseFourSidedCss {
        left: number;
        top: number;
        right: number;
        bottom: number;
    }
    interface FourSidedCss extends baseFourSidedCss {
        leftUnit?: DimensionUnit;
        topUnit?: DimensionUnit;
        rightUnit?: DimensionUnit;
        bottomUnit?: DimensionUnit;
    }
    interface BorderWidth extends baseFourSidedCss {
        leftUnit?: 'px';
        topUnit?: 'px';
        rightUnit?: 'px';
        bottomUnit?: 'px';
    }
    interface BorderStyle {
        left: BorderStyleValue;
        top: BorderStyleValue;
        right: BorderStyleValue;
        bottom: BorderStyleValue;
    }
    interface BorderRadius {
        topLeft: number;
        topLeftUnit?: DimensionUnit;
        topRight: number;
        topRightUnit?: DimensionUnit;
        bottomRight: number;
        bottomRightUnit?: DimensionUnit;
        bottomLeft: number;
        bottomLeftUnit?: DimensionUnit;
    }
    interface BoxShadow {
        /** Color of this Box Shadow */
        color: SolidColor | null;
        /** The Shadow Offset */
        offsetX?: number | null;
        offsetXUnit?: DimensionUnit;
        /** The Shadow Offset */
        offsetY?: number | null;
        offsetYUnit?: DimensionUnit;
        /** Inset shadows are drawn inside the border (even transparent ones), above the background, but below content. */
        inset?: boolean;
        /** The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. */
        blur?: number | null;
        blurUnit?: DimensionUnit;
        /** Positive values will cause the shadow to expand and grow bigger, negative values will cause the shadow to shrink. */
        spread?: number | null;
        spreadUnit?: DimensionUnit;
    }
    interface Background {
        color: Color | null;
        image: string | null;
        imageWidth: number | null;
        imageWidthUnit: DimensionUnit;
        imageHeight: number | null;
        imageHeightUnit: DimensionUnit;
        imageHorizontalAlignment: HorizontalAlignment;
        imageVerticalAlignment: VerticalAlignment;
        imagePadding: FourSidedCss | null;
    }
    /**
     * Checks if the parameter is a TcHmi.Background
     * @param obj
     * @preserve (Part of the public API)
     */
    function isBackground(obj: Background | null | undefined): obj is Background;
    /**
     * The base transform interface. All transform operations must extend this interface and set transformType accordingly.
     */
    interface baseTransform {
        /**
         * Specifies which type of transform should be performed.
         * Currently supported values: Translate, Rotate, Scale, Skew, Origin, Perspective.
         */
        transformType: string;
    }
    type Transform = Translate | Rotate | Scale | Skew | Origin | Perspective;
    /**
     * Translate an element. transformType must be "Translate".
     */
    interface Translate extends baseTransform {
        transformType: 'Translate';
        /**
         * Translate in x axis direction. Defaults to 0 if not provided.
         */
        x?: number;
        /**
         * The unit to use for the translation in x axis direction. Supported values: px, %. Defaults to px if not provided.
         */
        xUnit?: DimensionUnit;
        /**
         * Translate in y axis direction. Defaults to 0 if not provided.
         */
        y?: number;
        /**
         * The unit to use for the translation in y axis direction. Supported values: px, %. Defaults to px if not provided.
         */
        yUnit?: DimensionUnit;
        /**
         * Translate in z axis direction. Defaults to 0 if not provided.
         */
        z?: number;
        /**
         * The unit to use for the translation in z axis direction. Supported values: px, %. Defaults to px if not provided.
         */
        zUnit?: DimensionUnit;
    }
    /**
     * Checks if the parameter is a TcHmi.checkTransform
     * @param transformObject
     * @preserve (Part of the public API)
     */
    function isTranslate(transformObject: Transform | null | undefined): transformObject is Translate;
    /**
     * Rotate an element. transformType must be "Rotate".
     */
    interface Rotate extends baseTransform {
        transformType: 'Rotate';
        /**
         * The angle to rotate the element.
         */
        angle: number;
        /**
         * The unit to use for the rotation. Supported values: deg, rad, turn, grad. Defaults to deg if not provided.
         */
        angleUnit?: AngleUnit;
        /**
         * The vector to rotate around. Defaults to { x: 0, y: 0, z: 1} if not provided.
         */
        vector?: {
            x: number;
            y: number;
            z: number;
        };
    }
    /**
     * Checks if the parameter is a TcHmi.Rotate
     * @param transformObject
     * @preserve (Part of the public API)
     */
    function isRotate(transformObject: Transform | null): transformObject is Rotate;
    /**
     * Scale an element. transformType must be "Scale".
     */
    interface Scale extends baseTransform {
        transformType: 'Scale';
        /**
         * Scale in x axis direction. Defaults to 1 if not provided.
         */
        x?: number;
        /**
         * Scale in y axis direction. Defaults to 1 if not provided.
         */
        y?: number;
        /**
         * Scale in z axis direction. Defaults to 1 if not provided.
         */
        z?: number;
    }
    /**
     * Checks if the parameter is a TcHmi.Scale
     * @param transformObject
     * @preserve (Part of the public API)
     */
    function isScale(transformObject: Transform | null): transformObject is Scale;
    /**
     * Skew an element. transformType must be "Skew".
     */
    interface Skew extends baseTransform {
        transformType: 'Skew';
        /**
         * Skew x axis. Defaults to 0 if not provided.
         */
        xAngle?: number;
        /**
         * The unit to use for the x axis skew. Supported values: deg, rad, turn, grad. Defaults to deg if not provided.
         */
        xAngleUnit?: AngleUnit;
        /**
         * Skew y axis. Defaults to 0 if not provided.
         */
        yAngle?: number;
        /**
         * The unit to use for the y axis skew. Supported values: deg, rad, turn, grad. Defaults to deg if not provided.
         */
        yAngleUnit?: AngleUnit;
    }
    /**
     * Checks if the parameter is a TcHmi.Skew
     * @param transformObject
     * @preserve (Part of the public API)
     */
    function isSkew(transformObject: Transform | null): transformObject is Skew;
    /**
     * Set the origin of transforms for an element. Should be only used once per transform list. If multiple origins are specified only the last one is used.
     * transformType must be "Origin".
     */
    interface Origin extends baseTransform {
        transformType: 'Origin';
        /**
         * The transform origin x coordinate. Defaults to 50 if not provided. If this and xUnit are not provided, xUnit will default to % to center the origin on the element.
         */
        x?: number;
        /**
         * The unit of the transform origin x coordinate. Defaults to % if x is not provided. Otherwise defaults to px.
         */
        xUnit?: TcHmi.DimensionUnit;
        /**
         * The transform origin y coordinate. Defaults to 50 if not provided. If this and yUnit are not provided, yUnit will default to % to center the origin on the element.
         */
        y?: number;
        /**
         * The unit of the transform origin y coordinate. Defaults to % if y is not provided. Otherwise defaults to px.
         */
        yUnit?: TcHmi.DimensionUnit;
        /**
         * The transform origin z coordinate. Defaults to 0 if not provided.
         */
        z?: number;
        /**
         * The unit of the transform origin z coordinate. Defaults to px if not provided.
         */
        zUnit?: TcHmi.DimensionUnit;
    }
    /**
     * Checks if the parameter is a TcHmi.Origin
     * @param transformObject
     * @preserve (Part of the public API)
     */
    function isOrigin(transformObject: Transform | null): transformObject is Origin;
    /**
     * Sets the perspective for 3D transforms on an element. Should be only used once per transform list. If multiple perspectives are specified only the last one is used.
     * transformType must be "Perspective".
     */
    interface Perspective extends baseTransform {
        transformType: 'Perspective';
        /**
         * The distance to use for the perspective. Visualize this as the distance between the user and the transformed element. The shorter the distance, the extremer the transforms appear.
         */
        distance: number;
        /**
         * The unit of the distance. Supported values: px, %. Defaults to px if not provided.
         */
        distanceUnit?: TcHmi.DimensionUnit;
        /**
         * The origin of the perspective. Default behaviour is the same as transform origin.
         */
        origin?: {
            x?: number;
            xUnit?: TcHmi.DimensionUnit;
            y?: number;
            yUnit?: TcHmi.DimensionUnit;
        };
    }
    /**
     * Checks if the parameter is a TcHmi.Perspective
     * @param transformObject
     * @preserve (Part of the public API)
     */
    function isPerspective(transformObject: Transform | null): transformObject is Perspective;
    /**
        Key/Value pair in a plain JS Object
    */
    interface Dictionary<T> {
        [index: string]: T | undefined;
    }
    interface IFunction {
        objectType: 'Function';
        /** Should function be active? */
        active?: boolean;
        /** Registered name of the Function. */
        fn: string;
        fnParams: IFunction.Value[];
    }
    module IFunction {
        /**
       */
        interface baseValue {
        }
        type Value = StaticValue | Symbol | EventDataObject | FunctionExpression;
        interface StaticValue extends baseValue {
            objectType: 'StaticValue';
            /** Contains a value based on the defined valuetype. A value can be a string, number, boolean, array or an object. */
            value: any;
            /** Defines the ValueType which is used in TcHmiCreator to handle special format values like Path, PartialPath, Control etc. */
            valueType: string;
        }
        /**
         * Function Parser Type Guard which checks 'objectType' of Value
         * @param value
         */
        function isStaticValue(value: Value): value is StaticValue;
        interface Symbol extends baseValue {
            objectType: 'Symbol';
            /** A tchmi binding symbol expression string. Example: "%s%ADS::test1%s%" */
            symbolExpression: string;
        }
        /**
         * Function Parser  Type Guard which checks 'objectType' of Value
         * @param value
         */
        function isSymbol(value: Value): value is Symbol;
        interface EventDataObject extends baseValue {
            objectType: 'EventDataObject';
            /** The name of the prooperty of the event object. */
            propertyPath: string;
        }
        /**
         * Function Parser Type Guard which checks 'objectType' of Value
         * @param value
         */
        function isEventDataObject(value: Value): value is EventDataObject;
        interface FunctionExpression extends baseValue {
            objectType: 'FunctionExpression';
            functionExpression: string;
        }
        /**
         * Function Parser  Type Guard which checks 'objectType' of Value
         * @param value
         */
        function isFunctionExpression(value: Value): value is FunctionExpression;
    }
    /**
    * JSON Schema defines a JSON based format for defining the structure of JSON data.
    */
    interface nativeJsonSchema {
        $ref?: string;
        /**
         * This is important because it tells refs where
         * the root of the document is located
         */
        id?: string;
        /**
         * It is recommended that the meta-schema is
         * included in the root of any JSON Schema
         */
        $schema?: string;
        /**
         * Title of the schema
         */
        title?: string;
        /**
         * Schema description
         */
        description?: string;
        /**
         * Default json for the object represented by
         * this schema
         */
        'default'?: any;
        /**
         * The value must be a multiple of the number
         * (e.g. 10 is a multiple of 5)
         */
        multipleOf?: number;
        maximum?: number;
        /**
         * If true maximum must be > value, >= otherwise
         */
        exclusiveMaximum?: boolean;
        minimum?: number;
        /**
         * If true minimum must be < value, <= otherwise
         */
        exclusiveMinimum?: boolean;
        maxLength?: number;
        minLength?: number;
        /**
         * This is a regex string that the value must
         * conform to
         */
        pattern?: string;
        format?: 'date-time' | 'email' | 'hostname' | 'ipv4' | 'ipv6' | 'uri';
        additionalItems?: boolean | JsonSchema;
        items?: JsonSchema | JsonSchema[];
        maxItems?: number;
        minItems?: number;
        uniqueItems?: boolean;
        maxProperties?: number;
        minProperties?: number;
        required?: string[];
        additionalProperties?: boolean | JsonSchema;
        /**
         * Holds simple JSON Schema definitions for
         * referencing from elsewhere.
         */
        definitions?: {
            [key: string]: JsonSchema;
        };
        /**
         * The keys that can exist on the object with the
         * json schema that should validate their value
         */
        properties?: {
            [property: string]: JsonSchema;
        };
        /**
         * The key of this object is a regex for which
         * properties the schema applies to
         */
        patternProperties?: {
            [pattern: string]: JsonSchema;
        };
        /**
         * If the key is present as a property then the
         * string of properties must also be present.
         * If the value is a JSON Schema then it must
         * also be valid for the object if the key is
         * present.
         */
        dependencies?: {
            [key: string]: JsonSchema | string[];
        };
        /**
         * Enumerates the values that this schema can be
         * e.g.
         * {"type": "string",
           *  "enum": ["red", "green", "blue"]}
         */
        'enum'?: any[];
        /**
         * The basic type of this schema, can be one of
         * [string, number, object, array, boolean, null]
         * or an array of the acceptable types
         */
        type?: JsonDataTypeNames | JsonDataTypeNames[];
        allOf?: JsonSchema[];
        anyOf?: JsonSchema[];
        oneOf?: JsonSchema[];
        /**
         * The entity being validated must not match this schema
         */
        not?: JsonSchema;
    }
    type JsonDataTypeNames = 'string' | 'number' | 'object' | 'array' | 'boolean' | 'null' | 'integer';
    /**
    * JSON Schema defines a JSON based format for defining the structure of JSON data.
    */
    interface JsonSchema extends nativeJsonSchema {
        /** Custom server related extension to model the beginning of the plc index. */
        startOffset?: number;
        /** Custom server related extension to describe symbol related attributes. */
        attributes?: Dictionary<any>;
        /**
        * Custom framework related extension to describe an instanceof class while type is 'object'.
        * See tchmi:framework#/definitions/Symbol for further information.
        */
        frameworkInstanceOf?: string;
        /**
        * If frameworkInstanceOf relates to TcHmi.Symbol frameworkSymbolSubType will contain the excpected value type of the symbol.
        */
        frameworkSymbolSubType?: JsonSchema;
        /**
         * If frameworkInstanceOf relates to TcHmi.Controls.System.TcHmiControl frameworkControlType will contain the excpected value type of the control.
         */
        frameworkControlType?: string;
        frameworkUserControlConfig?: string;
        writeValue?: JsonSchema;
        convert?: 'string' | 'number' | 'boolean';
        options?: {
            label: string;
            value: number;
        }[];
    }
    /**
        One rule for a right corresponding to a group

    example:
    [
        {
          "accessright": "operate",
          "group": "Admins",
          "permission": "Allow"
        },
        {
          "accessright" : "observe",
          "group" : "Users",
          "permission": "Allow"
        }
    ]
    */
    interface AccessControl {
        /** Right which this rule defines */
        accessright: string;
        /** Group which this accessright is given */
        group: string;
        /** Permission for this accessright rule */
        permission: 'Allow' | 'Deny' | 'Inherit';
    }
    /**
        Allows a mapping of virtual rights to real rights.
        example:
        [{
            "virtualControlRight": "deleteRecipy",
            "controlRight": "operate"
        },
        {
            "virtualControlRight": "addRecipy",
            "controlRight": "operate"
        }]
    */
    interface VirtualControlRightMapping {
        /** 'outer' configured right */
        virtualControlRight: string;
        /** 'inner' working right */
        controlRight: string;
    }
    /**
     * Endianness dictates the order in which the bytes encoding a number are stored.
     * Little Endian stores the least significant byte first, for example the number 41394 (Hex: 0xA1B2) will be stored as [0xB2, 0xA1].
     * Big Endian stores the most significant byte first, for example the number 41394 (Hex: 0xA1B2) will be stored as [0xA1, 0xB2].
     */
    enum Endianness {
        LittleEndian = 0,
        BigEndian = 1
    }
    interface Filter extends Array<Comparison | LogicOperator | Filter> {
    }
    interface Comparison {
        path?: string;
        comparator: '==' | '!=' | '<' | '>' | '<=' | '>=' | 'contains' | 'contains not' | '== [ignore case]' | '!= [ignore case]' | 'contains [ignore case]' | 'contains not [ignore case]';
        value: string | number | Date | boolean | null;
    }
    function isComparison(value: Comparison | LogicOperator | Filter): value is Comparison;
    interface LogicOperator {
        logic: 'AND' | 'OR';
    }
    function isLogicOperator(value: Comparison | LogicOperator | Filter): value is LogicOperator;
    enum PartialType {
        Invalid = 0,
        View = 1,
        Content = 2,
        UserControl = 3
    }
    /**
    * A trigger is based on an event, which is defined by a global unique identifier.
    * Events raised by controls are always defined with the following pattern: [Control_ID].[EVENT_NAME]
    * The available control events are defined in the associated control markup file.
    */
    interface Trigger {
        /** A string value which contains the target event name. */
        event: string;
        /** preventDefault() should be called in this trigger */
        preventDefault?: true;
        /** An array of {Action} objects. Each Event can contain 1 ... n {Action} objects. */
        actions: Trigger.Action[];
    }
    module Trigger {
        interface baseAction {
            /** Should action be active? Defaults to true. */
            active?: boolean;
            /** Should action be collapsed? Not used in runtime */
            collapsed?: boolean;
            /** Async Wait */
            asyncWait: boolean;
            /** Success callback action list. */
            success: Action[];
            /** Error callback action list. */
            error: Action[];
        }
        type Action = Condition | Comment | SwitchCase | ControlApiFunction | WriteToSymbol | TAFunction | JavaScript | ActionTemplate | FunctionExpression;
        interface ConditionIf {
            if: Expression[];
            then: Action[];
            /** Used by creator only. */
            showThenActions?: boolean;
        }
        interface ConditionElseIf {
            elseif: Expression[];
            then: Action[];
            /** Used by creator only. */
            showThenActions?: boolean;
        }
        interface ConditionElse {
            else: Action[];
            /** Used by creator only. */
            showThenActions?: boolean;
        }
        interface Condition extends baseAction {
            /** Definition of the action type. */
            objectType: 'Condition';
            parts: (ConditionIf | ConditionElseIf | ConditionElse)[];
        }
        /**
         * Trigger Parser Type Guard which checks 'objectType' of Action
         * @param thisValue
         */
        function isCondition(obj: Action): obj is Condition;
        interface SwitchCase extends baseAction {
            /** Definition of the action type. */
            objectType: 'SwitchCase';
            /** An object of type {Compare} which contains the target switch value. */
            compare: IFunction.Value;
            /** */
            cases: VCase[];
            caseDefault: DCase;
        }
        /**
         * Trigger Parser Type Guard which checks 'objectType' of Action
         * @param thisValue
         */
        function isSwitchCase(obj: Action): obj is SwitchCase;
        interface ControlApiFunction extends baseAction {
            /** Definition of the action type. */
            objectType: 'ControlApiFunction';
            /** The id of the target control as string value. */
            control: string;
            /** The name of the target api function. */
            fn: string;
            /** An array of {ParamValue} objects. Each element in the array represents a parameter of the function defined in "fn". */
            fnParams: IFunction.Value[];
        }
        /**
         * Trigger Parser Type Guard which checks 'objectType' of Action
         * @param thisValue
         */
        function isControlApiFunction(obj: Action): obj is ControlApiFunction;
        interface WriteToSymbol extends baseAction {
            /** Definition of the action type. */
            objectType: 'WriteToSymbol';
            /** The target binding symbol as binding expression. */
            symbolExpression: string | null;
            /** An object of type {Value}. */
            value: IFunction.Value;
        }
        /**
         * Trigger Parser Type Guard which checks 'objectType' of Action
         * @param thisValue
         */
        function isWriteToSymbol(obj: Action): obj is WriteToSymbol;
        interface Comment extends baseAction {
            /** Definition of the action type. */
            objectType: 'Comment';
            /** Free comment. Will be ignored on runtime. */
            comment: string;
        }
        /**
         * Trigger Parser Type Guard which checks 'objectType' of Action
         * @param thisValue
         */
        function isComment(obj: Action): obj is Comment;
        interface TAFunction extends baseAction {
            /** Definition of the action type. */
            objectType: 'Function';
            /** The name of the target setter function which is public accessable in the control defined in "Control". */
            fn: string;
            /** An array of {ParamValue} objects. Each element in the array represents a parameter of the setter function defined in "Fn". */
            fnParams: IFunction.Value[];
        }
        function isFunction(obj: Action): obj is TAFunction;
        interface JavaScript extends baseAction {
            /** Definition of the action type. */
            objectType: 'JavaScript';
            /**
            An array of string objects. Each string in the array represents one line of code.
            To avoid invalidation of the TcHmiConfig it is important to escape quotationmarks.
            */
            sourceLines: string[];
            /** If set to true a context object will be injected into the JavaScript scope which can be used to tell the system that an asynchronous operation has finished. */
            injectContextObject?: boolean;
            /** Tells the system if the function is finished synchronous or if the user will call an feedback function of the context object. */
            waitMode?: 'Synchronous' | 'Asynchronous';
        }
        /**
         * Trigger Parser Type Guard which checks 'objectType' of Action
         * @param thisValue
         */
        function isJavaScript(obj: Action): obj is JavaScript;
        interface ActionTemplate extends baseAction {
            /** Definition of the action type. */
            objectType: 'ActionTemplate';
            /** The name of the target ActionTemplate.*/
            templateName: string;
            /** A long description of this Action Template. */
            description: string;
            /** An array of {ParamValue} objects. Each element in the array represents a parameter which will be used inside the ActionTemplate */
            fnParams: IFunction.Value[];
        }
        /**
         * Trigger Parser Type Guard which checks 'objectType' of Action
         * @param thisValue
         */
        function isActionTemplate(obj: Action): obj is ActionTemplate;
        interface FunctionExpression extends baseAction {
            /** Definition of the action type. */
            objectType: 'FunctionExpression';
            functionExpression: string | null;
        }
        function isFunctionExpression(obj: Action): obj is FunctionExpression;
        interface BindingTarget {
            /**
            * The object type name as {string}.
            * Extensions:
            * {BindingTarget}.objectType = "ControlAttributeBindingTarget"
            */
            objectType: string;
        }
        interface ControlAttributeBindingTarget extends BindingTarget {
            objectType: 'ControlAttributeBindingTarget';
            attributeExpression: string | null;
        }
        function isControlAttributeBindingTarget(obj: BindingTarget): obj is ControlAttributeBindingTarget;
        interface Expression {
            /** An object of type {Value} which represents a value which will be compared. */
            compare1: IFunction.Value;
            /** An object of type {Value} which represents a value which will be compared. */
            compare2: IFunction.Value;
            /**
            A string value which contains the compare operator string (JavaScript) which will be used to compare the values behind the properties "Compare1" and "Compare2".
            */
            compareOperator: '==' | '===' | '!=' | '!==' | '<' | '<=' | '>' | '>=';
            /**
            A string|null value which defines the logical binding of the current element to the previous element.

            The property has to be set to null if its the first {Expression} object in the Expressions array.
            */
            logic: 'AND' | 'OR' | null;
        }
        interface Case {
            actions: Action[];
        }
        /** Value Case */
        interface VCase extends Case {
            /** Configured Value to compare */
            caseValue: IFunction.Value;
        }
        /** Default Case */
        interface DCase extends Case {
        }
    }
    /**
    * Defines tchmiconfig.json
    */
    interface IConfig {
        /** Path to the Framework Directory. */
        basePath: string;
        /** Scalemode of the full Application. */
        scaleMode: ScaleModeString;
        /** Name of the View which is active while loading the Application. */
        startupView: string;
        /** Path to a custom login page. */
        loginPage?: string;
        /** Project based include files. */
        dependencyFiles?: (StylesheetFileDescription | JavaScriptFileDescription)[];
        /** Name of the Theme which is active while loading the Application. */
        activeTheme: string;
        /** List of Themes of this Application. */
        themes: Dictionary<ProjectThemeDescription>;
        /** Configuration of the server communication. */
        tcHmiServer: {
            /** Default subscription interval time. */
            websocketIntervalTime: number;
            /** General websocket request/response timeout. */
            websocketTimeout: number;
            /** System websocket request/response timeout. */
            websocketSystemTimeout: number;
            /** Default symbol subscription mode. */
            websocketSubscriptionMode?: 'Change' | 'Poll';
        };
        symbols: ISymbolConfig;
        /** Definition of global triggers. */
        trigger: Trigger[];
        /** List of packages.*/
        packages: IPackageInfo[];
        /** List of all available view files. */
        views: IView[];
        /** List of all available user function files. */
        userFunctions: IUserFunction[];
        /** List of all available Usercontrols. */
        userControls: IUserControl[];
        /** List of all available content files. */
        content: IContent[];
        /** Definition of all available actionTemplates. */
        actionTemplates: ActionTemplate[];
        /** List of all available localization files. */
        languages: ILanguageFileMap;
        /** Language file used if a language file or a key within a language file is missing. */
        languageFallback?: string;
        /** List of all available keyboard layout files in project. */
        keyboardLayouts: IProjectKeyboardLayout[];
        /** Disable various loading optimizations */
        disableLoadingOptimization?: boolean;
        tcSpeech?: TcHmi.TcSpeech.BaseConfig;
        /** Definition of engineering settings. */
        creatorSettings: {
            /** Definition of the viewport emulation. */
            viewport: {
                /** Width as a Pixel Number. */
                defaultWidth: number;
                /** Height as a Pixel Number. */
                defaultHeight: number;
            };
        };
    }
    interface ILanguageFileMap extends Dictionary<string> {
    }
    interface ISymbolConfig {
        internal: {
            [symbolname: string]: IInternalSymbolItem;
        };
    }
    interface IInternalSymbolItem {
        value: any;
        /** Information about the expected type as a tchmi reference name */
        type: string;
        persist?: boolean;
        readonly?: boolean;
    }
    /**
    * Defines every <LangugageCode>.localization
    */
    interface ILocalization {
        /** Definition of this Language and Region as in ISO 639/BCP 47 with '-' separator. */
        locale: string;
        /** List of localized Text. */
        localizedText: ILocalizedTextMap;
    }
    interface ILocalizedTextMap {
        [key: string]: string | null;
    }
    interface baseDependencyFileDescription {
        /** Path to the file */
        name: string;
        /** A long description of this file. */
        description?: string;
    }
    /** project Description.json#DependencyFile and function IFunctionDescription#DependencyFile section */
    interface JavaScriptFileDescription extends baseDependencyFileDescription {
        /** Type of the control asset. */
        type: 'JavaScript';
    }
    /**
    * control Description.json#dependencyFiles
    * tchmiconfig.json#dependencyFiles
    */
    interface StylesheetFileDescription extends baseDependencyFileDescription {
        /** Type of the control asset. */
        type: 'Stylesheet';
    }
    /**
    * control Description.json#themeFiles
    * tchmiconfig.json#dependencyFiles
    */
    interface ThemedValuesFileDescription extends baseDependencyFileDescription {
        /** Type of the control asset. */
        type: 'ThemedValues';
    }
    interface baseThemeDescription {
        /** References to Resources of this Theme. */
        resources: (ThemedValuesFileDescription | StylesheetFileDescription)[];
    }
    interface ControlThemeDescription extends baseThemeDescription {
    }
    interface ProjectThemeDescription extends baseThemeDescription {
        /** Do not load theme files (.theme and .css) for this controls */
        replacesThemeForControls?: string[];
    }
    /** Package information as given in tchmiconfig */
    interface IPackageInfo {
        /** Package name like Beckhoff.TwinCAT.HMI.Controls */
        name: string;
        /** Base url path for this package like /Beckhoff.TwinCAT.HMI.Controls or /framework */
        basePath: string;
    }
    interface IUserFunction {
        /** Path to the user function js file. */
        url: string;
    }
    interface IPartial {
        /** Path to the Partial main file. */
        url: string;
    }
    interface IView extends IPartial {
        /** Defines if the file should be loaded and compiled before usage to accelerate later usage. */
        preload: boolean;
        /** Defines if the objects related to the target partial should be kept alive after destroy to avoid addition compile. */
        keepAlive: boolean;
    }
    interface IContent extends IPartial {
        /** Defines if the file should be loaded and compiled before usage to accelerate later usage. */
        preload: boolean;
        /** Defines if the objects related to the target partial should be kept alive after destroy to avoid addition compile. */
        keepAlive: boolean;
    }
    interface IUserControl extends IPartial {
    }
    interface ActionTemplate {
        /** Name of the Action Template. */
        name: string;
        category: string;
        actions: Trigger.Action[];
        parameters: TemplateParameter[];
    }
    interface TemplateParameter {
        name: string;
        /** Information about the expected type as a tchmi reference name */
        type: string;
        description: string;
        structDataType: any;
    }
    interface IProjectKeyboardLayout {
        url: string;
    }
}
declare module TcHmi {
    module System {
        interface IConfigOverride {
            basePath?: string;
            tcHmiServer?: {
                websocketIntervalTime?: number;
                websocketOverwrite?: {
                    host?: string;
                    port?: number;
                };
            };
        }
        const enum LifeCycleState {
            AttributesInitialized = 15,
            Attached = 30,
            Detached = 40
        }
        enum ControlAttributeType {
            Invalid = 0,
            General = 1,
            Control = 2,
            UserControlParameter = 3
        }
        enum ControlAttributeValueType {
            Invalid = 0,
            Simple = 1,
            Complex = 2
        }
        interface ControlAttribute {
            /** Name from HTML, so guaranteed to be lowercase only with simple attributes! */
            name: string;
            value: any;
            valueType: ControlAttributeValueType;
            type: ControlAttributeType;
            descr: ControlAttributeDescription | null;
        }
        interface IControlRegistrationBase {
            error: TcHmi.Errors;
            errorDetails?: TcHmi.IErrorDetails;
        }
        interface IControlRegistration<C extends TcHmi.Controls.System.baseTcHmiControl = TcHmi.Controls.System.baseTcHmiControl> extends IControlRegistrationBase {
            /** API 0 (1.10), API 1 (1.12) */
            apiVersion: 0 | 1;
            name?: string;
            /** Since API 1 (1.12) */
            namespace?: string;
            /** With API 0 (1.10), API 1 (1.12) */
            ctrlConstructor?: TcHmi.Controls.baseTcHmiControlConstructor<C>;
            /** Control class is a native ES6 class?  */
            nativeEs6Control?: boolean;
            /** The nearest native ES6 class constructor. For details see TcHmi.System.ControlManager._procConstructor */
            nearestEs6Constructor?: TcHmi.Controls.baseTcHmiControlConstructor;
            /** Only with API 0 (1.10) */
            directory?: string;
            /** Only with API 0 (1.10) */
            template?: string | null;
        }
        interface IFunctionRegistrationBase {
            error: TcHmi.Errors;
            errorDetails?: TcHmi.IErrorDetails;
        }
        interface IFunctionRegistration extends IFunctionRegistrationBase {
            name?: string;
            namespace?: string;
            func?: (...args: any[]) => any;
        }
        /** Object to store all package data. */
        interface IPackage {
            /** Package name like Beckhoff.TwinCAT.HMI.Controls */
            name: string;
            /** Base url path for this package like /Beckhoff.TwinCAT.HMI.Controls or /framework */
            basePath: string;
            /** Content of the Manifest file for this package */
            manifest: IManifest;
        }
        interface IControlModuleBase {
            error: TcHmi.Errors;
            errorDetails?: TcHmi.IErrorDetails;
        }
        interface IControlModule<C extends TcHmi.Controls.System.baseTcHmiControl = TcHmi.Controls.System.baseTcHmiControl> extends IControlModuleBase {
            reg?: IControlRegistration<C>;
            manifestData?: IManifestControlModuleData;
            package?: IPackage;
            description?: ControlDescription;
            descriptionExpanded?: ControlDescriptionWithInheritance;
        }
        interface IFunctionModuleBase {
            error: TcHmi.Errors;
            errorDetails?: TcHmi.IErrorDetails;
        }
        interface IFunctionModule extends IFunctionModuleBase {
            reg?: IFunctionRegistration;
            manifestData?: IManifestFunctionModuleData;
            package?: IPackage;
            description?: IFunctionDescription;
        }
        /**
        * Defines every <UserControl>.usercontrol.json
        */
        interface UserControlConfig {
            parameters: ControlAttributeDescription[];
            /** A list of virtual rights. */
            virtualRights?: ControlAccessDescription[];
        }
        /**
        *  Defines Function
        */
        interface IFunctionDescription {
            apiVersion?: number;
            version: Version;
            dependencyFiles: JavaScriptFileDescription[];
            function: IFunction;
            dataTypes?: DataTypeDescription[];
        }
        /**
        *  Defines all Controls
        */
        interface ControlDescription {
            /**
             * 0: 1.10 style controls
             * 1: 1.12 style controls:
             */
            apiVersion?: number;
            /** Control name */
            name: string;
            namespace: string;
            className: string;
            /** Name which should be presented the user. */
            displayName?: string;
            version: Version;
            /** Determine if an control is shown to the user. */
            visible: boolean;
            /** Determine if the control can be changed by a theme. Defaults to standard. */
            themeable: 'None' | 'Standard' | 'Advanced';
            /** Inheritance parent. */
            base: string;
            uses: string[];
            category: string;
            displayPriority?: number;
            heritable: boolean;
            /** A long description of this control. */
            description: string;
            /** The event which is manipulated on double click in designer. */
            defaultDesignerEvent?: string;
            properties: {
                /** Can contain other controls. */
                containerControl: boolean;
                /** Default size of control after instanciation */
                geometry: {
                    width: number;
                    height: number;
                };
            };
            icons: IconDescription[];
            template: string;
            /** Files the creator includes in our HTML */
            dependencyFiles: (TcHmi.JavaScriptFileDescription | TcHmi.StylesheetFileDescription)[];
            /** Files the framework fetches potentially */
            themes?: Dictionary<ControlThemeDescription>;
            /** A list of attributes of this control. */
            attributes: ControlAttributeDescription[];
            /** Resources of the control. */
            themedResources: ControlResourceDescription[];
            /** A list of Getter, Setter and API Functions of this Control. */
            functions?: ControlFunction[];
            attributeCategories?: {
                name: string;
                displayPriority: number;
                defaultCollapsed?: boolean;
                description: string;
            }[];
            access?: ControlAccessDescription[];
            /** A list of events associated to this control. */
            events?: ControlEventDescription[];
            /** List of custom data types. */
            dataTypes?: DataTypeDescription[];
        }
        /**
        *  ControlDescription with resolved Inheritance
        */
        interface ControlDescriptionWithInheritance extends ControlDescription {
            inheritationResolved: boolean;
            inheritedTypes?: string[];
            inheritedAttributes?: ControlAttributeDescriptionWithInheritance[];
            /** lowercase name based map */
            inheritedAttributesNameMap?: Map<string, ControlAttributeDescriptionWithInheritance>;
            /** lowercase PropertyName based map */
            inheritedAttributesPropertyNameMap?: Map<string, ControlAttributeDescriptionWithInheritance>;
            /** lowercase PropertyGetterName based map */
            inheritedAttributesPropertyGetterNameMap?: Map<string, ControlAttributeDescriptionWithInheritance>;
            /** lowercase PropertySetterName based map */
            inheritedAttributesPropertySetterNameMap?: Map<string, ControlAttributeDescriptionWithInheritance>;
            inheritedAccess?: ControlAccessDescription[];
            inheritedEvents?: any[];
            inheritedFunctions?: any[];
            /** url of the template */
            inheritedTemplate?: string;
        }
        interface FrameworkDescription {
            version: Version;
            dependencyFiles: (TcHmi.JavaScriptFileDescription | TcHmi.StylesheetFileDescription)[];
            events: FrameworkEventDescription[];
            dataTypes: DataTypeDescription[];
        }
        interface IconDescription {
            name: string;
            width: number;
            height: number;
        }
        interface ControlAttributeDescription {
            /** Name of the attribute in the HTML. This comes from JSON of the user! Casing can be uppercase even if HTML is lowercase only */
            name: string;
            /** Name of the attribute property. */
            propertyName: string;
            /** Name of the attribute property setter (can be empty string or missing if the attribute is readonly). */
            propertySetterName?: string;
            /** Name of the attribute property getter. */
            propertyGetterName: string;
            /** Reference to a corresponding other propertyName */
            refTo?: string;
            /** Name which should be presented the user. */
            displayName?: string;
            /** Determine if an attribute is shown to the user. */
            visible: boolean;
            /** Determine if the attribute can be changed by a theme. Defaults to standard. */
            themeable: 'None' | 'Standard' | 'Advanced';
            /** Information about the expected type as a tchmi reference name */
            type: string;
            /** Name of the area this attribute will be listed in the creator. */
            category: string;
            /** Display priority of the Attribute */
            displayPriority?: number;
            /** A long description of this attribute. */
            description: string;
            /** This property was defined but not enforced till 1.10 and therefor wrong used by many controls @deprecated */
            required?: boolean;
            /** The attribute has to be set in the HTML. Otherwise the control is not valid. */
            requiredOnCompile?: boolean;
            /** Readonly attributes do not need a setter. */
            readOnly: boolean;
            /** A definition of functions which are allowed to use here. The functions must match the requiredArguments signature. */
            allowedFunctions?: {
                /** The type of the attribute gives the tchmi creator a hint to use a custom editor for this attribute. */
                returnType: string | null;
                requiredArguments: {
                    /** Information about the expected type as a tchmi reference name */
                    type: string;
                }[];
                requiredWaitMode: 'Synchronous' | 'Asynchronous';
            };
            /** Defines if this is bindable to a Symbol. */
            bindable: boolean;
            /** Defines if heritable. */
            heritable: boolean;
            /** This will be used as default BindingMode on bindings to this attribute if no BindingMode is defined in the symbol expression. Defaults to 'OneWay'. */
            defaultBindingMode: 'OneWay' | 'TwoWay';
            /** This value will be used as sample value while control is generated in engineering. */
            defaultValue: any;
            /** This value is the internal default value of the attribute if no valid value exists. */
            defaultValueInternal: any;
        }
        interface ControlAttributeDescriptionWithInheritance extends ControlAttributeDescription {
            /** inherited from */
            inheritControl?: string;
        }
        interface ControlResourceDescription {
            /** Name of the resource. */
            name: string;
            /** Name which should be presented the user. */
            displayName?: string;
            /** A long description of this resource. */
            description?: string;
            /** The type of the resource gives the tchmi creator a hint to use a custom editor for this attribute.\nThe corresponding schemas are described as dataTypes. */
            type: string;
        }
        interface ThemeFile {
            /** Dictionary of control type attribute values in this file. */
            controlTypeValues?: Dictionary<AttributeValue>;
            /** Dictionary of class attribute values in this file. */
            controlClassValues?: Dictionary<AttributeValue>;
        }
        interface AttributeValue {
            /** Value of the TcHmi attribute. */
            attributes?: Dictionary<any>;
            /** Value of the resource. */
            themedResources?: Dictionary<any> | null;
        }
        interface ControlFunction {
            /** Internal name of function. */
            name: string;
            /** Name which should be presented the user. */
            displayName?: string;
            /** Determine if a function is shown to the user. */
            visible: boolean;
            /** A long description of this function. */
            description: string;
            category: string;
            params: {
                name: string;
                displayName?: string;
                description: string;
                /** Information about the expected type as a tchmi reference name */
                type: string;
                visible: boolean;
            }[];
            /** Information about the expected type as a tchmi reference name */
            type?: string | null;
            heritable: boolean;
        }
        interface IFunction {
            name: string;
            namespace?: string;
            displayName?: string;
            description: string;
            category: string;
            visible: boolean;
            injectContextObject?: boolean;
            waitMode?: 'Synchronous' | 'Asynchronous';
            returnValue?: {
                /** Information about the expected type as a tchmi reference name */
                type: string;
                description?: string;
            } | null;
            arguments: IFunctionArgument[];
        }
        interface IFunctionArgument {
            name: string;
            displayName?: string;
            /** Information about the expected type as a tchmi reference name */
            type: string;
            description: string;
            required: boolean;
            bindable: boolean;
            defaultValue?: any;
            restParameter?: boolean;
        }
        interface ControlAccessDescription {
            /** Name of the access definition in the HTML. */
            name: string;
            /** Name which should be presented the user. */
            displayName?: string;
            /** A long description of this access definition. */
            description: string;
            /** Determine if an access definition is shown to the user. */
            visible: boolean;
            /** Defines the default of this control access right. This will be used if the check for this access right does not return a result. */
            defaultValueInternal: boolean | null;
        }
        interface baseEventDescription {
            /** Internal name of the event. */
            name: string;
            /** Name which should be presented the user. */
            displayName?: string;
            /** A long description of this event. */
            description: string;
            /** The event can have the option preventDefault. */
            allowsPreventDefault?: boolean;
        }
        interface FrameworkEventDescription extends baseEventDescription {
            /** category of this event */
            category: 'Framework';
        }
        interface ControlEventDescription extends baseEventDescription {
            /** Determine if an event is shown to the user. */
            visible: boolean;
            heritable: boolean;
            /** category of this event */
            category: 'Operator' | 'Control' | 'Framework';
            /** An optional display priority of the event. Most users will only use events with a low number.\nEvents without this value are very rare used.
                10 is load, unload, pressed. 15 are major interaction events like click, right click, double click. 50 are enter, leave, mousedown, mouseup.
            */
            displayPriority?: number;
        }
        /** List of custom data types. */
        interface DataTypeDescription {
            /** Name of the datatype. */
            name: string;
            /** Path to the schema describing the datatype. */
            schema: string;
        }
        const enum LOG_LEVEL {
            None = 0,
            Error = 1,
            Warning = 2,
            Info = 3,
            Debug = 4
        }
        /** Manifest file for a package which references controls, functions and other stuff */
        interface IManifest {
            /**
            * 0: 1.10 style
            * 1: 1.12 style
            */
            apiVersion: 0 | 1;
            /** List of all referenced  controls, functions and other stuff in this manifest */
            modules: (IManifestPackageModuleData | IManifestControlModuleData | IManifestFunctionModuleData | IManifestResourceModuleData)[];
            provideMetadata?: IManifestMetaData;
        }
        /** Describes a reference to a package. */
        interface IManifestPackageModuleData {
            type: 'Package';
            /** This is the NugetId of the referenced package. The resources of the referenced package are used before the rest of the modules. */
            nugetId: string;
        }
        /** Describes a tchmi control. */
        interface IManifestControlModuleData {
            type: 'Control';
            /** The base path to find all control files. */
            basePath: string;
            /** Name of the description file for the control: Description.json in most cases. */
            descriptionFile: string;
            toolboxCategory?: string;
        }
        /** Describes a tchmi function. */
        interface IManifestFunctionModuleData {
            type: 'Function';
            /** The base path to find the function <functionName>.js and <functionName>.function.json files. */
            basePath: string;
            /** Name of the description file for the function. This is <functionName>.function.json in most cases. */
            descriptionFile: string;
        }
        interface IManifestResourceModuleData {
            type: 'Resource';
            /** Url of the resource. */
            path: string;
        }
        /**
         * Example:
         * ---------------------------------------
         * {
         *    "toolbox": {
         *       "MyIdentifier": {
         *          "200": "Test",
         *          "201": {
         *             "default": "Bühnentechnik",
         *             "de-DE": "Bühnentechnik",
         *             "en-US": "Stagecraft",
         *             "it-IT": "Scenotecnica",
         *             "nl-NL": "Theatertechniek"
         *          }
         *       }
         *    }
         * }
         * ---------------------------------------
         * Can be used in control module toolboxCategory
         * {
         *    "basePath": "./",
         *    "descriptionFile": "Description.json",
         *    "toolboxCategory": "MyIdentifier:201",
         * }
         * ---------------------------------------
         */
        interface IManifestMetaData {
            toolbox?: Dictionary<Dictionary<string | Dictionary<string>>>;
        }
    }
}
declare module TcHmi {
    /**
    * For internal use only. Do not use or manipulate resources from within TcHmi.System in your code.
    * @preserve (Part of the public API)
    */
    module System {
        interface ControlHierarchy {
            ctrl: TcHmi.Controls.System.baseTcHmiControl;
            children_hierarchy: ControlHierarchy[];
            pctrl: TcHmi.Controls.System.baseTcHmiControl | null;
        }
        /**
         * Resolves the control hierarchy of the control object in param ctrl.
         * @param ctrl The first level control object which will act as the entry point for hierarchy.
         * @param pctrl The parent control object which will associated to the first level control object in the return value.
         * @returns Control object hierarchy.
         */
        function resolveControlHierarchy(ctrl: Controls.System.baseTcHmiControl, pctrl?: Controls.System.baseTcHmiControl | null): ControlHierarchy;
        interface IResolveAttributesResultObject extends TcHmi.IResultObject {
            /** Keys of the dictionary can be mixed case! */
            value: TcHmi.Controls.ControlAttributeList;
        }
        /**
         * Resolves the attributes of the jquery object in param elem based on the current dom values as an array of name, value objects.
         */
        function resolveAttributesFromControlElement(elem: Element): TcHmi.System.IResolveAttributesResultObject;
        /**
         * Resolves qualified name.
         * @param name
         * @param namespace
         */
        function resolveQualifiedName(name: string, namespace?: string): string;
        function parseIdFromHtml(markup: string): string | undefined;
        /**
         * Resolves a symbol path like '::a::b::c' or '[1]::a::b' to an array like ["a", "b", "c"] or ["[1]", "a", "b"] which can be used on an object layer by layer.
         * @param path
         */
        function resolveSymbolPathToTokenArray(path: string): string[];
        /**
        * Decode base64 encoded utf8 strings
        * Only used for sync to creator where base64 is our overkill escaping solution
        * @param input
        * @returns returns the String or null
        */
        function tchmi_utf8str_base64decode(input: string): string | null;
        /**
        * Decode base64 encoded utf8 strings
        * Only used for sync to creator where base64 is our overkill escaping solution
        * @param input String to encode
        * @returns returns the String or null
        */
        function tchmi_utf8str_base64encode(input: string): string | null;
        /**
        * ElementStyleDimensions
        */
        interface ElementStyleDimensions {
            width: string;
            height: string;
            left: string;
            top: string;
            right: string;
            bottom: string;
        }
        /**
         * Resolves css related dimensions for an element.
         * DEPRECATED
         * @deprecated
         * @param j
         */
        function resolveElementStyleDimensions(j: JQuery): ElementStyleDimensions;
        /**
         * DEPRECATED
         * @deprecated
         * @param text
         */
        function toCamelCase(text: string): string;
        /**
         * DEPRECATED
         * @deprecated
         * @param text
         */
        function toDashCase(text: string): string;
        /**
         * Used to compare server command processedStart and processedEnd ISO8601 time strings.
         * Important! This function is not mentioned to parse generic ISO8601 time strings. Its meant to parse
         * the mentioned server command time strings as fast as possible by making some expectations which
         * may not be given on generic ISO8601 time strings.
         *
         * Returns -1 if a is earlier than b, 0 if a === b and 1 if b is earlier than a.
         */
        function compareISO8601ServerCommandDateTimeStrings(a: string, b: string): -1 | 0 | 1;
    }
}
declare module TcHmi {
    module System {
        module Services {
            module Engineering {
                let designerModeManager: TcHmi.System.Engineering.DesignerModeManager;
                let designerModeComManager: TcHmi.System.Engineering.DesignerModeComManager;
                let errorPane: TcHmi.System.Engineering.ErrorPane;
            }
            let internalSymbolManager: TcHmi.System.InternalSymbolManager;
            let templateParamSymbolManager: TcHmi.System.TemplateParamSymbolManager;
            let splashScreen: TcHmi.System.SplashScreen;
            let dialogManager: TcHmi.System.DialogManager;
            let accessManager: TcHmi.System.AccessManager;
            let triggerManager: TcHmi.System.TriggerManager;
            let bindingManager: TcHmi.System.BindingManager;
            let serverManager: TcHmi.System.ServerManager;
            let serverEventManager: TcHmi.System.ServerEventManager;
            let localizationManager: TcHmi.System.LocalizationManager;
            let controlManager: TcHmi.System.ControlManager;
            let themeManager: TcHmi.System.ThemeManager;
            let styleManager: TcHmi.System.StyleManager;
            let typeManager: TcHmi.System.Type.TypeManager;
            let animationProvider: TcHmi.System.AnimationProvider;
            let viewManager: TcHmi.System.ViewManager;
            let topMostLayer: TcHmi.System.TopMostLayer;
            let tcSpeechManager: TcHmi.System.TcSpeechManager;
        }
        module Data {
            /** Map key is the package name like Beckhoff.TwinCAT.HMI.Controls  */
            const packages: Map<string, IPackage>;
            module Modules {
                /** An Array and Map with key 1.10 legacy control type name, 1.12 control type name and 1.12 qualified control type name */
                let controls: {
                    /** Map key is the 1.10 legacy control type name, 1.12 control type name and 1.12 qualified control type name */
                    map: Map<string, IControlModule<Controls.System.baseTcHmiControl>>;
                    /** All modules of all controls */
                    array: IControlModule<Controls.System.baseTcHmiControl>[];
                    /** Map key is the URL of the description.json */
                    urlMap: Map<string, IControlModule<Controls.System.baseTcHmiControl>>;
                };
                let functions: {
                    /** Map key is the 1.10 legacy function name and 1.12 qualified function name */
                    map: Map<string, IFunctionModule>;
                    /** All modules of all functions */
                    array: IFunctionModule[];
                };
            }
            module Registrations {
                /** An Array and Map with key 1.10 legacy control type name, 1.12 control type name and 1.12 qualified control type name */
                let controls: {
                    /** Map key is the 1.10 legacy control type name, 1.12 control type name and 1.12 qualified control type name */
                    map: Map<string, IControlRegistration<Controls.System.baseTcHmiControl>>;
                    /** All registrations of all controls */
                    array: IControlRegistration<Controls.System.baseTcHmiControl>[];
                };
                /** An array and Map with key 1.10 legacy function type name, 1.12 function name and 1.12 qualified function name */
                let functions: {
                    /** Map key is the 1.10 legacy function name and 1.12 qualified function name */
                    map: Map<string, IFunctionRegistration>;
                    /** All registrations of all functions */
                    array: IFunctionRegistration[];
                };
            }
            module Caches {
                /** Map key is the url */
                let templateMarkupCache: Map<string, string>;
                /** Map key is the url */
                let partialMarkupCache: Map<string, {
                    markup: string;
                    partialId?: string;
                }>;
                /** Map key is the url */
                let partialCompositeConfigCache: Map<string, UserControlConfig>;
            }
            /** Map key is the partial file url */
            let isKeepAlivePartial: Map<string, boolean>;
        }
        /** Content of tchmiconfig.json as an object */
        let config: IConfig;
        /** ISO timestamp of the HTML generation of the HMI in local time or undefined when unknown */
        let buildtime: string | undefined;
        /** Content of Description.json of the Framework as an object */
        let description: FrameworkDescription;
        let isInitialized: boolean;
        let isUnloaded: boolean;
        /** */
        let mapControlNamesFromPackageManifestApi0ToApi1: Map<string, string>;
        /** */
        let mapControlNamesFromPackageManifestApi1ToApi0: Map<string, string>;
    }
}
declare module TcHmi {
    module System {
        module acornSymbolExpressionExtension {
            interface SymbolExpression extends ESTree.Expression {
                start: number;
                end: number;
                expression: string;
                passAsSymbol: boolean;
            }
            interface Identifier extends ESTree.Identifier {
                start: number;
                end: number;
            }
            interface IParserEx {
                symbolExpression_readToken: any;
                symbolExpression_readWord: any;
                symbolExpression_parseString: any;
                symbolExpression_parseOpeningTagName: any;
                symbolExpression_parseClosingTagName: any;
                symbolExpression_parseElementAt: any;
                symbolExpression_parseElement: any;
            }
        }
    }
}
declare module TcHmi.System {
    module Callback {
    }
}
declare module TcHmi {
    module System {
        class InternalSymbolManager {
            constructor();
            add(name: string, item: TcHmi.IInternalSymbolItem): void;
            remove(name: string): void;
            update(name: string, item: TcHmi.IInternalSymbolItem): void;
            write(name: string, value: any, dirtyPaths?: string[] | null, callback?: (this: InternalSymbolManager, data: TcHmi.Symbol.IWriteResultObject) => void): void;
            read(name: string, callback?: (this: InternalSymbolManager, data: TcHmi.Symbol.IReadResultObject) => void): void;
            getType(name: string, callback: (this: InternalSymbolManager, data: InternalSymbolManager.ITypeResultObject) => void): void;
            watch<T = any>(name: string, callback: (this: void, data: TcHmi.Symbol.IWatchResultObject<T>) => void): DestroyFunction;
        }
    }
    module InternalSymbolManager {
        interface IInternalSymbolItemEx extends TcHmi.IInternalSymbolItem {
            callbacks: IInternalSymbolEntryCallback[];
        }
        interface IInternalSymbolEntryCallback {
            callback: ((this: void, data: TcHmi.Symbol.IWatchResultObject) => void);
            destroy: DestroyFunction;
        }
        interface ITypeResultObject extends TcHmi.IResultObject {
            type?: string;
        }
    }
}
declare module TcHmi {
    module System {
        class TemplateParamSymbolManager {
            constructor();
            add(name: string, type: string, value: any): void;
            remove(name: string): void;
            get(name: string): TemplateParamSymbolManager.ITemplateParamSymbolItem | undefined;
            destroy(): void;
            keepAlive(name: string): boolean;
        }
    }
    module TemplateParamSymbolManager {
        interface ITemplateParamSymbolItem {
            name: string;
            type: string;
            value: any;
            callbacks: any[];
        }
    }
}
declare module TcHmi {
    module Controls {
        module System {
            abstract class baseTcHmiControl {
                /**
                 * Constructor
                 * @param element
                 * @param pcElement
                 * @param attrs
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /**
                 * Main HTML Element of the Control as jQuery object.
                 * @preserve (Part of the public API)
                 */
                abstract getElement(): JQuery;
                /**
                * Precompiled copy of main JQuery element defining this control.
                * @preserve (Part of the public API)
                */
                abstract getPcElement(): JQuery;
                /**
                 * Set __pcElement
                 * @param value
                 */
                abstract __setPcElement(value: JQuery): void;
                /**
                 * List of attributes defined in html.
                 * @preserve (Part of the public API)
                 */
                abstract getAttrs(): TcHmi.Controls.ControlAttributeList;
                /**
                 * Type of the control
                 * @preserve (Part of the public API)
                 */
                abstract getType(): string;
                /**
                 * Control Id
                 * @preserve (Part of the public API)
                 */
                abstract getId(): string;
                /**
                 * Returns a boolean determining if the control is attached to the dom.
                 * @preserve (Part of the public API)
                 */
                abstract getIsAttached(): boolean;
                /**
                 * Returns a boolean determining if the control was already destroyed.
                 * @preserve (Part of the public API)
                 */
                abstract getIsDestroyed(): boolean;
                /**
                 * Set the internal state of a control
                 */
                abstract __setLifeCycleState(newState: TcHmi.System.LifeCycleState): void;
                /**
                * Returns a boolean determining if the control should not be destroyed.
                * @preserve (Part of the public API)
                */
                abstract getKeepAlive(): boolean;
                /**
                 * Sets __keepAlive
                 * @param value
                 */
                abstract __setKeepAlive(value: boolean): void;
                /**
                 * Sets __keepAlive
                 * @param value
                 */
                abstract __getKeepAlive(): boolean;
                /**
                * Returns a boolean determining if the control is a container control.
                * @preserve (Part of the public API)
                */
                abstract getIsContainerControl(): boolean;
                /**
                * Parent control or null if there is (till now?) no parent control.
                * @preserve (Part of the public API)
                */
                abstract getParent(): TcHmi.Controls.System.baseTcHmiControl | null;
                /**
                * Sets __parent
                * @param value
                */
                abstract __setParent(value: TcHmi.Controls.System.baseTcHmiControl | null): void;
                /**
                 * Adds a child to a control if this is a container control.
                 * @param control
                 * @param pos
                 */
                abstract __addChild(control: TcHmi.Controls.System.baseTcHmiControl, pos?: number | null): void;
                /**
                 * Remove a child from a control if this is a container control.
                 * @param control
                 */
                abstract __removeChild(control: TcHmi.Controls.System.baseTcHmiControl): void;
                /**
                 * Returns the Row index of the Control inside a TcHmiGrid Container.
                 * @preserve (Part of the public API)
                 */
                abstract getGridRowIndex(): number | undefined;
                /**
                 * Sets a new GridRow index
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setGridRowIndex(valueNew: number | null): void;
                /**
                 * Returns the Column index of the Control inside a TcHmiGrid Container.
                 * @preserve (Part of the public API)
                 */
                abstract getGridColumnIndex(): number | undefined;
                /**
                 * Sets a new GridColumn index
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setGridColumnIndex(valueNew: number | null): void;
                /**
                * Returns the configured defaultInternalValue of the control property
                * @param propertyName
                * @template T Type of the default value
                * @preserve (Part of the public API)
                */
                protected abstract getAttributeDefaultValueInternal<T = any>(propertyName: string): T | null;
                /**
                 * Is raised before control attribute setters are called to allow initialization based on current attribute values.
                 * @preserve (Part of the public API)
                 */
                abstract __previnit(): void;
                /**
                * Is raised after control attribute setters have been called to allow initialization based on current attribute values.
                * @preserve (Part of the public API)
                */
                abstract __init(): void;
                /**
                * Is called of control is attached to the dom.
                * @preserve (Part of the public API)
                */
                abstract __attach(): void;
                /**
                * Is called if control is detached from the dom.
                * @preserve (Part of the public API)
                */
                abstract __detach(): void;
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                * @preserve (Part of the public API)
                */
                abstract destroy(): void;
                /**
                 * AccessConfig
                 * @preserve (Part of the public API)
                 */
                abstract getAccessConfig(): AccessControl[];
                /**
                 * Sets the new AccessConfig
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setAccessConfig(valueNew: AccessControl[] | null): void;
                /**
                * Processes the current AccessConfig attribute value.
                * @preserve (Part of the public API)
                */
                abstract __processAccessConfig(): void;
                /**
                * Sets the value of the trigger attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                abstract setTrigger(valueNew: TcHmi.System.Trigger[] | null): void;
                /**
                * Returns the current trigger value.
                * @preserve (Part of the public API)
                */
                abstract getTrigger(): TcHmi.System.Trigger[] | null | undefined;
                /**
                 * Returns the mapping of virtual rights to real rights
                 * @preserve (Part of the public API)
                 */
                abstract getVirtualControlRightMappings(): VirtualControlRightMapping[];
                /**
                 * Sets the new VirtualControlRightMapping
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setVirtualControlRightMappings(valueNew: VirtualControlRightMapping[] | null): void;
                /**
                * Returns the effective value of isEnabled based on own and parent isEnabled variable.
                * @preserve (Part of the public API)
                */
                abstract getIsEnabled(): boolean | undefined;
                /**
                 * Sets the isEnabled attribute and calls the associated process function (processIsEnabled).
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setIsEnabled(valueNew: boolean | null): void;
                /**
                * Processes and publish the current isEnabled attribute value and of its children.
                */
                abstract __processIsEnabled(): void;
                /**
                 * List of classes of the control.
                 * @preserve (Part of the public API)
                 */
                abstract getClassNames(): string[] | undefined;
                /**
                 * Defines the classes the control is part of.
                 * @param valueNew
                 */
                abstract setClassNames(valueNew: string[] | null): void;
                abstract __injectRenderedDimensions(layoutData: TcHmi.System.ControlManager.ControlLayoutData): void;
                /**
                * Returns the current width of the Control.
                * @preserve (Part of the public API)
                */
                abstract getWidth(): number | null | undefined;
                /**
                 * Width processor
                 * @param callerControl
                 */
                abstract __processWidth(callerControl?: baseTcHmiControl): void;
                /**
                * Returns the current width unit of the Control.
                * @preserve (Part of the public API)
                */
                abstract getWidthUnit(): DimensionUnit | undefined;
                /**
                * Returns the current width mode of the control.
                * @preserve (Part of the public API)
                */
                abstract getWidthMode(): SizeMode | SizeModeWithContent | undefined;
                /**
                * Returns if inner dimension depends on child controls.
                * @preserve (Part of the public API)
                */
                abstract innerWidthDependsOnChilds(): boolean;
                /**
                * Updates the inner dimension depending on child controls.
                * @preserve (Part of the public API)
                */
                abstract updateInnerWidthDependingOnChilds(): void;
                /**
                * Returns the current height of the Control.
                * @preserve (Part of the public API)
                */
                abstract getHeight(): number | null | undefined;
                /**
                 * Processing of Height
                 * @param callerControl
                 */
                abstract __processHeight(callerControl?: baseTcHmiControl): void;
                /**
                * Returns the current height mode of the control.
                * @preserve (Part of the public API)
                */
                abstract getHeightMode(): SizeMode | SizeModeWithContent | undefined;
                /**
                * Returns if inner dimension depends on child controls.
                * @preserve (Part of the public API)
                */
                abstract innerHeightDependsOnChilds(): boolean;
                /**
                * Updates the inner dimension depending on child controls.
                * @preserve (Part of the public API)
                */
                abstract updateInnerHeightDependingOnChilds(): void;
                /**
                * Returns the current height unit of the Control.
                * @preserve (Part of the public API)
                */
                abstract getHeightUnit(): DimensionUnit | undefined;
                /**
                * Returns the current top coordinate of the Control.
                * @preserve (Part of the public API)
                */
                abstract getTop(): number | null | undefined;
                /**
                * Returns the current top coordinate unit of the Control.
                * @preserve (Part of the public API)
                */
                abstract getTopUnit(): DimensionUnit | undefined;
                /**
                * Returns the current left coordinate of the Control.
                * @preserve (Part of the public API)
                */
                abstract getLeft(): number | null | undefined;
                /**
                * Returns the current left coordinate unit of the Control.
                * @preserve (Part of the public API)
                */
                abstract getLeftUnit(): DimensionUnit | undefined;
                /**
                * Returns the current bottom coordinate of the Control.
                * @preserve (Part of the public API)
                */
                abstract getBottom(): number | null | undefined;
                /**
                * Returns the current bottom coordinate unit of the Control.
                * @preserve (Part of the public API)
                */
                abstract getBottomUnit(): DimensionUnit | undefined;
                /**
                * Returns the current right coordinate of the Control.
                * @preserve (Part of the public API)
                */
                abstract getRight(): number | null | undefined;
                /**
                * Returns the current right coordinate unit of the Control.
                * @preserve (Part of the public API)
                */
                abstract getRightUnit(): DimensionUnit | undefined;
                /**
                * Returns the current minwidth value.
                * @preserve (Part of the public API)
                */
                abstract getMinWidth(): number | null | undefined;
                /**
                * Returns the current minwidth unit.
                * @preserve (Part of the public API)
                */
                abstract getMinWidthUnit(): DimensionUnit | undefined;
                /**
                * Returns the current minheight value.
                * @preserve (Part of the public API)
                */
                abstract getMinHeight(): number | null | undefined;
                /**
                * Returns the current maxwidth value.
                * @preserve (Part of the public API)
                */
                abstract getMaxWidth(): number | null | undefined;
                /**
                * Returns the current maxwidth unit.
                * @preserve (Part of the public API)
                */
                abstract getMaxWidthUnit(): DimensionUnit | undefined;
                /**
                * Returns the current maxheight value.
                * @preserve (Part of the public API)
                */
                abstract getMaxHeight(): number | null | undefined;
                /**
                * Returns the current maxheight unit.
                * @preserve (Part of the public API)
                */
                abstract getMaxHeightUnit(): DimensionUnit | undefined;
                /**
                * Returns the current rendered left value in pixel.
                * @preserve (Part of the public API)
                */
                abstract getRenderedLeft(): number | null;
                /**
                * Returns the current rendered top value in pixel.
                * @preserve (Part of the public API)
                */
                abstract getRenderedTop(): number | null;
                /**
                * Returns the current rendered right value in pixel.
                * @preserve (Part of the public API)
                */
                abstract getRenderedRight(): number | null;
                /**
                * Returns the current rendered bottom value in pixel.
                * @preserve (Part of the public API)
                */
                abstract getRenderedBottom(): number | null;
                /**
                * Returns the current rendered width value in pixel.
                * @preserve (Part of the public API)
                */
                abstract getRenderedWidth(): number | null;
                /**
                * Returns the current rendered height value in pixel.
                * @preserve (Part of the public API)
                */
                abstract getRenderedHeight(): number | null;
                /**
                * Sets the value of the width attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                abstract setWidth(valueNew: number | null): void;
                /**
                 * Sets the unit of the width attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setWidthUnit(valueNew: DimensionUnit | null): void;
                /**
                 * Sets the value of the width mode attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setWidthMode(valueNew: SizeMode | null): void;
                /**
                * Sets the value of the height attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                abstract setHeight(valueNew: number | null): void;
                /**
                 * Sets the value of the height mode attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setHeightMode(valueNew: SizeMode | null): void;
                /**
                 * Sets the unit of the height attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setHeightUnit(valueNew: DimensionUnit | null): void;
                /**
                 * Returns the calculated width in pixel if self defined (not percent based).
                 * max-width overrides width, but min-width overrides max-width.
                 */
                abstract __getContentWidth(): number | null;
                /**
                 * Returns the calculated height in pixel if self defined (not percent based).
                 * max-height overrides height, but min-height overrides max-height.
                 */
                abstract __getContentHeight(): number | null;
                /**
                * Sets the value of the top attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                abstract setTop(valueNew: number | null): void;
                /**
                 * Sets the unit of the top attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setTopUnit(valueNew: DimensionUnit | null): void;
                /**
                * Sets the value of the left attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                abstract setLeft(valueNew: number | null): void;
                /**
                 * Sets the unit of the left attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setLeftUnit(valueNew: DimensionUnit | null): void;
                /**
                 * Sets the value of the bottom attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBottom(valueNew: number | null): void;
                /**
                 * Sets the unit of the bottom attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBottomUnit(valueNew: DimensionUnit | null): void;
                /**
                * Sets the value of the right attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                abstract setRight(valueNew: number | null): void;
                /**
                 * Sets the unit of the right attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setRightUnit(valueNew: DimensionUnit | null): void;
                /**
                 * Sets the value of the minwidth attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setMinWidth(valueNew: number | null): void;
                /**
                * Sets the unit of the minwidth attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                abstract setMinWidthUnit(valueNew: DimensionUnit | null): void;
                /**
                 * Sets the value of the minheight attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setMinHeight(valueNew: number | null): void;
                /**
                * Returns the current minheight unit.
                * @preserve (Part of the public API)
                */
                abstract getMinHeightUnit(): DimensionUnit | undefined;
                /**
                 * Sets the unit of the minheight attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setMinHeightUnit(valueNew: DimensionUnit | null): void;
                /**
                 * Sets the value of the maxwidth attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setMaxWidth(valueNew: number | null): void;
                /**
                 * Sets the unit of the maxwidth attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setMaxWidthUnit(valueNew: DimensionUnit | null): void;
                /**
                * Sets the value of the maxheight attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                abstract setMaxHeight(valueNew: number | null): void;
                /**
                * Sets the unit of the maxheight attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                abstract setMaxHeightUnit(valueNew: DimensionUnit | null): void;
                /**
                * Returns the current zindex value.
                * @preserve (Part of the public API)
                */
                abstract getZindex(): number | null | undefined;
                /**
                 * Sets the value of the zindex attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setZindex(valueNew: number | null): void;
                /**
                * Returns the current opacity value.
                * Sets the value of the zindex attribute.
                * @preserve (Part of the public API)
                */
                abstract getOpacity(): number | null | undefined;
                /**
                 * Sets the value of the opacity attribute. The value must be between 0 (0%) and 1 (100%).
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setOpacity(valueNew: number | null): void;
                /**
                * Returns the current visibility value.
                * @preserve (Part of the public API)
                */
                abstract getVisibility(): Visibility | undefined;
                /**
                * Sets the value of the visibility attribute.
                * @param valueNew The new visibility value.
                * @preserve (Part of the public API)
                */
                abstract setVisibility(valueNew: Visibility | null): void;
                /**
                * Returns the current transform value.
                * @preserve (Part of the public API)
                */
                abstract getTransform(): Transform[] | null | undefined;
                /**
                 * Sets the value of the transform attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setTransform(valueNew: Transform[] | null): void;
                /**
                * Returns the current background value.
                * @preserve (Part of the public API)
                */
                abstract getBackgroundColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
                 * Sets the background value and calls the associated process function (processBackground).
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBackgroundColor(valueNew: Color | null): void;
                /**
                * Returns the current value of the member variable backgroundImage.
                * @preserve (Part of the public API)
                */
                abstract getBackgroundImage(): string | null | undefined;
                /**
                 * Sets the value of the member variable "backgroundImage" if the new value is not equal to the current value.
                 * and calls the associated process function (processBackgroundImage) after that.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBackgroundImage(valueNew: string | null): void;
                /**
                * Returns the current value of the member variable backgroundImagePadding.
                * @preserve (Part of the public API)
                */
                abstract getBackgroundImagePadding(): FourSidedCss | null | undefined;
                /**
                 * Sets the value of the member variable "backgroundImagePadding" if the new value is not equal to the current value
                 * and calls the associated process function (processBackgroundImagePadding) after that.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBackgroundImagePadding(valueNew: FourSidedCss | null): void;
                /**
                * Returns the current value of the member variable backgroundImageWidth.
                * @preserve (Part of the public API)
                */
                abstract getBackgroundImageWidth(): number | null | undefined;
                /**
                 * Sets the value of the member variable "backgroundImageWidth" if the new value is not equal to the current value.
                 * and calls the associated process function (processBackgroundImageWidth) after that.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBackgroundImageWidth(valueNew: number | null): void;
                /**
                * Returns the current value of the member variable backgroundImageWidthUnit.
                * @preserve (Part of the public API)
                */
                abstract getBackgroundImageWidthUnit(): DimensionUnit | undefined;
                /**
                 * Sets the value of the member variable "backgroundImageWidthUnit" if the new value is not equal to the current value.
                 * and calls the associated process function (processBackgroundImageWidthUnit) after that.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBackgroundImageWidthUnit(valueNew: DimensionUnit | null): void;
                /**
                * Returns the current value of the member variable backgroundImageHeight.
                * @preserve (Part of the public API)
                */
                abstract getBackgroundImageHeight(): number | null | undefined;
                /**
                 * Sets the value of the member variable "backgroundImageHeight" if the new value is not equal to the current value.
                 * and calls the associated process function (processBackgroundImageHeight) after that.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBackgroundImageHeight(valueNew: number | null): void;
                /**
                * Returns the current value of the member variable backgroundImageHeightUnit.
                * @preserve (Part of the public API)
                */
                abstract getBackgroundImageHeightUnit(): DimensionUnit | undefined;
                /**
                 * Sets the value of the member variable "backgroundImageHeightUnit" if the new value is not equal to the current value.
                 * and calls the associated process function (processBackgroundImageHeightUnit) after that.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBackgroundImageHeightUnit(valueNew: DimensionUnit | null): void;
                /**
                * Returns the current value of horizontalBackgroundImageAligment.
                * @preserve (Part of the public API)
                */
                abstract getBackgroundImageHorizontalAlignment(): HorizontalAlignment | undefined;
                /**
                 * Sets the backgroundImageHorizontalAlignment value and calls the associated process function (processBackgroundImageHorizontalAlignment).
                 * @preserve (Part of the public API)
                 */
                abstract setBackgroundImageHorizontalAlignment(valueNew: TcHmi.HorizontalAlignment | null): void;
                /**
                * Returns the current value of backgroundImageVerticalAlignment.
                * @preserve (Part of the public API)
                */
                abstract getBackgroundImageVerticalAlignment(): VerticalAlignment | undefined;
                /**
                 * Sets the backgroundImageVerticalAlignment value and calls the associated process function (processBackgroundImageVerticalAlignment).
                 * Possible Values: "Left", "Top", "Center"
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBackgroundImageVerticalAlignment(valueNew: TcHmi.VerticalAlignment | null): void;
                /**
                * Returns the current border-color value.
                * @preserve (Part of the public API)
                */
                abstract getBorderColor(): Color | null | undefined;
                /**
                 * Sets the border-color attribute value and calls the associated process function (processBorderColor).
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBorderColor(valueNew: Color | null): void;
                /**
                * Returns the current border-width value.
                * @preserve (Part of the public API)
                */
                abstract getBorderWidth(): BorderWidth | null | undefined;
                /**
                 * Sets the border-width attribute value and calls the associated process function (processBorderWidth).
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBorderWidth(valueNew: BorderWidth | null): void;
                /**
                * Returns the current border-radius value.
                * @preserve (Part of the public API)
                */
                abstract getBorderRadius(): BorderRadius | null | undefined;
                /**
                 * Sets the border-radius attribute value and calls the associated process function (processBorderRadius).
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBorderRadius(valueNew: BorderRadius | null): void;
                /**
                 * Internal reference to the attribute "data-tchmi-border-type".
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBorderStyle(valueNew: BorderStyle | null): void;
                /**
                * Returns the current border-style value.
                * @preserve (Part of the public API)
                */
                abstract getBorderStyle(): BorderStyle | null | undefined;
                /**
                * Sets the internal reference to the attribute "data-tchmi-box-shadow".
                * @preserve (Part of the public API)
                */
                abstract setBoxShadow(valueNew: BoxShadow[] | null): void;
                /**
                * Returns the current box-shadow value.
                * @preserve (Part of the public API)
                */
                abstract getBoxShadow(): BoxShadow[] | null | undefined;
                /**
                * Returns the current value of tooltip.
                * @preserve (Part of the public API)
                */
                abstract getTooltip(): string | null | undefined;
                /**
                 * Sets the tooltip attribute and calls the associated process function (processTooltip).
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setTooltip(valueNew: string | null): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        class AccessManager {
            /**
             */
            constructor();
            /**
             * Get current user config
             */
            getCurrentUserConfig(): Server.userConfigOnServer;
            /**
             * Avoids reload on next logout.
             * @param value
             */
            enableReload(value: boolean): void;
            /**
             * Unsubscribe from server symbols required for user related access handling.
             */
            unsubscribe(callback?: ((this: void, data: TcHmi.IResultObject) => void)): void;
            /**
             * Subscribe to server symbols required for user related access handling.
             */
            subscribe(callback?: ((this: void, data: TcHmi.IResultObject) => void)): void;
            /**
             * Checks if an right is allowed for the current user on this control or its parents
             * Rules for granting access:
             *      - Designer Mode Master => true
             *      - Server Auth is not restricted (IsAuthRequired == false in Server) => TRUE
             *      - Server Auth is not known right now => null
             *      - Server Auth loading error => false
             *      - On this control: 1 Group  has  ALLOW => TRUE
             *      - On this control: 0 Groups have ALLOW, but 1 Group has DENY => FALSE
             *      - On this control: 0 Groups have ALLOW, 0 Groups have DENY => Ask Parent
             *      - use control default of the bottom most control with this right. TcHmi.Controls.System.TcHmiView has operate/observe set to TRUE
             *      - control has no parent (detached control) => null
             * @param control Control to check
             * @param requestedAccessright name of the access right
             * @returns true/false or null if the state is not known right now
             */
            checkAccess(control: Readonly<Controls.System.baseTcHmiControl>, requestedAccessright: string): boolean | null;
        }
    }
}
declare module TcHmi.System {
    /**
    */
    class AnimationProvider {
        constructor();
        createAnimationController(animation: Animation, statusChangeCallback: (status: Animation.Status) => void): AnimationController;
    }
    interface AnimationController {
        isValid: () => boolean;
        run: () => void;
        pause: () => void;
        skip: () => void;
        reset: (callback?: () => void) => void;
        cleanup: () => void;
    }
}
declare module TcHmi.System {
    class Binding {
        constructor(expression: string, propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl);
        /**
        * Destroy the Binding
        */
        destroy(): void;
        getExpression(): string | null;
        getSymbol(): Symbol | null;
        getPropertyName(): string;
        getControl(): TcHmi.Controls.System.baseTcHmiControl;
    }
    module Binding {
        enum State {
            Invalid = 0,
            Initializing = 5,
            Resuming = 7,
            Ready = 10,
            Suspended = 15,
            Destroyed = 20
        }
    }
}
declare module TcHmi.System {
    /**
    */
    class BindingManager {
        constructor();
        /**
        * @param propertyName
         * @param fnThis
         */
        getBinding(propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl): Binding;
        /**
        * @param control
         */
        getBindingsByControl(control: TcHmi.Controls.System.baseTcHmiControl): Map<string, Binding> | undefined;
        /**
         * Creates a binding between a symbol and a control attribute setter.
         * @param expression
         * @param propertyName
         * @param control
         * @throws Throws an exception if the binding is not valid
         */
        createBinding(expression: string, propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl): Binding;
        /**
         * Removes a binding between a symbol and a control attribute setter.
         * @param propertyName
         * @param control
         * @param bResetSetter
         */
        removeBinding(propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl, bResetSetter?: boolean): void;
    }
}
declare module TcHmi {
    module System {
        class ControlManager {
            constructor();
            /** Resolves UserControl attribute meta data. */
            resolveUcAttributes: () => void;
            /**
            * Will raise a detach for the control even if it's still part of the dom.
            * Caller has to grant that control will be removed from dom.
            */
            forceDetach(ctrl: TcHmi.Controls.System.baseTcHmiControl | undefined): void;
            /**
                Checks dimension and position changes for a set of controls or all
                @returns a list of all delayed controls for the user events
            */
            checkControlGeometry(options?: {
                geos?: TcHmi.System.ControlManager.ControlGeoData | Map<string, TcHmi.System.ControlManager.ControlGeoData> | Set<TcHmi.System.ControlManager.ControlGeoData>;
                delayUserEvents?: boolean;
                /** Refresh check even when not dirty */
                force?: boolean;
            }): {
                skippedResizedEventList: Controls.System.baseTcHmiControl[];
                skippedMovedEventList: Controls.System.baseTcHmiControl[];
            };
            /**
              Checks dimension and position changes for a set of controls or all
              @returns a list of all delayed controls for the user events
            */
            checkControlGeometryByControl(control: TcHmi.Controls.System.baseTcHmiControl): void;
            /** All current controls as a Map with its name as the map key */
            getControlsCache(): Map<string, TcHmi.Controls.System.baseTcHmiControl>;
            /**
             * Sets the a value of a property
             * If the value is null it will set the default value to the property and locks it with a watcher which will keep it on theme change.
             * @param control
             * @param propertyName
             * @param valueNew new value or null if lock to Theme
             */
            setControlProperty(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string, valueNew: any | null, dirtyPaths?: string[]): ControlManager.SetControlPropertyErrorDetails;
            /**
             * Sets the a value of a property (Warning: this does not check for readonly flag!)
             * If the value is null it will set the default value to the property and locks it with a watcher which will keep it on theme change.
             * @param control
             * @param attribute
             * @param valueNew new value or null if lock to Theme
             */
            setControlPropertyByAttribute(control: TcHmi.Controls.System.baseTcHmiControl, attribute: ControlAttributeDescription, valueNew: any | null, dirtyPaths?: string[]): ControlManager.SetControlPropertyErrorDetails;
            /** Destruct a control instance */
            destruct(control: TcHmi.Controls.System.baseTcHmiControl): void;
            /**
            * Creates a new control.
            * The new control HTMLElement, available via getElement(), can be attached to the DOM afterwards.
            * @template C defines the type for the control to compile
            */
            compile<C extends TcHmi.Controls.System.baseTcHmiControl>(elem: Element, parent?: TcHmi.Controls.System.baseTcHmiControl | null, options?: {
                pos?: number | null;
                designerIgnore?: boolean;
            }): C | undefined;
            /** Resolve the inheritation of a control description */
            resolveDescriptionInheritation(): void;
            getInheritanceTree(): ControlManager.InheritanceHierarchyEntry;
            /**
            * Get description by type
            * @param type
            */
            getDescription(type: string | undefined | null): ControlDescription | null;
            /**
             * Get a list of all types which the inheritance of the requested control type defines
             * @param type
             */
            getDescriptionTypes(type: string | undefined | null): string[];
            isRegisteredDescriptionType(type: string | undefined | null): boolean;
            /** Get Description path from DescriptionCacheEntry
              */
            getDescriptionPath(type: string | undefined | null): string | null;
            getDescriptionAttributes(type: string | undefined | null): ControlAttributeDescription[] | null;
            getDescriptionAccess(type: string | undefined | null): ControlAccessDescription[] | null;
            /**
            Get control attribute section from Description.json by name (will be lowercased for comparison)
            */
            getDescriptionAttributeByName(type: string | null | undefined, name: string | null | undefined): ControlAttributeDescription | null;
            /**
            Get control attribute section from Description.json by PropertyName
            */
            getDescriptionAttributeByPropertyName(type: string | undefined | null, propertyName: string | undefined): ControlAttributeDescription | null;
            /**
            Get UserControl attribute section from Description.json by PropertyName
            */
            getUserControlConfigAttributeByPropertyName(ucConfigUrl: string, propertyName: string): ControlAttributeDescription | null;
            /**
            Get control attribute section from Description.json by SetterName
            */
            getDescriptionAttributeByPropertySetterName(type: string | undefined | null, propertySetterName: string): ControlAttributeDescription | null;
            /**
            Get control attribute section from Description.json by SetterName
            */
            getDescriptionAttributeByPropertyGetterName(type: string | undefined | null, propertyGetterName: string): ControlAttributeDescription | null;
            /**
             * Gets attribute description by name of property and does not determine between description and usercontrol attributes.
             * @param type
             * @param propertyName
             */
            getAttributeByPropertyName(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string | undefined): ControlAttributeDescription | null;
            /**
             * Gets attribute description by name of property and does not determine between description and usercontrol attributes.
             * @param type
             * @param propertyName
             */
            getAttributeTypeByPropertyName(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string): ControlAttributeType;
            /**
             * Gets attribute description by name of property setter and does not determine between description and usercontrol attributes.
             * @param type
             * @param propertyName
             */
            getAttributeByPropertySetterName(control: TcHmi.Controls.System.baseTcHmiControl, propertySetterName: string): ControlAttributeDescription | null;
            /**
             * Gets attribute description by name of property getter and does not determine between description and usercontrol attributes.
             * @param type
             * @param propertyName
             */
            getAttributeByPropertyGetterName(control: TcHmi.Controls.System.baseTcHmiControl, propertyGetterName: string): ControlAttributeDescription | null;
            /**
            * Gets inherited access of a control
            * @param type control type name
            * @param name name of the control right to fetch
            */
            getDescriptionAccessByName(type: string | undefined | null, name: string | null): ControlAccessDescription | null;
        }
        module ControlManager {
            interface SetControlPropertyErrorDetails extends IErrorDetails {
                /** The exception the setter throwed */
                exception?: Error;
            }
            /** Geometric data of a control */
            interface ControlGeoData {
                ctrl: TcHmi.Controls.System.baseTcHmiControl;
                layoutData: ControlLayoutData;
                isDirty: boolean;
            }
            /** A move can be Local and Global or if the container was moved Global only */
            const enum ControlMoveType {
                None = 0,
                Local = 1,
                Global = 2
            }
            /** Layout data of a control */
            interface ControlLayoutData {
                /** Control was moved (at least global). Can be resetted by the control itself. */
                moved: boolean;
                /** Control was moved compared to its parent. Can be resetted by the control itself. */
                movedLocal: boolean;
                /** Control was resized. Can be resetted by the control itself. */
                resized: boolean;
                bounds: {
                    /** The number of pixels of the control as resulted from its getBoundingClientRect. */
                    topGlobal: number | null;
                    /** The number of pixels of the control as resulted from its getBoundingClientRect. */
                    leftGlobal: number | null;
                    /** The number of pixels that the upper left corner of the control is offset to the left within the parent control. */
                    offsetTop: number | null;
                    /** The number of pixels that the upper left corner of the control is offset to the top within the parent control. */
                    offsetLeft: number | null;
                    /** The number of pixels of the control as resulted from its getBoundingClientRect. */
                    width: number | null;
                    /** The number of pixels of the control as resulted from its getBoundingClientRect. */
                    height: number | null;
                };
                /** Cached result of getComputedStyle of the control main element. */
                computedStyles: Pick<CSSStyleDeclaration, 'left' | 'top' | 'right' | 'bottom' | 'width' | 'height'>;
            }
            interface InheritanceHierarchyEntry {
                controlType: string;
                children: InheritanceHierarchyEntry[];
            }
            interface InitialElementCacheEntry {
                controlId: string;
                /** outerHtml from first compile of this control (runtime data) */
                outerHtml: string;
                /** html attributes from first compile. key: lowercase attribute names (beware: html is lowercase only) (no runtime data!) */
                htmlAttributeMap: Map<string, {
                    type: 'static' | 'injected' | 'binding' | 'delayed';
                    attribute?: ControlAttribute;
                }>;
                /** Inner attribute values from first compile. Lowercase attribute names (beware: html is lowercase only) (runtime data) */
                injectedAttributeMap: Map<string, any>;
                /** parsed html attributes from first compile. (no runtime data!) */
                attributeList: IResolveAttributesResultObject;
            }
        }
    }
}
declare module TcHmi {
    module System {
        class DialogManager {
            /**
             */
            constructor();
            /**
             * Change visibility of dialog and set its DialogType when showing
             * @param dialogOwner Caller Id to prevent overwriting forreign dialogs. null overrides this check
             * @param bVisibility
             * @param dialogType
             * @returns returns false if the dialog could not be opened
             */
            showDialog(dialogOwner: string | null, bVisibility: boolean, dialogType?: TcHmi.DialogManager.DialogType, options?: TcHmi.DialogManager.DialogOptions): boolean;
            /**
             * Changes the output content of the Dialog to a new value
             * The default Severity is Info
            * @param dialogOwner Caller Id to prevent overwriting forreign dialogs. null overrides this check
             * @param newHtmlContent
             * @param severity
             */
            updateText(dialogOwner: string | null, newHtmlContent: string, severity?: DialogManager.DialogSeverity): boolean;
            /**
             * Returns the current dialog owner.
             * null if we have no current owner (probably no open dialog).
             */
            getDialogOwner(): string | null;
        }
    }
}
declare module TcHmi {
    module System {
        class SplashScreen {
            /**
             */
            constructor();
            isVisible(): boolean;
            updateVersionInfo(message: string): void;
            updateStageInfo(message: string): void;
            updateStageProgress(progress: number): void;
            show(): void;
            hide(): void;
        }
    }
}
declare module TcHmi {
    module System {
        class Filter {
            private constructor();
            /**
             * Converts a filter to an expression tree.
             * @param data The filter to convert
             */
            static parse(data: TcHmi.Filter | null, schema?: TcHmi.JsonSchema | null): Filter;
            /**
             * Determine whether the given candidate matches this filter.
             * @param candidate The candidate to test.
             */
            test(candidate: any, key?: string | number): boolean;
        }
        module Filter {
            interface Comparison extends TcHmi.Comparison {
                originalValue?: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        class Functions {
            /**
            * Simple validation check.
            * @param descr
            */
            static checkDescription(descr: IFunctionDescription): void;
        }
    }
}
/**
 * Used to execute eval in isolated scope.
 */
declare function gIsolatedEval_TcHmi_System_FunctionExpression_Results(s: string, resSE: any[], resFCE: any[]): any;
/**
 * Used to execute eval in isolated scope.
 */
declare function gIsolatedEval_TcHmi_System_FunctionExpression(s: string): any;
declare module TcHmi {
    module System {
        class FunctionExpression {
            /**
            * @param functionExpression The expression... Example: 1 + 1 , Example: MyFunction(%s%PLC1.MAIN.nTest%/s%) + 1 + 1
             * @param enableWatchMode Defines if symbols within the FunctionExpression should be resolved based on a symbol watch or by explicit calls to each symbol which is the default.
             */
            constructor(functionExpression: string, enableWatchMode?: boolean);
            execute(ctx?: Context): any;
            watch(callback: (this: void, data: TcHmi.Symbol.IWatchResultObject) => void): DestroyFunction;
            /**
             * Resolved the processed wait mode of the function expression.
             * Even if a called function provides a synchronous wait mode it may be processed asynchronous if asynchronous working symbols
             * are added as parameter because parameters are resolved before the underlying function is called.
             */
            private __resolveProcessedWaitMode;
            /**
            * Returns true if the function expression will be processed asynchronous and false if not.
            * Even if a called function provides a synchronous wait mode it may be processed asynchronous if asynchronous working symbols
            * are added as parameter because parameters are resolved before the underlying function is called.
            */
            isProcessedAsync(): boolean;
            destroy(): void;
        }
    }
}
declare module TcHmi {
    module System {
        class StyleManager {
            constructor();
            /**
             * Writes all styles that are currently cached for the specified control into the head.
             * @param controlNames The target controls.
             */
            writeStylesFromCache(ctrls: readonly TcHmi.Controls.System.baseTcHmiControl[]): void;
            /**
             * Removes all styles for the specified control from the head and saves them in the cache.
             * @param controlName The target control name.
             */
            removeStylesFromDom(ctrls: readonly TcHmi.Controls.System.baseTcHmiControl[]): void;
            /**
             * Gets the existing style overwrites for a control.
             * @param controlName The name of the targeted Control.
             */
            getExistingStyleOverwrites(controlName: string): any;
            /**
             * Returns all styles set on a given element inside the specified control.
             * @param controlName   The target control name.
             * @param selector      The selector under which to find the style. Has to exactly match the selector that was used to set the style.
             */
            getStyle(controlName: string, selector: string): Dictionary<string[]> | undefined;
            /**
             * Returns an array of values for a given CSS property on a given element inside the specified control.
             * @param controlName   The target control name.
             * @param selector      The selector under which to find the style. Has to exactly match the selector that was used to set the style.
             * @param propertyName  The CSS property to get. If this parameter is not provided, all styles will be returned.
             */
            getStyle(controlName: string, selector: string, propertyName: string): string[] | undefined;
            /**
             * Writes the styles to a style element inside the control.
             * @param controlName   The name of the target control.
             * @param styles        The styles to write.
             */
            writeStyles(controlName: string, styles: any): void;
            /**
             * Replaces "%id%" in all selector parts with a given prefix. If "%id%" could not be found in a selector part the prefix is added to the start of the selector."#" is automatically prepended to the prefix.
             * @param selector  The selector to expand.
             * @param prefix    The prefix to add to the selector.
             */
            expandSelector(selector: string, prefix: string): string;
            /**
             * Theme Processor for generic styles.
             * @param controlName   The name of the target control.
             * @param selector      The target CSS selector. %id% is automatically replaced by the control name. Pass an empty string to target the control root.
             * @param property      The CSS property to process.
             * @param value         The value for the CSS property.
             */
            processGenericStyle(controlName: string, selector: string, property: string, value: string | null): void;
            /**
             * Theme Processor for generic styles.
             * @param controlName   The name of the target control.
             * @param selector      The target CSS selector. %id% is automatically replaced by the control name. Pass an empty string to target the control root.
             * @param property      The CSS property to process.
             * @param value         An array of values for the CSS property. This is useful for providing vendor-prefixed values to ensure compatibility.
             */
            processGenericStyle(controlName: string, selector: string, property: string, value: string[] | null): void;
            /**
             * Theme Processor for generic styles.
             * @param controlName   The name of the target control.
             * @param selector      The target CSS selector. %id% is automatically replaced by the control name. Pass an empty string to target the control root.
             * @param styles        A dictionary of property-value pairs. Can be used to set multiple styles simultaneously. The values can be strings or arrays of strings to provide vendor-prefixed values.
             */
            processGenericStyle(controlName: string, selector: string, styles: Dictionary<string | string[] | null> | null): void;
            processGenericStyle(controlName: string, selector: string, property: string | Dictionary<string | string[] | null> | null, value: string | string[] | null): void;
            /**
             * Theme Processor for background.
             * @param element   The jQuery element.
             * @param valueNew  The new value for the background.
             */
            processBackground(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: Partial<Background> | null | undefined): void;
            /**
             * Theme processor for SVG fill color.
             * @param element   The jQuery element.
             * @param valueNew      The new fill color.
             */
            processFillColor(element: JQuery<SVGElement | HTMLElement> | readonly SVGElement[] | NodeListOf<SVGElement> | HTMLCollectionOf<SVGElement> | SVGElement | undefined, valueNew: Color | null | undefined): void;
            /**
             * Theme processor for SVG stroke color.
             * @param element The jQuery element.
             * @param valueNew      The new stroke color.
             */
            processStrokeColor(element: JQuery<SVGElement | HTMLElement> | readonly SVGElement[] | NodeListOf<SVGElement> | HTMLCollectionOf<SVGElement> | SVGElement | undefined, valueNew: SolidColor | null | undefined): void;
            /**
             * Theme processor for text color.
             * @param element The jQuery element.
             * @param valueNew      The new text color.
             */
            processTextColor(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: SolidColor | null | undefined): void;
            /**
             * Theme processor for border color.
             * @param element The jQuery element.
             * @param valueNew      The new border color.
             */
            processBorderColor(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: Color | null | undefined): void;
            /**
             * Theme processor for border width.
             * @param element The jQuery element.
             * @param valueNew      The new border widths.
             */
            processBorderWidth(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: Partial<BorderWidth> | null | undefined): void;
            /**
             * Theme processor for border radius.
             * @param element The jQuery element.
             * @param valueNew      The new border radii.
             */
            processBorderRadius(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: BorderRadius | null | undefined): void;
            /**
             * Theme processor for border style.
             * @param element The jQuery element.
             * @param valueNew      The new border styles.
             */
            processBorderStyle(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: BorderStyle | null | undefined): void;
            /**
             * Theme processor for box shadow.
             * @param element The jQuery element.
             * @param valueNew      The new border styles.
             */
            processBoxShadow(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: readonly BoxShadow[] | null | undefined): void;
            /**
             * Theme processor for font family.
             * @param element The jQuery element.
             * @param valueNew      The new font family.
             */
            processFontFamily(element: JQuery | readonly Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: FontFamily | null | undefined): void;
            /**
             * Theme processor for font size.
             * @param element The jQuery element.
             * @param valueNew      The new font size.
             * @param unitNew       The new font size unit. Defaults to "px".
             */
            processFontSize(element: JQuery | readonly Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: number | null | undefined, unitNew: FontSizeUnit): void;
            /**
             * Theme processor for font style.
             * @param element The jQuery element.
             * @param valueNew      The new font style. Allowed values are "Normal", "Italic" and "Oblique".
             */
            processFontStyle(element: JQuery | readonly Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: FontStyle | undefined | null): void;
            /**
             * Theme processor for font weight.
             * @param element The jQuery element.
             * @param valueNew      The new font weight. Allowed values are "Normal" and "Bold".
             */
            processFontWeight(element: JQuery | readonly Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: FontWeight | undefined | null): void;
            /**
             * Theme processor for visibility.
             * Visibility also effects pointer events, i.e. a hidden element will not receive mouse click events.
             * Hidden still uses space in fluid calculations, collapsed is ignored there.
             * @param element The jQuery element.
             * @param valueNew      The new visibility. Allowed values are "Visible", "Collapsed" and "Hidden". Hidden still uses space in fluid calculations, collapsed is ignored there.
             */
            processVisibility(element: JQuery | readonly Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: Visibility | null | undefined): void;
            /**
             * Theme processor for horizontal alignment. This aligns the content of the target element, not the target element itself.
             * @param element The jQuery element.
             * @param valueNew      The new horizontal alignment. Allowed values are "Left", "Center" and "Right".
             */
            processContentHorizontalAlignment(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.HorizontalAlignment | null | undefined): void;
            /**
             * Theme processor for vertical alignment. This aligns the content of the target element, not the target element itself.
             * @param element The jQuery element.
             * @param valueNew      The new vertical alignment. Allowed values are "Top", "Center" and "Bottom".
             */
            processContentVerticalAlignment(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.VerticalAlignment | null | undefined): void;
            /**
             * Theme processor for content padding.
             * @param element The jQuery element.
             * @param valueNew      The new content padding.
             */
            processContentPadding(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: Partial<FourSidedCss> | null | undefined): void;
            /**
             * Theme processor for transforms.
             * @param element The jQuery element.
             * @param valueNew      The new transform value or an array of transform values.
             * @param order         If this parameter is passed, the transforms in valueNew will replace the transform at the specified place, instead of replacing all transforms. Note that origin and perspective are exempt from this.
             */
            processTransform(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: Transform | Transform[] | null | undefined, order?: number): void;
        }
    }
}
declare module TcHmi {
    module System {
        module Type {
            class SharedCache {
                static Raw: Map<"project" | "general" | "server" | "framework", JsonSchema>;
                static Resolved: Map<string, JsonSchema>;
            }
            class TypeManager {
                constructor();
                /**
                * Watch definitions on server.
                */
                doWatchSchemaDefinitions(callback?: null | ((this: TypeManager, data: IResultObject) => void)): void;
                doForceSchemaDefinitions(callback?: null | ((this: TypeManager, data: IResultObject) => void)): void;
                /**
                 * Returns the schema related to typeName.
                 * @param id
                 */
                getSchema(id: string): JsonSchema | null;
                /**
                 * Returns the schema related to typeName.
                 * @param id
                 */
                getSchemaEx(id: string): TypeManager.ISchemaResultObject;
            }
            module TypeManager {
                interface ISchemaResultObject extends TcHmi.IResultObject {
                    schema?: TcHmi.JsonSchema;
                }
                interface ISchemaPartResultObject extends TcHmi.IResultObject {
                    part?: object;
                }
            }
            class Schema {
                /**
                 * Resolves all $ref within a schema.
                 * @param schema
                 */
                static resolveRefs(schema: TcHmi.JsonSchema, filename?: 'general' | 'server' | 'framework' | 'project' | null): undefined | TcHmi.JsonSchema;
                /**
                 * Resolves the default value of a schema.
                 * @param schema
                 */
                static resolveDefault(schema: TcHmi.JsonSchema): any;
            }
            module Schema {
                class Helper {
                }
            }
        }
    }
}
declare module TcHmi.System {
    enum SymbolState {
        Invalid = 0,
        Ready = 10,
        Destroyed = 20
    }
    /**
     * @template ST Type of the value in the symbol.
     */
    class Symbol<ST = any> {
        /**
         * Throws SyntaxError if called with no valid symbol expression
         * @param expression
         * @throws SyntaxError if called with no valid symbol expression
         */
        constructor(expression: string | null);
        static resolveServerSymbolSchemaCache(callback: (this: void, data: TcHmi.IResultObject) => void): void;
        getExpression(): TcHmi.SymbolExpression | null;
        getState(): SymbolState;
        isDestroyed(): boolean;
        isReady(): boolean;
        destroy(): void;
        /**
         * Resolves the schema of the current symbol.
         * @param callback
         */
        resolveSchema(callback?: ((this: void, data: TcHmi.Symbol.ISchemaResultObject) => void)): void;
        /**
         * Resolves a dictionary of attributes from the underlying schema.
         * @param callback
         */
        resolveAttributes(callback?: ((this: void, data: TcHmi.Symbol.IAttributesResultObject) => void)): void;
        /**
         * Resolves an attribute by name from the underlying schema.
         * @param name
         * @param callback
         */
        resolveAttribute(name: string, callback?: ((this: void, data: TcHmi.Symbol.IAttributeResultObject) => void)): void;
        /**
         * Reads a value of the symbol and raises a callback with a copy of it
         * @param callback
         * @template T Type of the read value. Falls back to type of the symbol.
         */
        read<T = ST>(callback: (this: Symbol, data: TcHmi.Symbol.IReadResultObject<T> | TcHmi.Symbol.IServerReadResultObject<T>) => void): DestroyFunction | null;
        /**
         * @param value
         * @param callback
         * @template T Type of the write value. Falls back to type of the symbol.
         */
        write<T = ST>(value: T, callback?: (this: Symbol, data: TcHmi.Symbol.IWriteResultObject<T> | TcHmi.Symbol.IServerWriteResultObject<T>) => void): DestroyFunction;
        /**
        * @param value
         * @param dirtyPaths
         * @param callback
         * @template T Type of the write value. Falls back to type of the symbol.
         */
        writeEx<T = ST>(value: T, dirtyPaths: string[] | null, callback?: (this: Symbol, data: TcHmi.Symbol.IWriteResultObject<T> | TcHmi.Symbol.IServerWriteResultObject<T>) => void): DestroyFunction | null;
        /**
         * @param callback
         * @template T Type of the value to watch. Falls back to type of the symbol.
         */
        watch<T = ST>(callback: (this: Symbol, data: TcHmi.Symbol.IWatchResultObject<T> | TcHmi.Symbol.IServerWatchResultObject<T>) => void): DestroyFunction | null;
        static isServerSymbol(checkSymbol: Symbol): boolean;
        static isInternalSymbol(checkSymbol: Symbol): boolean;
        static isLocalizedTextSymbol(checkSymbol: Symbol): boolean;
        static isPartialParamSymbol(checkSymbol: Symbol): boolean;
        static isTemplateParamSymbol(checkSymbol: Symbol): boolean;
        static isFunctionSymbol(checkSymbol: Symbol): boolean;
        static isControlSymbol(checkSymbol: Symbol): boolean;
        /**
         * Returns true if the symbol can be read without any error. Otherwise it will reutrn false.
         * @param callback
         */
        exists(callback?: (this: Symbol, data: TcHmi.Symbol.IExistsResultObject) => void): void;
    }
}
declare module TcHmi {
    module System {
        /**
         */
        class SymbolExpressionParser {
            /**
             */
            constructor(text: string);
            /**
             * Loads the text to parse.
             * @param text
             */
            loadText(text: string): void;
            /**
             * @param type
             */
            resolveExpressionsBySymbolType(type: SymbolType): TcHmi.SymbolExpression[];
            resolveExpressions(): TcHmi.SymbolExpression[];
        }
    }
}
declare module TcHmi {
    module System {
        /**
        * @enum ScaleMode
        */
        enum ScaleMode {
            None = 0,
            ScaleToFit = 1,
            ScaleToFitWidth = 2,
            ScaleToFitHeight = 3,
            ScaleToFill = 4
        }
        /**
        */
        class ViewManager {
            /**
             */
            constructor();
            /**
             * Sets the scalemode.
             * @param scaleMode
             */
            setScaleMode(scaleModeStr: ScaleModeString): void;
            /**
             * Returns the current view control object
             */
            getView(): Controls.System.baseTcHmiControl;
            /**
             * Loads a new view into the dom.
             * @param url
             * @param callback
             */
            loadView(url: string, callback?: null | ((this: ViewManager, data: TcHmi.IResultObject) => void)): void;
            /**
             * The callback will have the ViewManager as this
             * @param view
             * @param callback
             */
            loadViewObject(view: TcHmi.Controls.System.baseTcHmiControl, callback?: null | ((this: ViewManager, data: IResultObject) => void)): void;
        }
    }
}
declare module TcHmi {
    module System {
        class TcSpeechManager {
            /** @constructor */
            constructor();
            /**
             * (Re-)Starts the rtc connection to tcspeech.
             * @param options This option can override all setting from tchmiconfig.json and more
             * @param callback Gets notification when opening connection failed.
             */
            openConnection(options?: TcHmi.TcSpeech.ConnectionOptions & Partial<TcHmi.TcSpeech.BaseConfig>, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): void;
            /**
             * Closes an active connection to TcSpeech.
             * @param options Can target a specific remote tcspeech engine
             * @param callback A callback to get feedback
             */
            closeConnection: (options?: {
                remoteSocketId?: number;
            }, callback?: (this: void, data: TcHmi.IResultObject) => void) => void;
            /**
             * Sets the volume (between 0 and 1) of speech output on this device.
             * @param newValue new volume. Will be capped between 0 and 1.
             */
            setVolume(newValue: number): void;
            /**
             * Add a new used trigger. This is transported to the speech engine after 50 ms when no other registration postpones it.
             * @param eventname new event name.
             */
            __addUsedSpeechTrigger(eventname: string): void;
            /**
             * Remove a used trigger. This is transported to the speech engine after 50 ms when no other registration postpones it.
             * @param eventname the event name to remove.
             */
            __removeUsedSpeechTrigger(eventname: string): void;
            /**
             * Starting output of text. The connection must be open at this point and we have to have enableSpeaker.
             * The callback will get a guid which can be used to stop or request status of the speech synthesis.
             * @param text Text to be synthesized
             * @param options
             * @param callback The callback will get a guid which can be used to stop or request status of the speech synthesis.
             */
            speechSynthesisStart(text: string, options?: {
                priority?: TcHmi.TcSpeech.AudioEntityPriority;
            }, callback?: null | ((this: void, data: TcHmi.TcSpeech.SpeechSynthesisResult) => void)): void;
            /**
             * Request the state (queued, playing, stopped) of a given speech synthesis call.
             * @param guid guid for the request. Can be fetched from the callback of speechSynthesisStart
             * @param callback The callback will get the state of the speech synthesis
            */
            speechSynthesisGetStatus(guid: string, callback?: null | ((this: void, data: TcHmi.TcSpeech.SpeechSynthesisResult) => void)): void;
            /**
             * Stops a given speech synthesis call.
             * @param guid guid for the request. Can be fetched from the callback of speechSynthesisStart
             * @param callback The callback will get the state of the speech synthesis
             * @preserve (Part of the public API)
             */
            speechSynthesisStop(guid: string, callback?: null | ((this: void, data: TcHmi.TcSpeech.SpeechSynthesisResult) => void)): void;
        }
        namespace TcSpeechManager {
            const enum ClientState {
                INITIAL_VALUE = 0,
                IDLE = 1,
                INITIALIZE_CONNECTION = 2,
                REGISTER_CLIENT_CONFIG = 3,
                REQUEST_AUDIO_STREAM = 4,
                REQUEST_RTC_OFFER = 5,
                FIND_REGISTERED_SPEECH_SERVICES = 6,
                SEND_OFFER = 7,
                CONNECTED = 8,
                DISCONNECTED = 9,
                GOT_ERROR = 10
            }
            const enum DomainWatchState {
                NO = 0,
                WAITING = 102,
                WATCHACTIVE = 200
            }
            interface IVersionedSpeechCommand {
                /** Socket id of the peer starting the signaling connection. */
                SocketId: number;
                /** Socket id of the remote peer. */
                RemoteSocketId: number;
                SpeechApiVersion: 1;
            }
            /** Register call for the Speech Registry */
            interface IClientRegisterEntry extends IVersionedSpeechCommand {
                RegisterDate: string;
                /** This client can provide an audio source. */
                AudioSource: boolean;
                /** This client can consume an audio stream. */
                AudioSink: boolean;
                /** This client can start an WebRTC call. */
                CanOffer: boolean;
                /** This client can answer an WebRTC call. */
                CanAnswer: boolean;
                /** Version string of the client. */
                Version: string;
                PotentialLocales: string[];
                State: 'available' | 'busy' | 'offline';
            }
            interface ISignalingCommand {
                /** SDP for the peer or empty if deactivated */
                SDP: string;
            }
            /** WebRTC Offer data of the Client. */
            interface IOfferCommand extends ISignalingCommand {
                /** Type of the command */
                Type: 'Offer';
            }
            /** WebRTC Answer data of the Speech Service. */
            interface IAnswerCommand extends ISignalingCommand {
                /** Type of the command */
                Type: 'Answer';
            }
            interface IIceCandidates {
                /** Type of the command */
                Type: 'IceCandidates';
                /** List of candidates */
                Candidates: RTCIceCandidateInit[];
            }
            interface IClientConfig extends IVersionedSpeechCommand {
                CurrentCommands: string[];
                CurrentLocales: string[];
            }
            interface IBaseCommand {
                /** Type of the command */
                Type: string;
            }
            interface IDetectedCommand extends IBaseCommand {
                /** Type of the command */
                Type: 'DetectedCommand';
                /** Recognition Tag of the active SRGS file which was detected. */
                DetectedCommand: string;
                /**
                 * A relative measure of the certainty of correct recognition of a phrase.
                 * The value is from 0.0 to 1.0, for low to high confidence, respectively. */
                Confidence: number;
                /** Parameter which was detected by speech recognition. */
                Parameter: unknown;
            }
            interface ILogOnClientCommand extends IBaseCommand {
                /** Type of the command */
                Type: 'LogOnClientCommand';
                /** Number as enum: None = 0, Error = 1, Warning = 2, Info = 3, Debug = 4 */
                Severity: TcHmi.System.LOG_LEVEL;
                /** The messages to display in TcHmi.Log. Multiple values will be displayed in one log entry in a nice way: ['Got this', {'Hello': 'World'}] */
                MessageParts: any[];
            }
            interface ISpeechSynthesisStart extends IBaseCommand {
                Type: 'SpeechSynthesisStart';
                /** Text to generate audio from. */
                Text: string;
                /** Priority of the text. */
                Priority: TcHmi.TcSpeech.AudioEntityPriority;
                /** GUID for this request. */
                Guid: string;
            }
            interface ISpeechSynthesisStop extends IBaseCommand {
                Type: 'SpeechSynthesisStop';
                /** GUID for this request. */
                Guid: string;
            }
            interface ISpeechSynthesisGetStatus extends IBaseCommand {
                Type: 'SpeechSynthesisGetStatus';
                /** GUID for this request. */
                Guid: string;
            }
            /** Answer to SpeechSynthesisGetStatus */
            interface ISpeechSynthesisStatus extends IBaseCommand {
                Type: 'SpeechSynthesisStatus';
                /** GUID for this request. */
                Guid: string;
                State: 'Queued' | 'Playing' | 'Stopped';
            }
            interface IPayloadContainer<T = unknown> extends IVersionedSpeechCommand {
                /** Command itself */
                Command: T;
            }
        }
    }
}
declare module TcHmi {
    module System {
        /**
         Handles the implicit values of a control
         Values of a control are defined:

         initial only: Value explicit in the HTML
         defined in the project: Value implicit defined for a control class
         defined in the project: Value implicit defined for a theme for a control type

         defined by the control: Value implicit defined for a theme for a control type
         defined by the control: Value implicit defined from the defaultValueInternal of a control type (with resolved inheritance)
         */
        class ThemeManager {
            constructor();
            /**
             * Gets the active Theme
             * @param newValue
             */
            getTheme(): string;
            /**
             * Sets a new Theme
             * @param valueNew
             */
            setTheme(valueNew: string, processTheme: boolean): Errors;
            /**
            * @param controlDescr
             */
            registerControlThemeFiles(controlDescr: ControlDescription): void;
            /**
             *  Fill missing values in all themes files when the inheritance parent has it set
            * Note: no harm is done with multiple calls to this file
             * */
            private __resolveControlInheritance;
            /**
             * Disables inactive theme
             * Load and activate control and project theme
             */
            processActiveTheme(callback?: ((this: void, data: TcHmi.IResultObject) => void), options?: {
                forceReloadFile?: string;
            }): void;
            /**
            Retrigger usercontrols
            */
            retriggerUserControls: () => void;
            /**
             * Parses every source of implicit properties and returns this or null
             * Can have different value after the event onThemeDataChanged.
             * The order of resources are
             * 1) control class
             * 2) theme definition of the control type in project
             * 3) theme definition in control
             * 4) defaultValueInternal in Description.json of the control
             * @param control
             * @param propertyName
             * @template T Type of the default value.
             */
            getDefaultPropertyValue<T>(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string): TcHmi.Theme.Resource<T>;
            /**
             * Gets a themed resource.
             * Parses every source of properties and returns this or null
             * Can have different value after the event onThemeDataChanged.
             * The order of resources are
             * 1) control class
             * 2) theme definition of the control type in project
             * 3) theme definition in control

             * @param control Control which needs the resource
             * @param resourceName name of the resource
             * @returns returns the resource or null
             * @template T Type of the value.
             */
            getThemeResource<T>(control: TcHmi.Controls.System.baseTcHmiControl, resourceName: string): TcHmi.Theme.Resource<T>;
            /**
            * @param control
             * @param propertyName
             */
            watchAttributeDefaults(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string): void;
            /**
             * Start watcher to remove a theme lock on manual variable set
             * @param controlId
             */
            startAttributeSetterWatcher(control: TcHmi.Controls.System.baseTcHmiControl): void;
            /**
            * @param controlName
             * @param propertyName
             */
            unwatchAttributeDefaults(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string): void;
        }
    }
}
declare module TcHmi {
    module System {
        /**
        * Provides a layer to show elements above the normal visualization
        */
        class TopMostLayer {
            /**
             */
            constructor();
            /**
             * Appends the elements to the top layer above the normal visualization
             * A reference to the element should be kept to be able to call remove() function
             * The parent element will be a div with style="width:<browserwindowwidth>;height:<browserwindowheight>;"
             * Your element could have style="min-width:50%;min-height:50%;"
             * @param origin control which requests this or null if from codebehind
             * @param element jQuery Collection with exactly one element which should be moved to TopMostLayer
             * @param options Optional options
             * @returns boolean success of the add
             */
            add(origin: TcHmi.Controls.System.baseTcHmiControl | null, element: JQuery | undefined | null, options?: TcHmi.TopMostLayer.IOptions | TcHmi.TopMostLayer.IOptionsEx): boolean;
            /**
             * Removes the element from the top layer and returns it for later use by the caller
             * If the element is not inside the TopMostLayer it will be returned without change.
             * @param origin control which requests this or null if from codebehind
             * @param element jQuery Collection with the element which should be removed from TopMostLayer
             * @returns jQuery Collection
             */
            remove(origin: TcHmi.Controls.System.baseTcHmiControl | null, element: JQuery, cancel: boolean): JQuery;
        }
        namespace TopMostLayer {
            /** all options and css backup of an element */
            interface ICtrlMetaData extends TcHmi.TopMostLayer.IOptions {
                styleBackup?: Partial<CSSStyleDeclaration>;
                /** control which requests this or null if from codebehind */
                origin: TcHmi.Controls.System.baseTcHmiControl | null;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmd {
                frameworkType?: 'LiveView' | 'Designer';
                /**
                * Is set to define which framework engineering instances (designer-views and live-views) should get the response command.
                * Should only matter if the command produces a response command.
                * -----------------------------------------------------------------------------------------------------------------------
                * Valid Values:
                * -----------------------------------------------------------------------------------------------------------------------
                * null      - Do not send response
                * ''        - Do not send response
                * '*'       - Broadcast resoibseresponse
                * '[GUID]'  - Send response only to framework instance with instance id === [GUID]
                * ------------------------------------------------------------------------------------------------------------------------
                */
                replyTo?: string | null;
            }
            type AllSyncCmd = SyncCmdConfirmation | SyncCmdControlDoubleClick | SyncCmdControlLocked | SyncCmdCopyMoveControls | SyncCmdCreateControls | SyncCmdCurrentPartialContent | SyncCmdCurrentPartialEditorLockState | SyncCmdCurrentPartialHighlightContainerState | SyncCmdDesignerSettings | SyncCmdDomVisibility | SyncCmdDropControlPosition | SyncCmdHierarchyMoveControls | SyncCmdInjectResources | SyncCmdInjectedResources | SyncCmdKeyStates | SyncCmdLogoutClient | SyncCmdMessages | SyncCmdPartialEditorLocked | SyncCmdPartialEditorUnlocked | SyncCmdRegisterSyncView | SyncCmdRemoveControls | SyncCmdRequestCurrentPartialContent | SyncCmdRequestDropControlPosition | SyncCmdRequestRequiredViewPortSize | SyncCmdScrollPositionChanged | SyncCmdSelectedControls | SyncCmdServerAddress | SyncCmdSyncControls | SyncCmdTcHmiConfigChanged | SyncCmdTransactionBegin | SyncCmdTransactionCommit | SyncCmdZoom;
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdInjectResources extends SyncCmd {
                name: 'InjectResources';
                injectInfo: IPackageInfo[];
                piggyBack: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdInjectedResources extends SyncCmd {
                name: 'InjectedResources';
                targetPartial: string;
                piggyBack: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdConfirmation extends SyncCmd {
                name: 'Confirmation';
                confirmId: string;
                errorCode: TcHmi.Errors;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdControlDoubleClick extends SyncCmd {
                name: 'ControlDoubleClick';
                targetPartial: string;
                targetControl: SyncCmdControlDoubleClickTargetControl;
            }
            interface SyncCmdControlDoubleClickTargetControl {
                id: string;
                type: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdControlLocked extends SyncCmd {
                name: 'ControlLocked';
                targetPartial: string;
                targetControl: string;
                locked: boolean;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdCreateControls extends SyncCmd {
                name: 'CreateControls';
                targetPartial: string;
                controls: SyncCmdCreateControlsControl[];
            }
            interface SyncCmdCreateControlsControl {
                targetParentControl: string;
                controlId: string;
                controlHtml: string;
                domPosition: number;
                select: boolean;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdCopyMoveControls extends SyncCmd {
                name: 'CopyMoveControls';
                targetPartial: string;
                targetParentControl: string;
                deltaPosition: Nullable<Position>;
                controls: string[];
                attributes?: {
                    name: string;
                    value: any;
                }[];
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdHierarchyMoveControls extends SyncCmd {
                name: 'HierarchyMoveControls';
                targetPartial: string;
                targetParentControl: string;
                deltaPosition: Nullable<Position>;
                controls: string[];
                attributes?: {
                    name: string;
                    value: any;
                }[];
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdCurrentPartialContent extends SyncCmd {
                name: 'CurrentPartialContent';
                targetPartial: string;
                /** base64 encoded string of the partial HTML */
                content: string;
                /** base64 encoded string of a SyncCmdCurrentPartialContentPiggyBack */
                piggyBack: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdCurrentPartialContentPiggyBack {
                requestId: number;
                requestInstance: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdCurrentPartialEditorLockState extends SyncCmd {
                name: 'CurrentPartialEditorLockState';
                targetPartial: string;
                locked: boolean;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdCurrentPartialHighlightContainerState extends SyncCmd {
                name: 'CurrentPartialHighlightContainerState';
                targetPartial: string;
                state: boolean;
                replyTo: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdDesignerSettings extends SyncCmd {
                name: 'DesignerSettings';
                targetPartial: string;
                replyTo: string;
                settings: TcHmi.System.Engineering.DesignerModeManager.Settings;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdDomVisibility extends SyncCmd {
                name: 'DomVisibility';
                targetPartial: string;
                targetControl: string;
                visibility: boolean;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdDropControlPosition extends SyncCmd {
                name: 'DropControlPosition';
                targetPartial: string;
                controls: SyncCmdDropControlPositionControl[];
            }
            interface SyncCmdDropControlPositionControl {
                piggyBack: string;
                targetParentControl: string;
                type: string;
                position: {
                    centerX: number;
                    centerY: number;
                };
                attributes?: {
                    name: string;
                    value: any;
                }[];
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface KeyState {
                down: boolean;
                up: boolean;
            }
            interface KeyStates {
                leftAlt: KeyState;
                leftCtrl: KeyState;
                leftShift: KeyState;
                rightAlt: KeyState;
                rightCtrl: KeyState;
                rightShift: KeyState;
            }
            interface SyncCmdKeyStates extends SyncCmd {
                name: 'KeyStates';
                targetPartial: string;
                states: KeyStates;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdLogoutClient extends SyncCmd {
                name: 'LogoutClient';
                /** The client will only logout if it is logged in and targetInstance is empty/not set or its own id. */
                targetInstance?: string | null;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdMessages extends SyncCmd {
                name: 'Messages';
                messages: Message[];
            }
            interface Message {
                identifier: string;
            }
            interface AddMessage extends Message {
                append: boolean;
                type: TcHmi.Engineering.ErrorPane.MessageType;
                targetPartial: string;
                targetInstance: string;
                content: string;
                line: number | null;
                position: number | null;
                unixTimestamp: number;
            }
            interface RemoveMessage extends Message {
                remove: boolean;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdPartialEditorLocked extends SyncCmd {
                name: 'PartialEditorLocked';
                targetPartial: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdPartialEditorUnlocked extends SyncCmd {
                name: 'PartialEditorUnlocked';
                targetPartial: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdRegisterSyncView extends SyncCmd {
                name: 'RegisterSyncView';
                targetPartial: string;
                targetInstance: string;
                syncViewLevel: 'Slave' | 'Master';
                sessionId: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdRemoveControls extends SyncCmd {
                name: 'RemoveControls';
                targetPartial: string;
                controls: string[];
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdRequestCurrentPartialContent extends SyncCmd {
                name: 'RequestCurrentPartialContent';
                targetPartial: string;
                piggyBack: string | null;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdRequestDropControlPosition extends SyncCmd {
                name: 'RequestDropControlPosition';
                targetPartial: string;
                piggyBack: any;
                /** Type of the new control. */
                type: string;
                /** drop coordinate relative to the viewport not the document */
                position: Position;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdRequestRequiredViewPortSize extends SyncCmd {
                name: 'RequestRequiredViewPortSize';
                targetPartial: string;
                width: number;
                height: number;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdScrollPositionChanged extends SyncCmd {
                name: 'ScrollPositionChanged';
                targetPartial: string;
                position: Position;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdSelectedControls extends SyncCmd {
                name: 'SelectedControls';
                targetPartial: string;
                controls: string[];
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdServerAddress extends SyncCmd {
                name: 'ServerAddress';
                host: string;
                port: number;
                protocol: 'http:' | 'https:';
                targetPartial: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdSyncControls extends SyncCmd {
                name: 'SyncControls';
                targetPartial: string;
                controls: SyncCmdSyncControlsControl[];
            }
            interface SyncCmdSyncControlsControl {
                targetControl: string;
                descriptionPath: string | null;
                controlHtml: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdTcHmiConfigChanged extends SyncCmd {
                name: 'TcHmiConfigChanged';
                configPath: string;
                type: 'TcHmiConfig' | 'UserControlConfig' | 'Localization' | 'ThemeConfig';
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdTransactionBegin extends SyncCmd {
                name: 'TransactionBegin';
                transactionName: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdTransactionCommit extends SyncCmd {
                name: 'TransactionCommit';
                transactionName: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdZoom extends SyncCmd {
                name: 'Zoom';
                targetPartial: string;
                factor: number;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            abstract class SyncCmdToFramework {
                constructor(cmd: SyncCmd);
                sendSynchronousConfirmation: boolean;
                abstract run(): void;
                confirmRequest(confirmId: string): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkRemoveControls extends SyncCmdToFramework {
                constructor(cmd: SyncCmdRemoveControls);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkConfirmation extends SyncCmdToFramework {
                constructor(cmd: SyncCmdConfirmation);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkControlLocked extends SyncCmdToFramework {
                constructor(cmd: SyncCmdControlLocked);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkCreateControls extends SyncCmdToFramework {
                constructor(cmd: SyncCmdCreateControls);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkCurrentPartialContent extends SyncCmdToFramework {
                constructor(cmd: SyncCmdCurrentPartialContent);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkCurrentPartialEditorLockState extends SyncCmdToFramework {
                constructor(cmd: SyncCmdCurrentPartialEditorLockState);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkCurrentPartialHighlightContainerState extends SyncCmdToFramework {
                constructor(cmd: SyncCmdCurrentPartialHighlightContainerState);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkDesignerSettings extends SyncCmdToFramework {
                constructor(cmd: SyncCmdDesignerSettings);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkDomVisibility extends SyncCmdToFramework {
                constructor(cmd: SyncCmdDomVisibility);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkInjectResources extends SyncCmdToFramework {
                constructor(cmd: SyncCmdInjectResources);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkKeyStates extends SyncCmdToFramework {
                constructor(cmd: SyncCmdKeyStates);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkLogoutClient extends SyncCmdToFramework {
                constructor(cmd: SyncCmdLogoutClient);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkPartialEditorLocked extends SyncCmdToFramework {
                constructor(cmd: SyncCmdPartialEditorLocked);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkPartialEditorUnlocked extends SyncCmdToFramework {
                constructor(cmd: SyncCmdPartialEditorUnlocked);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkRequestDropControlPosition extends SyncCmdToFramework {
                constructor(cmd: SyncCmdRequestDropControlPosition);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkScrollPositionChanged extends SyncCmdToFramework {
                constructor(cmd: SyncCmdScrollPositionChanged);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkSelectedControls extends SyncCmdToFramework {
                constructor(cmd: SyncCmdSelectedControls);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkServerAddress extends SyncCmdToFramework {
                constructor(cmd: SyncCmdServerAddress);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkSyncControls extends SyncCmdToFramework {
                constructor(cmd: SyncCmdSyncControls);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkTcHmiConfigChanged extends SyncCmdToFramework {
                constructor(cmd: SyncCmdTcHmiConfigChanged);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkTransactionBegin extends SyncCmdToFramework {
                constructor(cmd: SyncCmdTransactionBegin);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkTransactionCommit extends SyncCmdToFramework {
                constructor(cmd: SyncCmdTransactionCommit);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkZoom extends SyncCmdToFramework {
                constructor(cmd: SyncCmdZoom);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            abstract class SyncCmdToCreator {
                constructor(cmd: AllSyncCmd);
                send(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToCreatorConfirmation extends SyncCmdToCreator {
                constructor(cmd: SyncCmdConfirmation);
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToCreatorControlDoubleClick extends SyncCmdToCreator {
                constructor(cmd: SyncCmdControlDoubleClick);
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToCreatorCopyMoveControls extends SyncCmdToCreator {
                constructor(cmd: SyncCmdCopyMoveControls);
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToCreatorHierarchyMoveControls extends SyncCmdToCreator {
                constructor(cmd: SyncCmdHierarchyMoveControls);
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToCreatorMessages extends SyncCmdToCreator {
                constructor(cmd: SyncCmdMessages);
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToCreatorDropControlPosition extends SyncCmdToCreator {
                constructor(cmd: SyncCmdDropControlPosition);
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToCreatorRegisterSyncView extends SyncCmdToCreator {
                constructor(cmd: SyncCmdRegisterSyncView);
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToCreatorRequestCurrentPartialContent extends SyncCmdToCreator {
                constructor(cmd: SyncCmdRequestCurrentPartialContent);
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToCreatorRequestRequiredViewPortSize extends SyncCmdToCreator {
                constructor(cmd: SyncCmdRequestRequiredViewPortSize);
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToCreatorSyncControls extends SyncCmdToCreator {
                constructor(cmd: SyncCmdSyncControls);
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToCreatorSelectedControls extends SyncCmdToCreator {
                constructor(cmd: SyncCmdSelectedControls);
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToCreatorInjectedResources extends SyncCmdToCreator {
                constructor(cmd: SyncCmdInjectedResources);
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class ErrorPane {
                constructor();
                add(name: string, content: string, type: TcHmi.Engineering.ErrorPane.MessageType): void;
                remove(name: string): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            /** left and top */
            interface Position {
                left: number;
                top: number;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class DesignerModeComManager {
                /** Throws on error */
                constructor();
                /** */
                static RECONNECT_INTERVAL: number;
                open(callback?: (this: void, data: DesignerModeComManager.IConnectionResultObject) => void): void;
                /**
                 * Sends a command to the engineering.
                 * @param cmd
                 */
                sendCommand(cmd: AllSyncCmd): void;
            }
            module DesignerModeComManager {
                interface IConnectionResultObject extends TcHmi.IResultObject {
                    url?: string;
                }
            }
            interface SyncMessage {
                /**
                * The id of the current message. Has to be a unique GUID.
                */
                id: string;
                /**
                * JavaScript timestamp
                */
                timestamp: number;
                /**
                * Command object
                */
                command: AllSyncCmd;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class DesignerModeManager {
                constructor();
                /** Handles all control meta data in designer master and slave. */
                readonly metaDataManager: DesignerModeControlMetaDataManager;
                /** Handles all container highlighting while dragging controls in designer master. Available in MASTER ONLY */
                readonly hierarchyManager: DesignerModeMasterHierarchyManager;
                /** Handles all viewport handling like scrolling, zooming and viewport emulation in designer master. Available in MASTER ONLY */
                readonly rootControlManager: DesignerModeMasterRootControlManager;
                /** Handles all control highlighting in designer master. Available in MASTER ONLY */
                readonly highlightManager: DesignerModeMasterControlHighlightManager;
                /** Handles common interaction properties and methods in designer master. Available in MASTER ONLY */
                readonly syncManager: DesignerModeMasterSyncManager;
                /** Handles common interaction properties and methods in designer master. Available in MASTER ONLY */
                readonly interactionManager: DesignerModeMasterInteractionManager;
                /** Handles control moving in designer master. Available in MASTER ONLY */
                readonly controlMoveManager: DesignerModeMasterControlMoveManager;
                /** Handles drag rect select for easy multiselection in designer master. Available in MASTER ONLY */
                readonly rectSelectManager: DesignerModeMasterRectSelectManager;
                /** Handles control resizing in designer master. Available in MASTER ONLY */
                readonly controlResizeManager: DesignerModeMasterControlResizeManager;
                /** Handles unsaved partial content in designer and live view. */
                readonly partialContentManager: DesignerModePartialContentManager;
                /** Handles on-the-fly injection of package and project resources. */
                readonly resourceInjectionManager: DesignerModeResourceInjectionManager;
                /** Provides symbol data sources for symbols which can't be resolved in designer instances like UserControl parameters and Server symbols. */
                readonly userControlParameterManager: DesignerModeUserControlParameterManager;
                /**
                  * Synchronizes the list of selected controls with the creator.
                  */
                resyncSelectedControls(): void;
                /**
                  * Synchronizes the attributes of changed controls with the creator.
                  */
                resyncControls(): void;
                /**
                * Processes changes of one control inside the Framework
                * @returns true if changes have been processed and false if not!
                */
                syncControl(targetPartial: string, targetControl: string, controlHtml: string | null): boolean;
                /**
                 * Creates new Control in Designer and attach it asyncronous
                 * @param targetPartial
                 * @param targetParentControl Id of the Parent
                 * @param domPos
                 * @param controlHtml HTML Code of the new control
                 * @param callback
                 */
                createControl(targetPartial: string, targetParentControl: string, domPos: number, controlHtml: string, callback?: null | ((this: DesignerModeManager, data: IResultObject) => void)): void;
                /**
                 * Marks a control as selected and enable its highlighting
                 * @param controlId The name of the control to select.
                 * @param [bIgnoreSync=false] If this is true it will not sync to Visual Studio
                 */
                select(controlId: string, bIgnoreSync?: boolean): void;
                /**
                 * Marks a control as not selected and disable its highlighting
                 * @param controlId The name of the control to unselect.
                 * @param [bIgnoreSync=false] If this is true it will not sync to Visual Studio
                 */
                unselect(controlId: string, bIgnoreSync?: boolean): void;
                selectEach(bIgnoreSync: boolean): boolean;
                unselectEach(bIgnoreSync: boolean): boolean;
                /**
                 * Sets the Highlight Container to a specific state (visible or invisible) or toggle the state if called with null
                 * @param newValue
                 */
                setControlLocked(targetControl: string, bLocked: boolean): void;
                /**
                 * Locks the designer or live-view
                 */
                lock(): void;
                /**
                 * Reserved!
                 * Currently no need for unlock... Reload required!
                 */
                unlock(): void;
                isLocked(): boolean;
                getSettings(): DesignerModeManager.Settings;
                updateSettings(valueNew: DesignerModeManager.Settings): void;
            }
            namespace DesignerModeManager {
                interface VisualStudioThemeResources {
                    ChessboardLight: SystemColor | null;
                    ChessboardDark: SystemColor | null;
                }
                interface Settings {
                    theme: VisualStudioThemeResources;
                    /** Global snap feature toggle */
                    enableSnapping: boolean;
                    snapToControls: boolean;
                    snapToInnerContainerSides: boolean;
                    /** --tchmi-designer-control-remote-snap-distance */
                    snapDistanceToControls: number;
                    /** --tchmi-designer-control-untransformed-color */
                    untransformedColor: SystemColor | null;
                    /** --tchmi-designer-control-unselected-color */
                    unSelectedHighlightColor: SystemColor | null;
                    /** --tchmi-designer-control-selected-color */
                    selectionHighlightColor: SystemColor | null;
                    /** --tchmi-designer-control-selected-secondary-color */
                    selectedSecondaryColor: SystemColor | null;
                    /** --tchmi-designer-control-snap-color */
                    snapHighlightColor: SystemColor | null;
                }
                interface SystemColor {
                    r: number;
                    g: number;
                    b: number;
                    a: number;
                }
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            /**
             * Handles all control meta data in designer master and slave.
             */
            class DesignerModeControlMetaDataManager {
                /**
                 * Handles all control meta data in designer master and slave.
                 */
                constructor(designerModeManager: DesignerModeManager);
                /**
                 * Register a control for the ControlMetaCache
                 * @param ctrlMeta
                 */
                register(ctrlMeta: ControlMetaData): void;
                /**
                 * Unregister a control from ControlMetaCache and selectedControlsMetaData
                 * @param tco
                 */
                unregister(tcoId: string): void;
                /**
                  * Returns all ControlMetaData objects
                  */
                getControlMetaData(): Dictionary<ControlMetaData>;
                /**
                  * Returns the ControlMetaData object to an id or null.
                  * If id is null or undefined a list of all ControlMetaDataObjects will be returned instead.
                  * @param id
                  */
                getControlMetaData(id: string): ControlMetaData | null;
                /**
                 * Refresh metadata of all controls
                 */
                refreshControlMetaData(): null;
                /**
                 * Refresh metadata of a control and returns the metadata object
                 * @param idOrControl The id of the control as string or the ControlMetaData object of the control
                 */
                refreshControlMetaData(idOrControl: string | ControlMetaData): null | ControlMetaData;
                /**
                 * Returns ControlMetaData for all controls with changes.
                 */
                getChangedControlsMetaData(): Dictionary<ControlMetaData>;
                resetChangedControlsMetaData(): void;
                getChangedControlsMetaDataHasChanged(): boolean;
                /**
                 * Adds a ControlMetaData object to changed cache
                 */
                addChangedControlsMetaData(ctrlMeta: ControlMetaData): void;
                /**
                 * Returns all selected ControlMetaData objects
                 */
                getSelectedControlsMetaData(): Dictionary<ControlMetaData>;
                resetSelectedControlsMetaDataHasChanged(): void;
                getSelectedControlsMetaDataHasChanged(): boolean;
                /**
                 * Adds a ControlMetaData object to select cache
                 */
                selectControl(ctrlMeta: ControlMetaData): void;
                /**
                 * Removes a ControlMetaData object from select cache
                 */
                unselectControl(ctrlMeta: ControlMetaData): void;
                /** A list of all ids of selected Controls without the partial root */
                getSelectedControlIdsWithChildren(): string[];
            }
            interface ControlMetaData {
                /** Control id */
                id: string;
                /** MetaData for the parent. Can be null if we have no parent control. */
                parent: ControlMetaData | null;
                /** Used for highlighting the original control position without transformations etc. */
                jOriginalPosition: JQuery;
                /** Used for highlighting the current control position, selection, mouseover including transformations etc. */
                jControlPosition: JQuery;
                /** Stack Container for clean Hierarchical z-index handling for Highlight */
                jHierarchyControlposition: JQuery;
                /** Used for resizing the current control including transformations. */
                jAnchorContainer: JQuery;
                /** Stack Container for clean Hierarchical z-index handling for AnchorContainer */
                jHierarchyAnchorContainer: JQuery;
                /** Is this Control selected so it's Property can be manipulated */
                isSelected: boolean;
                /** Old select State. Needed for own double click handling */
                isSelectedPrev: boolean;
                /** The Partial Root is special in some select and drag&drop interactions */
                isPartialRoot: boolean;
                /** Control is hidden in the Creator via Document Outline (creator attribute 'data-tchmi-creator-visibility') */
                domVisibility: boolean;
                /** Control is locked so no dimension change with the mouse is allowed  (creator attribute 'data-tchmi-creator-locked')*/
                locked: boolean;
                /** Control has visibility set to Collapsed */
                controlCollapsed: boolean;
                /** Containter are special */
                isContainerControl: boolean;
                /** TcHmiGrid is special */
                isGridControl: boolean;
                /** MASTER only! Control attribute dimension on interaction start for resize/move handling */
                controlAttributeDimension: TcHmiControlAttributeDimension;
                /** MASTER only! Control css pixel dimension on interaction start for resize/move handling */
                controlCssPixelDimension: TcHmiControlCssPixelDimension;
                /** MASTER only! Control rotation on interaction start for resize handling in degree */
                relativeControlRotation: number;
                /** MASTER only! Control rotation of the Parent on interaction start for resize handling in degree */
                absoluteParentRotation: number;
            }
            /** TcHmi internal read/write ClientRect */
            interface TcHmiClientRect {
                bottom: number;
                height: number;
                left: number;
                right: number;
                top: number;
                width: number;
            }
            interface TcHmiSparseStringClientRect extends Dictionary<string> {
                bottom?: string;
                height?: string;
                left?: string;
                right?: string;
                top?: string;
                width?: string;
            }
            interface TcHmiControlAttributeDimension {
                topValue: number | null;
                topUnit: DimensionUnit;
                leftValue: number | null;
                leftUnit: DimensionUnit;
                widthValue: number | null;
                widthUnit: DimensionUnit;
                widthMode: SizeModeWithContent;
                minWidthValue: number | null;
                minWidthUnit: DimensionUnit;
                maxWidthValue: number | null;
                maxWidthUnit: DimensionUnit;
                rightValue: number | null;
                rightUnit: DimensionUnit;
                heightValue: number | null;
                heightUnit: DimensionUnit;
                minHeightValue: number | null;
                minHeightUnit: DimensionUnit;
                maxHeightValue: number | null;
                maxHeightUnit: DimensionUnit;
                heightMode: SizeModeWithContent;
                bottomValue: number | null;
                bottomUnit: DimensionUnit;
            }
            interface TcHmiControlCssPixelDimension {
                bottom: number | null;
                height: number | null;
                left: number | null;
                right: number | null;
                top: number | null;
                width: number | null;
            }
            /** 'TopLeft' | 'TopCenter' | 'TopRight' | 'CenterRight' | 'BottomRight' | 'BottomCenter' | 'BottomLeft' | 'CenterLeft' */
            type AnchorName = 'TopLeft' | 'TopCenter' | 'TopRight' | 'CenterRight' | 'BottomRight' | 'BottomCenter' | 'BottomLeft' | 'CenterLeft';
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            /**
             * Handles sync in designer master.
             */
            class DesignerModeMasterSyncManager {
                /**
                 * Handles sync in designer master.
                 */
                constructor(designerModeManager: DesignerModeManager);
                beginTransaction(name: string): void;
                commitTransaction(name: string): void;
                transactionActive(): boolean;
                /**
                 * Calculates the new control Attributes and sync to Creator
                 * @param eventName
                 */
                updatePcElementAndSync(eventName: string): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            /**
             * Handles all container highlighting while dragging controls in designer master.
             */
            class DesignerModeMasterHierarchyManager {
                /**
                 * Handles all container highlighting while dragging controls in designer master.
                 */
                constructor(designerModeManager: DesignerModeManager);
                /**
                Is this a control which should have designer support?
                */
                isDesignerModeControl(id: string): boolean;
                /**
                 * Register mouse interaction for container controls
                 * @param ctrlMeta
                 */
                registerContainerControl(ctrlMeta: ControlMetaData): void;
                /**
                 * Register mouse interaction for container elements
                 * @param ctrlMeta
                 */
                registerContainerElement(jElem: JQuery): void;
                /**
                 * Activate drop highlight from a point relative to the whole document
                 * @param position coordinates relative to the whole document
                 * @param targetElem
                 */
                addHighlightDropTarget(position: Position, targetElem: Element): void;
                /**
                 * Remove drop highlight
                 */
                removeHighlightDropTarget(): void;
                /**
                 * Gets the highest container from a point on the whole document
                 * Unwanted targets have to be excluded with css pointer-events:none
                 * @param position coordinates relative to the document
                 */
                getContainerFromPoint(position: Position): {
                    /** tchmicontrol of the target container */
                    tco: Controls.System.baseTcHmiControl;
                    /** jQuery element which makes the mouse interaction. Could be a div for the control or a grid cell */
                    jHighlighter: JQuery<HTMLElement>;
                    mousePosXinTarget: number;
                    mousePosYinTarget: number;
                    /** rowIndex if we are inside a Grid. null if we are not in a grid */
                    rowIndex: number;
                    /** columnIndex if we are inside a Grid. null if we are not in a grid */
                    columnIndex: number;
                };
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            /**
             * Handles all viewport handling like scrolling, zooming and viewport emulation in designer master.
             */
            class DesignerModeMasterRootControlManager {
                /**
                 * Handles all viewport handling like scrolling, zooming and viewport emulation in designer master.
                 */
                constructor(designerModeManager: DesignerModeManager);
                getCreatorZoomFactor(): number;
                getViewPortSimulator(): JQuery<HTMLElement>;
                getViewPortHighlightingSimulator(): JQuery<HTMLElement>;
                /**
                 */
                scroll(p: Position): void;
                /**
                 * Apply the new Zoomfactor to all Controls and interaction container
                 * @param newZoom
                 */
                setCreatorZoom(newZoom: number): void;
                /** Remembers meta object and updates the internal caches */
                setRootControl(tco: TcHmi.Controls.System.baseTcHmiControl, newControlMeta: ControlMetaData): void;
                /**
                 * Updates the bounds of the view
                 * @param tco
                 */
                setCreatorViewPortPosition(tco: TcHmi.Controls.System.baseTcHmiControl | null | undefined): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            /**
             * Handles all control highlighting in designer master.
             */
            class DesignerModeMasterControlHighlightManager {
                /**
                 * Handles all control highlighting in designer master.
                 */
                constructor(designerModeManager: DesignerModeManager);
                /**
                 * Remove all highlight container from DOM
                 * @param ctrlMeta
                 */
                handleControlRemoved(ctrlMeta: ControlMetaData): void;
                /**
                 * In the next Animation Frame adjust all needed highlighters and rebuild the snap control cache
                 */
                requestAsyncHighlighterUpdate(): void;
                /**
                 * Add the control to the list to adjust for the highlighting
                 * @param ctrl
                 */
                requestAsyncHighlighterUpdateForControl(ctrl: TcHmi.Controls.System.baseTcHmiControl): {
                    /** Had we a resize? */
                    resized: boolean;
                    /** This control had a move */
                    moved: boolean;
                    /** This control had row/column changed */
                    rowColumnChanged: boolean;
                };
                /**
                 * Sets the Highlight Container to a specific state (visible or invisible)
                 * @param valueNew
                 */
                setHighlightContainerVisibility(valueNew: boolean): void;
                setCreatorVisibilityAttribute(targetControl: string, bVisibility: boolean): void;
                /**
                  * Processes Control hiding from Creator Document Outline and show/hides control highlighting
                  */
                processDomVisibility(processCtrlMeta?: ControlMetaData): void;
                /**
                * Sets (top|bottom), (left|right), height and width of transformed and untransformed container plus transform-origin, transform on the transformed container to match element, move container to correct gridcell.
                */
                setContainerPositions(ctrlList: Set<TcHmi.Controls.System.baseTcHmiControl> | null | undefined): void;
                /**
                * @param element
                 * @param angle
                 */
                updateGripCursors(ctrlMeta: ControlMetaData): void;
                /**
                 * Set all highlight container to match current highlight state
                 * @param ctrlMeta Metadata of the control and its designer container
                 */
                processHighlightType(ctrlMeta: ControlMetaData): void;
                updateEngineeringStyles(): (e?: EventProvider.Event) => void;
                /**
                * Creates the element which is is used to highlight current position, selection etc.
                */
                createControlPosition(relatedControl: TcHmi.Controls.System.baseTcHmiControl, zindex: number): JQuery;
                createHierarchyControlPosition(relatedControl: TcHmi.Controls.System.baseTcHmiControl, zindex: number): JQuery;
                /**
                * Creates the element which is is used to highlight original position
                */
                createOriginalPosition(relatedControl: TcHmi.Controls.System.baseTcHmiControl, zindex: number): JQuery;
                /**
                * Creates the element which holds the resize anchor
                */
                createAnchorContainer(relatedControl: TcHmi.Controls.System.baseTcHmiControl, zindex: number, locked: boolean): JQuery;
                /**
                * Creates a hierarchical stack  the element which holds the resize anchor
                */
                createHierarchyAnchorContainer(relatedControl: TcHmi.Controls.System.baseTcHmiControl, zindex: number, locked: boolean): JQuery;
                /**
                * Creates/rebuilds row+cell container for all grid rows and cells for proper positioning the other control container
                * and appends it to the HighlightHierarchicalStack container
               * @param gridControl
                * @param ctrlParent
                */
                createGridHighlighter(gridControl: TcHmi.Controls.System.baseTcHmiControl, ctrlMeta: ControlMetaData | null | undefined): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            /**
             * Handles drag rect select for easy multiselection in designer master.
             */
            class DesignerModeMasterRectSelectManager {
                /**
                 * Handles drag rect select for easy multiselection in designer master.
                 */
                constructor(designerModeManager: DesignerModeManager);
                /** true while the select rect is active */
                getRectSelecting(): boolean;
                /** Disallow opening of select rectangle */
                lockRectSelect(): void;
                /** Set states to default and removes all events */
                resetState(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            /**
             * Handles control moving in designer master.
             */
            class DesignerModeMasterControlMoveManager {
                /**
                 * Handles control moving in designer master.
                 */
                constructor(designerModeManager: DesignerModeManager);
                /**
                  * Register mouse interaction for control movement
                  * @param ctrlMeta
                  */
                registerControl(ctrlMeta: ControlMetaData): void;
                /**
                * Returns the active control meta data.
                */
                getActiveControl(): ControlMetaData;
                /**
                * Returns the previously active control meta data.
                */
                getActiveControlPrev(): ControlMetaData;
                /** true while controls are hanging on the mouse on drag */
                getControlMoveActive(): boolean;
                /** Disallow moving a control */
                lockControlMove(): void;
                /** true when the user has moved the mouse after a mousedown (for double click and select on move detection) */
                setMouseMoving(valueNew: boolean): void;
                /** Set states to default and removes all events */
                resetState(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            /**
             * Handles control resizing in designer master.
             */
            class DesignerModeMasterControlResizeManager {
                /**
                 * Handles control resizing in designer master.
                 */
                constructor(designerModeManager: DesignerModeManager);
                /**
                  * Register mouse interaction for control resizing
                  * @param ctrlMeta
                  */
                registerControl(ctrlMeta: ControlMetaData): void;
                /** true while control anchors are hanging on the mouse on resize */
                getControlResizing(): boolean;
                /** Disallow resizing of a control */
                lockControlResize(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            /**
             * Handles common interaction properties and methods in designer master.
             */
            class DesignerModeMasterInteractionManager {
                /**
                 * Handles common interaction properties and methods in designer master.
                 */
                constructor(designerModeManager: DesignerModeManager);
                getAnchorName(): "TopLeft" | "TopCenter" | "TopRight" | "CenterRight" | "BottomRight" | "BottomCenter" | "BottomLeft" | "CenterLeft";
                setAnchorName(newAnchorName: AnchorName | undefined): void;
                /** event.pageXY on interaction start for mouse handling */
                getStartMousePos(): Position;
                /** event.pageXY on interaction start offset for mouse handling on copy move while move was already in progress */
                getStartMousePosCopyMoveOffsetPosition(): Position;
                /** Pixel distance from the mouse to the bounding box of the active control and its size in viewport pixels in the whole document */
                getPositionInsideControl(): TcHmiClientRect;
                setCtrlModifierKeyState(bState: boolean): void;
                setShiftModifierKeyState(bState: boolean): void;
                /**
                 * Clear snap position cache
                 */
                clearControlSnapPositionCache(): void;
                /** Remember event.pageXY on interaction start and optional control dimension for mouse handling */
                handleInteractionStart(event: JQuery.TriggeredEvent, activeControl: ControlMetaData | null): void;
                /** Remember event.pageXY on interaction start offset for copy move activated during move process. */
                handleInteractionStartCopyMoveOffsetPosition(event: JQuery.TriggeredEvent): void;
                /**
                 * Add a single entry to snap position cache
                 * @param ctrlMeta Metadata of the control and its designer container
                 */
                refreshControlSnapPositionCache(ctrlMeta: ControlMetaData): void;
                /**
                 * Rebuild snap position cache
                 * @param ctrlMeta Metadata of the control and its designer container
                 */
                refreshControlSnapPositionCache(): void;
                /**
                 * Correct delta movement with snapping and handle highlighting.
                 * Works on document based coordinates, not viewport
                 * @param ctrlMeta Metadata of the control and its designer container
                 * @param mouseDelta Distance of xy mouse movement since start of drag in controlDimension/normalised/zoom corrected coordinates
                 * @param mousePos mouse coordinates in pageX/viewport/getBoundingRect coordinates
                 * @param snapControls bool to skip search for a snapTo
                 * @returns corrected distance of xy mouse movement since start of drag in controlDimension/normalised/zoom corrected coordinates
                 */
                handleSnapping(ctrlMeta: ControlMetaData, mouseDelta: Position, mousePos: Position, snapControls: boolean, directionLock: 'none' | 'topBottom' | 'leftRight'): Position;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class DesignerModeResourceInjectionManager {
                constructor(designerModeManager: DesignerModeManager);
                injectPackageResources(packages: IPackageInfo[], callback?: (data: TcHmi.IResultObject) => void): void;
                injectProjectResources(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class DesignerModePartialContentManager {
                constructor(designerModeManager: DesignerModeManager);
                requestCurrentPartialContent(partialUrl: string, callback: (this: void, data: DesignerModePartialContentManager.IPartialContentResultObject) => void): DestroyFunction;
                getRequest(requestId: number): DesignerModePartialContentManager.IRequestMetaData | undefined;
            }
            module DesignerModePartialContentManager {
                interface IRequestMetaData {
                    callback: (this: void, data: DesignerModePartialContentManager.IPartialContentResultObject) => void;
                    timeoutTimer: number;
                    destroy?: DestroyFunction;
                }
                interface IPartialContentResultObject extends TcHmi.IResultObject {
                    targetPartial: string;
                    /** HTML markup of the partial content */
                    content: string;
                }
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class DesignerModeUserControlParameterManager {
                constructor(designerModeManager: DesignerModeManager);
                add(name: string, param: DesignerModeUserControlParameterManager.Parameter): void;
                remove(name: string): void;
                get(name: string): DesignerModeUserControlParameterManager.Parameter | null;
            }
            module DesignerModeUserControlParameterManager {
                interface Parameter {
                    descr: System.ControlAttributeDescription;
                    value: any;
                }
            }
        }
    }
}
declare module TcHmi {
    module System {
        class LocalizationManager {
            constructor();
            /**
             * Returns the current locale string for texts or undefined if not available.
             * @returns The current locale identifier.
             */
            getLocale(): string | undefined;
            /**
             * Returns the current fallback locale string for texts or undefined if not available.
             * @returns The current fallback locale identifier.
             */
            getLocaleFallback(): string | undefined;
            /** Returns the content of the current loaded locale file. */
            getLocaleData(): ILocalization | undefined;
            /** Returns the data of the current loaded fallback locale file. */
            getLocaleFallbackData(): ILocalization | undefined;
            /**
             *  Change locale of current user in server. This will trigger all the rest
             */
            loadLocale(locale: string | null, callback: null | ((this: void, data: TcHmi.IResultObject) => void)): void;
            /**
             * Resets the current fallback locale data and loads it again.
             * @param callback
             */
            resetLocalizationFallback(callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): void;
            get(name: string): LocalizationManager.LocalizedTextEntry | undefined;
            watch(name: string, callback: (this: void, data: TcHmi.Symbol.IWatchResultObject<string>) => void): DestroyFunction;
        }
        module LocalizationManager {
            interface LocalizedTextEntry {
                /** Text in the current locale. */
                text?: string;
                /** Determines if the current instance is based on fallback data. */
                fallback: boolean;
                /** Determines if the current instance is a dummy without data for delayed callback handling if data becomes available. */
                dummy: boolean;
                /** Callbacks associated with the current instance. */
                callbacks: ILocalizedTextEntryCallback[];
            }
            interface ILocalizedTextEntryCallback {
                callback: ((this: void, data: TcHmi.Symbol.IWatchResultObject) => void);
                destroy: DestroyFunction;
            }
        }
    }
}
declare module TcHmi {
    module System {
        class ServerManager {
            constructor();
            /** Fallback value if the request and tchmiconfig does not provide a value */
            static RECONNECT_INTERVAL: number;
            private __checkLicenseSubscriptionId;
            /**
             * Watches .../Config/ServerState
             */
            private watchServerState;
            /**
            * Unwatch .../Config/ServerState
            */
            private unwatchServerState;
            /**
             * Poll and handle ServerState
             */
            private resolveHandleServerState;
            /**
            * Opens the websocket and starts the watcher interval.
            */
            open(callback?: (this: void, data: ServerManager.IConnectionResultObject) => void): void;
            /**
            * Closes the websocket and stops the watcher interval.
            */
            close(): void;
            /**
            */
            getFreeRequestId(): number;
            /**
             * Set Server Address
             * @param host
             * @param port
             * @param protocol
             */
            setServerAddress(host?: string, port?: string | number, protocol?: string): void;
            /**
             * Registers an event callback.
             * @param reqId
             * @param callback
             */
            registerEventCallback(reqId: number, callback: (this: void, data: Server.IResultObject) => void): number;
            /**
             * Watch Server Symbol
             * @param expression
             * @param callback
             * @template T Type of the value to watch
             */
            watch<T = any>(expression: TcHmi.SymbolExpression, callback: (this: void, data: TcHmi.Symbol.IServerWatchResultObject<T>) => void): DestroyFunction;
            /**
            * Sends a request to the server.
            * @param requestObj The request object to send
            * @param callback Callback function reference
            * @template W Type of the write value. Use any (or omit) if this contains multiple different types.
            * @template R Type of the read value. Use any (or omit) if this contains multiple different types.
            */
            request<W = any, R = W>(requestObj: Server.IMessage<W, R>, callback?: null | ((this: void, data: Server.IResultObject<W, R>) => void)): number | null;
            /**
            * Sends a request to the server.
            * @param requestObj The request object to send
            * @param options Request options
            * @param callback Callback function reference
            * @template W Type of the write value. Use any (or omit) if this contains multiple different types.
            * @template R Type of the read value. Use any (or omit) if this contains multiple different types.
            */
            requestEx<W = any, R = W>(requestObj: Server.IMessage<W, R>, options: Server.IRequestOptions | null, callback?: null | ((this: void, data: Server.IResultObject<W, R>) => void)): number | null;
            /**
            * Releases a request and associated resources like callbacks.
            * @param id Id of the request to release.
            */
            releaseRequest(id: number | null): void;
            /**
            * Use constants like WebSocket.CLOSED or WebSocket.OPEN for comparison.
            */
            getWebsocketReadyState(): number | null;
            /**
             * Login into a TcHmiServer, reloads the page on success, call of a callback on failure
             * @param username String with the username
             * @param password String with the password
             * @param persistent boolean Should the session be valid even after browser restart
             * @param options
             * @param callback This callback is called after the request was sent
             * @returns returns a boolean if the login was called
             */
            login(username: string, password: string, persistent: boolean, reload: boolean, options: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): boolean;
            /**
             * Logout from a TcHmiServer, reloads the page on success, call of a callback on failure
             * @param options Request options
             * @param callback This callback is called after the request was sent
             * @returns returns a boolean if the logout was called
             */
            logout(reload?: boolean, options?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): boolean;
            /**
             * Logout all users with a specific username or all users from a TcHmiServer
             * @param username username to logout.
             * If empty string or null is provided, all users are logged out.
             * The authentification domain can be specified by using 'Domain::UserName'. If no domain is specified all users with the given name will be logged out.
             * 'Domain::' will logout every user from this domain
             * @param options Request options
             * @param callback This callback is called after the request was sent
             * @returns returns a boolean if the logout was called
             */
            forceLogout(username: string | Server.IForceLogoutTarget | null, options: Server.IRequestOptions | null, callback?: null | ((this: void, data: Server.IResultObject) => void)): boolean;
            /**
            * @param callback
             */
            refreshSubscriptions(callback?: ((this: void, data: TcHmi.IResultObject) => void)): void;
        }
        module ServerManager {
            const enum ConnectState {
                UNCONNECTED = 0,
                ERROR = 1,
                COMMAND_ERROR = 2,
                CONNECTED = 3,
                UNLOAD = 4,
                ACCESS_MISSING = 5,
                LICENSE_MISSING = 6
            }
            const enum RequestType {
                INVALID = 0,
                READWRITE = 100,
                SUBSCRIPTION = 200,
                EVENT = 300
            }
            interface IRequestCacheEntry {
                id: number;
                type: ServerManager.RequestType;
                message?: Server.IMessage;
                deletionPending: boolean;
                timeoutTimer: number;
                timeoutCallback: (this: void) => void;
                timeout: number | null;
                /** Minimal time the subscription ticks will be fired on symbol changes. If not set the default of the project will be used */
                interval?: number;
                callbacks: ((this: void, data: Server.IResultObject) => void)[];
                responseCallback: (this: void, data: ServerManager.IResponseResultObject) => void;
                queued: boolean;
                /** First element in queue waiting for response */
                pending: boolean;
                /**
                 *  Request from symbolwatcher = managed/true;
                 *  Everything else = unmanaged/false; */
                managed: boolean;
            }
            interface IServerSymbolWatchEntry {
                name: string;
                interval: number;
                timeout: number;
                options: Server.ICommandOptions[];
                reqId: number | null;
                refs: number;
                value: any;
                response?: Server.IMessage;
                /** The time the command processing has started as iso 8601 string. */
                processedStart?: string;
                /** The time the command processing has ended as iso 8601 string. */
                processedEnd?: string;
                callbacks: IServerSymbolWatchEntryCallbackObj[];
            }
            interface IServerSymbolWatchEntryCallbackObj {
                callback: (this: void, data: TcHmi.Symbol.IWatchResultObject) => void;
                dirty: boolean;
                refreshLock: boolean;
                destroy: DestroyFunction;
            }
            interface IWatchResultObject extends TcHmi.IResultObject {
                watchEntry: ServerManager.IServerSymbolWatchEntry;
            }
            /** provides the url of the request */
            interface IConnectionResultObject extends TcHmi.IResultObject {
                url?: string;
            }
            interface IResponseResultObject extends TcHmi.IResultObject {
                response: Server.IMessage;
            }
            interface IServerStateInfo {
                creatorMode: boolean;
                endpoints: string[];
                forceAuthEndpoints: string[];
                pid: number;
                productVersion: string;
                projectName: string;
                projectVersion: string;
                publishInProgress: boolean;
                serviceMode: boolean;
                state: number;
                version: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        class ServerEventManager {
            constructor();
            /**
             * Sends a request to the server to confirm an alarm.
             * @param alarm The raw data of the alarm to confirm.
             */
            confirmAlarm(alarm: ServerEventManager.RawServerAlarm, callback?: (this: void, data: TcHmi.IResultObject) => void): void;
            /**
             * Requests a list containing all events matching the specified filter from the server.
             * @param filter    The filter which events have to match.
             * @param callback  The callback function to handle the received events.
             */
            listEvents(filter: TcHmi.Filter, callback: (this: void, data: ServerEventManager.ListResult) => void): void;
            /**
             * Subscribe to events comming from server.
             * @param filter    The filter the events have to match.
             * @param callback  The callback function to handle received events.
             */
            subscribe(filter: TcHmi.Filter, callback: (this: void, data: ServerEventManager.SubscriptionResult) => void): number;
            /**
             * Unsubscribe from events.
             * @param id The subscription id.
             */
            unsubscribe(id: number, callback?: (this: void, data: IResultObject) => void): void;
            /**
             * Update the filter of an event subscription.
             * @param id     The id of the subscription to update.
             * @param filter The new filter for the subscription.
             */
            updateSubscription(id: number, filter: TcHmi.Filter, callback?: (this: void, data: IResultObject) => void): void;
        }
        module ServerEventManager {
            interface SubscriptionInfo {
                responseId: number;
                callback?: (this: void, data: SubscriptionResult) => any;
            }
            interface ListResult extends TcHmi.IResultObject {
                events?: RawServerEvent[];
            }
            interface SubscriptionResult extends TcHmi.IResultObject {
                event?: RawServerEvent;
            }
            interface RawServerEvent {
                domain: string;
                name: string;
                timeReceived: string;
                payload?: RawServerMessage | RawServerAlarm | any;
                payloadType?: TcHmi.Server.Events.Type;
                localizedString?: string;
                changeType?: ServerAlarmChangeType;
                sessionId?: string;
            }
            interface RawServerMessage {
                name: string;
                domain: string;
                severity: Server.Events.Severity;
                timeRaised: string;
                params: Dictionary<any>;
            }
            interface RawServerAlarm extends RawServerMessage {
                id: number;
                timeCleared: string | null;
                timeConfirmed: string | null;
                alarmState: Server.Events.AlarmState;
                confirmationState: Server.Events.ConfirmationState;
            }
            enum ServerAlarmChangeType {
                Raise = 0,
                Change = 1,
                Dispose = 2
            }
        }
    }
}
/**
 * Used to execute eval in isolated scope.
 * @param ctx {TcHmi.Context} Context object
 * @param s {string} The eval expression.
 */
declare function gIsolatedEval_TcHmi_System_TriggerManager_JavaScriptAction(ctx: TcHmi.Context, s: string): any;
/**
 * Used to execute eval in isolated scope.
 * @param s {string} The eval expression.
 */
declare function gIsolatedEval_TcHmi_System_TriggerManager_ConditionExpressionsResult(s: string, results: {
    expression: TcHmi.Trigger.Expression;
    result: {
        compare1: any;
        compare2: any;
    };
}[]): any;
declare module TcHmi {
    module System {
        /**
        */
        class TriggerManager {
            /**
            */
            constructor();
            /**
            * Registers all triggers defined in the triggerArr array.
            * @param triggerArr
            */
            register(triggerArr: Trigger[] | null | undefined): void;
            /**
            * Unregisters all triggers defined in the triggerArr array.
            * @param triggerArr
            */
            unregister(triggerArr: Trigger[] | null | undefined): void;
        }
        /**
        * A trigger is based on an event, which is defined by a global unique identifier.
        * Events raised by controls are always defined with the following pattern: [Control_ID].[EVENT_NAME]
        * The available control events are defined in the associated control markup file.
        */
        interface Trigger {
            /** A string value which contains the target event name. */
            event: string;
            /** preventDefault() should be called in this trigger */
            preventDefault?: true;
            /** An array of {Action} objects. Each Event can contain 1 ... n {Action} objects. */
            actions: TcHmi.Trigger.Action[];
        }
        module Trigger {
            interface ITriggerByCallbackObject {
                trigger: Trigger;
                destroyTriggerEvent: DestroyFunction;
            }
            interface TriggerContext<T = any> extends TcHmi.Context<T> {
                trigger: Trigger;
                event: EventProvider.Event;
            }
            interface TemplateParameter {
                param: TcHmi.TemplateParameter | null;
                paramSymbol: TcHmi.System.Symbol | null;
            }
            interface ISwitchCaseResultObject extends TcHmi.IResultObject {
                value?: any;
            }
        }
    }
}
/**
 * TwinCAT HMI
 * @preserve (Part of the public API)
*/
declare module TcHmi.System {
    class Init {
        static printDebugOutput(): void;
        private static __initStep;
        static prepare(): void;
        static run(initStep: Init.INIT_STATE): void;
    }
    namespace Init {
        const enum INIT_STATE {
            INVALID = 0,
            IDLE = 1,
            CHECK_BROWSER_FEATURES = 2,
            BASE_CONFIGURATION = 3,
            BASE_DESCRIPTION = 4,
            THEME_MANAGER_EARLY = 5,
            CACHE_LOADING = 6,
            SYSTEM_PREPARATION = 7,
            PACKAGES_MANIFEST_LOAD = 8,
            OPEN_ENGINEERING_CONNECTION = 9,
            OPEN_SERVER_CONNECTION = 10,
            TYPEDEFINITIONS = 11,
            SERVER_SYMBOL_SCHEMA_CACHE = 12,
            CONTROLS_DESCRIPTION_LOAD = 13,
            CONTROLS_DESCRIPTION_RESOLVE = 14,
            THEME_MANAGER_FINAL = 15,
            CONTROLS_TEMPLATES_LOAD = 16,
            PACKAGES_FUNCTION_DESCRIPTION_LOAD = 17,
            USER_FUNCTION_DESCRIPTION_LOAD = 18,
            USERCONTROL_LOAD = 19,
            CONTENT_LOAD = 20,
            VIEW_LOAD = 21,
            CONTENT_COMPILE = 22,
            VIEW_COMPILE = 23,
            FINAL = 1000,
            ERROR = 10000
        }
    }
}
