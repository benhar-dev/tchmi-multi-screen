declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Login server session. Reload on login is recommended for security reasons.
             * @param ctx An object holding functions for success and error.
             * @param username
             * @param password
             * @param persistent
             * @param reload
             */
            function LoginEx(ctx: Required<TcHmi.Context>, username: string | null, password: string | null, persistent?: boolean, reload?: boolean): void;
        }
    }
}
