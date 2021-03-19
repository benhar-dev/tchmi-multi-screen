declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Format a string.
             * Placeholder syntax in format string: '{' to begin placeholder, optional parameter-index with | as seperator, description and '}' to close the placeholder.
             * Example: {0|.1f}
             * @param formatString
             * @param args
             */
            function FormatString(formatString: string, ...args: any[]): string | null;
        }
    }
}
