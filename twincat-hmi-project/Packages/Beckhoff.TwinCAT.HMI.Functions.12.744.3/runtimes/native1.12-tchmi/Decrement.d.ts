declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Decrement a binding value.
             * @param ctx An object holding functions for success and error.
             * @param symbol
             * @param minValue
             * @param stepWidth
             */
            function Decrement(ctx: Required<TcHmi.Context>, symbol: TcHmi.Symbol | null, minValue?: number | null, stepWidth?: number | null): void;
        }
    }
}
