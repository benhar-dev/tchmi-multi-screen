declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Sets the application locale. The function waits for loading of the language files.
             * @param ctx An object holding functions for success and error.
             * @param locale
             */
            function SetLocaleEx(ctx: Required<TcHmi.Context>, locale: string): void;
        }
    }
}
