declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Concatenate multiple string values.
             * @param strings
             */
            function Concatenate(...strings: string[]): string;
        }
    }
}
