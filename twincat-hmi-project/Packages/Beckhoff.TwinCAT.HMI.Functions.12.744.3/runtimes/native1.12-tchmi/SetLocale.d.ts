declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Sets the application locale.
             * This function is deprecated. Its recommended to use SetLocaleEx which waits for loading of the language files.
             * @param locale
             * @deprecated Its recommended to use SetLocaleEx which waits for loading of the language files or use the API TcHmi.Locale.load with a callback.
             */
            function SetLocale(locale: string): void;
        }
    }
}
