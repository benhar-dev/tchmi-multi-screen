declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Return a formatted string for the value passed in.
             * @param value
             * @param maxDecimals
             */
            function GaugeValueFormatter(value: number, maxDecimals?: number): string;
        }
    }
}
