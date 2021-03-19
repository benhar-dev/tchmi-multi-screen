declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Logout server session. Will cause hmi to reload if reload parameter is not set to false.
             * This function is deprecated. Its recommended to use LogoutEx.
             * @param reload
             * @deprecated Its recommended to use LogoutEx or the normal API TcHmi.Server.LogoutEx2
             */
            function Logout(reload?: boolean): boolean;
        }
    }
}
