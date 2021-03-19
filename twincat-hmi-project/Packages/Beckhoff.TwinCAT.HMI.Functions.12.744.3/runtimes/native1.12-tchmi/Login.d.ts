declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Login server session. Reload on login is recommended for security reasons.
             * This function is deprecated. Its recommended to use LoginEx or the normal API TcHmi.Server.LoginEx2
             * @param username
             * @param password
             * @param persistent
             * @param reload
             * @deprecated Its recommended to use LoginEx or the normal API TcHmi.Server.LoginEx2
             */
            function Login(username: string | null, password: string | null, persistent?: boolean, reload?: boolean): boolean;
        }
    }
}
