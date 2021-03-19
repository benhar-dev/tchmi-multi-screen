declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Logout a different user or all from a TcHmiServer
             * @param ctx An object holding functions for success and error.
             * @param username
             */
            function ForceLogoutEx(ctx: Required<TcHmi.Context>, username: string | null | undefined): boolean;
        }
    }
}
