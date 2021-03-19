declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Checks if a specific symbol is bound to a control attribute.
             * @param control
             * @param propertyName
             * @param symbol
             */
            function CheckBindingEx(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string, symbol: TcHmi.Symbol | null): boolean;
        }
    }
}
