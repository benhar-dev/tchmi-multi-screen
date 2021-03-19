declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Removes a binding between a symbol and a control attribute setter function by name of property.
             * @param control
             * @param propertyName
             */
            function RemoveBinding(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string): void;
        }
    }
}
