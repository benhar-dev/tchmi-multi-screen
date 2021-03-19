declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Prints out an error message in the browsers console depending on TCHMI_CONSOLE_LOG_LEVEL.
             * Can log into a browser database, too. See "client" page in config page of the server.
             * @param level Log level as a string
             * @param message Message as a string
             * @param optionalParameters Can be more strings or complex objects to show
             */
            function Log(level: 'Error' | 'Warning' | 'Info' | 'Debug', message: string, ...optionalParameters: any[]): void;
        }
    }
}
