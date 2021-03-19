declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Converts Strings, Numbers (milliseconds since 1970) and JS Date Objects to strings containing the date.
             * @param date
             * @param locale
             */
            function ToDateString(date: Date | any, locale?: string | null): string;
        }
    }
}
