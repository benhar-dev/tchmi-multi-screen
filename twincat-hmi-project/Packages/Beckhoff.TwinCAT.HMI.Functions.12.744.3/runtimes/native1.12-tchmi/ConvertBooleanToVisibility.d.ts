declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Converts boolean values to visibility enumeration values.
             * @param value
             * @param falseValue
             */
            function ConvertBooleanToVisibility(value: boolean, falseValue?: 'Hidden' | 'Collapsed'): Visibility;
        }
    }
}
