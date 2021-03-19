declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Returns true if a symbol is bound to the target control property.
             * @param control
             * @param propertyName
             */
            function CheckBinding(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string): boolean;
        }
    }
}
