declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Creates a binding between a symbol and a control attribute setter function by name of property.
             * @param control
             * @param propertyName
             * @param symbol
             */
            function CreateBinding(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string, symbol: TcHmi.Symbol | null): void;
        }
    }
}
