declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Logout a different user or all from a TcHmiServer.
             * This function is deprecated. Its recommended to use ForceLogoutEx.
             * @param username
             * @deprecated Its recommended to use ForceLogoutEx.
             */
            function ForceLogout(username: string | null | undefined): boolean;
        }
    }
}
