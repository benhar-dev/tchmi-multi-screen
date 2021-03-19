declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Sets the default value of a property and change it (if needed) on theme change.
             * @param control
             * @param propertyName
             */
            function SetAttributeToThemeValue(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string): void;
        }
    }
}
