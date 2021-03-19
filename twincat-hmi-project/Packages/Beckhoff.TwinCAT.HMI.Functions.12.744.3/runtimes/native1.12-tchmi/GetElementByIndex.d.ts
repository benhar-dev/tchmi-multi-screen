declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Return the value at the array index position.
             * @param ctx An object holding functions for success and error.
             * @param arraySymbol
             * @param arrayIndex
             */
            function GetElementByIndex(ctx: Required<TcHmi.Context>, arraySymbol: TcHmi.Symbol | null, arrayIndex: number | null): void;
        }
    }
}
