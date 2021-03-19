declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Inserts the value at the array index position.
             * @param ctx An object holding functions for success and error.
             * @param arraySymbol
             * @param arrayIndex
             * @param value
             */
            function SetElementByIndex(ctx: Required<TcHmi.Context>, arraySymbol: TcHmi.Symbol<any[]> | null, arrayIndex: number | null, value: any): void;
        }
    }
}
