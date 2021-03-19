declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Checks if an right is allowed for the current user on this control or its parents.
             * TypeScript or JavaScript code can use the API `TcHmi.Access.checkAccess`
             * @param control Control to check
             * @param AccessRightToCheck name of the access right
             */
            function CheckAccess(control: TcHmi.Controls.System.baseTcHmiControl, AccessRightToCheck: string): boolean;
        }
    }
}
