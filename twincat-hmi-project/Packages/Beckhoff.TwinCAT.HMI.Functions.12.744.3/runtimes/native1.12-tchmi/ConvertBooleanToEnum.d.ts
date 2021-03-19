declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Converts boolean values to enumeration values.
             * @param value
             * @param trueValue
             * @param falseValue
             */
            function ConvertBooleanToEnum<T = any>(value: boolean, trueValue: T, falseValue: T): T;
        }
    }
}
