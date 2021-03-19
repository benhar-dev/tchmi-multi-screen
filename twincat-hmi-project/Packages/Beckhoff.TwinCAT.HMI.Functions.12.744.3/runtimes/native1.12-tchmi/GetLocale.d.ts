declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Returns the current locale string for texts or undefined if no localized Symbol is available.
             */
            function GetLocale(): string | undefined;
        }
    }
}
