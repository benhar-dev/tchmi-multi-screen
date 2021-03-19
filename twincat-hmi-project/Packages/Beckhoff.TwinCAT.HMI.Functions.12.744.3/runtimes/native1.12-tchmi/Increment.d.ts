declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Increment a binding value.
             * @param ctx An object holding functions for success and error.
             * @param symbol
             * @param maxValue
             * @param stepWidth
             */
            function Increment(ctx: Required<TcHmi.Context>, symbol: TcHmi.Symbol<number> | null, maxValue?: number | null, stepWidth?: number | null): void;
        }
    }
}
