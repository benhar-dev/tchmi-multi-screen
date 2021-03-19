declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Returns the list of registered locales as array of string.
             */
            function GetRegisteredLocales(): string[];
        }
    }
}
