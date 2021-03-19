declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Return a formatted string for the tooltip passed in.
             * @param xValue
             * @param yValue
             * @param xShow
             * @param yShow
             * @param xMaxDecimals
             * @param yMaxDecimals
             */
            function LineChartTooltipFormatter(xValue: number, yValue: number, xShow?: boolean, yShow?: boolean, xMaxDecimals?: number, yMaxDecimals?: number): string;
        }
    }
}
