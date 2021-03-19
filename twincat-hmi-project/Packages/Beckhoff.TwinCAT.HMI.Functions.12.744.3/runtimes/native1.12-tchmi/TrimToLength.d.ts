declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Trims a string (from left or right side) to a specific length.
             * @param value
             * @param trimToLength
             */
            function TrimToLength(value: string | null, trimToLength: number | string | null): string | null;
        }
    }
}
